<template>
    <MenuComponent/>
    <div style="text-align: center;">
        <h1>Empleados</h1>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th>Numero/Id</th>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Director</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="emp in empleados" :key="emp">
                    <td>{{emp.idEmpleado}}</td>
                    <td>{{emp.apellido}}</td>
                    <td>{{emp.oficio}}</td>
                    <td>{{emp.salario}}</td>
                    <td>{{emp.director}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import MenuComponent from "./MenuComponent.vue";
import ServiceLogin from "./../services/ServiceLogin";
const service = new ServiceLogin();

export default {
    name: 'EmpleadosComponent',
    components: {
        MenuComponent
    },
    data(){
        return {
            empleados: []
        }
    },
    methods: {
        mostrarEmpleados(){
            service.getEmpleados().then(result => {
                console.log(result);
                this.empleados = result;
            });
        }
    },
    mounted(){
        this.mostrarEmpleados();
    }
}
</script>

<style>

</style>