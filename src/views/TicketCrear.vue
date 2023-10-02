<template>
    <Menu />

  <div class="container">
    <div class="card ">
      <div class="card-header bg-success text-white">
        Registrar Nuevo Ticket
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="GuardarDato">
       
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
        codigo: this.capturardato.codigo,
        descripcion: this.capturardato.descripcion,
        id_tecnico: this.capturardato.id_tecnico,
        id_cliente: this.capturardato.id_cliente
      } // almacenados los datos capturados por el forumulario en una variable
      fetch($urlticket+'?insertar=1', {
        method: "POST", // estamos mandado los datos por el metodo POST
        body: JSON.stringify(datosEnviar) // datos lo estamos enviado a travez de sentecnia JSON
      })
        .then(respuesta => respuesta.json())
        .then((datosRespuesta => {
          console.log(datosRespuesta.success);
          if(datosRespuesta.success==1){
            setTimeout(function () { swal("Información!", "Cliente NO Registrado","warning");}, 1000);
          }else if(datosRespuesta.success==2){
            setTimeout(function () { swal("Información!", "Tecnico NO registrado","warning");}, 1000);

          }else{
            window.location.href = '/tickets/'+this.$route.params.idu// manda a listar

          }
        }))
    }
  }
}
</script>