import Vue from 'vue'
import Router from 'vue-router'
import CityList from '@/components/CityList'
import Info from '@/components/Info'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/cities',
      name: 'CityList',
      component: CityList
    },
    {
      path: '/info/:city',
      name: 'Info',
      component: Info
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'Signp',
      component: SignUp
    }
  ]
})

export default router