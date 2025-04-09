import { createRouter, createWebHashHistory } from "vue-router";

// Agregando páginas de la aplicación
import Home from "../Pages/Home.vue";
import About from "../Pages/About.vue";
import Horario2 from "../Pages/Horario2.vue";
import Horario1 from "../Pages/Horario1.vue";
import CalculadoraV1 from "../Pages/CalculadoraV1.vue";
import CalculadoraV2 from "../Pages/CalculadoraV2.vue";
import Eventos from "../Pages/Eventos.vue";
import Padre from "../Pages/Padre.vue";
import Recorrido from "../Pages/recorrido.vue";
import Listas from "../Pages/Listas.vue";


const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/horario1",
        name: "horario1",
        component: Horario1,
    },
    {
        path: "/horario2",
        name: "horario2",
        component: Horario2,
    },
    
    {
        path: "/calculadoraV1",
        name: "calculadoraV1",
        component: CalculadoraV1,
    },
    
    {
        path: "/calculadoraV2",
        name: "calculadoraV2",
        component: CalculadoraV2,
    },
    {
        path: "/eventos",
        name: "eventos",
        component: Eventos,
    },

    {
        path: "/padre",
        name: "padre",
        component: Padre,
    },
    {
        path: "/recorrido",
        name: "recorrido",
        component: Recorrido,
    },
    {
        path: "/listas",
        name: "listas",
        component: Listas,
    },
    
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;