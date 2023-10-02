<template>
    <Menu />

    <div class="container">
        <div class="card">
            
            <div class="card-header bg-success text-white">
                <strong>Usuarios</strong> &nbsp; &nbsp; <router-link :to="{ name: 'ticketcrear', params: {idu: this.$route.params.idu} }" class="btn btn-warning btn-sm">Nuevo&nbsp; &nbsp; <i class="fa-solid fa-plus"></i></router-link>
            </div>
            <div class="card-body">
                <div class="table-responsive">

                    <table class="display table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Descripción</th>
                                <th>Técnico</th>
                                <th>Cliente</th>
                                <th>Actualizar</th>
                                <th>Eliminar</th>

                            </tr>
                        </thead>
                        
                        <tbody >
                            <tr v-for="dato in mostrardatos" :key="dato.id">
                                <td>{{ dato.codigo }}</td>
                                <td>{{ dato.descripcion }}</td>
                                <td>{{ dato.nombretecnico }} {{ dato.tecnicoapellido }}</td>
                                 <td>{{ dato.nombrecliente }} {{ dato.clienteapellido }}</td>
                                <td> <center><router-link :to="{ name: 'ticketeditar', params: { id: dato.id, idu: this.$route.params.idu} }"
                                            class="btn btn-success btn-sm"><i class="fa-solid fa-pencil"></i></router-link></center></td>
                                <td><center><button type="button" v-on:click="borrarDato(dato.id)"
                                  class="btn btn-danger btn-sm"><i class="fa-solid fa-trash-can"></i></button></center></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
import Menu from './Menu.vue';

export default {
    name: "Tickets",
    components: {
        Menu
    },
    data() { // data palabra reservada
        return {
            mostrardatos: [] // arreglo para contener los empleados
        }
    },
    created: function () { // llaamos los metodos para mostrarla en la plantilla

        this.consultarInformacion();
    },
    methods: { // metodos para interactuar con el consumo de la API
        consultarInformacion() {
            fetch($urlticket)
                .then(respuesta => respuesta.json()) // espuesta la voy a mandar en tipo JSON
                .then((datosrespuesta) => {
                    console.log(datosrespuesta)
                    this.mostrardatos = []
                    if (typeof datosrespuesta[0].success === 'undefined') { // validamos que realmente exitan datos para que lo almacene en eel array
                        this.mostrardatos = datosrespuesta;
                    }
                })
                .catch(console.log)
        },
        borrarDato(id) {
            fetch($urlticket+'?borrar=' + id)
                .then(respuesta => respuesta.json()) // espuesta la voy a mandar en tipo JSON
                .then((datosrespuesta) => {
                    console.log(datosrespuesta)
                    window.location.href = '/tickets/'+this.$route.params.idu// manda a listar
                })
                .catch(console.log)
        }
    }
}
</script>
