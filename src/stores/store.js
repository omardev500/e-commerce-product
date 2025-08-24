import { defineStore } from "pinia"

export const useAppStore = defineStore('storage', {
  state: () => ({ 
    setSmallHeader: false,
    productImages: []
  }),
})
