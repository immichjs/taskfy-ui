<template>
  <div class="min-h-screen h-screen">
    <the-nav></the-nav>
    <main class="bg-red-400 h-full">
      <header class="flex">
        <button @click="toggleNavBar(true)" class="menu">Menu</button>
      </header>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { useNavStore } from '@/stores/nav.store'

import TheNav from '@/components/TheNav.vue'

const navBarStore = useNavStore()
const { toggleNavBar } = navBarStore
</script>