<script>
import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import pers1 from "../assets/images/im1.jpeg";
import pers2 from "../assets/images/im2.jpeg";
import pers3 from "../assets/images/im3.jpeg";
import pers4 from "../assets/images/im4.jpeg";
import pers5 from "../assets/images/im5.jpeg";

export default {
  data() {
    return {
      images: { img1, img2, img3, img4 },
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
  <div
    class="container mx-auto flex flex-col justify-center items-start w-full px-12 py-8 w-full h-full rounded-lg bg-white/30 backdrop-blur-md shadow-lg"
  >
    <div class="flex gap-8">
      <img
        :src="images.img4"
        alt=""
        class="hover:scale-103 transition-transform duration-500 z-0 w-32 h-32 rounded-full"
      />
      <div class="flex gap-2 flex-col">
        <h2 class="font-semibold text-xl text-blue-950">Family Name</h2>
        <p class="text-xs text-blue-950">
          Lorem ipsum dolor sit amet, consectetur aSuspendisse rhoncus metus et
          ante dictum tempus. Nulla pulvinar libero ut iaculis interdum
        </p>
        <div class="flex justify-end w-full">
          <button
            class="bg-indigo-300 py-2 px-8 rounded-md text-blue-950 font-semibold hover:bg-indigo-400 transition duration-300 ease-in-out min-w-42"
          >
            Edit Profile
          </button>
        </div>
        <div class="flex gap-2 flex-col pt-8 w-full">
          <h4 class="font-semibold text-lg text-blue-950">Members</h4>
          <div class="flex flex-wrap gap-2 items-center">
            <img
              :src="persons.pers1"
              alt=""
              class="hover:scale-103 transition-transform duration-500 z-40 w-24 h-24 rounded-full"
            />
            <img
              :src="persons.pers2"
              alt=""
              class="hover:scale-103 transition-transform duration-500 z-30 w-24 h-24 rounded-full"
            />
            <img
              :src="persons.pers3"
              alt=""
              class="hover:scale-103 transition-transform duration-500 z-20 w-24 h-24 rounded-full"
            />
            <img
              :src="persons.pers4"
              alt=""
              class="hover:scale-103 transition-transform duration-500 z-10 w-24 h-24 rounded-full"
            />
            <img
              :src="persons.pers5"
              alt=""
              class="hover:scale-103 transition-transform duration-500 z-0 w-24 h-24 rounded-full"
            />
          </div>
          <div class="flex justify-end w-full">
            <button
              class="bg-indigo-300 py-2 px-8 rounded-md text-blue-950 font-semibold hover:bg-indigo-400 transition duration-300 ease-in-out min-w-42"
            >
              Add Member
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
