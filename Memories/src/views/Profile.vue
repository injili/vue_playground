<script>
import pers5 from "../assets/images/im5.jpeg";

export default {
  data() {
    return {
      persons: {
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
        :src="persons.pers5"
        alt=""
        class="hover:scale-103 transition-transform duration-500 z-0 w-32 h-32 rounded-full"
      />
      <div class="flex gap-2 flex-col">
        <h2 class="font-semibold text-xl text-blue-950">Username</h2>
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
          <h4 class="font-semibold text-lg text-blue-950">Change Password</h4>
          <p class="text-sm text-blue-950">Current Password</p>
          <form action="" class="" w-full>
            <input
              type="password"
              class="w-full border-none py-2 px-4 bg-indigo-200 rounded-sm text-sm"
              placeholder="*********"
            />
          </form>
          <div class="flex justify-end w-full">
            <button
              class="bg-indigo-300 py-2 px-8 rounded-md text-blue-950 font-semibold hover:bg-indigo-400 transition duration-300 ease-in-out min-w-42"
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
