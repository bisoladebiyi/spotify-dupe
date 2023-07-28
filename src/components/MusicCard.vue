<template>
  <div class='p-4 pb-8 relative bg-card-bg'>
        <figure :class="music.isArtist ? 'rounded-full shadow-imgShadow' : 'rounded-md'" class="rounded-2xl overflow-hidden">
            <img :src="music.imgSrc" alt="" />
        </figure>
        <p class='text-[1rem] font-normal mt-1 pb-1'>{{ music.isArtist ? music.artist : music.name }}</p>
        <p class='text-faint text-[0.875rem]'>{{ music.isArtist ? 'Artist' : music.artist }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IMusicCard } from "../utils/types/MusicType";

export default defineComponent({
    props: {
        music: {
            required: true,
            type: Object as PropType<IMusicCard>
        }
    }
})
</script>

<style>

</style>