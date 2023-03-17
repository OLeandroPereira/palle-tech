import Vue from 'vue';
import VueRouter from 'vue-router';
import EmpresaView from '../views/EmpresaView.vue';
import FormularioView from '../views/FormularioView.vue';
import CadastroView from '../views/CadastroView.vue';
import SobreView from '../views/SobreView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'empresa',
    component: EmpresaView,
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: FormularioView,
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: CadastroView,
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: SobreView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
