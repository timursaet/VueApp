import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: function (resolve) {
        require(['@/components/home.vue'], resolve)
      }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: function (resolve) {
        require(['@/components/Contacts.vue'], resolve)
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: function (resolve) {
        require(['@/components/Projects.vue'], resolve)
      }
    }
  ]
})

export default router
