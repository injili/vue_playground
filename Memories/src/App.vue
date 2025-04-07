<script setup>
import Nav from "./components/Navigation.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div
    class="cursor-pointer min-h-screen flex flex-col bg-[radial-gradient(circle_at_top_left,_#FFFFFF,_#D7D5FF,_#E1D5FF,_#EEF8FF)]"
  >
    <header>
      <Nav />
    </header>
    <main class="flex-grow flex flex-col justify-center">
      <Content />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
