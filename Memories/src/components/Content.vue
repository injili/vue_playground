<template>
  <div class="container bg-white mx-auto w-full h-full rounded-lg">
    <div class="relative wrap overflow-hidden p-10 h-full">
      <div
        class="border absolute border-opacity-20 border-gray-700 h-full border"
        style="left: 50%"
      ></div>
      <!-- right timeline -->
      <div class="flex justify-between items-center w-full">
        <div class="order-1 w-6/12"></div>
        <div
          class="z-20 flex items-center justify-center order-1 text-black mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-5"
        >
          <h1
            class="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >
            01.04.24
          </h1>
        </div>
        <div
          class="order-1 bg-gray-400 rounded-lg shadow-xl w-4/12 overflow-hidden aspect-square"
        >
          <img
            :src="images.img1"
            alt="this image"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <!-- left timeline -->
      <div class="flex justify-between flex-row-reverse items-center w-full">
        <div class="order-1 w-6/12"></div>
        <div
          class="z-20 flex items-center order-1 text-black mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-5"
        >
          <h1
            class="mx-auto font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >
            11.06.24
          </h1>
        </div>
        <div
          class="order-1 bg-gray-400 rounded-lg shadow-xl w-4/12 overflow-hidden aspect-square"
        >
          <img
            :src="images.img2"
            alt="this image"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <!-- right timeline -->
      <div class="flex justify-between items-center w-full">
        <div class="order-1 w-6/12"></div>
        <div
          class="z-20 flex items-center justify-center order-1 text-black mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-5"
        >
          <h1
            class="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >
            30.07.24
          </h1>
        </div>
        <div
          class="order-1 bg-gray-400 rounded-lg shadow-xl w-4/12 overflow-hidden aspect-square"
        >
          <img
            :src="images.img3"
            alt="this image"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <!-- left timeline -->
      <div class="flex justify-between flex-row-reverse items-center w-full">
        <div class="order-1 w-6/12"></div>
        <div
          class="z-20 flex items-center order-1 text-black mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-5"
        >
          <h1
            class="mx-auto font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >
            13.08.24
          </h1>
        </div>
        <div
          class="order-1 bg-gray-400 rounded-lg shadow-xl w-4/12 overflow-hidden aspect-square"
        >
          <img
            :src="images.img4"
            alt="this image"
            class="w-full h-full object-cover object-center"
          />
        </div>
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
