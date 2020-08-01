import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../components/Home/home";

const Home = () => import('../components/Home/home')
const FindMusic = () => import('../components/FindMusic/FindMusic')
const MyStyle = () => import('../components/FindMusic/FindChildren/style')
const Song = () => import('../components/FindMusic/SongList/Song')
// const Rank = () => import('../components/FindMusic/RankList/Rank')
import Rank from "../components/FindMusic/RankList/Rank";
const singer = () => import('../components/FindMusic/Singer/Singer')
<<<<<<< HEAD
const station = () => import('../components/FindMusic/DJstation/Station')
const newMusic = () => import('../components/FindMusic/NewMusic/newmusic')
const search = () => import('../components/Search/search')
=======


>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
Vue.use(VueRouter)

  const routes = [
    { path:'/', name:'Home', component: Home ,
    children:[
      {path:'/',name:'FindMusic',component:FindMusic, redirect:'/style',
        children:[
<<<<<<< HEAD
          { path:'/style',component:MyStyle },
          {path:'/SongList',component:Song},
          {path:'/Rank',name:'rank',component:Rank},
          {path:'/singer',name:'singer',component:singer},
          {path:'/station',name:'singer',component:station},
          {path:'/newMusic',name:'newMusic',component:newMusic}
        ]},
      {path: 'search',name: 'search',component:search}
=======
          {path:'/style',component:MyStyle},
          {path:'/SongList',component:Song},
          {path:'/Rank',name:'rank',component:Rank},
          {path:'/singer',name:'singer',component:singer}
        ]},
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa

    ]},

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  mode:'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
