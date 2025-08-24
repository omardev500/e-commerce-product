import { defineStore } from "pinia"

export const useSideNavStore = defineStore('sidenav', {
  state: () => ({ opened: false }),
  
  actions: {
    open() {
      this.opened = true
    },
    close() {
      this.opened = false
    }
  }
})
