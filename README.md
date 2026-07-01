# Que Nöta — Landing (React + Vite)

## Correr en local
```
npm install
npm run dev
```
Abre http://localhost:5173

## Desplegar en Vercel

**Opción A — Sin terminal (recomendada):**
1. Sube esta carpeta a un repositorio en GitHub (crea uno nuevo y arrastra los archivos, o usa `git init` / `git push`).
2. Entra a https://vercel.com → **Add New Project** → conecta tu cuenta de GitHub → selecciona el repositorio.
3. Vercel detecta automáticamente que es un proyecto Vite. No necesitas tocar nada, solo dale a **Deploy**.
4. En 1-2 minutos tendrás tu URL en vivo (ej. `que-nota.vercel.app`).

**Opción B — Con la CLI de Vercel:**
```
npm install -g vercel
vercel
```
Sigue las instrucciones en pantalla (te pedirá iniciar sesión la primera vez).

## Dominio propio
Una vez desplegado, en el dashboard de Vercel ve a **Settings → Domains** y agrega tu dominio (ej. quenota.com). Vercel te da los registros DNS que debes apuntar desde donde compraste el dominio.

## Estructura
```
src/
  components/       → cada sección de la landing como componente
  App.jsx           → arma todas las secciones
  index.css         → estilos globales (paleta, tipografía, animaciones)
  main.jsx          → punto de entrada de React
```

## Notas
- El formulario de contacto no tiene backend: al enviarlo, arma un mensaje y abre WhatsApp directo (310 327 5424) para que la solicitud llegue de inmediato sin necesidad de configurar un servidor de correo.
- Las portadas de la galería "Diseños propios" son ilustraciones hechas en CSS con la paleta de marca. Si tienes las fotos reales de los productos, se pueden reemplazar fácilmente en `src/components/DisenosYColaboraciones.jsx`.
