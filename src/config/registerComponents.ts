import AppRoot from '@/components/root/AppRoot.vue'
import type { App } from 'vue'

/**
 * Componentes globais
 */
const globalComponents = {
  AppRoot,
}

/** Tipagem de componentes globais */
export type GlobalComponentsRegisters = typeof globalComponents

/**
 * Registrar componentes globais
 */
export default (app: App) => {
  // forçar tipagem para preservar Component no iteration
  Object.entries(globalComponents).forEach(([name, component]) => {
    app.component(name, component)
  })
}
