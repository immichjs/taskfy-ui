<template>
  <nav class="w-[64rem] md:w-64 h-screen bg-white py-8 md:border-r shadow-lg">
    <div class="px-4">
      <button class="bg-violet-800 text-white rounded-lg py-3 w-full text-sm">Criar nova tarefa</button>
    </div>

    <div class="flex flex-col text-gray-400 text-sm mt-8">
      <router-link
        class="py-3 px-4 border-r-4 border-transparent hover:text-gray-700 duration-100"
        :to="item.route"
        :active-class="'bg-gray-100 border-r-violet-700 text-gray-700'"
        v-for="item in listNavItems" :key="item">{{ item.label }}</router-link>
    </div>

    <div class="px-2.5 mt-2">
      <div class="text-gray-400 flex gap-1 items-center text-sm hover:text-gray-700 duration-100 cursor-pointer select-none"
      :class="{ 'text-gray-700': isActiveDirectories }" @click="toggleDirectory()">
        <i class='bx bx-chevron-right text-xl duration-100' :class="{ 'rotate-90': isActiveDirectories }"></i>
        <span>Diretórios</span>
      </div>

      <ul class="flex flex-col gap-1 items-start text-gray-400 px-6 text-xs" v-if="isActiveDirectories">
        <li class="py-2 hover:text-white duration-100">Main</li>
        <li class="py-1.5 px-4 border-2 border-dashed border-gray-300 rounded-lg md:hover:text-white md:hover:border-white duration-100 cursor-pointer">+ Novo</li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const listNavItems = ref([
  { label: 'Tarefas de hoje', route: '/today' },
  { label: 'Todas as tarefas', route: '/' },
  { label: 'Tarefas importantes', route: '/important' },
  { label: 'Tarefas completas', route: '/completed' },
  { label: 'Tarefas incompletas', route: '/uncompleted' },
])
let isActiveDirectories = ref(false)

function toggleDirectory() {
  isActiveDirectories.value = !isActiveDirectories.value
}
</script>