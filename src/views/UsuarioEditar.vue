<template>
    <Menu />

  <div class="container">
    <div class="card ">
      <div class="card-header bg-success text-white">
        Actualizar Cliente
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="ActualizarDato">
  
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
    name: "usuarioEditar",
    components: {
        Menu
    },

  data() {
    return {
      capturardato: {} // captura y mostrar los datos del imput
    }
  },
  created: function () { // llaamos los metodos para mostrarla en la plantilla
    this.obteneriformacionID(); // ejecutar el metodo
  },
  methods: {
    obteneriformacionID() { // obtenerla  informacion y mandarla al forma
      fetch($urlusuario+'?consultar=' + this.$route.params.id) // capturamos la ID que mandamos por parametro de la listar
        .then(respuesta => respuesta.json()) // espuesta la voy a mandar en tipo JSON
        .then((datosrespuesta) => {
          console.log(datosrespuesta)
          this.capturardato = datosrespuesta[0]; // solo capturamos un solo dato 
        })
        .catch(console.log)
    },
    ActualizarDato() { // metodo para actualizar informacion

      var datosEnviar = {
        id: this.$route.params.id,
        nombre: this.capturardato.nombre,
        apellido: this.capturardato.apellido,
        email: this.capturardato.email,
        password: this.capturardato.password,
      }
      fetch($urlusuario+'?actualizar=' +  this.$route.params.id, {
        method: "POST", // estamos mandado los datos por el metodo POST
        body: JSON.stringify(datosEnviar) // datos lo estamos enviado a travez de sentecnia JSON
      })
        .then(respuesta => respuesta.json())
        .then((datosRespuesta => {
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