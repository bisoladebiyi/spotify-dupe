<template>
    <LayoutUI>
      <div class="space-y-[30px] text-white">
        <!-- popular artists -->
        <div>
          <div class="flex justify-between items-center">
            <h2 class="font-bold text-[24px] leading-9 mb-4">Popular artists</h2>
            <p
              class="font-semibold text-sm hover:underline text-faint uppercase cursor-pointer"
            >
              Show all
            </p>
          </div>
          <div class="grid grid-cols-5 gap-6">
            <div v-for="(music, i) in dummyM" :key="i">
              <MusicCard :music="music" />
            </div>
          </div>
        </div>
  
        <!-- music recommendations -->
        <div>
          <div class="flex justify-between items-center">
            <h2 class="font-bold text-[24px] leading-9 mb-4">
              Songs you might like
            </h2>
            <p
              class="font-semibold text-sm hover:underline text-faint uppercase cursor-pointer"
            >
              Show all
            </p>
          </div>
          <div class="grid grid-cols-5 gap-6">
            <div v-for="(music, i) in dummyM" :key="i">
              <MusicCard :music="music" />
            </div>
          </div>
        </div>
      </div>
    </LayoutUI>
  </template>
  
  <script lang="ts">
  import LayoutUI from "@/components/Layouts/LayoutUI.vue";
  import MusicCard from "@/components/MusicCard.vue";
  import { dummyMusic } from "@/utils/constants";
  import { IMusicCard } from "@/utils/types/MusicType";
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "LibraryPage",
    components: {
      LayoutUI,
      MusicCard,
    },
    setup() {
      const dummyM = ref<IMusicCard[]>(dummyMusic);
      return { dummyM };
    },
  });
  </script>
  
  <style></style>