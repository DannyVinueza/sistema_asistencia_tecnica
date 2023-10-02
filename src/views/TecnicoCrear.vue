<template>
    <Menu />

  <div class="container">
    <div class="card ">
      <div class="card-header bg-success text-white">
        Registrar Nuevo Ténico
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
            <label for="input" class="form-label">Cedula:</label>
            <input type="number" class="form-control" id="cedula" name="cedula" v-model="capturardato.cedula"
              placeholder="Ingrese informacion" required>
          </div>
          <div class="mb-3">
            <label for="input" class="form-label">Fecha Nacimiento:</label>
            <input type="date" class="form-control" id="fecha_nacimiento" name="fecha_nacimiento"
              v-model="capturardato.fecha_nacimiento" placeholder="Ingrese informacion" required>
          </div>

          <div class="mb-3">
            <label for="input" class="form-label">Genero:</label>
            <input type="text" class="form-control" id="genero" name="genero" v-model="capturardato.genero"
              placeholder="Ingrese informacion" required>
          </div>

          <div class="mb-3">
            <label for="input" class="form-label">Ciudad:</label>
            <input type="text" class="form-control" id="ciudad" name="ciudad" v-model="capturardato.ciudad"
              placeholder="Ingrese informacion" required>
          </div>

          <div class="mb-3">
            <label for="input" class="form-label">Dirección:</label>
            <input type="text" class="form-control" id="direccion" name="direccion" v-model="capturardato.direccion"
              placeholder="Ingrese informacion" required>
          </div>

          <div class="mb-3">
            <label for="input" class="form-label">Teléfono:</label>
            <input type="number" class="form-control" id="telefono" name="telefono" v-model="capturardato.telefono"
              placeholder="Ingrese informacion" required>
          </div>

          <div class="mb-3">
            <label for="input" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" name="email" v-model="capturardato.email"
              placeholder="Ingrese informacion" required>
          </div>
          <center><button type="submit" class="btn btn-success">Guardar&nbsp; &nbsp; <i
                class="fa-solid fa-floppy-disk"></i></button></center>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import Menu from './Menu.vue';

export default {
    name: "TecnicoCrear",
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
        cedula: this.capturardato.cedula,
        nombre: this.capturardato.nombre,
        apellido: this.capturardato.apellido,
        ciudad: this.capturardato.ciudad,
        email: this.capturardato.email,
        direccion: this.capturardato.direccion,
        telefono: this.capturardato.telefono,
        fecha_nacimiento: this.capturardato.fecha_nacimiento,
        genero: this.capturardato.genero

      } // almacenados los datos capturados por el forumulario en una variable
    
      fetch($urltecnico + '?insertar=1', {
        method: "POST", // estamos mandado los datos por el metodo POST
        body: JSON.stringify(datosEnviar) // datos lo estamos enviado a travez de sentecnia JSON
      })
        .then(respuesta => respuesta.json())
        .then((datosRespuesta => {
          console.log(datosRespuesta);

          if(datosRespuesta.success == 0){
            setTimeout(function () { swal("Información!", "Todos los datos son requeridos","warning");}, 1000);

          }else{
            window.location.href = '/tecnicos/'+this.$route.params.idu// manda a listar
          }
         
        }))
      
    }
  }
}
</script>