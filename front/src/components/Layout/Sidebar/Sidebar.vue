<script setup>
import { ref, defineEmits } from 'vue';
import {
    House,
    LayoutDashboard,
    Package,
    Wrench,
    Award,
    Factory,
    TrendingUp,
    ShoppingCart,
    CircleDollarSign,
    Hammer,
    FileText,
    Users,
    Settings,
    ChevronRight,
    Sun,
    Moon
} from 'lucide-vue-next';


const isExpanded = ref(false);

const toggleSidebar = () => {
    isExpanded.value = !isExpanded.value;
};

const isDarkMode = ref(false);
const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
};

const emit = defineEmits(['addTab'])

function Tabs(item) {
    console.log(item);
    emit('addTab', item.name);
}

const menuItems = ref([
    { id: 0, name: 'Home', icon: House, isSubmenuOpen: false },
    { id: 1, name: 'Dashboard', icon: LayoutDashboard, isSubmenuOpen: false },
    { id: 2, name: 'Almacen', icon: Package, isSubmenuOpen: false, subItems: ['Entradas', 'Salidas'] },
    /*     { id: 3, name: 'Herramientas', icon: Wrench, isSubmenuOpen: false }, */
    { id: 4, name: 'Calidad', icon: Award, isSubmenuOpen: false },
    { id: 5, name: 'Producción', icon: Factory, isSubmenuOpen: false, subItems: ['Línea 1', 'Línea 2'] },
    { id: 6, name: 'Ventas', icon: TrendingUp, isSubmenuOpen: false },
    /*     { id: 7, name: 'Compras', icon: ShoppingCart, isSubmenuOpen: false },
        { id: 8, name: 'Finanzas', icon: CircleDollarSign, isSubmenuOpen: false }, */
    { id: 9, name: 'Mantenimiento', icon: Hammer, isSubmenuOpen: false },
    { id: 10, name: 'Reportes', icon: FileText, isSubmenuOpen: false },
    { id: 11, name: 'RH', icon: Users, isSubmenuOpen: false },
    { id: 12, name: 'Configuración', icon: Settings, isSubmenuOpen: false, subItems: ['General', 'Usuarios', 'Permisos', 'Roles', 'Catálogos'] }
]);

/* const toggleSubmenu = (item) => {
    item.isSubmenuOpen = !item.isSubmenuOpen;
}; */
</script>

<template>
    <div class="sidebar-container" :class="{ 'expanded': isExpanded }">
        <div class="mac-dock">
            <!-- Botón Hamburguesa: Alimenta isExpanded -->
            <button class="hamburger" @click="toggleSidebar" :aria-expanded="isExpanded">
                <span class="bar top-bar" :class="{ 'open': isExpanded }"></span>
                <span class="bar mid-bar" :class="{ 'open': isExpanded }"></span>
                <span class="bar bot-bar" :class="{ 'open': isExpanded }"></span>
            </button>

            <nav class="nav-menu">
                <ul class="menu-list">
                    <li v-for="item in menuItems" :key="item.id" class="menu-item-container"
                        @click="item.subItems ? null : Tabs(item)">

                        <div class="menu-item" :title="!isExpanded ? item.name : ''">
                            <span class="icon">
                                <component :is="item.icon" :size="20" :stroke-width="1.5" />
                            </span>

                            <transition name="fade">
                                <span class="label" v-show="isExpanded">{{ item.name }}</span>
                            </transition>

                            <span v-if="item.subItems && isExpanded" class="chevron"
                                :class="{ 'open': item.isSubmenuOpen }">
                                <ChevronRight :size="16" :stroke-width="2" />
                            </span>
                        </div>

                        <ul v-if="item.subItems" class="submenu" :class="{ 'open': item.isSubmenuOpen }">
                            <li v-if="!isExpanded" class="submenu-title">{{ item.name }}</li>
                            <li v-for="(subItem, index) in item.subItems" :key="index" class="submenu-item"
                                @click="Tabs({ name: subItem })">
                                {{ subItem }}
                            </li>
                        </ul>

                    </li>
                    
                    <!-- Dark Mode Toggle -->
                    <li class="menu-item-container" style="margin-top: auto;">
                        <div class="menu-item" @click="toggleDarkMode" :title="!isExpanded ? (isDarkMode ? 'Modo Claro' : 'Modo Oscuro') : ''">
                            <span class="icon">
                                <component :is="isDarkMode ? Sun : Moon" :size="20" :stroke-width="1.5" />
                            </span>
                            <transition name="fade">
                                <span class="label" v-show="isExpanded">{{ isDarkMode ? 'Modo Claro' : 'Modo Oscuro' }}</span>
                            </transition>
                        </div>
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
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
    border-bottom: 1px solid var(--color-border-default);
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
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
    border-right: 1px solid var(--color-border-default);

    display: flex;
    flex-direction: column;
    padding: 24px 10px;

    width: 80px;
    height: 100vh;

    transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    box-sizing: border-box;
}

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
    padding: 0;
    z-index: 10;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.hamburger .bar {
    width: 100%;
    height: 2px;
    background-color: var(--color-text-primary);
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
}

.menu-item {
    display: flex;
    align-items: center;
    padding: 12px 14px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
    width: 100%;
    box-sizing: border-box;
    position: relative;
    justify-content: flex-start;
    overflow: hidden;
    white-space: nowrap;
    border: 1px solid transparent;
}

.menu-item:hover {
    background-color: var(--color-bg-surface);
    color: var(--color-accent-default);
    box-shadow: 0 4px 14px rgba(92, 63, 212, 0.12), 0 1px 4px rgba(0, 0, 0, 0.06);
    border: 1px solid var(--color-border-default);
    z-index: 2;
}

.sidebar-container.expanded .menu-item:hover {
    background: var(--color-bg-elevated);
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
    color: var(--color-text-primary);
    font-weight: 500;
    white-space: nowrap;
}

.chevron {
    margin-left: auto;
    font-size: 0.7rem;
    color: var(--color-text-tertiary);
    transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
    display: flex;
    align-items: center;
}

.menu-item-container:hover .chevron,
.chevron.open {
    transform: translateX(3px);
    color: var(--color-text-primary);
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


.submenu {
    list-style: none;
    padding: 8px 0;
    margin: 0;

    position: absolute;
    top: 0;
    left: 100%;
    margin-left: 2px;


    background-color: var(--color-bg-surface);
    box-shadow: 0 4px 14px rgba(92, 63, 212, 0.12), 0 1px 4px rgba(0, 0, 0, 0.06);
    border: 1px solid var(--color-border-default);
    border-radius: 8px;
    min-width: 170px;
    z-index: 2000;

    opacity: 0;
    visibility: hidden;
    transform: translateX(-10px);
    transition: all 0.25s cubic-bezier(0.25, 1, 0.5, 1);
}


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
    color: var(--color-text-tertiary);
    letter-spacing: 0.5px;
    border-bottom: 1px solid var(--color-border-default);
    margin-bottom: 4px;
    pointer-events: none;
}

.submenu-item {
    padding: 10px 18px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: var(--color-text-secondary);
    font-size: 0.85rem;
    font-weight: 500;
}

.submenu-item:hover {
    background-color: var(--color-bg-elevated);
    color: var(--color-text-primary);
    padding-left: 22px;
}
</style>