# Cómo publicar el sitio de DropLink

## Paso 1 — Subir el archivo a GitHub

1. Entrá a github.com y creá una cuenta (gratis)
2. Creá un repositorio nuevo → nombre: `droplink-site` → público
3. Comprimí la carpeta `DropLink` del escritorio en un .zip llamado `DropLink.zip`
4. En tu repo, andá a **Releases** → **Create a new release**
5. Tag: `v1.0.0` · Título: `DropLink v1.0.0`
6. Arrastrá el `DropLink.zip` al área de archivos
7. Publicá el release
8. Copiá la URL del archivo descargable (clic derecho en el .zip → copiar link)
   Ejemplo: `https://github.com/TU_USUARIO/droplink-site/releases/download/v1.0.0/DropLink.zip`

---

## Paso 2 — Crear la base de datos del contador

1. Entrá a upstash.com → creá cuenta gratis
2. Creá una base de datos Redis → región más cercana
3. Copiá los valores:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

---

## Paso 3 — Publicar en Vercel

1. Entrá a vercel.com → creá cuenta gratis (podés entrar con GitHub)
2. Hacé clic en **Add New Project** → **Import Git Repository**
3. Subí esta carpeta `droplink-site` a un repo de GitHub primero, luego importala
   (o usá Vercel CLI: `npm i -g vercel` y ejecutá `vercel` en esta carpeta)
4. En **Environment Variables** agregá:
   - `UPSTASH_REDIS_REST_URL`    → el valor copiado en el paso 2
   - `UPSTASH_REDIS_REST_TOKEN`  → el valor copiado en el paso 2
   - `DOWNLOAD_URL`              → la URL del .zip de GitHub del paso 1
5. Deploy

---

## Paso 4 — Conectar tu dominio

1. Comprá un dominio en **porkbun.com** o **namecheap.com** (~$10-15/año)
2. En Vercel → tu proyecto → **Settings** → **Domains** → agregá tu dominio
3. Vercel te da los registros DNS que tenés que poner en tu registrador
4. En 5-10 minutos el dominio apunta a tu sitio

---

## Resultado final

- `tudominio.com`           → página de descarga con contador
- `tudominio.com/api/download` → incrementa contador y descarga el zip
- `tudominio.com/api/count`    → devuelve número de descargas

El contador se actualiza en tiempo real cada vez que alguien hace clic en Descargar.
