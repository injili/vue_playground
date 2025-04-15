<template>
  <div
    class="container mx-auto flex flex-col justify-center items-start w-full px-12 py-8 w-full h-full rounded-lg bg-white/30 backdrop-blur-md shadow-lg"
  >
    <div class="flex gap-2 flex-col py-2 w-full">
      <p class="text-sm text-blue-950">
        Welcome to Memories. Log into your account here.
      </p>
      <form action="" class="flex flex-col gap-2 w-full">
        <div class="flex gap-4 w-full">
          <div class="w-full">
            <label for="" class="text-sm w-full text-blue-950 pt-4"
              >First Name</label
            >
            <input
              type="text"
              class="w-full border-none py-2 px-4 bg-indigo-200 rounded-sm text-sm"
              placeholder=""
            />
          </div>
          <div class="w-full">
            <label for="" class="text-sm w-full text-blue-950 pt-4"
              >Last Name</label
            >
            <input
              type="text"
              class="w-full border-none py-2 px-4 bg-indigo-200 rounded-sm text-sm"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <label for="" class="text-sm text-blue-950">Email</label>
          <input
            type="email"
            class="w-full border-none py-2 px-4 bg-indigo-200 rounded-sm text-sm"
            placeholder=""
          />
        </div>
        <div class="flex gap-4 w-full">
          <div class="w-full">
            <label for="" class="text-sm w-full text-blue-950 pt-4"
              >Password</label
            >
            <input
              type="text"
              class="w-full border-none py-2 px-4 bg-indigo-200 rounded-sm text-sm"
              placeholder=""
            />
          </div>
          <div class="w-full">
            <label for="" class="text-sm w-full text-blue-950 pt-4"
              >Confirm Password</label
            >
            <input
              type="text"
              class="w-full border-none py-2 px-4 bg-indigo-200 rounded-sm text-sm"
              placeholder=""
            />
          </div>
        </div>
        <div class="flex items-center gap-4 pt-2 w-full">
          <button
            class="bg-indigo-300 w-full py-2 px-8 rounded-md text-blue-950 text-sm font-semibold hover:bg-indigo-400 transition duration-300 ease-in-out"
          >
            Log In
          </button>
          <p class="text-sm text-blue-950">or</p>
          <button
            class="bg-violet-300 w-full py-2 px-8 rounded-md text-blue-950 text-sm font-semibold hover:bg-violet-400 transition duration-300 ease-in-out"
          >
            Log In with Google
          </button>
        </div>

        <p class="text-sm text-blue-950 pt-2">
          Have an account?
          <button @click="() => $router.push('/login')" class="underline">
            Log In
          </button>
        </p>
      </form>
    </div>
  </div>
</template>
