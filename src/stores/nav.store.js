import { defineStore } from 'pinia'

export const useNavStore = defineStore('navbar', {
  state: () => ({
    isActive: false
  }),
  actions: {
    toggleNavBar(payload) {
      this.isActive = payload
    }
  }
})