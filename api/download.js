export default async function handler(req, res) {
  const UPSTASH_URL   = process.env.UPSTASH_REDIS_REST_URL;
  const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
  const DOWNLOAD_URL  = process.env.DOWNLOAD_URL;

  // Increment counter
  try {
    await fetch(`${UPSTASH_URL}/incr/downloads`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` }
    });
  } catch {}

  // Redirect to the actual file
  res.redirect(302, DOWNLOAD_URL);
}
