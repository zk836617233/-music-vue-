<template>
<!--    发现音乐-->
    <div>
        <div class="FindNav">
            <ul>
             <router-link active-class="actives" tag="li" :to="item.router" v-for="(item, index) in List" :key="index">{{item.title}}</router-link>
            </ul>
        </div>
        <div class="rout">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    export default {
        name: "FindMusic",
        data(){
            return{
                List:[
                    {title:'个性推荐',router:'/style'},
                    {title:'歌单',router:'/songList'},
                    {title:'主播电台',router:'/station'},
                    {title:'排行榜',router:'/Rank'},
                    {title:'歌手',router:'/singer'},
                    {title:'最新音乐',router:'/newMusic'},
                ]
            }
        },

    }
</script>

<style lang="less" scoped>
    @font_color:#828385;
    @color:#DCDDE4;
.actives{
    border-bottom: 2px solid #5C5E61;
    color:  @color !important;
}

    .FindNav{
        height: 45px;
        margin-bottom: 20px;
        ul{
            height: 100%;
            display: flex;
            border-bottom: 1px solid #202226;
            justify-content: center;
            align-items: center;
            li{
                width: 60px;
                height: 45px;
                color: @font_color;
                font-size: 15px;
                margin: 0 20px;
                line-height: 45px;
                text-align: center;
                cursor: pointer;
                font-weight: 300;

                &:hover{
                    color: @color;
                }
            }
        }
    }

    .rout{
        width: 100%;
    }
</style>
