import { defineStore } from 'pinia'

export const useNavStore = defineStore('navbar', {
  state: () => ({
    isActiveNavBar: false,
    isActiveNavBarProfile: false,
  }),
  actions: {
    toggleNavBar(payload) {
      this.isActiveNavBar = payload
    },
    toggleNavBarProfile(payload) {
      this.isActiveNavBarProfile = payload

      console.log(this.isActiveNavBarProfile)
    }
  }
})