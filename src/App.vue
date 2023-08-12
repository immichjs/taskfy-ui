<template>
  <div class="md:flex min-h-screen h-screen">
    <div class="fixed z-10 md:z-0 w-full md:w-auto h-screen flex" :class="{ 'hidden md:inline-block': !navBarStore.isActiveNavBar, 'block': navBarStore.isActiveNavBar }">
      <the-nav></the-nav>
      <div class="w-full bg-gray-900 bg-opacity-70 md:hidden" @click="toggleNavBar(false)"></div>
    </div>

    <section class="m-0 md:mx-64 bg-slate-50 w-full h-full md:px-8 px-6 py-5">
      <the-header></the-header>
      <router-view></router-view>
    </section>

    <div class="fixed top-0 right-0 z-10 md:z-0 w-full md:w-auto h-screen flex" :class="{ 'hidden md:inline-block': !navBarStore.isActiveNavBarProfile, 'block': navBarStore.isActiveNavBarProfile }">
      <div class="w-full bg-gray-900 bg-opacity-70 md:hidden" @click="toggleNavBarProfile(false)"></div>
      <the-nav-profile></the-nav-profile>
    </div>
  </div>
</template>

<script setup>
import { useNavStore } from '@/stores/nav.store'
import TheNav from '@/components/TheNav.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheNavProfile from '@/components/TheNavProfile.vue'

const navBarStore = useNavStore()
const { toggleNavBar, toggleNavBarProfile } = navBarStore
</script>