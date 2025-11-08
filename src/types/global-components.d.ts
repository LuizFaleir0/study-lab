import type { GlobalComponentsRegisters } from '@/config/registerComponents'
/* eslint-disable */
declare module 'vue' {
  export interface GlobalComponents extends GlobalComponentsRegisters {}
}

export {}
