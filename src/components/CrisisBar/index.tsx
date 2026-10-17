import { Phone, Siren } from 'lucide-react'
import React from 'react'

const linkClass =
  'inline-flex min-h-11 items-center gap-1.5 rounded-lg px-1 font-semibold underline-offset-4 hover:underline sm:min-h-0'

export const CrisisBar: React.FC<{
  hours?: string | null
  phone?: string | null
  text?: string | null
}> = ({ hours, phone, text }) => (
  <div aria-label="Aviso de emergencia" className="bg-deep text-sm text-deep-foreground" role="region">
    <div className="container flex flex-wrap items-center justify-center gap-x-5 gap-y-0 py-1.5 text-center sm:py-2">
      {text && <p className="font-medium">{text}</p>}
      {/* El 911 siempre visible: es la acción correcta ante un peligro inmediato */}
      <a className={`${linkClass} text-on-deep`} href="tel:911">
        <Siren aria-hidden className="size-4" />
        Llamar al 911
      </a>
      {phone && (
        <p className="inline-flex flex-wrap items-center justify-center gap-x-1.5">
          <a className={`${linkClass} text-deep-foreground`} href={`tel:${phone.replace(/[^\d+]/g, '')}`}>
            <Phone aria-hidden className="size-3.5" />
            <span className="sr-only">Llamar a la clínica:</span>
            {phone}
          </a>
          {hours && <span className="text-deep-foreground/80">· {hours}</span>}
        </p>
      )}
    </div>
  </div>
)
