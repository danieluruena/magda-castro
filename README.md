# Magda Castro - Portfolio

Sitio web portfolio personal de Magda Castro, artista especializada en obras personalizadas, diseño de personajes y trajes, performance en vivo, charlas y talleres.

## Descripción

Esta aplicación web está desarrollada con React y TypeScript, presentando un portfolio completo con las siguientes secciones:

- **Inicio**: Página principal con video de fondo
- **Galería**: Muestra de trabajos artísticos
- **Servicios**: Obras personalizadas, diseño de personajes, performance y talleres
- **Sobre mí**: Información personal y profesional
- **Tienda**: Productos disponibles
- **Blog**: Artículos y contenido
- **Contacto**: Información de contacto

## Tecnologías utilizadas

- React 18.2.0
- TypeScript 4.9.5
- React Router DOM 6.8.1
- CSS3

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd magda-castro
```

2. Instala las dependencias:
```bash
npm install
```

## Ejecución en local

Para ejecutar el proyecto en modo desarrollo:

```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build para producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `build/`.

## Estructura del proyecto

```
magda-castro/
├── public/           # Archivos públicos estáticos
├── src/
│   ├── components/   # Componentes React organizados por sección
│   ├── App.tsx       # Componente principal
│   └── index.tsx     # Punto de entrada
├── assets/           # Recursos multimedia
└── package.json      # Dependencias y scripts
```