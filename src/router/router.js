import Vue from 'vue'
import Router from 'vue-router'
import ProductIndex from '@/components/ProductIndex'
import Regions from '@/components/Regions'
import Region from '@/components/Region'
import Authorization from '@/components/Authorization'
import { defaultLocale } from '../config/i18n'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: Authorization
    },
    {
      path: '/',
      redirect: `/${defaultLocale}`
    },
    {
      path: '/:locale',
      component: {
        template: '<router-view />'
      },
      children: [
        {
          path: '',
          component: {
            template: '<div>Home</div>'
          }
        },
        {
          path: 'products/:id',
          component: {
            template: '<div>ProductShow</div>'
          }
        },
        {
          path: 'products',
          component: ProductIndex
        },
        {
          path: 'regions/:id',
          component: Region,
          name: Region
        },
        {
          path: 'regions',
          component: Regions
        },
        {
          path: 'about',
          component: {
            template: '<div>About</div>'
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('token')
  if (authRequired && !loggedIn) {
    return next('/login')
  }
  next()
})
