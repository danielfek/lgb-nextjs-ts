# LGB Colombia — Next.js + Tailwind — TypeScript

## Requisitos
- Node.js 18 o 20 (LTS).

## Pasos
```bash
npm install
npm run dev
# Abre http://localhost:3000
```

### Problemas comunes
- Node < 18 → actualiza con nvm (o instalador).
- Reinstalar limpio:
  rm -rf node_modules package-lock.json && npm install
- Puerto ocupado:
  npm run dev -- -p 4000
