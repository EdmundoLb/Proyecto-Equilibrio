import React from 'react'

import { getCachedGlobal } from '@/utilities/getGlobals'
import { whatsappHref } from '@/utilities/whatsapp'

export async function WhatsAppButton() {
  const settings = await getCachedGlobal('site-settings', 0)()
  const href = whatsappHref(settings)

  if (!href) return null

  return (
    <a
      aria-label="Escríbanos por WhatsApp (se abre en una pestaña nueva)"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#1da851] text-white shadow-lg ring-2 ring-white/70 transition-transform hover:scale-105 sm:right-5"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg aria-hidden className="size-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.62-.93-2.22-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.43-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.42-9.44 9.42zm8.02-17.45A11.27 11.27 0 0 0 12.04.72C5.8.72.72 5.8.72 12.04c0 2 .52 3.94 1.51 5.66L.62 23.5l5.94-1.56a11.3 11.3 0 0 0 5.47 1.4h.01c6.24 0 11.32-5.08 11.32-11.32 0-3.02-1.18-5.87-3.3-8z" />
      </svg>
    </a>
  )
}
