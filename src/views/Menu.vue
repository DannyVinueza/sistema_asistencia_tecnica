<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success ">
    <div class="container-fluid">
      <router-link to="/clientes" class="navbar-brand">Sistema de Gestión Tecnica</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'usuarios', params: { idu: this.$route.params.idu } }"
              class="nav-link active">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'clientes', params: { idu: this.$route.params.idu } }"
              class="nav-link">Clientes</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'usuarios', params: { idu: this.$route.params.idu } }"
              class="nav-link">Usuarios</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'tecnicos', params: { idu: this.$route.params.idu } }"
              class="nav-link">Técnicos</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'tickets', params: { idu: this.$route.params.idu } }"
              class="nav-link">Tickets</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Salir</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <header v-for="perfil in mostrarperfil" :key="perfil.id" class="bg-dark text-white">
    <center><h6>Bienvenido(A): {{ perfil.nombre }} {{ perfil.apellido }}</h6></center>
  </header>
  <br>
</template>
<script>
export default {
  name: 'menu',

  data() { // data palabra reservada  
    return {
      mostrarperfil: [] // arreglo para contener los empleados
    }
  },
  created: function () { // llaamos los metodos para mostrarla en la plantilla
    this.consultarPerfil();
  },
  methods: { // metodos para interactuar con el consumo de la API
    consultarPerfil() {
      fetch($urlusuario + '?consultar=' + this.$route.params.idu)
        .then(respuesta => respuesta.json()) // espuesta la voy a mandar en tipo JSON
        .then((datosrespuesta) => {
          console.log(datosrespuesta)
          this.mostrarperfil = []
          if (typeof datosrespuesta[0].success === 'undefined') { // validamos que realmente exitan datos para que lo almacene en eel array
            this.mostrarperfil = datosrespuesta;
          }
        })
        .catch(console.log)
    }
  }
}
</script>

