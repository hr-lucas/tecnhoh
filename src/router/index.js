import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContatoView from "../views/ContatoView.vue";
import CursosView from "../views/CursosView.vue";
import CursoView from "../views/CursoView.vue";
import AulaView from "../views/AulasView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contato",
    name: "contato",
    component: ContatoView,
  },
  {
    path: "/cursos",
    name: "cursos",
    component: CursosView,
  },
  {
    path: "/cursos/:curso",
    name: "curso",
    component: CursoView,
    props: true,
    children: [
      {
        path: ":aula",
        name: "aula",
        component: AulaView,
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
