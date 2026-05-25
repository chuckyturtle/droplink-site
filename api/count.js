export default async function handler(req, res) {
  const UPSTASH_URL   = process.env.UPSTASH_REDIS_REST_URL;
  const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

  try {
    const r    = await fetch(`${UPSTASH_URL}/get/downloads`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` }
    });
    const data = await r.json();
    const count = parseInt(data.result) || 0;
    res.setHeader('Cache-Control', 'no-store');
    res.json({ count });
  } catch {
    res.json({ count: 0 });
  }
}
