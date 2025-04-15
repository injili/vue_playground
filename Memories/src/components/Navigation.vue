<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>
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

<template>
  <div class="flex justify-center items-center pt-8 pb-4">
    <nav
      class="container mx-auto flex justify-between items-center w-full px-12 py-4 w-full h-full rounded-lg bg-white/30 backdrop-blur-md shadow-lg"
    >
      <h2
        v-if="route.name === 'Home'"
        class="font-semibold text-lg text-blue-950"
      >
        Welcome username
      </h2>
      <h2
        v-else-if="route.name === 'Family'"
        class="font-semibold text-lg text-blue-950"
      >
        <button @click="() => $router.push('/familyprofile')">
          Family Name
        </button>
      </h2>
      <h2
        v-else-if="route.name === 'FamilyProfile'"
        class="font-semibold text-lg text-blue-950"
      >
        Family Profile
      </h2>
      <h2
        v-else-if="route.name === 'Profile'"
        class="font-semibold text-lg text-blue-950"
      >
        User Profile
      </h2>
      <h2
        v-else-if="route.name === 'Login'"
        class="font-semibold text-lg text-blue-950"
      >
        LogIn Page
      </h2>
      <h2
        v-else-if="route.name === 'Signup'"
        class="font-semibold text-lg text-blue-950"
      >
        SignUp Page
      </h2>
      <div v-if="route.name === 'Family'" class="flex items-center">
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
      <div v-else-if="route.name === 'Home'">
        <button @click="() => $router.push('/profile')">
          <img
            :src="persons.pers5"
            alt=""
            class="hover:scale-120 transition-transform duration-500 z-0 w-12 h-12 rounded-full"
          />
        </button>
      </div>
    </nav>
  </div>
</template>
