import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HelloWorld.vue'
import Clientes from '../views/Clientes.vue'
import ClienteCrear from '../views/ClienteCrear.vue'
import ClienteEditar from '../views/ClienteEditar.vue'

import Index from '../views/Index.vue'

import Usuarios from '../views/Usuarios.vue'
import UsuarioCrear from '../views/UsuarioCrear.vue'
import UsuarioEditar from '../views/UsuarioEditar.vue'

import Tecnicos from '../views/Tecnicos.vue'
import TecnicoCrear from '../views/TecnicoCrear.vue'
import TecnicoEditar from '../views/TecnicoEditar.vue'

import Tickets from '../views/Tickets.vue'
import TicketCrear from '../views/TicketCrear.vue'
import TicketEditar from '../views/TicketEditar.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/clientes/:idu',
    name: 'clientes',
    component: Clientes
  },
  {
    path: '/clientecrear/:idu',
    name: 'clientecrear',
    component: ClienteCrear
  },
  {
    path: '/clienteeditar/:id/:idu',
    name: 'clienteeditar',
    component: ClienteEditar
  },
  {
    path: '/usuarios/:idu',
    name: 'usuarios',
    component: Usuarios
  },
  {
    path: '/usuariocrear/:idu',
    name: 'usuariocrear',
    component: UsuarioCrear
  },
  {
    path: '/usuarioeditar/:id/:idu',
    name: 'usuarioeditar',
    component: UsuarioEditar
  },
  {
    path: '/tecnicos/:idu',
    name: 'tecnicos',
    component: Tecnicos
  },
  {
    path: '/tecnicocrear/:idu',
    name: 'tecnicocrear',
    component: TecnicoCrear
  },
  {
    path: '/tecnicoeditar/:id/:idu',
    name: 'tecnicoeditar',
    component: TecnicoEditar
  }
  ,
  {
    path: '/tickets/:idu',
    name: 'tickets',
    component: Tickets
  },
  {
    path: '/ticketcrear/:idu',
    name: 'ticketcrear',
    component: TicketCrear
  },
  {
    path: '/ticketeditar/:id/:idu',
    name: 'ticketeditar',
    component: TicketEditar
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
