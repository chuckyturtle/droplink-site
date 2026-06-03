export async function onRequest({ env }) {
  const UPSTASH_URL   = env.UPSTASH_REDIS_REST_URL;
  const UPSTASH_TOKEN = env.UPSTASH_REDIS_REST_TOKEN;

  try {
    const r    = await fetch(`${UPSTASH_URL}/get/downloads`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    });
    const data = await r.json();
    return new Response(JSON.stringify({ count: parseInt(data.result) || 0 }), {
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  } catch {
    return new Response(JSON.stringify({ count: 0 }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
