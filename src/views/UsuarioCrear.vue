<template>
    <Menu />

  <div class="container">
    <div class="card ">
      <div class="card-header bg-success text-white">
        Registrar Nuevo Usuario
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="GuardarDato">
       
          <div class="mb-3">
            <label for="input" class="form-label">Nombres:</label>
            <input type="text" class="form-control" id="nombre" name="nombre" v-model="capturardato.nombre"
              placeholder="Ingrese informacion" required>
          </div>

          <div class="mb-3">
            <label for="input" class="form-label">Apellidos:</label>
            <input type="text" class="form-control" id="apellido" name="apellido" v-model="capturardato.apellido"
              placeholder="Ingrese informacion" required>
          </div>
          <div class="mb-3">
            <label for="input" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" name="email" v-model="capturardato.email"
              placeholder="Ingrese informacion" required>
          </div>

          <div class="mb-3">
            <label for="input" class="form-label">Contraseña:</label>
            <input type="password" class="form-control" id="password" name="password" v-model="capturardato.password"
              placeholder="Ingrese informacion" required>
          </div>
          <center><button type="submit" class="btn btn-success">Guardar&nbsp; &nbsp; <i class="fa-solid fa-floppy-disk"></i></button></center>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import Menu from './Menu.vue';

export default {
    name: "UsuarioCrear",
    components: {
        Menu
    },

  data() {
    return {
      capturardato: {} // captura los datos del imput
    }
  },
  methods: {
    GuardarDato() { // metodo se llama en el post del formulario
      console.log(this.capturardato);
      var datosEnviar = {
        nombre: this.capturardato.nombre,
        apellido: this.capturardato.apellido,
        email: this.capturardato.email,
        password: this.capturardato.password
      } // almacenados los datos capturados por el forumulario en una variable
      fetch($urlusuario+'?insertar=1', {
        method: "POST", // estamos mandado los datos por el metodo POST
        body: JSON.stringify(datosEnviar) // datos lo estamos enviado a travez de sentecnia JSON
      })
        .then(respuesta => respuesta.json())
        .then((datosRespuesta => {
          console.log(datosRespuesta);
          if(datosRespuesta.success==0){
            setTimeout(function () { swal("Información!", "Correo ya registrado","warning");}, 1000);
          }else{
            window.location.href = '/usuarios/'+this.$route.params.idu// manda a listar
          }
        }))
      // console.log(this.capturarempleado);
    }
  }
}
</script>