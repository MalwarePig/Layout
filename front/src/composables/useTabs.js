import { ref, shallowRef, defineAsyncComponent } from "vue";
import Home from "../components/Pages/Home/Home.vue";

let nextTabId = 1;
const currentPage = shallowRef(Home);
const tabs = ref([{ id: nextTabId++, name: "Home", link: "Home" }]);
// Mapeo de componentes
const componentsMap = {
  Home,
  Almacen: defineAsyncComponent(
    () => import("../components/Pages/Almacen/Almacen.vue"),
  ),
  AlmacenSalidas: defineAsyncComponent(
    () => import("../components/Pages/Almacen/AlmacenSalidas.vue"),
  ),
  Dashboard: defineAsyncComponent(
    () => import("../components/Pages/Dashboard/Dashboard.vue"),
  ),
  Calidad: defineAsyncComponent(
    () => import("../components/Pages/Calidad/Calidad.vue"),
  ),
  Compras: defineAsyncComponent(
    () => import("../components/Pages/Compras/Compras.vue"),
  ),
  Finanzas: defineAsyncComponent(
    () => import("../components/Pages/Finanzas/Finanzas.vue"),
  ),
  Herramientas: defineAsyncComponent(
    () => import("../components/Pages/Herramientas/Herramientas.vue"),
  ),
  Mantenimiento: defineAsyncComponent(
    () => import("../components/Pages/Mantenimiento/Mantenimiento.vue"),
  ),
  Producción: defineAsyncComponent(
    () => import("../components/Pages/Produccion/Produccion.vue"),
  ),
  Reportes: defineAsyncComponent(
    () => import("../components/Pages/Reportes/Reportes.vue"),
  ),
  RH: defineAsyncComponent(() => import("../components/Pages/RH/RH.vue")),
  Ventas: defineAsyncComponent(
    () => import("../components/Pages/Ventas/Ventas.vue"),
  ),
};

export function useTabs() {
  function addTab(tabName) {
    console.log("en usetab", tabName.name, tabName.link);
    if (tabs.value.find((t) => t.name === tabName.name)) {
      currentPage.value = componentsMap[tabName.link] || Home;
      return;
    } else if (tabs.value.length > 8) {
      tabs.value[tabs.value.length - 1] = { id: nextTabId++, name: tabName.name, link: tabName.link };
      currentPage.value = componentsMap[tabName.link] || Home;
    } else {
      tabs.value.push({ id: nextTabId++, name: tabName.name, link: tabName.link });
      currentPage.value = componentsMap[tabName.link] || Home;
    }
  }

  function closeTab(tabId) {
    const index = tabs.value.findIndex((t) => t.id === tabId);
    if (index !== -1) {
      tabs.value.splice(index, 1);
    }
  }

  function activeTab(tabName, tabLink) {
    console.log("en usetab", tabName, tabLink);
    currentPage.value = componentsMap[tabLink] || Home;
  }

  return {
    tabs,
    addTab,
    closeTab,
    currentPage,
    activeTab,
  };
}
