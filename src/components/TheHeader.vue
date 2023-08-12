<template>
  <header>
    <div class="flex justify-between items-center">
      <div class="cursor-pointer block md:hidden">
        <v-icon name="hi-menu-alt-4" scale="1.25" fill="#374151" @click="toggleNavBar(true)"></v-icon>
      </div>

      <div class="relative w-96 bg-slate-200 rounded-xl mt-6 hidden md:block">
        <input type="text" placeholder="Buscar tarefas..." class="p-4 pr-12 bg-transparent w-full outline-none border-2 border-transparent focus:border-violet-800 rounded-xl text-slate-700 text-xs tracking-wide">
        <v-icon name="bi-search" fill="#9ca3af" class="absolute top-4 right-4"></v-icon>
      </div>

      <div class="text-center leading-5">
        <h1 class="text-slate-700 text-sm font-semibold tracking-wide font-montserrat">Taskfy</h1>
        <span class="text-xs text-slate-400">{{ currentDate }}</span>
      </div>

      <div class="gap-4 items-center hidden md:flex">
        <button>
          <v-icon name="io-notifications" scale="1.25" fill="rgb(91 33 182)"></v-icon>
        </button>
        <button class="bg-violet-800 text-white rounded-lg py-3.5 px-6 text-sm cursor-pointer">Criar nova tarefa</button>
      </div>

      <div class="md:hidden" @click="toggleNavBarProfile(true)">
        <img src="https://picsum.photos/256/256" class="w-10 rounded-full">
      </div>
    </div>

    <div class="relative w-full bg-slate-200 rounded-xl mt-6 md:hidden">
      <input type="text" placeholder="Buscar tarefas..." class="p-4 pr-12 bg-transparent w-full outline-none border-2 border-transparent focus:border-violet-800 rounded-xl text-slate-700 text-xs tracking-wide">
      <v-icon name="bi-search" fill="#9ca3af" class="absolute top-4 right-4"></v-icon>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import moment from 'moment';
import { useNavStore } from '@/stores/nav.store';

const navBarStore = useNavStore()
const { toggleNavBar } = navBarStore
const { toggleNavBarProfile } = navBarStore

const currentDate = ref(moment().format('YYYY, MMM D'))
</script>