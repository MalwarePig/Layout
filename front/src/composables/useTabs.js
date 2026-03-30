import { ref, shallowRef, defineAsyncComponent } from "vue";
import Home from "../components/Pages/Home/Home.vue";

const tabs = ref([]);
let nextTabId = 1;
const currentPage = shallowRef(Home);

// Mapeo de componentes (puedes usar defineAsyncComponent para carga diferida)
const componentsMap = {
  Home,
  Almacen: defineAsyncComponent(
    () => import("../components/Pages/Almacen/Almacen.vue"),
  ),
  Dashboard: defineAsyncComponent(
    () => import("../components/Pages/Dashboard/Dashboard.vue"),
  ),
  Calidad: defineAsyncComponent(
    () => import("../components/Pages/Calidad/Calidad.vue"),
  ),
};

export function useTabs() {
  function addTab(tabName) {
    if (tabs.value.find((t) => t.name === tabName)) {
      currentPage.value = componentsMap[tabName] || Home;
      return;
    } else if (tabs.value.length > 8) {
      tabs.value[tabs.value.length - 1] = { id: nextTabId++, name: tabName };
      currentPage.value = componentsMap[tabName] || Home;
    } else {
      tabs.value.push({ id: nextTabId++, name: tabName });
      currentPage.value = componentsMap[tabName] || Home;
    }
  }

  function closeTab(tabId) {
    const index = tabs.value.findIndex((t) => t.id === tabId);
    if (index !== -1) {
      tabs.value.splice(index, 1);
    }
  }

  return {
    tabs,
    addTab,
    closeTab,
    currentPage,
  };
}
