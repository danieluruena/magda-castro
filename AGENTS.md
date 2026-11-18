# AGENTS.md — Magda Castro Portfolio

Memoria permanente del proyecto. Se carga automáticamente en cada sesión de OpenCode dentro de este repositorio.
Todo el contenido de cara al usuario (textos, alt, comentarios de producto) va en **español**.

## Contexto de la artista (guía de contenido)

**Magda Castro** es una artista visual radicada en Medellín (Colombia), con un estilo **macabro y psicológico**. Su trabajo se centra en tres formatos principales:

- **Escultura** — figuras y piezas tridimensionales que materializan conceptos difíciles de expresar con palabras.
- **Diseño de personajes** — creación de personajes, trajes, maquillaje FX y caracterización.
- **Performance** — piezas en vivo, intervenciones y colaboraciones escénicas.

Su filosofía es cercana al **pesimismo existencial de Emil Ciorán**: no busca la sanación ni la superación personal, sino la **comprensión y la aceptación** de la condición humana, el sufrimiento y lo oscuro. El arte no es una terapia ni un mensaje motivacional, sino una forma de mirar de frente lo incómodo.

**Cómo aplicar este contexto:** al redactar textos, descripciones de obra, títulos SEO, `alt`, correos o cualquier copy, mantener un tono crudo, reflexivo y contemplativo. Evitar lenguaje de autoayuda, sanación, superación, positivismo o "transformación personal"; no prometer bienestar ni redención. La obra se ofrece como experiencia estética y reflexión, no como solución.

## 1. Qué es este proyecto

Portfolio personal de **Magda Castro**, artista de arte macabro/psicológico en Medellín (escultura, maquillaje FX, diseño de personajes, performance, charlas y talleres).

- Sitio de una sola página por ruta (SPA) con React + TypeScript + Vite.
- Desplegado en **Cloudflare Pages** en `https://magdacastro.com`.
- Backend serverless en **Cloudflare Pages Functions** (`functions/`) para el formulario de contacto.
- Las imágenes y videos **no viven en el repo**: se sirven desde un bucket R2/CDN (`VITE_ASSETS_BUCKET`). En `public/assets` solo hay fuentes.

Repositorio: `git@github.com:danieluruena/magda-castro.git` · ramas principales: `main` y `develop`.

## 2. Stack y versiones

| Área | Tecnología |
|---|---|
| UI | React 18.2, React DOM 18.2 |
| Lenguaje | TypeScript 5.9 (`strict: true`) |
| Bundler | Vite 6 (`@vitejs/plugin-react`) |
| Rutas | react-router-dom 6.8 (`BrowserRouter`) |
| Formularios | Validación manual (react-hook-form está instalado pero **sin uso**) |
| Validación backend | Zod 4 |
| Anti-bot | `@marsidev/react-turnstile` (Cloudflare Turnstile) |
| Email | Resend (`https://api.resend.com/emails`) |
| Iconos | FontAwesome 7 + SVG inline puntuales |
| Estilos | CSS plano global (sin Tailwind, sin CSS Modules, sin preprocesador) |
| Backend | Cloudflare Pages Functions (`@cloudflare/workers-types`) |
| CI | GitHub Actions, Node 22: `npm ci` → `npm run lint` → `npm run build` |

## 3. Comandos

```bash
npm run dev        # Vite en http://localhost:3000 (abre navegador)
npm run build      # tsc + vite build -> dist/
npm run preview    # sirve dist/
npm run lint       # eslint src --ext .ts,.tsx
npm run lint:fix
```

Notas:
- `tsc` solo compila `src` (el `tsconfig.json` raíz excluye `functions/**/*`).
- `functions/` tiene su propio `functions/tsconfig.json` con `@cloudflare/workers-types`; Cloudflare lo compila al desplegar, el build local **no** lo valida.
- `npm run dev` (Vite solo) **no** sirve `/api/contact`; para probar el formulario hay que usar `wrangler pages dev` sobre el build.
- No hay tests ni script de test. La verificación mínima antes de terminar un cambio es `npm run lint && npm run build`.

## 4. Estructura

```
index.html                  # HTML único: SEO, OG/Twitter, JSON-LD, Google Analytics (G-V12SV7DWYG)
vite.config.ts              # puerto 3000, open: true
.eslintrc.js                # reglas de estilo (ver §7)
tsconfig.json               # src, strict, bundler, noEmit
functions/
  api/contact.ts            # POST /api/contact (Pages Function)
  tsconfig.json
public/
  assets/fonts/*.ttf        # Cormorant Garamond y Raleway (locales)
  robots.txt, sitemap.xml
src/
  index.tsx                 # createRoot + fonts.css + App
  App.tsx                   # Router, Header/Footer, rutas lazy, botones flotantes
  common.css                # utilidades y componentes compartidos (.main-title, .section-title,
                            #   .section-description, .main-btn, .link, animación .fade-in)
  App.css                   # reset, body negro, .main-container, .loading-spinner
  fonts.css                 # @font-face de las dos fuentes
  models/constants.ts       # enums con el patrón `as const` + tipo derivado (Orientation)
  models/publishedWorks.ts  # trabajos publicados (video o imagen), del más reciente al más antiguo
  utils/getBasePath.ts      # getImagePath(): antepone el CDN a cualquier asset
  utils/video.ts            # helpers de miniaturas/embeds de YouTube y videos propios
  hooks/
    useMetaTags.ts          # SEO dinámico por página
    useScrollAnimation.ts   # IntersectionObserver -> .fade-in.visible
    useHashScroll.ts        # scroll suave a #ancla tras navegar
  components/
    header/, footer/, whatsappButton/, scrollToTopButton/
    home/                   # home.tsx + latestWorks/, artisticFormats/, portfolio/
    gallery/                # gallery.tsx + artworkCard/
    services/               # services.tsx + serviceDetail/
    aboutMe/, contact/      # contact/ incluye submitModal/
    common/                 # LazyImage.tsx, LazyVideo.tsx
    store/, blog/           # placeholders (solo un <h1>)
```

Convención de carpetas: una carpeta por página/sección en `camelCase`; el archivo principal se llama igual que la carpeta y exporta un **named export** homónimo (`aboutMe/aboutMe.tsx` → `export const AboutMe`). Subcomponentes anidados dentro de la carpeta del padre. Cada componente importa su CSS local y, si aplica, su variante `.mobile.css`.

## 5. Arquitectura y flujos

### Rutas (`src/App.tsx`)
`/` Home · `/galeria` · `/servicios` · `/sobre-mi` · `/tienda` · `/blog` · `/contacto`.
Todas las páginas se cargan con `React.lazy` + `Suspense` (fallback `.loading-spinner`), usando el patrón `.then(m => ({ default: m.Named }))`. No hay ruta 404. Header, Footer, `ScrollToTopButton` y `WhatsAppButton` están fuera de `Routes`.

### Renderizado y SEO
- `index.html` contiene los meta tags base, Open Graph, Twitter Cards, JSON-LD (`Person` + `WebSite`) y Google Analytics.
- Cada página llama a `useMetaTags({ title, description, image?, url? })`, que muta `document.title`, description, `og:*`, `twitter:*` y `canonical`. Al crear una página nueva hay que usarlo.
- `sitemap.xml` y `robots.txt` están en `public/`; si se añade una ruta pública, actualizar el sitemap.

### Imágenes, videos y CDN
- `getImagePath(path)` → `${VITE_ASSETS_BUCKET}/${path}` (base actual: `https://bucket.magdacastro.com/website-assets`).
- Las rutas que se pasan son **relativas a la raíz del bucket**: `galeria/...`, `servicios/...`, `sobre-mi/...`, `formatos/...`, `eventos/...`, `fondo_oscuro.webp`, `fondo_rojo.webp`, `logo-dorado.webp`, `vbg.webm`.
- `LazyImage` añade `src` desde el CDN + `loading="lazy"` + `decoding="async"`. Úsalo por defecto en vez de `<img>`.
- `LazyVideo` = autoplay + muted + loop + playsInline + poster; solo soporta WebM.
- Videos de la parrilla: si es YouTube se usa `youtube-nocookie.com` y la miniatura `img.youtube.com/vi/<id>/maxresdefault.jpg`; si es propio, miniatura `<nombre>-thumbnail.webp` junto al `.webm` en el bucket.
- **No hay imágenes locales**: para añadir material hay que subirlo al bucket; el repo solo versiona fuentes.

### Formulario de contacto (`src/components/contact/contact.tsx` → `functions/api/contact.ts`)
1. Submit con `preventDefault`, extracción de valores por `form.elements.namedItem`, trim y validación manual de campos obligatorios (solo "vacío", no formato).
2. `POST /api/contact` con `{ name, phone, email, message, turnstileToken }`.
3. La Function valida con Zod (`name` 2–100, `phone` 10–15, `email`, `message` 10–5000, token no vacío), verifica Turnstile en `challenges.cloudflare.com/turnstile/v0/siteverify` y envía el correo con Resend.
4. Respuesta `{ success: boolean, data? | error? }`; el cliente muestra `SubmitModal` si `response.ok`.
5. `Turnstile` usa `import.meta.env.VITE_TURNSTILE_SITE_KEY`.

### Variables de entorno (`.env`, ignorado por git; configurar también en Cloudflare Pages)
- `VITE_ASSETS_BUCKET` — base pública del CDN (se incrusta en el bundle, es pública).
- `VITE_TURNSTILE_SITE_KEY` — site key pública de Turnstile.
- `VITE_RESEND_API_KEY` — secreto; solo se lee dentro de la Function.
- `VITE_TURNSTILE_SECRET_KEY` — secreto; solo se lee dentro de la Function.

El prefijo `VITE_` en secretos es engañoso: en Vite solo se expone al cliente lo que se referencia explícitamente con `import.meta.env`, y las Functions leen `env.*`. Nunca mover estos valores al código ni al repo.

## 6. Patrones recurrentes (respetarlos al añadir código)

- **Página nueva**: carpeta + componente con named export + `useScrollAnimation()` + `useMetaTags()` (+ `useHashScroll()` si tiene anclas) + su `.css` y `.mobile.css`; registrar la ruta lazy en `App.tsx`; actualizar header si debe aparecer en el menú.
- **Fondos de sección**: inline style con gradiente + imagen del CDN, p. ej.
  `backgroundImage: \`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('\${getImagePath('fondo_oscuro.webp')}')\``.
  Las secciones de galería, "sobre mí", el hero de inicio y "Últimos trabajos" usan `background-attachment: fixed` (en móvil pasa a `scroll`).
- **Animaciones de entrada**: clase `fade-in` (definida en `common.css`) + `useScrollAnimation()`; el observer añade `.visible` al 30% de intersección. No inventar otro sistema de animación.
- **Datos de contenido**: `publishedWorks` vive en `src/models/publishedWorks.ts` porque lo consume la parrilla de inicio; el resto de arrays (`services`, `makeups`, `sculptures`, `characters`, `artisticFormats`) siguen literales dentro de su componente. No hay CMS ni capa de datos. Se usa `key={idx}` o `key={title}` según el caso.
- **Inicio / últimos trabajos**: el hero es el video de fondo original (`vbg.webm` + `.presentation`). **Justo después del hero**, `home/latestWorks/` muestra `publishedWorks.slice(0, 4)`: el primer trabajo se renderiza a ancho completo con `variant="featured"` (media grande, etiqueta "Lo más reciente" y CTA tipo pill) y los otros tres en una parrilla compacta `auto-fit`. **El orden del array es la fuente de verdad**: al publicar algo nuevo se añade al principio. Cada entrada es un union `kind: 'video' | 'image'`: los videos cargan su póster y se reproducen al pulsar; las imágenes enlazan a la galería. Los helpers de miniaturas/embeds viven en `utils/video.ts`.
- **Props**: `type XProps = {...}` en el mismo archivo, componente tipado como `React.FC<XProps>` con desestructuración en varias líneas.
- **Enums**: patrón `export const X = { ... } as const` + `export type X = typeof X[keyof typeof X]` (ver `Orientation`).
- **Estilos responsive**: CSS de escritorio + archivo `.mobile.css` con `@media (max-width: 768px)` (única excepción: modal a 600px). No usar breakpoints distintos sin motivo.
- **Iconos**: FontAwesome para redes y flechas; SVG inline para WhatsApp, flecha "volver arriba" y botón de play.
- **Accesibilidad**: `aria-label` en botones de solo icono, `alt` descriptivo en español, cierre de modales con Escape y click en backdrop.
- **Comentarios**: en español, solo cuando aportan; JSDoc breve en hooks y componentes utilitarios.

## 7. Estilo de código (ESLint)

- **Sin punto y coma** (`semi: never`) · **comillas simples** · **coma final en multilínea**.
- Espacios dentro de llaves (`{ like: this }`), saltos de línea en arrays de 3+ ítems y objetos de 3+ propiedades.
- Indentación de 2 espacios, componentes funcionales, sin `import React` cuando no se usa el namespace (JSX runtime automático); sí se importa cuando se usan tipos `React.FC`/`React.CSSProperties`.
- Exports nombrados en todo `src`; `App` es el único `export default`.
- Nombres: componentes y tipos en PascalCase, hooks/utilidades en camelCase, clases CSS en kebab-case (con modificadores `--reversed`, estados `current/next/prev`).
- Textos de UI, descripciones de obra y mensajes de error en español; nombres de variables/funciones en inglés.

## 8. Identidad visual (tokens usados en CSS)

- Dorado principal: `#d7a36e` (en el código aparece como `#d7a36eff`).
- Dorado hover/oscuro: `rgb(167, 126, 85)`.
- Rojo vino: `#54181a`; hover `#632729`.
- Fondo: negro (`black`), paneles `rgba(0,0,0,0.6)`, texto secundario `#ccc`, error `#dc3545`.
- WhatsApp: `#25d366` (hover `#20ba5a`).
- Tipografías: **Cormorant Garamond** (títulos, `serif`) y **Raleway** (cuerpo, `sans-serif`), ambas variables y locales con `font-display: swap`.
- Radios: 20px en tarjetas/imágenes, 30px en botones tipo pill, 6–8px en inputs/modales.
- Sombras de texto en cabecera y presentación (`text-shadow: 3px 3px 3px #000`), transiciones de 0.3s ease.

## 9. Estado actual, deuda técnica y trampas conocidas

Cosas a tener en cuenta antes de tocar según qué zona:

- `store.tsx` y `blog.tsx` son placeholders; sus enlaces del menú están comentados en `header.tsx`.
- `sl.exe` en la raíz **no forma parte del proyecto**: es el CLI de **Harness SAST and SCA** (ShiftLeft) que instala la extensión de VS Code `shiftleft.shiftleft-core`. Es idéntico a `~/.shiftleft/sl.exe`, pesa ~54 MB, está firmado por Harness Inc. y no lo referencia ningún script. No commitearlo; si aparece, excluirlo localmente o borrarlo.
- `react-hook-form` está instalado pero no se usa; Zod solo se usa en la Function. La validación del cliente (obligatorios) y la del servidor (Zod) están duplicadas: si cambian las reglas, actualizar ambas.
- El formulario solo hace `console.error` si falla: no hay mensaje de error visible para el usuario. Tampoco se resetea el token de Turnstile tras enviar.
- `functions/api/contact.ts` tiene remitente de sandbox (`onboarding@resend.dev`) y destinatario hardcodeado (`dennis14756@gmail.com`). No cambiar sin confirmación del dueño. El HTML del correo interpola datos del usuario sin escapar.
- El `README.md` está desactualizado (habla de `npm start`, carpeta `build/` y TS 4.9). La fuente de verdad es este archivo y `package.json`.
- `index.html` conserva URLs antiguas `/assets/...` en `preload`, `og:image`, `twitter:image` y favicon, mientras los medios viven en el CDN; el favicon probablemente esté roto (en `public/assets` solo hay fuentes).
- `LazyVideo` usa `preload='false'`, valor no válido (debería ser `preload="none"`).
- Typo `'Carmorant Garamond'` en `service.css` (cae a serif genérico); el nombre correcto es `'Cormorant Garamond'`.
- La cuarta tarjeta de "Últimos trabajos" usa provisionalmente la obra **Sacerdotisa** (imagen de la galería) como propuesta de contenido; confirmar o reemplazar por el cuarto trabajo real en `publishedWorks.ts`.
- Hay clases globales duplicadas/colisionables: `.main-title`, `.section-title` en `common.css` y `gallery.css`; `.service-image` en `service.css` y `serviceDetail.css`. Revisar la cascada antes de redefinir.
- Varios componentes manipulan `document.body.style.overflow`; al añadir modales, restaurar siempre el overflow en el cleanup.
- `getImagePath` no valida que `VITE_ASSETS_BUCKET` exista: sin la variable las rutas quedan como `undefined/...`.
- `App.tsx` no tiene ruta comodín; una URL desconocida queda sin contenido (Cloudflare Pages sirve el index por defecto).
- No hay manejo de estado global ni capa de API: todo es props/estado local.

## 10. Flujo de trabajo

- Ramas: `main` es **producción**; `develop` es la rama de integración. Todo desarrollo nuevo sale de `develop` en una rama `feat/<tema>` o `fix/<tema>` (nunca trabajar directamente sobre `develop` ni `main`).
- Los PR siguen siempre la misma dirección: `feat/*` o `fix/*` → `develop` → `main`. No se abren PR de una feature directamente contra `main`. Cada PR debe pasar **lint + build** en GitHub Actions (Node 22).
- **Despliegue automático en Cloudflare Pages**: cada PR genera un *preview deployment* con su propia URL, y cada push/merge a `main` despliega automáticamente a producción (`https://magdacastro.com`). No hay paso manual de deploy.
- Commits cortos, en inglés, imperativo y en minúscula (`add google tag`, `fix form validation`, `new event with self hosted video`); los merges usan `Merge pull request #N from ...`.
- Antes de cerrar un cambio: `npm run lint && npm run build`, revisar que no se rompa el responsive a 768px y que las rutas de assets apunten al bucket.
- No commitear `.env`, `dist/` ni `.wrangler/`.
- No introducir frameworks de CSS, librerías de animación ni gestión de estado sin pedirlo.
