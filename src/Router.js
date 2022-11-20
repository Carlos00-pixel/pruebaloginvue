import { createRouter, createWebHistory } from "vue-router";

import LoginComponent from "./components/LoginComponent.vue";
import EmpleadosComponent from "./components/EmpleadosComponent.vue";

const routes = [
    {
        path: "/", component: LoginComponent
    },
    {
        path: "/empleados", component: EmpleadosComponent
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;