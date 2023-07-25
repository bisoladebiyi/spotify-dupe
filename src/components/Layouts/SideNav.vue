<template>
  <div class="w-[15%] h-full bg-black p-7">
    <img src="@/assets/spotify_logo.png" className="w-32 h-9 mx-4" />
    <div>
      <ul class="space-y-4 text-white font-normal text-base text-left mt-6 border-b-[.5px] border-[#b3b3b3] py-4 cursor-pointer">
        <li v-for="(item, i) in navItems" :key="i" class="flex items-start space-x-3 px-4 py-2" :class="item.name.toLowerCase() == currentPage && 'bg-white bg-opacity-10 rounded'">
            <span v-if="item.name.toLowerCase() == currentPage" v-html="item.icon"></span>
            <span v-else v-html="item.inactive_icon"></span>
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { INav } from "../../utils/types/NavTypes";
import { NavItems } from "../../utils/constants";

export default defineComponent({
  setup() {
    const navItems = ref<INav[]>(NavItems);
    const currentPage = ref<string>("home")

    return { navItems, currentPage };
  },
});
</script>

<style></style>
