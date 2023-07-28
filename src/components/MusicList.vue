<template>
  <div class="space-y-[30px] text-white">
    <div>
      <div class="flex justify-between items-center">
        <h2 class="font-bold text-[24px] leading-9 mb-4 capitalize">
          {{ $route.name }}
        </h2>
        <div class="border border-primary flex text-xs text-faint">
          <button
            class="border-r border-primary px-2 py-1"
            :class="viewType === 'grid' && 'text-primary'"
            @click="$emit('changeView', 'grid')"
          >
            GRID
          </button>
          <button
            class="px-2 py-1"
            :class="viewType === 'list' && 'text-primary'"
            @click="$emit('changeView', 'list')"
          >
            LIST
          </button>
        </div>
      </div>
      <div v-if="viewType === 'grid'" class="grid grid-cols-5 gap-6">
        <div v-for="(music, i) in musicList" :key="i">
          <MusicCard :music="music" />
        </div>
      </div>
      <div v-else class="mt-10">
        <div class="grid grid-cols-3 uppercase text-faint text-xs px-6">
          <p>song</p>
          <p class="text-center">artist</p>
          <span class="justify-end flex"><v-icon name="md-accesstime" /></span>
        </div>
        <div>
          <div v-for="(music, i) in musicList" :key="i">
            <MusicListItem :music="music" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MusicCard from "@/components/MusicCard.vue";
import MusicListItem from "@/components/MusicListItem.vue";
import { IMusicCard } from "@/utils/types/MusicType";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "MusicList",
  components: {
    MusicCard,
    MusicListItem,
  },
  props: {
    viewType: String,
    musicList: Array as PropType<IMusicCard[]>,
  },
});
</script>

<style></style>
