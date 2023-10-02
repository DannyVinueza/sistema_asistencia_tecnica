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
            <label for="input" class="form-label">Cedula:</label>
            <input type="number" class="form-control" id="cedula" name="cedula" v-model="capturardato.cedula"
              placeholder="Ingrese informacion" required>
          </div>
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
            <label for="input" class="form-label">Ciudad:</label>
            <input type="text" class="form-control" id="ciudad" name="ciudad" v-model="capturardato.ciudad"
              placeholder="Ingrese informacion" required>
          </div>

          <div class="mb-3">
            <label for="input" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" name="email" v-model="capturardato.email"
              placeholder="Ingrese informacion" required>
          </div>

          <div class="mb-3">
            <label for="input" class="form-label">Dirección:</label >
            <input type="text" class="form-control" id="direccion" name="direccion" v-model="capturardato.direccion"
              placeholder="Ingrese informacion" required>
          </div>

          <div class="mb-3">
            <label for="input" class="form-label">Teléfono:</label>
            <input type="number" class="form-control" id="telefono" name="telefono" v-model="capturardato.telefono"
              placeholder="Ingrese informacion" required>
          </div>

          <div class="mb-3">
            <label for="input" class="form-label">Fecha Nacimiento:</label>
            <input type="date" class="form-control" id="fecha_nacimiento" name="fecha_nacimiento"
              v-model="capturardato.fecha_nacimiento" placeholder="Ingrese informacion" required>
          </div>


          <div class="mb-3">
            <label for="input" class="form-label">Dependencia:</label>
            <input type="text" class="form-control" id="depedencia" name="depedencia" v-model="capturardato.depedencia"
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
  name: "ClientesEditar",
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
      fetch($urlcliente+'?consultar=' + this.$route.params.id) // capturamos la ID que mandamos por parametro de la listar
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
        cedula: this.capturardato.cedula,
        nombre: this.capturardato.nombre,
        apellido: this.capturardato.apellido,
        ciudad: this.capturardato.ciudad,
        email: this.capturardato.email,
        direccion: this.capturardato.direccion,
        telefono: this.capturardato.telefono,
        fecha_nacimiento: this.capturardato.fecha_nacimiento,
        depedencia: this.capturardato.depedencia
      }
      fetch($urlcliente+'?actualizar=' +  this.$route.params.id, {
        method: "POST", // estamos mandado los datos por el metodo POST
        body: JSON.stringify(datosEnviar) // datos lo estamos enviado a travez de sentecnia JSON
      })
        .then(respuesta => respuesta.json())
        .then((datosRespuesta => {
          console.log(datosRespuesta);
          window.location.href = '/clientes/'+this.$route.params.idu// manda a listar
          //window.location.href = '../istar' // direccinar a listar

        }))
    }
  }
}
</script>