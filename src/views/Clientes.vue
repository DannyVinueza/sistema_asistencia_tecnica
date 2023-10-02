<template>
    <Menu />
    <div class="container">
        <div class="card">

            <div class="card-header bg-success text-white">
                <strong>Clientes</strong> &nbsp; &nbsp; <router-link
                    :to="{ name: 'clientecrear', params: { idu: this.$route.params.idu } }"
                    class="btn btn-warning btn-sm">Nuevo&nbsp; &nbsp; <i class="fa-solid fa-plus"></i></router-link>
            </div>
            <div class="card-body">
                <div class="table-responsive">

                    <table class="display table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Cedula</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Ciudad</th>
                                <th>Email</th>
                                <th>Dirección</th>
                                <th>Teléfono</th>
                                <th>Fecha Nacimiento</th>
                                <th>Depedencia</th>
                                <th>Actualizar</th>
                                <th>Eliminar</th>

                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="dato in mostrardatos" :key="dato.id">
                                <td>{{ dato.id }}</td>
                                <td>{{ dato.cedula }}</td>
                                <td>{{ dato.nombre }}</td>
                                <td>{{ dato.apellido }}</td>
                                <td>{{ dato.ciudad }}</td>
                                <td>{{ dato.email }}</td>
                                <td>{{ dato.direccion }}</td>
                                <td>{{ dato.telefono }}</td>
                                <td>{{ dato.fecha_nacimiento }}</td>
                                <td>{{ dato.depedencia }}</td>
                                <td>
                                    <center><router-link
                                            :to="{ name: 'clienteeditar', params: { id: dato.id, idu: this.$route.params.idu } }"
                                            class="btn btn-success btn-sm"><i class="fa-solid fa-pencil"></i></router-link>
                                    </center>
                                </td>
                                <td>
                                    <center><button type="button" v-on:click="borrarDato(dato.id)"
                                            class="btn btn-danger btn-sm"><i class="fa-solid fa-trash-can"></i></button>
                                    </center>
                                </td>



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
    name: "Clientes",
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
            fetch($urlcliente)
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
            fetch($urlcliente + '?borrar=' + id)
                .then(respuesta => respuesta.json()) // espuesta la voy a mandar en tipo JSON
                .then((datosrespuesta) => {
                    console.log(datosrespuesta)
                    window.location.href = '/clientes/' + this.$route.params.idu// manda a listar
                })
                .catch(console.log)
        }
    }
}
</script>
