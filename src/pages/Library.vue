<template>
  <LayoutUI>
    <div class="space-y-[30px] text-white">
      <div>
        <div class="flex justify-between items-center">
          <h2 class="font-bold text-[24px] leading-9 mb-4 capitalize">{{ $route.name }}</h2>
          <div class="border border-primary flex text-xs text-faint">
            <button
              class="border-r border-primary px-2 py-1"
              :class="viewType === 'grid' && 'text-primary'"
              @click="changeView('grid')"
            >
              GRID
            </button>
            <button
              class="px-2 py-1"
              :class="viewType === 'list' && 'text-primary'"
              @click="changeView('list')"
            >
              LIST
            </button>
          </div>
        </div>
        <div v-if="viewType === 'grid'" class="grid grid-cols-5 gap-6">
          <div v-for="(music, i) in dummyM" :key="i">
            <MusicCard :music="music" />
          </div>
        </div>
        <div v-else class="grid grid-cols-1 gap-">
          <div v-for="(music, i) in dummyM" :key="i">
            <MusicListItem :music="music" />
          </div>
        </div>
      </div>
    </div>
  </LayoutUI>
</template>

<script lang="ts">
import LayoutUI from "@/components/Layouts/LayoutUI.vue";
import MusicCard from "@/components/MusicCard.vue";
import MusicListItem from "@/components/MusicListItem.vue";
import { dummyMusic } from "@/utils/constants";
import { IMusicCard } from "@/utils/types/MusicType";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LibraryPage",
  components: {
    LayoutUI,
    MusicCard,
    MusicListItem,
  },
  setup() {
    const dummyM = ref<IMusicCard[]>(dummyMusic);
    const viewType = ref<"grid" | "list">("grid");

    const changeView = (view: "grid" | "list") => {
      viewType.value = view;
    };

    return { dummyM, viewType, changeView };
  },
});
</script>

<style></style>
