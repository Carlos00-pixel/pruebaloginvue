<template>
    <div>
        <form method="post" class="custom-form" v-on:submit.prevent="login()">
            <h1>Login</h1>
            <label>Introduce el email:</label>
            <input class="form-control" type="text" v-model="username" placeholder="User Name" required/>
            <label>Introduce la contraseña:</label>
            <input class="form-control" type="password" v-model="password" placeholder="Password" required/>
            <button class="btn btn-info">Log in</button>
        </form>
  </div>
</template>

<script>
import ServiceLogin from "./../services/ServiceLogin";
const service = new ServiceLogin();

export default {
    name: 'LoginComponent',
    data(){
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        login() {

            var user = {
                userName: this.username,
                password: this.password
            }

            console.log(user);

            service.login(user).then(result => {
                localStorage.setItem("token", result.data.response);
                console.log(localStorage.getItem("token"));
                this.$router.push("/menu");
            });
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
  }
  html,
  body {
    background: #ecf0f3;
  }
  h1 {
    margin: 0;
    padding: 0;
  }
  .custom-form {
    min-width: 300px;
    max-width: 60%;
    margin: 0px auto;
    background: rgba(255, 255, 255, 0.15);
    padding: 2rem 3rem;
    margin: auto;
    border-radius: 2.5rem;
    background-color: #ecf0f3;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
    color: black;
    margin-top: 5rem;
  }
  .custom-form input {
    display: block;
    margin: 2rem 0;
    width: 100%;
    border-radius: 0.5rem;
    padding: 1rem;
    border: none;
    box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.8), inset 5px 5px 10px
        rgba(0, 0, 0, 0.1);
    border: 0 none;
    background: #ebf5fc;
  }
  .custom-form button {
    text-transform: uppercase;
    letter-spacing: 0.15em;
    border: none;
    font-size: 0.875rem;
    color: #ffffff;
    font-weight: bold;
    background-color: #bcd8c1;
    width: 100%;
    display: block;
    padding: 0.875rem 1rem;
    border-radius: 1.5rem;
    box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #ffffff;
    cursor: pointer;
  }

  .custom-form button:hover {
    text-transform: uppercase;
    letter-spacing: 0.15em;
    border: none;
    font-size: 0.875rem;
    color: #ffffff;
    font-weight: bold;
    background-color: green;
    width: 100%;
    display: block;
    padding: 0.875rem 1rem;
    border-radius: 1.5rem;
    box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #ffffff;
    cursor: pointer;
  }
</style>