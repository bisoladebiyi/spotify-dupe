import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoHeart, FaHeart, MdAccesstime, MdSkippreviousRound, MdSkipnextRound, BiPlayCircleFill } from "oh-vue-icons/icons";
import './index.css'


addIcons(CoHeart, FaHeart, MdAccesstime, MdSkippreviousRound, MdSkipnextRound, BiPlayCircleFill);

createApp(App).use(router).component("v-icon", OhVueIcon).mount('#app')
