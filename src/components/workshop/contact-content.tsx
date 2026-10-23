"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { emailHref, telegramHref } from "@/lib/workshop/sections";
import { getBoardCopy } from "@/lib/workshop/board-copy";

export function ContactContent({ locale }: { locale: Locale }) {
  const ru = locale === "ru";
  const [copied, setCopied] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const channels = [
    { id: "telegram", label: "Telegram", value: `@${telegramHref.split("/").at(-1)}`, href: telegramHref },
    { id: "email", label: "Email", value: emailHref.slice("mailto:".length), href: emailHref },
  ];
  async function copy(id: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      setMessage(ru ? "Адрес скопирован." : "Address copied.");
    } catch {
      setCopied(null);
      setMessage(ru ? "Не удалось скопировать. Можно выделить адрес вручную." : "Could not copy. You can select the address manually.");
    }
  }
  return <article className="workshop-document workshop-contact-document">
    <span className="workshop-kicker">CONTACT / WWN</span>
    <h1>{ru ? "Обсудим задачу?" : "Have a project in mind?"}</h1>
    <p className="workshop-document-lead">{getBoardCopy("contact", locale).description}</p>
    <div className="workshop-contact-methods">{channels.map(channel => <div className="workshop-contact-method" key={channel.id}>
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">{channel.id === "telegram" ? <path d="m3 14 26-10-5 24-9-7-5 4 1-9 13-9-16 10Z" /> : <><rect x="2" y="6" width="28" height="21" rx="2" /><path d="m3 8 13 11L29 8" /></>}</svg>
      <div><span className="workshop-kicker">{channel.label}</span><h2 className="workshop-contact-address"><a href={channel.href} target={channel.id === "telegram" ? "_blank" : undefined} rel={channel.id === "telegram" ? "noreferrer" : undefined}>{channel.value}</a></h2>
        <div className="workshop-contact-actions"><a href={channel.href} target={channel.id === "telegram" ? "_blank" : undefined} rel={channel.id === "telegram" ? "noreferrer" : undefined}>{ru ? "Написать" : "Write"} <span aria-hidden="true">↗</span></a><button type="button" onClick={() => copy(channel.id, channel.value)} aria-label={`${ru ? "Скопировать" : "Copy"} ${channel.label}`}>{copied === channel.id ? ru ? "Скопировано" : "Copied" : ru ? "Скопировать" : "Copy"}</button></div>
      </div>
    </div>)}</div>
    <p className="workshop-contact-feedback" role="status" aria-live="polite">{message}</p>
  </article>;
}
