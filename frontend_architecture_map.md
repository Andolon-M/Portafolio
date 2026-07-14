# Mapa de Arquitectura Frontend (Feature-Sliced Design / Vertical Slicing)

Este documento describe la arquitectura modular basada en funcionalidades utilizada en el proyecto frontend. Esta estructura es ideal para proyectos escalables porque agrupa el código por dominio de negocio (módulos) en lugar de por tipo de archivo, y mantiene el código reutilizable en una capa compartida (`shared`).

## 🗺️ Mapa General de la Arquitectura

```text
frontend-app/
├── public/                 # Archivos estáticos públicos (favicon, logos, robots.txt)
├── src/                    # Código fuente principal de la aplicación
│   ├── assets/             # Recursos estáticos (imágenes, iconos, fuentes, etc.)
│   ├── modules/            # 📦 MÓDULOS DE NEGOCIO (Características específicas)
│   ├── shared/             # 🛠️ CÓDIGO COMPARTIDO (Reutilizable en toda la app)
│   ├── App.tsx             # Componente raíz de React
│   └── main.tsx            # Punto de entrada principal (renderizado y providers base)
├── .env                    # Variables de entorno
├── eslint.config.js        # Configuración de linting
├── vite.config.ts          # Configuración del empaquetador Vite
├── package.json            # Dependencias y scripts del proyecto
└── components.json         # Configuración de componentes UI (ej. shadcn/ui)
```

---

## 📦 1. Carpeta `src/modules/` (El corazón del negocio)
Aquí es donde reside la lógica de cada funcionalidad específica de la aplicación. Cada carpeta dentro de `modules` es independiente y contiene todo lo necesario para que esa funcionalidad opere.

Ejemplos de módulos: `auth`, `dashboard`, `members`, `users`, etc.

**Estructura interna ideal de un Módulo (ej. `modules/members/`):**

```text
modules/members/
├── components/       # Componentes UI exclusivos de este módulo (ej. MembersTable, MemberForm)
├── hooks/            # Custom Hooks específicos de negocio (ej. useMembers, useUpdateMember)
├── pages/            # Componentes de página o vistas principales (ej. MembersPage.tsx)
├── services/         # Funciones para llamadas a la API o lógica externa del módulo
├── types/            # Interfaces y tipos TypeScript propios del dominio (ej. IMember)
├── index.ts          # 🚪 Punto de entrada público (Exporta solo lo que otros módulos necesitan)
└── README.md         # Documentación específica del módulo
```

> [!IMPORTANT]
> **Regla de oro de los Módulos:** Un módulo no debe importar archivos internos de otro módulo directamente. Solo deben comunicarse a través de lo que cada módulo exporte explícitamente en su respectivo `index.ts`, o utilizando el código global compartido en la carpeta `shared`.

---

## 🛠️ 2. Carpeta `src/shared/` (El núcleo reutilizable)
Aquí va todo el código genérico que puede ser utilizado por **cualquier módulo**. No contiene lógica específica de un dominio de negocio, sino herramientas, configuraciones e interfaces base.

```text
shared/
├── api/              # Configuración base de Axios/Fetch, interceptores y endpoints globales
├── components/       # Componentes UI genéricos y reutilizables
│   ├── ui/           # Componentes base tontos (Botones, Inputs, Modales - ej. UI libraries)
│   ├── layout/       # Componentes estructurales (Sidebar, Navbar, Footer)
│   └── admin/        # Componentes compartidos específicos de una sección (ej. panel de admin)
├── contexts/         # React Contexts globales (ej. AuthContext, ThemeContext)
├── hooks/            # Custom Hooks genéricos (ej. useWindowSize, useDebounce)
├── layouts/          # Plantillas de diseño de página (ej. AdminLayout, AuthLayout)
├── lib/              # Utilidades, formateadores y funciones puras (ej. formatDate, classNames)
├── router/           # Configuración del enrutador global (React Router)
└── styles/           # Estilos globales, variables CSS o Tailwind (index.css)
```

---

## 🚀 Ventajas de esta Arquitectura

1. **Escalabilidad:** Si el proyecto crece y necesitas añadir una nueva funcionalidad, simplemente creas una nueva carpeta en `modules/` con su propia estructura interna sin afectar al código existente.
2. **Mantenibilidad:** Los errores son más fáciles de aislar. Si hay un error en la vista de "Usuarios", sabes exactamente que debes buscar dentro de `modules/users/` y no en una carpeta global gigante.
3. **Trabajo en equipo:** Diferentes desarrolladores pueden trabajar en distintos módulos simultáneamente reduciendo los conflictos al hacer "merge" del código.
4. **Encapsulamiento:** Permite ocultar la lógica interna (privada) de un módulo y exponer solo las interfaces necesarias hacia el resto de la aplicación a través de su `index.ts`.
