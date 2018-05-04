import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home'
import MijnBedrijf from '../pages/MijnBedrijf'
import MijnGegevens from '../pages/MijnGegevens'
import MijnProfiel from '../pages/MijnProfiel'
import Personaliseren from '../pages/Personaliseren'
import MijnStraten from '../pages/MijnStraten'
import StraatBekijken from '../pages/StraatBekijken'
import KlantBekijken from '../pages/KlantBekijken'
import MijnRoute from '../pages/MijnRoute'
import HelpPagina from '../pages/HelpPagina'
import FaqAntwoord from '../pages/FaqAntwoord'
import MijnGrafieken from '../pages/MijnGrafieken'
import MijnCijfers from '../pages/MijnCijfers'
import Webshop from '../pages/Webshop'
import WebshopItem from '../pages/WebshopItem'

Vue.use(Router)

export default new Router(
{
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/mijnbedrijf', name: 'Mijn Bedrijf', component: MijnBedrijf },
    { path: '/mijngegevens', name: 'Mijn Gegevens', component: MijnGegevens },
    { path: '/mijnprofiel', name: 'Mijn Profiel', component: MijnProfiel },
    { path: '/personaliseren', name: 'Personaliseren', component: Personaliseren },
    { path: '/mijnstraten', name: 'Mijn Straten', component: MijnStraten },
    { path: '/straatbekijken', name: 'Straat bekijken', component: StraatBekijken },
    { path: '/klantbekijken', name: 'Klant bekijken', component: KlantBekijken },
    { path: '/mijnroute', name: 'Mijn Route', component: MijnRoute },
    { path: '/helpfaq', name: 'Help Pagina', component: HelpPagina },
    { path: '/faqantwoord', name: 'Faq antwoord', component: FaqAntwoord },
    { path: '/mijngrafieken', name: 'Mijn Grafieken', component: MijnGrafieken },
    { path: '/mijncijfers', name: 'Mijn Cijfers', component: MijnCijfers },
    { path: '/webshop', name: 'Webshop', component: Webshop },
    { path: '/webshopitem', name: 'Webshop Item', component: WebshopItem }
  ]
})
