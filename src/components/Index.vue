<template>
    <br><br><br><br>
    <Nav />
    <div class="container">
        <div clas="row">
            <div class="col-4" style="bac">
            </div>
            <div class="col-4">
                <div class="card ">
                    <div class="card-header bg-success text-white">
                        Iniciar Sesión
                    </div>
                    <div class="card-body">
                        <form v-on:submit.prevent="LoginDato">
                            <div class="mb-3">
                                <label for="input" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="email" name="email"
                                    v-model="capturardato.email" placeholder="Ingrese informacion" required>
                            </div>

                            <div class="mb-3">
                                <label for="input" class="form-label">Contraseña:</label>
                                <input type="password" class="form-control" id="password" name="password"
                                    v-model="capturardato.password" placeholder="Ingrese informacion" required>
                            </div>
                            <center><button type="submit" class="btn btn-success">Iniciar&nbsp; &nbsp; <i
                                        class="fa-solid fa-floppy-disk"></i></button></center>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-4">

            </div>

        </div>



    </div>
</template>
  
<script>
import Nav from './Nav.vue';

export default {
  name: "Index",
  components: {
    Nav
  },
    data() {
        return {
            capturardato: {} // captura los datos del imput
        }
    },
    methods: {
        LoginDato() { // metodo se llama en el post del formulario
            console.log(this.capturardato);
            var datosEnviar = {
                email: this.capturardato.email,
                password: this.capturardato.password
            } // almacenados los datos capturados por el forumulario en una variable
            fetch($urlusuario + '?email=' + this.capturardato.email + '&password=' + this.capturardato.password) // capturamos la ID que mandamos por parametro de la listar
                .then(respuesta => respuesta.json()) // espuesta la voy a mandar en tipo JSON
                .then((datosrespuesta) => {
                    if (datosrespuesta.success == 0) {
                        setTimeout(function () { swal("Información!", "Usuario y Contrasena Incorrecto", "warning"); }, 1000);

                    } else {
                        window.location.href = '/usuarios/' + datosrespuesta[0].id // manda a listar

                    }
                })
                .catch(console.log)
            // console.log(this.capturarempleado);
        }
    }
}
</script>