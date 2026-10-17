import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
} from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

// Servicios, equipo, sedes y la configuración aparecen en varias páginas a la vez,
// así que al cambiarlos revalidamos todo el sitio en lugar de rutas puntuales.
const revalidateEverything = (payload: { logger: { info: (msg: string) => void } }) => {
  payload.logger.info('Revalidating entire site')
  revalidatePath('/', 'layout')
}

export const revalidateSiteAfterChange: CollectionAfterChangeHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) revalidateEverything(payload)
  return doc
}

export const revalidateSiteAfterDelete: CollectionAfterDeleteHook = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) revalidateEverything(payload)
  return doc
}

export const revalidateSiteGlobal: GlobalAfterChangeHook = ({
  doc,
  global,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    // Los globals se leen con getCachedGlobal, que cachea por tag
    revalidateTag(`global_${global.slug}`, 'max')
    revalidateEverything(payload)
  }
  return doc
}
