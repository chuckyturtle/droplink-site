export async function onRequest({ env }) {
  const UPSTASH_URL   = env.UPSTASH_REDIS_REST_URL;
  const UPSTASH_TOKEN = env.UPSTASH_REDIS_REST_TOKEN;
  const DOWNLOAD_URL  = env.DOWNLOAD_URL;

  try {
    await fetch(`${UPSTASH_URL}/incr/downloads`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    });
  } catch {}

  return Response.redirect(DOWNLOAD_URL, 302);
}
