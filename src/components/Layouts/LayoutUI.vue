<template>
  <div class="w-full h-full flex overflow-hidden">
    <SideNav />
    <main class="px-10 w-full overflow-auto pb-40">
      <TopNav />
      <slot />
    </main>
    <AudioControl />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AudioControl from "../AudioControl.vue";
import SideNav from "./SideNav.vue";
import TopNav from "./TopNav.vue";

export default defineComponent({
  name: " LayoutUI",
  components: {
    SideNav,
    TopNav,
    AudioControl,
  },
});
</script>

<style></style>
