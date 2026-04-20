import { h, ref } from 'vue'
import { NButton } from "naive-ui"
import btnFunction from '../../../UI/Buttons/ButtonAction/ButtonAction.vue'


function selectArticle(data) {
    console.log(data)
}


export function useConfig() {

    const columns1 = [
        {
            title: "Nombre",
            key: "name",
            align: "center",
            width: 120
        },
        {
            title: "URL",
            key: "url",
            align: "center",
        },
        {
            title: "Seleccionar",
            key: "actions",
            align: "center",
            width: 120,
            render(row) {
                return h(
                    btnFunction,
                    {
                        size: "small",
                        onClick: () => selectArticle(row)
                    },
                    { default: () => "Ver" }
                )
            }
        }
    ]

    const pagination1 = {
        pageSize: 10
    }

    const columns2 = [
        { title: "OT", key: "ot", align: "center", width: 100 },
        { title: "Descripción", key: "descripcion", align: "center" },
        { title: "Cantidad", key: "cantidad", align: "center", width: 100 },
        { title: "Estatus", key: "estatus", align: "center", width: 120 },
        {
            title: "Acciones",
            key: "actions",
            align: "center",
            width: 100,
            render(row) {
                return h(
                    NButton,
                    {
                        size: "small",
                        type: "error",
                        ghost: true,
                        onClick: () => console.log('Delete', row)
                    },
                    { default: () => "Eliminar" }
                )
            }
        }
    ]


    /* SEGUNDA TABLA (SALIDA) */
    const dataSalida = ref([
        { ot: '12345', descripcion: 'Ejemplo de salida', cantidad: 5, estatus: 'Pendiente' }
    ])


    /* SELECTS */
    const value = ref(null)
    const selEstados = [
        { label: 'Abierta', value: 'abierta' },
        { label: 'Cerrada', value: 'cerrada' }
    ]

    const selFamilia = [
        { label: 'Familia 1', value: 'familia1' },
        { label: 'Familia 2', value: 'familia2' }
    ]

    const selMaquina = [
        { label: 'Maquina 1', value: 'maquina1' },
        { label: 'Maquina 2', value: 'maquina2' }
    ]

    const selParcial = [
        { label: 'Parcial 1', value: 'parcial1' },
        { label: 'Parcial 2', value: 'parcial2' }
    ]



    return {
        columns1,
        pagination1,
        columns2,
        dataSalida,
        value,
        selEstados,
        selFamilia,
        selMaquina,
        selParcial
    };
}
