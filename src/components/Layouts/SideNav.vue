<template>
  <div class="w-[20%] h-full bg-black p-7">
    <img src="@/assets/spotify_logo.png" className="w-32 h-9 mx-4" />
    <div>
      <ul
        class="text-white font-normal text-base text-left mt-6 border-b-[.5px] border-[#b3b3b3] py-4 cursor-pointer"
      >
        <router-link v-for="(item, i) in navItems" :key="i" :to="item.link">
          <li
            class="flex items-start space-x-3 px-4 py-2 mb-3.5"
            :class="
              item.route_name == $route.name &&
              'bg-white bg-opacity-10 rounded'
            "
          >
            <span
              v-if="item.route_name == $route.name"
              v-html="item.icon"
            ></span>
            <span v-else v-html="item.inactive_icon"></span>
            <p>{{ item.name }}</p>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { INav } from "../../utils/types/NavTypes";
import { NavItems } from "../../utils/constants";

export default defineComponent({
  name: "SideNav",
  setup() {
    const navItems = ref<INav[]>(NavItems);

    return { navItems };
  },
});
</script>

<style></style>
