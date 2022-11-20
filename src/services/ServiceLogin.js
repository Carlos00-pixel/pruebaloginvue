import axios from 'axios'
import Global from './../Global'

export default class ServiceLogin {

    login(user){
        return new Promise(function(resolve) {
            var request = "/Auth/Login";
            var url = Global.urlApiEmpleadosAuth + request;

            axios.post(url, user).then(response => {
                resolve(response);
            });
        });
    }

    getEmpleados(){
        return new Promise(function(resolve) {

            var token = localStorage.getItem("token");

            var header = {
                'Authorization': "Bearer "+token
            }

            var request = "/api/Empleados";
            var url = Global.urlApiEmpleadosAuth + request;

            axios.get(url, {headers: header}).then(response => {
                resolve(response.data);
            });
        });
    }
}