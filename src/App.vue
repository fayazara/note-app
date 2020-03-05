<template>
  <div id="app" class="font-g">
    <Navbar class="fixed w-full" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  components: {
    Navbar
  }
};
</script>
