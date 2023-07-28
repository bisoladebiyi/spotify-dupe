<template>
  <LayoutUI>
    <MusicList
      :viewType="viewType"
      @changeView="changeView"
      :musicList="dummyM"
    />
  </LayoutUI>
</template>

<script lang="ts">
import LayoutUI from "@/components/Layouts/LayoutUI.vue";
import MusicList from "@/components/MusicList.vue";
import { dummyMusic } from "@/utils/constants";
import { IMusicCard } from "@/utils/types/MusicType";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LibraryPage",
  components: {
    LayoutUI,
    MusicList,
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
