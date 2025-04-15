<template>
  <div
    class="container mx-auto w-full h-full rounded-lg bg-white/30 backdrop-blur-md shadow-lg"
  >
    <div class="relative wrap overflow-hidden p-8 h-full">
      <div
        class="border absolute border-opacity-20 border-gray-700 mb-10 h-full border"
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
          <button
            class="relative w-full h-full"
            @click="
              {
                openModal();
                currentImage(0);
              }
            "
          >
            <img
              :src="images.img1"
              alt="the arusha trip"
              class="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
            />
            <img
              :src="persons.pers1"
              alt="the arusha trip"
              class="absolute bottom-4 right-4 w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
            />
            <img
              :src="persons.pers2"
              alt="the arusha trip"
              class="absolute bottom-4 right-8 w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
            />
            <img
              :src="persons.pers3"
              alt="the arusha trip"
              class="absolute bottom-4 right-12 w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
            />
          </button>
        </div>
      </div>

      <!-- left timeline -->
      <div
        class="-mt-12 flex justify-between flex-row-reverse items-center w-full"
      >
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
          <button
            class="relative w-full h-full"
            @click="
              {
                openModal();
                currentImage(1);
              }
            "
          >
            <img
              :src="images.img2"
              alt="this image"
              class="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
            />
            <img
              :src="persons.pers2"
              alt="the arusha trip"
              class="absolute bottom-4 right-4 w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
            />
            <img
              :src="persons.pers3"
              alt="the arusha trip"
              class="absolute bottom-4 right-8 w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
            />
          </button>
        </div>
      </div>

      <!-- right timeline -->
      <div class="-mt-12 flex justify-between items-center w-full">
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
          <button
            @click="
              {
                openModal();
                currentImage(2);
              }
            "
            class="relative w-full h-full"
          >
            <img
              :src="images.img3"
              alt="this image"
              class="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
            />
            <img
              :src="persons.pers5"
              alt="the arusha trip"
              class="absolute bottom-4 right-4 w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
            />
            <img
              :src="persons.pers2"
              alt="the arusha trip"
              class="absolute bottom-4 right-8 w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
            />
            <img
              :src="persons.pers3"
              alt="the arusha trip"
              class="absolute bottom-4 right-12 w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
            />
            <img
              :src="persons.pers4"
              alt="the arusha trip"
              class="absolute bottom-4 right-16 w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
            />
          </button>
        </div>
      </div>

      <!-- left timeline -->
      <div
        class="-mt-12 flex justify-between flex-row-reverse items-center w-full"
      >
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
          <button
            class="relative w-full h-full"
            @click="
              {
                openModal();
                currentImage(3);
              }
            "
          >
            <img
              :src="images.img4"
              alt="this image"
              class="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
            />
            <img
              :src="persons.pers1"
              alt="the arusha trip"
              class="absolute bottom-4 right-4 w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
            />
            <img
              :src="persons.pers4"
              alt="the arusha trip"
              class="absolute bottom-4 right-8 w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
            />
            <img
              :src="persons.pers3"
              alt="the arusha trip"
              class="absolute bottom-4 right-12 w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
            />
            <img
              :src="persons.pers5"
              alt="the arusha trip"
              class="absolute bottom-4 right-16 w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
            />
          </button>
        </div>
      </div>
      <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-violet-950/25" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center">
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="flex text-blue-950 w-full max-w-4xl transform overflow-hidden rounded-sm bg-white text-left align-middle shadow-xl transition-all"
                  ><div class="relative">
                    <div class="absolute top-4 left-4 flex gap-4 items-center">
                      <img
                        :src="persons.pers3"
                        alt="the arusha trip"
                        class="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-500"
                      />
                      <p
                        class="font-semibold text-white hover:scale-110 transition-transform duration-500"
                      >
                        Person's Name
                      </p>
                    </div>
                    <img :src="theImg" class="w-full" />
                  </div>

                  <div>
                    <div class="p-4 flex justify-between items-center">
                      <p class="font-semibold">01.04.2024</p>

                      <div class="flex">
                        <img
                          :src="persons.pers1"
                          alt="the arusha trip"
                          class="z-10 -mr-4 w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
                        />
                        <img
                          :src="persons.pers2"
                          alt="the arusha trip"
                          class="w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div class="pt-1 p-4">
                      <h3 class="text-lg font-semibold pb-4">Comments</h3>
                      <div class="flex gap-2 pb-2">
                        <img
                          :src="persons.pers4"
                          alt="the arusha trip"
                          class="w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
                        />
                        <div class="flex flex-col">
                          <p class="text-sm text-black">
                            Lorem ipsum dolor sit amet, consectetur aSuspendisse
                            rhoncus metus et ante dictum tempus. Nulla pulvinar
                            libero ut iaculis interdum.
                          </p>
                          <p class="opacity-50 text-sm">02.04.2024</p>
                        </div>
                      </div>
                      <div class="flex gap-2 pb-2">
                        <img
                          :src="persons.pers2"
                          alt="the arusha trip"
                          class="w-8 h-8 rounded-full hover:scale-150 transition-transform duration-500"
                        />
                        <div class="flex flex-col">
                          <p class="text-sm text-black">
                            Vestibulum nec condimentum nisi. Mauris id sapien
                            dui. Morbi nisi ant.
                          </p>
                          <p class="opacity-50 text-sm">12.04.2024</p>
                        </div>
                      </div>
                    </div>
                    <form action="" class="flex flex-col gap-2 px-4 w-full">
                      <p class="text-sm text-black">
                        Write your comment here...
                      </p>
                      <textarea
                        rows="3"
                        class="border-1 rounded-lg w-full"
                      /><button
                        type="button"
                        class="max-w-36 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        @click="closeModal"
                      >
                        Post
                      </button>
                    </form>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

import pers1 from "../assets/images/im1.jpeg";
import pers2 from "../assets/images/im2.jpeg";
import pers3 from "../assets/images/im3.jpeg";
import pers4 from "../assets/images/im4.jpeg";
import pers5 from "../assets/images/im5.jpeg";

const images = { img1, img2, img3, img4 };
const persons = { pers1, pers2, pers3, pers4, pers5 };
const isOpen = ref(false);
const theImg = ref(null);

function openModal() {
  isOpen.value = true;
}

function closeModal() {
  isOpen.value = false;
}

function currentImage(i) {
  switch (i) {
    case 0:
      theImg.value = images.img1;
      break;
    case 1:
      theImg.value = images.img2;
      break;
    case 2:
      theImg.value = images.img3;
      break;
    case 3:
      theImg.value = images.img4;
      break;
    default:
      theImg.value = null;
  }
}
</script>
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
