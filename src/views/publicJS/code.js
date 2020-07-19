import '../../Element/ElementUi'
// import Vue from 'vue'
// import 'element-ui/lib/theme-chalk/index.css'
// import { Message } from "element-ui";

// Vue.prototype.$message = Message

function code(code) {
    if (code === 200){
        return false
        // return this.$message.error("获取信息失败！")
    }
}


export default {
    code,
}

