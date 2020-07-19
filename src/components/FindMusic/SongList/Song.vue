<template>
    <div>
        <div class="Hear_tag">
            <div class="hot_tag">热门标签：</div>
            <ul>
                <li v-for="(item,index) in HotTagList">{{item.name}}</li>
            </ul>
        </div>
<!--        分类列表-->
        <div class="song_list">
            <wyy-song-list ></wyy-song-list>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Song",
        data(){
            return{
                HotTagList:[]
            }
        },

        created() {
            this.GetHotTag()
        },
        methods:{

            GetHotTag(){
                this.axios.get("/playlist/hot").then( ({data}) => {
                    console.log(data)
                    this.HotTagList = data.tags
                })
            }

        }
    }
</script>

<style lang="less" scoped>
.Hear_tag{
    height: 20px;
    display: flex;
    align-items: center;

    .hot_tag{
        color: #DCDDE4;
        font-size: 14px;
    }

    ul{
        display: flex;
        li{
            color: #828385;
            font-size: 12px;
            border-right: 1px solid #25342D;
            padding: 0 15px ;


            &:hover{
                color: #DCDDE4;
                cursor: pointer;
            }
            &:focus{
                color: red !important;
            }
        }
    }
}

    .song_list{
        width: 100%;
        border: 1px solid;
        margin: 20px 0;
        height: 1000px;
    }
</style>
