import type { GlobalComponentsRoot } from '@/config/registerComponents'
/* eslint-disable */
declare module 'vue' {
  export interface GlobalComponents extends GlobalComponentsRoot {}
}

export {}
