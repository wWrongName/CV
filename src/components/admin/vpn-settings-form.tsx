import type { VpnSettings } from "@/lib/server/vpn-settings";

export function VpnSettingsForm({ settings, base, saved, error }: { settings: VpnSettings; base: string; saved?: string; error?: string }) {
  return <section className="admin-panel vpn-settings" id="vpn-settings">
    <div className="vpn-settings-heading"><h2>VPN для сотрудников</h2><a href="/vpn" target="_blank" rel="noopener noreferrer" className="admin-button secondary">Открыть страницу</a></div>
    <p className="admin-muted">Страница /vpn закрыта базовой аутентификацией. Ссылка подписки хранится в базе сайта и показывается только после входа.</p>
    {saved && <p className="vpn-settings-success" role="status">Настройки VPN сохранены.</p>}
    {error && <p className="admin-error" role="alert">{error}</p>}
    <form method="post" action={`${base}/vpn`} className="vpn-settings-form">
      <label className="vpn-enabled"><input name="enabled" type="checkbox" defaultChecked={settings.enabled} />Страница включена</label>
      <label>Название<input name="title" defaultValue={settings.title} required maxLength={100} /></label>
      <label>Ссылка на GitHub<textarea name="downloadUrl" defaultValue={settings.downloadUrl} required maxLength={2000} rows={2} /></label>
      <label>Пункт 2: установка<textarea name="installText" defaultValue={settings.installText} required maxLength={600} rows={3} /></label>
      <label>Пункт 3: подключение<textarea name="connectText" defaultValue={settings.connectText} required maxLength={600} rows={3} /></label>
      <label>Ссылка для кнопки «Скопировать»<textarea name="subscriptionUrl" defaultValue={settings.subscriptionUrl} maxLength={4000} rows={3} placeholder="https://…" autoComplete="off" spellCheck={false} /></label>
      <p className="admin-muted">Эта ссылка будет доступна всем, кому вы выдадите пароль страницы. Для персонального доступа отправляйте сотруднику его ссылку отдельно.</p>
      <div className="vpn-login-fields"><label>Логин страницы<input name="username" defaultValue={settings.username} pattern="[a-zA-Z0-9._-]{3,64}" required maxLength={64} autoComplete="off" /></label>
      <label>Новый пароль<input name="password" type="password" minLength={12} maxLength={128} autoComplete="new-password" placeholder="Оставьте пустым, чтобы сохранить пароль" /></label></div>
      <button className="admin-button" type="submit">Сохранить настройки VPN</button>
    </form>
  </section>;
}
