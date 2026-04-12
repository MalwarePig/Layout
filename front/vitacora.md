Estructura del proyecto
src/
├── layout/
│   ├── AppLayout.vue   ← estructura principal
│   ├── Sidebar.vue     ← barra izquierda
│   ├── Header.vue      ← logo + tabs
│   └── TabsBar.vue     ← manejo de tabs
│
├── views/
│   ├── Dashboard.vue
│   ├── Clientes.vue
│   └── Ventas.vue
│
├── store/
│   └── tabs.js         ← estado global de tabs
│
└── App.vue

Prototipo de la interfaz
┌──────────────────────────────────────────────────────────────┐
│ 🚀 CRM PRO | [ Inicio ✖ ] [ Clientes ✖ ]                    │
├──────────────┬───────────────────────────────────────────────┤
│ ☰ CRM        │                                               │
│ 🏠 Dashboard │                                               │
│ 👥 Clientes  │              CONTENIDO                        │
│ 💰 Ventas    │                                               │
│ 📊 Reportes  │                                               │
└──────────────┴───────────────────────────────────────────────┘

Agregar nuevas paginas
1. Crear la carpeta en views
2. Crear el componente en views
3. Agregar el componente en el sidebar
4. Agregar el componente en el useTabs