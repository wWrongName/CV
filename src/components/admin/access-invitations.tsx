"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { AccessInvitation } from "@/lib/server/access-invitations";

export function AccessInvitations({ base, invitations }: { base: string; invitations: AccessInvitation[] }) {
  const router = useRouter(), field = useRef<HTMLTextAreaElement>(null);
  const [link, setLink] = useState(""), [message, setMessage] = useState(""), [busy, setBusy] = useState(false);
  async function send(form: URLSearchParams) {
    const response = await fetch(`${base}/vpn/invitations`, { method: "POST", body: form, credentials: "same-origin" });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Не удалось выполнить действие.");
    return data as { url?: string };
  }
  return <section className="admin-panel" id="access-invitations">
    <div className="vpn-settings-heading"><h2>Одноразовые приглашения</h2><button type="button" className="admin-button secondary" onClick={() => router.refresh()}>Обновить список</button></div>
    <p className="admin-muted">Одно приглашение — одно открытие доступа. Без сессии и запоминания браузера. После обновления страницы нужна новая ссылка.</p>
    <form className="vpn-settings-form" onSubmit={async event => {
      event.preventDefault(); const form = event.currentTarget;
      setBusy(true); setMessage(""); setLink("");
      try {
        const data = new FormData(form);
        const result = await send(new URLSearchParams({ action: "create", label: String(data.get("label") || ""), subscriptionUrl: String(data.get("subscriptionUrl") || "") }));
        setLink(result.url || ""); setMessage("Ссылка создана. Скопируйте и отправьте сотруднику."); form.reset(); router.refresh();
      } catch (error) { setMessage(error instanceof Error ? error.message : "Ошибка создания."); }
      finally { setBusy(false); }
    }}>
      <label>Кому<input name="label" maxLength={80} placeholder="Например, Иван" autoComplete="off" /></label>
      <label>Персональная ссылка подписки — необязательно<textarea name="subscriptionUrl" maxLength={4000} rows={2} placeholder="Пусто — использовать ссылку из настроек страницы" autoComplete="off" spellCheck={false} /></label>
      <button className="admin-button" type="submit" disabled={busy}>Создать одноразовую ссылку</button>
    </form>
    {link && <div className="vpn-settings-form"><label>Ссылка сотруднику<textarea ref={field} value={link} readOnly rows={3} spellCheck={false} /></label><button className="admin-button secondary" type="button" onClick={async () => {
      try { await navigator.clipboard.writeText(link); setMessage("Одноразовая ссылка скопирована."); }
      catch { field.current?.focus(); field.current?.select(); setMessage("Скопируйте выделенную ссылку вручную."); }
    }}>Скопировать приглашение</button><p className="admin-muted">Ссылка показана только сейчас. После обновления админки её нельзя восстановить — можно создать новую.</p></div>}
    {message && <p className="admin-muted" role="status">{message}</p>}
    {invitations.length > 0 && <div className="invitation-list"><table><thead><tr><th>Кому / создано</th><th>Состояние</th></tr></thead><tbody>{invitations.map(invitation => <tr key={invitation.id}><td>{invitation.label || "Без имени"}<small>{new Date(invitation.created_at + 3 * 3600000).toISOString().slice(0,16).replace("T", " ")} МСК</small></td><td>{invitation.used_at ? "Использовано" : invitation.revoked_at ? "Отозвано" : <button type="button" className="admin-button secondary" disabled={busy} onClick={async () => {
        setBusy(true); try { await send(new URLSearchParams({ action: "revoke", id: invitation.id })); setMessage("Приглашение отозвано."); router.refresh(); }
        catch { setMessage("Не удалось отозвать приглашение."); } finally { setBusy(false); }
      }}>Отозвать</button>}</td></tr>)}</tbody></table></div>}
  </section>;
}
