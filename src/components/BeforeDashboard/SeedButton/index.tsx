'use client'

import React, { Fragment, useCallback, useState } from 'react'
import { toast } from '@payloadcms/ui'

import './index.scss'

const SuccessMessage: React.FC = () => (
  <div>
    ¡Contenido cargado! Ya puede{' '}
    <a target="_blank" href="/">
      ver el sitio
    </a>
  </div>
)

export const SeedButton: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [seeded, setSeeded] = useState(false)
  const [error, setError] = useState<null | string>(null)

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      if (seeded) {
        toast.info('El contenido ya fue cargado.')
        return
      }
      if (loading) {
        toast.info('La carga ya está en curso.')
        return
      }
      if (error) {
        toast.error('Ocurrió un error. Recargá la página e intentá de nuevo.')
        return
      }

      setLoading(true)

      try {
        toast.promise(
          new Promise((resolve, reject) => {
            try {
              fetch('/next/seed', { method: 'POST', credentials: 'include' })
                .then((res) => {
                  if (res.ok) {
                    resolve(true)
                    setSeeded(true)
                  } else {
                    reject('Ocurrió un error al cargar el contenido.')
                  }
                })
                .catch((error) => {
                  reject(error)
                })
            } catch (error) {
              reject(error)
            }
          }),
          {
            loading: 'Cargando contenido...',
            success: <SuccessMessage />,
            error: 'Ocurrió un error al cargar el contenido.',
          },
        )
      } catch (err) {
        const error = err instanceof Error ? err.message : String(err)
        setError(error)
      }
    },
    [loading, seeded, error],
  )

  let message = ''
  if (loading) message = ' (cargando...)'
  if (seeded) message = ' (¡listo!)'
  if (error) message = ` (error: ${error})`

  return (
    <Fragment>
      <button className="seedButton" onClick={handleClick}>
        Cargar contenido inicial
      </button>
      {message}
    </Fragment>
  )
}
