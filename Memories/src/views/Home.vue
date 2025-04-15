<template>
  <div
    class="container mx-auto flex flex-col justify-center items-start w-full px-12 py-8 w-full h-full rounded-lg bg-white/30 backdrop-blur-md shadow-lg"
  >
    <h2 class="font-semibold text-xl text-blue-950">Memories!</h2>
    <p class="text-xs text-blue-950">
      Lorem ipsum dolor sit amet, consectetur aSuspendisse rhoncus metus et ante
      dictum tempus. Nulla pulvinar libero ut iaculis interdum
    </p>
    <div class="flex gap-4 my-4">
      <button
        class="bg-indigo-300 py-2 px-8 rounded-md text-blue-950 font-semibold hover:bg-indigo-400 transition duration-300 ease-in-out"
      >
        Create Family
      </button>
      <button
        class="bg-violet-300 py-2 px-8 rounded-md text-blue-950 font-semibold hover:bg-violet-400 transition duration-300 ease-in-out"
      >
        Join Family
      </button>
    </div>
    <h3 class="text-lg font-semibold text-blue-950 pb-2">My Families</h3>
    <div class="flex gap-4">
      <button
        @click="() => $router.push('/family')"
        class="p-2 bg-white flex-col justify-center gap-2"
      >
        <div class="h-42 w-42 aspect-square overflow-hdden">
          <img
            :src="images.img1"
            class="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
            alt=""
          />
        </div>
        <h4 class="py-2 font-semibold text-blue-950">Nyarekis</h4>
      </button>
      <div class="p-2 bg-white flex-col justify-center gap-2">
        <div class="h-42 w-42 aspect-square overflow-hdden">
          <img
            :src="images.img2"
            class="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
            alt=""
          />
        </div>
        <h4 class="py-2 font-semibold text-blue-950">Mbadis</h4>
      </div>
      <div class="p-2 bg-white flex-col justify-center gap-2">
        <div class="h-42 w-42 aspect-square overflow-hdden">
          <img
            :src="images.img3"
            class="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
            alt=""
          />
        </div>
        <h4 class="py-2 font-semibold text-blue-950">Nzokas</h4>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

export default {
  data() {
    return {
      images: { img1, img2, img3, img4 },
    };
  },
};
</script>
