import Vue from 'vue'

import { Button,Aside,Container,Header,Main,Carousel,CarouselItem,Message,Loading,Image,
Dialog} from "element-ui";


Vue.use(Aside)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Loading)
Vue.use(Image)
Vue.use(Dialog)

Vue.prototype.$message = Message
