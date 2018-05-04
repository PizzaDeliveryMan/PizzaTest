import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

import HomeRoutes from './home'
import MijnBedrijf from './mijnbedrijf'
import AdminRoutes from './admin'
import DetailsRoutes from './details'
import CartRoutes from './cart'

Vue.use(Router)

export default new Router(
    {
        /*
         * NOTE: VueRouter "history" mode DOESN'T works for Cordova builds,
         * it is only to be used only for websites.
         *
         * If you decide to go with "history" mode, please also open /config/index.js
         * and set "build.publicPath" to something other than an empty string.
         * Example: '/' instead of current ''
         *
         * If switching back to default "hash" mode, don't forget to set the
         * build publicPath back to '' so Cordova builds work again.
         */
        mode: '',
  routes: [
    HomeRoutes,
    MijnBedrijf,
    AdminRoutes,
    DetailsRoutes,
    CartRoutes
  ]
})
