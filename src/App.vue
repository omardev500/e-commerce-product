<script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import Header from "./components/Header.vue";
  import SideNav from "./components/SideNav.vue";
  import ProductDetails from "./components/ProductDetails.vue";
  import { useAppStore } from "./stores/store.js";
  import Image1 from "./assets/images/image-product-1.jpg";
  import Image2 from "./assets/images/image-product-2.jpg";
  import Image3 from "./assets/images/image-product-3.jpg";
  import Image4 from "./assets/images/image-product-4.jpg";
  
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
  <main class="sm:pt-4 sm:p-4 xl:p-22 xl:pt-16" :class="!appStorage.setSmallHeader ? 'flex justify-between gap-16 h-160 w-[90%] max-w-290 mx-auto' : ''">
    <section class="relative h-92 xl:h-120" :class="appStorage.setSmallHeader ? 'h-70' : 'max-w-[55%]'">
      <button class="absolute z-2 left-2 top-1/2 -translate-y-1/2 text-black active:bg-orange-100 bg-white rounded-full p-3" v-if="appStorage.setSmallHeader"><i class="fa-solid fa-angle-left"></i></button>
      <img :src="Image1" alt="Sneaker's image" class="object-cover object-center hover:opacity-75 active:opacity-60 transition transition-1s cursor-pointer ease-out w-screen" :class="!appStorage.setSmallHeader ? 'rounded-lg h-[80%]' : 'h-full'" />
      <button class="absolute z-2 right-2 top-1/2 -translate-y-1/2 text-black bg-white rounded-full p-3 active:bg-orange-100"  v-if="appStorage.setSmallHeader"><i class="fa-solid fa-angle-right"></i></button> 
      <!-- Rest of images (not for Mobile!) -->
      <div v-if="!appStorage.setSmallHeader" class="h-[20%] grid grid-cols-4 gap-4 py-5">
        <img :src="Image1" class="object-center object-cover rounded-md" />
        <img :src="Image2" class="object-center object-cover rounded-md" />
        <img :src="Image3" class="object-center object-cover rounded-md" />
        <img :src="Image4" class="object-center object-cover rounded-md" />
      </div>
    </section> 
    <!-- CARD DETAILS -->
    <section :class="appStorage.setSmallHeader ? 'flex p-4 flex-col gap-2' : 'grid grid-rows-[auto_1fr]'">
      <div>
        <h2 class="text-gray-300 font-bold text-sm xl:text-lg">SNEAKER COMPANY</h2> 
        <h3 class="text-slate-800 font-bold text-3xl xl:text-4xl/12 xl:py-4" :class="!appStorage.setSmallHeader ? 'py-4' : 'text-2xl py-2'">Fall Limited Edition Sneakers</h3> 
        <p class="text-gray-500 py-1 xl:text-lg xl:text-slate-400" :class="!appStorage.setSmallHeader ? 'text-md' : 'text-sm'">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p> 
      </div>
      <div class="flex flex-col justify-center xl:justify-end gap-3 pt-5">
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
      </div> 
    </section>
     
  </main>
</template>

<style scoped>

</style>
