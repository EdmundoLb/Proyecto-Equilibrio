import config from '@payload-config'
import { createLocalReq, getPayload } from 'payload'

import { seed } from '@/endpoints/seed'
import { getServerSideURL } from '@/utilities/getURL'

// Uso: npm run seed  (con la base de datos levantada)
const payload = await getPayload({ config })
const req = await createLocalReq({}, payload)

await seed({ payload, req })

// Si el servidor de desarrollo está corriendo, le pedimos que refresque su caché
try {
  const res = await fetch(`${getServerSideURL()}/next/revalidate`, {
    method: 'POST',
    headers: { authorization: `Bearer ${process.env.CRON_SECRET}` },
  })
  payload.logger.info(res.ok ? 'Caché del sitio actualizada.' : `No se pudo refrescar la caché (${res.status}).`)
} catch {
  payload.logger.info('El servidor no está corriendo; la caché se renovará al iniciarlo.')
}

process.exit(0)
