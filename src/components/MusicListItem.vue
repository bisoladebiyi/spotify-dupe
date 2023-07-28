<template>
  <div
    class="p-4 relative grid grid-cols-3 border-b-[.5px] border-gray-500 border-opacity-20 text-gray-200 text-[14px] cursor-pointer"
  >
    <div class="flex items-center space-x-2">
      <v-icon name="co-heart" class="mr-4" />
      <figure class="w-8">
        <img :src="music.imgSrc" alt="" />
      </figure>
      <p class="font-normal mt-1 pb-1">
        {{ music.name }}
      </p>
    </div>

    <p class="text-center">
      {{ music.isArtist ? "Artist" : music.artist }}
    </p>
    <p class="text-faint text-right">
      {{ music.duration }}
    </p>
  </div>
</template>

<script lang="ts">
import { OhVueIcon } from "oh-vue-icons";
import { defineComponent, PropType } from "vue";
import { IMusicCard } from "../utils/types/MusicType";

export default defineComponent({
  name: "MusicListItem",
  components: {
    "v-icon": OhVueIcon,
  },
  props: {
    music: {
      required: true,
      type: Object as PropType<IMusicCard>,
    },
  },
});
</script>

<style></style>
