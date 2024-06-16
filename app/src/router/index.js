import Vue from 'vue'
import VueRouter from 'vue-router'
import MyResume from '../components/MyResume.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MyResume',
    component: MyResume
  }
]

const router = new VueRouter({
  routes
})

export default router
