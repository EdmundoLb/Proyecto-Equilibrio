import { Banner } from '@payloadcms/ui/elements/Banner'
import React from 'react'

import { SeedButton } from './SeedButton'
import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Panel de Proyecto Equilibrio</h4>
      </Banner>
      Desde aquí puede editar todo el contenido del sitio:
      <ul className={`${baseClass}__instructions`}>
        <li>
          <strong>Páginas</strong>: arme cada página combinando bloques (tarjetas, listas, equipo,
          servicios, sedes, formularios).
        </li>
        <li>
          <strong>Servicios, Equipo y Sedes</strong>: al editarlos se actualizan en todas las
          páginas donde aparecen.
        </li>
        <li>
          <strong>Configuración del sitio</strong>: teléfonos, WhatsApp, correos, aviso de
          emergencia y redes sociales.
        </li>
        <li>
          <strong>Formularios</strong>: las consultas recibidas quedan en &quot;Form Submissions&quot;.
        </li>
        <li>
          <SeedButton />
          {' para restaurar el contenido inicial. '}
          <strong>Atención:</strong> reemplaza páginas, servicios, equipo y sedes.{' '}
          <a href="/" target="_blank">
            Ver el sitio
          </a>
        </li>
      </ul>
    </div>
  )
}

export default BeforeDashboard
