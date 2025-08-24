<script setup>
  import { useSideNavStore } from "./../stores/sidenav";
  const sideNavStore = useSideNavStore()
  
  const props = defineProps({
    isMobile: Boolean
  })
</script>
<template>
  <header :class="!isMobile ? 'p-2' : ''">
   <nav class="flex justify-between bg-white items-center z-40 h-16" :class="isMobile ? 'shadow-sm p-2 fixed top-0 left-0 w-screen' : 'w-[90%] max-w-260 mx-auto border-b-2 border-gray-100'" > 
     <ul class="flex gap-3 items-center" v-if="isMobile"> 
       <li><button @click="sideNavStore.open()"><i class="fa-solid fa-bars text-2xl"></i></button></li> 
       <li><h1 class="font-[Expletus_Sans] text-2xl font-bold">sneakers</h1></li> 
      </ul> 
      <div v-if="!isMobile" class="flex gap-5"> 
        <h1 class="font-[Expletus_Sans] text-2xl font-bold">sneakers</h1> 
        <ul class="flex gap-4 items-end"> 
          <li><a href="#" class="text-gray-500 text-sm hover:text-gray-400 active:text-gray-300 transition transition-2s ease-out">Collections</a></li>
          <li><a href="#" class="text-gray-500 text-sm hover:text-gray-400 active:text-gray-300 transition transition-2s ease-out">Men</a></li> 
          <li><a href="#" class="text-gray-500 text-sm hover:text-gray-400 active:text-gray-300 transition transition-2s ease-out">Women</a></li>
          <li><a href="#" class="text-gray-500 text-sm hover:text-gray-400 active:text-gray-300 transition transition-2s ease-out">About</a></li> 
          <li><a href="#" class="text-gray-500 text-sm hover:text-gray-400 active:text-gray-300 transition transition-2s ease-out">Contact</a></li> 
        </ul> 
      </div> 
      <ul class="flex gap-3 items-center"> 
        <li><button><i class="fa-solid fa-cart-shopping"></i></button></li>
        <li><button><img class="w-8 rounded-full" src="https://this-person-does-not-exist.com/img/avatar-gen288ad2ba78bde8e5458d73a49edbe8fe.jpg" alt="Profile picture" /></button></li> 
      </ul> 
    </nav> 
  </header>
</template>
