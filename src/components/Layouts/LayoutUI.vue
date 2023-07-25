<template>
  <div class="w-full h-full flex">
    <SideNav />
    <main class="px-10 w-full">
      <TopNav />
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideNav from "./SideNav.vue";
import TopNav from "./TopNav.vue";

export default defineComponent({
  name: " LayoutUI",
  components: {
    SideNav,
    TopNav,
  },
});
</script>

<style></style>
