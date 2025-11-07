import AppRoot from '@/components/root/AppRoot.vue'
import type { App } from 'vue'

/**
 * Componentes globais da aplicação
 */
const globalComponents = {
  AppRoot: AppRoot,
}

export type GlobalComponentsRoot = typeof globalComponents

/**
 * Registra os componentes globais na aplicação Vue
 */
export default (app: App) => {
  Object.entries(globalComponents).forEach(([name, component]) => {
    app.component(name, component)
  })
}
