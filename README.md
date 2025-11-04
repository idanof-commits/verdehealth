# VERDE HEALTH – Next.js Starter (Full Intake)

## Local
```bash
npm i
npm run dev
```
http://localhost:3000

## Deploy (Vercel)
- Import repo → Next.js detected
- Add Domains: verdehealth.bg, www.verdehealth.bg
- DNS: A(@) 76.76.21.21, CNAME(www) cname.vercel-dns.com.

## Routes
- `/` – Home
- `/intake` – Full intake + BMR/TDEE + 14d plan + PDF + fetch
- `/legal/privacy`, `/legal/terms`
- `/api/plan/generate` – echo (replace with DB later)
