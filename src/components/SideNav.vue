<script setup>
  import { useSideNavStore } from "./../stores/sidenav";
  const store = useSideNavStore()

  //import { useTemplateRef } from 'vue'
  //import { onClickOutside } from '@vueuse/core'
  
  //const aside = useTemplateRef<HTMLElement>('aside');
  
  //onClickOutside(aside, () => isOpen.value = false)

</script>

<template>
  <div v-if="store.opened" class="absolute top-0 left-0 bg-black/75 w-screen h-screen z-995">
    <aside class="absolute animate-[SideNavAnime_0.25s_ease-out] z-996 left-0 top-0 h-screen shadow-2xl bg-gray-100 w-[72vw] overflow-hidden">
      <button @click="store.close()" class="text-md active:text-red-600 absolute top-5 right-5"><i class="fa-solid fa-x"></i></button>
      <div class="pt-10 flex flex-col">
        <a href="#" class="py-3 px-3 font-bold active:text-gray-600 transition transition-2s ease-out">Collections</a>
        <a href="#" class="py-3 px-3 font-bold active:text-gray-600 transition transition-2s ease-out">Men</a>
        <a href="#" class="py-3 px-3 font-bold active:text-gray-600 transition transition-2s ease-out">Women</a>
        <a href="#" class="py-3 px-3 font-bold active:text-gray-600 transition transition-2s ease-out">About</a>
        <a href="#" class="py-3 px-3 font-bold active:text-gray-600 transition transition-2s ease-out">Contact</a>
      </div>
    </aside>
  </div>
</template>
