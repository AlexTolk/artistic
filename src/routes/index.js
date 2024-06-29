import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Prices from '../views/Prices.vue'
import Calculator from '../views/Calculator.vue'
import Portfolio from '../views/Portfolio.vue'
import Testimonies from '../views/Testimonies.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/prices', name: 'Prices',  component: Prices },
  { path: '/calculator', name: 'Calculator',  component: Calculator },
  { path: '/portfolio', name: 'Portfolio',  component: Portfolio },
  { path: '/testimonies', name: 'Testimonies',  component: Testimonies },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})


export default router;
