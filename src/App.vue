<script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import Header from "./components/Header.vue";
  import SideNav from "./components/SideNav.vue";
  import { useAppStore } from "./stores/store.js";
  const appStorage = useAppStore()
  
  const screenWidth = ref(window.innerWidth)
  
  function updateDesign() {
    if (screenWidth.value <= 580) {
      appStorage.setSmallHeader = true
    } else {
      appStorage.setSmallHeader = false
    }
  }
  
  onMounted(() => {
    window.addEventListener("resize", () => { 
      screenWidth.value = window.innerWidth
      updateDesign();
    })
  })
  
  onUnmounted(() => {
    window.removeEventListener("resize", () => screenWidth.value = window.innerWidth)
  })
  
  const productImages = ref([]);
</script>

<template>
  <Header />
  <SideNav />
  <main class="pt-16">
    <section class="relative h-70">
      <button class="absolute z-2 left-2 top-1/2 -translate-y-1/2 text-black active:bg-orange-100 bg-white rounded-full p-3"><i class="fa-solid fa-angle-left"></i></button>
      <img src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NTU5MzI3OTJ8&ixlib=rb-4.1.0&q=85" alt="Sneaker's image" class="object-cover object-center hover:opacity-75 active:opacity-60 transition transition-1s cursor-pointer ease-out h-full w-screen" />
      <button class="absolute z-2 right-2 top-1/2 -translate-y-1/2 text-black bg-white rounded-full p-3 active:bg-orange-100"><i class="fa-solid fa-angle-right"></i></button> 
    </section> 
      
    <!-- CARD DETAILS -->
    <section class="p-4 flex flex-col gap-2"> 
      <h2 class="text-gray-300 font-bold text-sm">SNEAKER COMPANY</h2> 
      <h3 class="text-2xl text-slate-800 font-bold">Fall Limited Edition Sneakers</h3> 
      <p class="text-sm text-gray-500 py-1">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p> 
      <div class="flex justify-between items-center px-[2px] mt-2"> 
      <div> 
        <span class="text-black font-bold text-2xl mr-2">$125.00</span> 
        <span class="text-white text-sm font-bold bg-black p-1 rounded-md">50%</span> 
        </div> 
        <div> 
          <span class="text-gray-500"><del>$250.00</del></span> 
        </div> 
      </div> 
      <div class="flex justify-between bg-slate-100 my-3 rounded-md"> 
        <button class="p-3 text-md text-orange-500"><i class="fa-solid fa-minus"></i></button> 
        <span class="font-bold self-center">0</span> 
        <button class="p-3 text-md text-orange-500"><i class="fa-solid fa-plus"></i></button> 
      </div>
      
      <!-- ADD TO CART -->
      <button class="font-bold shadow-lg p-3 text-white bg-orange-600 shadow-orange-600/50 rounded-lg text-lg hover:opacity-75 active:opacity-55 transition transition-2s ease-in-out"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button> 
    </section> 
  </main>
</template>

<style scoped>

</style>
