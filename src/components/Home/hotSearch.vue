<template>
    <div class="search_box" v-clickoutside="handleClose">
         <div class="hotlist_title">热搜榜</div>
        <div>
            <div class="hot_box" v-for="(item, index) in HotSearch"  @click="inputSearch(item.searchWord)">
                <div class="hot_index" :class="index < 3 ? 'red' : ''">{{index + 1}}</div>
                <div class="hot_cont">
                    <div class="hot_song">{{item.searchWord}}<span>{{item.score}}</span><img v-if="item.iconUrl" :src="item.iconUrl" ></div>
                    <div class="hot_lj">{{item.content}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const clickoutside = {
        bind(el, binding, vnode){
            function documentHandler(e) {
                if (el.contains(e.target)){
                    return false
                }
                if (binding.expressions) {
                    binding.value(e)
                }
            }
            el.__vueClickOutside__ = documentHandler;
            document.addEventListener('click', documentHandler);
        },
        unbind(el, binding){
            document.removeEventListener('click', el.__vueClickOutside__);
            delete el.__vueClickOutside__;
        }
    }
    export default {
        name: "hotSearch",
        data(){
            return{
                HotSearch:[],
                show:true
            }
        },
        directives:{
            clickoutside
        },
        created() {
            this.GetHotList()
        },
        methods:{
            handleClose(e) {
                console.log(e)
                this.show = false;
            },
            GetHotList(){
                this.axios.get("/search/hot/detail").then( ({data}) => {
                    if (data.code !== 200) return this.$message.error("获取热搜失败！")
                    this.HotSearch = data.data
                })
            },

            inputSearch(name){
                this.$emit('searchName',name)
            },

        }
    }
</script>

<style lang="less" scoped>

    .red{
        color: #FB3939!important;
    }
.search_box{
    width: 425px;
    max-height: 500px;
    z-index: 999;
    background: #2D2F33;
    top: 38px;
    left: 0;
    padding: 10px 0;
    border: 1px solid #0A0B0D;
    overflow-y: scroll;
    /*box-sizing: border-box;*/

    &:before{
        content: '';
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-bottom-color: #2D2F33 ;
        position: absolute;
        top: -20px;
        left: 25px;
        z-index: 99;
    }

}

    .hotlist_title{
        width: 100%;
        height: 30px;
        color: #828385;
        font-size: 15px;
        font-weight: 300;
        padding-left: 10px;
        /*margin:0 0 5px 10px;*/


    }


.hot_box{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    &:hover{
        cursor: pointer;
        background: #2A2C30;
    }

    .hot_index{
        width: 55px;
    color: #4E4E52;
        font-weight: 600;
        text-align: center;
    }

    .hot_cont{

        .hot_song{
            font-size: 12px;
            color: #DCDDE4;
            font-weight: 600;

            span{
                color: #74747d;
                margin-left: 10px;
                font-weight: 300;
            }

            img{
                /*width: 17px;*/
                height: 13px;
                margin-left: 15px;
            }
        }
        .hot_lj{
            font-size: 12px;
            color: #61616c;
            margin-top: 5px;
        }
    }
}
</style>
