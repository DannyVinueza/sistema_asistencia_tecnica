<template>
            <nav class="navbar navbar-expand-lg navbar-dark bg-success ">
  <div class="container-fluid">
    <router-link to="/clientes" class="navbar-brand" >Sistema de Gestión Tecnica</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :to="{ name: 'usuarios', params: {idu: this.$route.params.idu} }" class="nav-link active"  >Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'clientes', params: {idu: this.$route.params.idu} }"  class="nav-link"  >Clientes</router-link>
        </li>
         <li class="nav-item">
          <router-link :to="{ name: 'usuarios', params: {idu: this.$route.params.idu} }"  class="nav-link"  >Usuarios</router-link>
        </li>
        <li class="nav-item">
          <router-link  :to="{ name: 'tecnicos', params: {idu: this.$route.params.idu} }"  class="nav-link"  >Técnicos</router-link>
        </li>
       
         <li class="nav-item">
          <router-link to="/" class="nav-link"  >Salir</router-link>
        </li>               
      </ul>
    </div>
  </div>
</nav>
 <br>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
