import type { VpnSettings } from "@/lib/server/vpn-settings";

export function VpnSettingsForm({ settings, base, saved, error }: { settings: VpnSettings; base: string; saved?: string; error?: string }) {
  return <section className="admin-panel vpn-settings" id="vpn-settings">
    <div className="vpn-settings-heading"><h2>Доступ сотрудникам</h2><a href="/connect" target="_blank" rel="noopener noreferrer" className="admin-button secondary">Открыть страницу</a></div>
    <p className="admin-muted">Доступ выдаётся только по одноразовому приглашению. Логин и пароль сотрудникам не нужны.</p>
    {saved && <p className="vpn-settings-success" role="status">Настройки подключения сохранены.</p>}
    {error && <p className="admin-error" role="alert">{error}</p>}
    <form method="post" action={`${base}/vpn`} className="vpn-settings-form">
      <label className="vpn-enabled"><input name="enabled" type="checkbox" defaultChecked={settings.enabled} />Страница включена</label>
      <label>Название<input name="title" defaultValue={settings.title} required maxLength={100} /></label>
      <label>Ссылка на GitHub<textarea name="downloadUrl" defaultValue={settings.downloadUrl} required maxLength={2000} rows={2} /></label>
      <label>Пункт 2: установка<textarea name="installText" defaultValue={settings.installText} required maxLength={600} rows={3} /></label>
      <label>Пункт 3: подключение<textarea name="connectText" defaultValue={settings.connectText} required maxLength={600} rows={3} /></label>
      <label>Ссылка для кнопки «Скопировать»<textarea name="subscriptionUrl" defaultValue={settings.subscriptionUrl} maxLength={4000} rows={3} placeholder="https://…" autoComplete="off" spellCheck={false} /></label>
      <p className="admin-muted">Используется по умолчанию. В приглашении можно указать персональную подписку сотрудника.</p>
      <button className="admin-button" type="submit">Сохранить настройки подключения</button>
    </form>
  </section>;
}
