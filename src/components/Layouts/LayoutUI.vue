<template>
  <div class="w-full h-full flex overflow-hidden">
    <SideNav />
    <main class="px-10 w-full overflow-auto">
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
