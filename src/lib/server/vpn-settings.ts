import "server-only";
import { randomBytes, scrypt } from "node:crypto";
import { getDatabase } from "./storage";

export type VpnSettings = {
  enabled: boolean; title: string; downloadUrl: string; installText: string;
  connectText: string; subscriptionUrl: string; username: string; passwordHash: string;
};
export const defaultVpnSettings: VpnSettings = {
  enabled: false,
  title: "WWN IT Solutions",
  downloadUrl: "https://github.com/Happ-proxy/happ-android/releases/latest",
  installText: "Скачайте Happ.apk и установите приложение. Если Android попросит, разрешите установку из браузера.",
  connectText: "Скопируйте ссылку, добавьте её в Happ через «+» и включите VPN.",
  subscriptionUrl: "", username: "staff", passwordHash: "",
};
export function readVpnSettings(): VpnSettings {
  const db = getDatabase();
  db.exec("CREATE TABLE IF NOT EXISTS vpn_settings (id INTEGER PRIMARY KEY CHECK(id=1), data TEXT NOT NULL, updated_at INTEGER NOT NULL)");
  const row = db.prepare("SELECT data FROM vpn_settings WHERE id=1").get() as { data: string } | undefined;
  return row ? { ...defaultVpnSettings, ...JSON.parse(row.data) } : { ...defaultVpnSettings };
}
export function saveVpnSettings(settings: VpnSettings) {
  readVpnSettings();
  getDatabase().prepare("INSERT INTO vpn_settings VALUES(1,?,?) ON CONFLICT(id) DO UPDATE SET data=excluded.data,updated_at=excluded.updated_at").run(JSON.stringify(settings), Date.now());
}
export async function settingsFromForm(form: URLSearchParams, current: VpnSettings): Promise<VpnSettings> {
  const value = (key: string, max: number) => {
    const text = (form.get(key) || "").trim();
    if (text.length > max) throw new Error("Проверьте длину полей.");
    return text;
  };
  const title = value("title", 100), installText = value("installText", 600), connectText = value("connectText", 600);
  const username = value("username", 64);
  if (!title || !installText || !connectText || !/^[a-zA-Z0-9._-]{3,64}$/.test(username)) throw new Error("Заполните название, инструкции и логин.");
  const url = (raw: string) => {
    const parsed = new URL(raw);
    if (parsed.protocol !== "https:" || parsed.username || parsed.password || parsed.hash) throw new Error("Используйте HTTPS-ссылки без логина и пароля.");
    return parsed;
  };
  const download = url(value("downloadUrl", 2000));
  if (download.hostname !== "github.com") throw new Error("Ссылка скачивания должна вести на github.com.");
  const rawSubscription = value("subscriptionUrl", 4000);
  const subscriptionUrl = rawSubscription ? url(rawSubscription).href : "";
  const password = form.get("password") || "";
  let passwordHash = current.passwordHash;
  if (password) {
    if (password.length < 12 || password.length > 128) throw new Error("Пароль должен содержать от 12 до 128 символов.");
    const salt = randomBytes(16);
    const derived = await new Promise<Buffer>((resolve, reject) => scrypt(password, salt, 64, { N: 32768, r: 8, p: 3, maxmem: 64 * 1024 * 1024 }, (error, key) => error ? reject(error) : resolve(key)));
    passwordHash = `scrypt-v1:${salt.toString("hex")}:${derived.toString("hex")}`;
  }
  const enabled = form.get("enabled") === "on";
  if (enabled && !passwordHash) throw new Error("Перед включением страницы задайте пароль.");
  return { enabled, title, downloadUrl: download.href, installText, connectText, subscriptionUrl, username, passwordHash };
}
