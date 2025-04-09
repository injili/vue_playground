<template>
  <div class="flex justify-center items-center pt-8 pb-4">
    <nav
      class="container mx-auto flex justify-between items-center w-full px-8 py-4 w-full h-full rounded-lg bg-white/30 backdrop-blur-md shadow-lg"
    >
      <h2 class="font-semibold">Family Name</h2>
      <div class="flex items-center">
        <img
          :src="persons.pers1"
          alt=""
          class="hover:scale-120 transition-transform duration-500 z-40 w-12 h-12 rounded-full"
        />
        <img
          :src="persons.pers2"
          alt=""
          class="hover:scale-120 transition-transform duration-500 z-30 w-12 h-12 rounded-full -ml-4"
        />
        <img
          :src="persons.pers3"
          alt=""
          class="hover:scale-120 transition-transform duration-500 z-20 w-12 h-12 rounded-full -ml-4"
        />
        <img
          :src="persons.pers4"
          alt=""
          class="hover:scale-120 transition-transform duration-500 z-10 w-12 h-12 rounded-full -ml-4"
        />
        <img
          :src="persons.pers5"
          alt=""
          class="hover:scale-120 transition-transform duration-500 z-0 w-12 h-12 rounded-full -ml-4"
        />
      </div>
    </nav>
  </div>
</template>

<script>
import pers1 from "../assets/images/im1.jpeg";
import pers2 from "../assets/images/im2.jpeg";
import pers3 from "../assets/images/im3.jpeg";
import pers4 from "../assets/images/im4.jpeg";
import pers5 from "../assets/images/im5.jpeg";

export default {
  data() {
    return {
      persons: {
        pers1,
        pers2,
        pers3,
        pers4,
        pers5,
      },
    };
  },
};
</script>
