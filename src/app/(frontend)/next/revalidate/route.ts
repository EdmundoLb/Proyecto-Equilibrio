import { revalidateAll } from '@/utilities/revalidateAll'

// Permite a scripts externos (p. ej. `npm run seed`) refrescar la caché del servidor en ejecución.
export async function POST(request: Request): Promise<Response> {
  const secret = process.env.CRON_SECRET

  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return new Response('Action forbidden.', { status: 403 })
  }

  revalidateAll()

  return Response.json({ revalidated: true })
}
