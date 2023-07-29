<template>
  <div
    class="w-full fixed bottom-0 left-0 h-[100px] bg-card-bg border-b-[10px] border-green-600 flex items-center justify-between px-5"
  >
    <!-- music info  -->
    <div class="flex items-center text-white space-x-4 w-[300px]">
      <img
        src="https://i1.sndcdn.com/artworks-qnghb0gRKB0ykU3T-ojW07g-t500x500.jpg"
        alt=""
        class="w-10"
      />
      <p class="text-sm">
        Dreaming On<br />
        <span class="text-faint">NEFFEX</span>
      </p>
      <v-icon name="fa-heart" class="text-green-600" />
    </div>

    <!-- audio controls  -->
    <div class="flex flex-col items-center">
      <div class="text-white flex space-x-2 items-center">
        <button>
          <v-icon name="md-skipprevious-round" scale="2" />
        </button>
        <button>
          <v-icon name="bi-play-circle-fill" scale="2.5" />
        </button>
        <button>
          <v-icon name="md-skipnext-round" scale="2" />
        </button>
      </div>
      <div class="flex items-center text-xs text-faint space-x-2">
        <p>0:00</p>
        <div class="w-[500px] h-1 rounded-sm bg-white"><span></span></div>
        <p>5:00</p>
      </div>
    </div>
    <div class="w-[300px]"></div>
  </div>
</template>

<script lang="ts">
import { OhVueIcon } from "oh-vue-icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AudioControl",
  components: {
    "v-icon": OhVueIcon,
  },
});
</script>

<style></style>
