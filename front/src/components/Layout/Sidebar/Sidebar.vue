<script setup>
import { ref } from 'vue';

const isExpanded = ref(false);

const toggleSidebar = () => {
    isExpanded.value = !isExpanded.value;
};

const menuItems = ref([
    { id: 1, name: 'Dashboard', icon: '📊', isSubmenuOpen: false },
    { id: 2, name: 'Almacenes', icon: '📦', isSubmenuOpen: false, subItems: ['Principal', 'Secundario'] },
    { id: 3, name: 'Herramientas', icon: '🛠️', isSubmenuOpen: false },
    { id: 4, name: 'Calidad', icon: '✨', isSubmenuOpen: false },
    { id: 5, name: 'Producción', icon: '🏭', isSubmenuOpen: false, subItems: ['Línea 1', 'Línea 2'] },
    { id: 6, name: 'Ventas', icon: '📈', isSubmenuOpen: false },
    { id: 7, name: 'Compras', icon: '🛒', isSubmenuOpen: false },
    { id: 8, name: 'Finanzas', icon: '💰', isSubmenuOpen: false },
    { id: 9, name: 'Mantenimiento', icon: '🔧', isSubmenuOpen: false },
    { id: 10, name: 'Reportes', icon: '📄', isSubmenuOpen: false },
    { id: 11, name: 'RH', icon: '👥', isSubmenuOpen: false },
    { id: 12, name: 'Configuración', icon: '⚙️', isSubmenuOpen: false, subItems: ['General', 'Usuarios', 'Permisos'] }
]);

const toggleSubmenu = (item) => {
    item.isSubmenuOpen = !item.isSubmenuOpen;
};
</script>

<template>
    <div class="sidebar-container" :class="{ 'expanded': isExpanded }">
        <div class="mac-dock">
            <button class="hamburger" @click="toggleSidebar" :aria-expanded="isExpanded">
                <span class="bar top-bar" :class="{ 'open': isExpanded }"></span>
                <span class="bar mid-bar" :class="{ 'open': isExpanded }"></span>
                <span class="bar bot-bar" :class="{ 'open': isExpanded }"></span>
            </button>

            <nav class="nav-menu">
                <ul class="menu-list">
                    <li v-for="item in menuItems" :key="item.id" class="menu-item-container">

                        <div class="menu-item"
                             @click="item.subItems ? toggleSubmenu(item) : null"
                             :title="!isExpanded ? item.name : ''">

                            <span class="icon">{{ item.icon }}</span>

                            <transition name="fade">
                                <span class="label" v-show="isExpanded">{{ item.name }}</span>
                            </transition>

                            <span v-if="item.subItems && isExpanded"
                                  class="chevron"
                                  :class="{ 'open': item.isSubmenuOpen }">
                                ▶
                            </span>
                        </div>

                        <ul v-if="item.subItems"
                            class="submenu"
                            :class="{ 'open': item.isSubmenuOpen }">

                            <li v-if="!isExpanded" class="submenu-title">{{ item.name }}</li>

                            <li v-for="(subItem, index) in item.subItems" :key="index" class="submenu-item">
                                {{ subItem }}
                            </li>
                        </ul>

                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.sidebar-container {
    position: relative;
    height: 100vh;
    width: 80px;
    flex-shrink: 0;
    z-index: 1000;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

.mac-dock {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    background: var(--color-bg-page);
    backdrop-filter: blur(20px) saturate(150%);
    -webkit-backdrop-filter: blur(20px) saturate(150%);
    border-right: 1px solid rgba(200, 200, 200, 0.4);
    border-radius: 0;
    box-shadow: 4px 0 20px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    padding: 24px 10px;

    width: 80px;
    height: 100vh;

    transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    box-sizing: border-box;
    /* Removido el overflow hidden para permitir que el flyout rebase sin cortarse! */
}

/* Expansión del dock */
.sidebar-container.expanded .mac-dock {
    width: 200px;
}

.hamburger {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 18px;
    width: 22px;
    margin: 5px 0 30px 19px;
    /* Anclado siempre a 19px de la izquierda (centro matemático de 80px) */
    padding: 0;
    z-index: 10;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.hamburger .bar {
    width: 100%;
    height: 2px;
    background-color: #333;
    border-radius: 10px;
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    transform-origin: left center;
}

.bar.top-bar.open {
    transform: rotate(45deg) translate(0px, -2px);
}

.bar.mid-bar.open {
    opacity: 0;
}

.bar.bot-bar.open {
    transform: rotate(-45deg) translate(0px, 2px);
}

.nav-menu {
    flex: 1;
    width: 100%;
}

.menu-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

.menu-item-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    position: relative;
    /* Clave absoluta para el anclaje del flyout */
}

.menu-item {
    display: flex;
    align-items: center;
    padding: 12px 14px;
    /* Anclaje matemático: 14px asegura que del min-width 32px su centro caiga exacto en 40px del dock colapsado */
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
    width: 100%;
    box-sizing: border-box;
    position: relative;
    justify-content: flex-start;
    /* Siempre left flex-start para evitar rebotes! */
    overflow: hidden;
    /* Evita expansiones de caja temporal al colapsar */
    white-space: nowrap;
    /* Evita que el texto envuelva y rompa la animación */
}

.menu-item:hover {
    background: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transform: scale(1.05);
    z-index: 2;
}

.sidebar-container.expanded .menu-item:hover {
    transform: translateX(4px);
    background: rgba(255, 255, 255, 0.9);
}

.icon {
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 32px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.label {
    margin-left: 14px;
    font-size: 0.95rem;
    color: #333;
    font-weight: 500;
    white-space: nowrap;
}

.chevron {
    margin-left: auto;
    font-size: 0.7rem;
    color: #999;
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    display: flex;
    align-items: center;
}

.menu-item-container:hover .chevron,
.chevron.open {
    transform: translateX(3px);
    color: #333;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(-10px);
}

/* FLYOUT SUBMENU STYLING */
.submenu {
    list-style: none;
    padding: 8px 0;
    margin: 0;

    position: absolute;
    top: 0;
    left: 100%;
    /* Totalmente a la derecha del menu-item-container */
    margin-left: 2px;
    /* Separación estética */

    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px) saturate(200%);
    -webkit-backdrop-filter: blur(20px) saturate(200%);
    border: 1px solid rgba(200, 200, 200, 0.4);
    border-radius: 8px;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.08);
    min-width: 170px;
    z-index: 2000;

    opacity: 0;
    visibility: hidden;
    transform: translateX(-10px);
    transition: all 0.25s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Aparece al hacer hover sobre todo el item, o si se hace click (.open) */
.menu-item-container:hover .submenu,
.submenu.open {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
}

.submenu-title {
    padding: 8px 18px;
    font-size: 0.7rem;
    text-transform: uppercase;
    color: #888;
    letter-spacing: 0.5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    margin-bottom: 4px;
    pointer-events: none;
}

.submenu-item {
    padding: 10px 18px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #444;
    font-size: 0.85rem;
    font-weight: 500;
}

.submenu-item:hover {
    background-color: rgba(0, 0, 0, 0.04);
    color: #000;
    padding-left: 22px;
    /* Efecto dinámico hacia la derecha al hover */
}
</style>