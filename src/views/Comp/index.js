
import Vue from "vue"
import NewMusic from "./NewMisic/NewMusic";
const SongList = () => import("../Comp/SongList/SongList")
// const rank = () => import("../Comp/Rank/rank_comp")
import rank_comp from "./Rank/rank_comp";

Vue.component('wyy-new-music',NewMusic)
Vue.component('wyy-song-list',SongList)
Vue.component('wyy-rank-list',rank_comp)
