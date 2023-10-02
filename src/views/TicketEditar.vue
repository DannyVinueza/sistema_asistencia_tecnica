<template>
  <Menu />

<div class="container">
  <div class="card ">
    <div class="card-header bg-success text-white">
      Actualizar Ticket
    </div>
    <div class="card-body">
      <form v-on:submit.prevent="ActualizarDato">
     
        <div class="mb-3">
          <label for="input" class="form-label">Codigo:</label>
          <input type="text" class="form-control" id="codigo" name="codigo" v-model="capturardato.codigo"
            placeholder="Ingrese informacion" required>
        </div>

        <div class="mb-3">
          <label for="input" class="form-label">Descripción:</label>
          <input type="text" class="form-control" id="descripcion" name="descripcion" v-model="capturardato.descripcion"
            placeholder="Ingrese informacion" required>
        </div>
        <div class="mb-3">
          <label for="input" class="form-label">Código del Técnico:</label>
          <input type="number" class="form-control" id="id_tecnico" name="id_tecnico" v-model="capturardato.id_tecnico"
            placeholder="Ingrese informacion" required>
        </div>

        <div class="mb-3">
          <label for="input" class="form-label">Código del Cliente:</label>
          <input type="number" class="form-control" id="id_cliente" name="id_cliente" v-model="capturardato.id_cliente"
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
      fetch($urlticket+'?consultar=' + this.$route.params.id) // capturamos la ID que mandamos por parametro de la listar
        .then(respuesta => respuesta.json()) // espuesta la voy a mandar en tipo JSON
        .then((datosrespuesta) => {
          console.log(datosrespuesta)
          this.capturardato = datosrespuesta[0]; // solo capturamos un solo dato 
        })
        .catch(console.log)
    },
    ActualizarDato() { // metodo para actualizar informacion

      var datosEnviar = {
        codigo: this.capturardato.codigo,
        descripcion: this.capturardato.descripcion,
        id_tecnico: this.capturardato.id_tecnico,
        id_cliente: this.capturardato.id_cliente
      }
      fetch($urlticket+'?actualizar=' +  this.$route.params.id, {
        method: "POST", // estamos mandado los datos por el metodo POST
        body: JSON.stringify(datosEnviar) // datos lo estamos enviado a travez de sentecnia JSON
      })
        .then(respuesta => respuesta.json())
        .then((datosRespuesta => {
          if(datosRespuesta.success==1){
            setTimeout(function () { swal("Información!", "Cliente NO Registrado","warning");}, 1000);
          }else if(datosRespuesta.success==2){
            setTimeout(function () { swal("Información!", "Tecnico NO registrado","warning");}, 1000);
          }else{
            window.location.href = '/tickets/'+this.$route.params.idu// manda a listar

          }
        }))
      // console.log(this.capturarempleado);
    }
  }
}
</script>