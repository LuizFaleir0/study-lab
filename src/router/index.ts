import OrdersPage from '@/pages/OrdersPage.vue'
import ProductsPage from '@/pages/ProductsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Orders', component: OrdersPage },
  { path: '/products', name: 'Products', component: ProductsPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
