import { h, ref } from "vue";
import { NButton } from "naive-ui";
import btnFunction from "../../../UI/Buttons/ButtonAction/ButtonAction.vue";
import { SquareX } from "lucide-vue-next";

export function useConfig(onDeleteRow) {
  const columnsTable = [
    {
      title: "Nombre",
      key: "Nombre",
      align: "center",
      width: 120,
    },
    {
      title: "Cantidad",
      key: "Cantidad", // Cambiado de 'url' a 'Cantidad'
      align: "center",
    },
    {
      title: "Estatus",
      key: "Estatus", // Nueva columna
      align: "center",
    },
    {
      title: "Seleccionar",
      key: "actions",
      align: "center",
      width: 120,
      render(row) {
        return h(btnFunction, {
          size: "small",
          onClick: () => onDeleteRow(row),
          text: "Eliminar",
          icon: SquareX,
        });
      },
    },
  ];

  const paginationTable = {
    pageSize: 10,
  };

  /* SELECTS */
  const value = ref(null);
  const selEstados = [
    { label: "Abierta", value: "abierta" },
    { label: "Cerrada", value: "cerrada" },
  ];

  const selFamilia = [
    { label: "Familia 1", value: "familia1" },
    { label: "Familia 2", value: "familia2" },
  ];

  const selMaquina = [
    { label: "Maquina 1", value: "maquina1" },
    { label: "Maquina 2", value: "maquina2" },
  ];

  const selParcial = [
    { label: "Parcial 1", value: "parcial1" },
    { label: "Parcial 2", value: "parcial2" },
  ];

  return {
    columnsTable,
    paginationTable,
    selEstados,
    selFamilia,
    selMaquina,
    selParcial,
  };
}
