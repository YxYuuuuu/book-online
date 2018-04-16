import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/page/home-page/HomePage'
import Classification from '@/components/page/classification/Classification'
import ShoppingCart from '@/components/page/shopping-cart/ShoppingCart'
import Personal from '@/components/page/personal/Personal'


Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Classification',
      name: 'Classification',
      component: Classification
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    }
  ]
})
