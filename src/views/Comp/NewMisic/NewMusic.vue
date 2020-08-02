<template>
    <div>
        <div class="box">
            <div class="music_box" v-for="(item,index) in SongInfo" :key="index">
                <div class="title">{{index + 1}}</div>
                <div class="img_box"><img :src="item.picUrl" alt=""></div>
                <div class="song_info">
                    <div>{{item.name}}</div>
                    <div>{{item.song.artists[0].name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewMusic",
        props:{
          SongInfo:Array
        },
        data(){
            return{

            }
        },
        created() {

        },
        methods:{

        }
    }
</script>

<style lang="less" scoped>
    .box{
        display: flex;
        flex-wrap: wrap;
        .music_box{
            width: 375px;
            height: 60px;
            border: 1px solid #222428;
            display: flex;
            align-items: center;
            &:nth-of-type(odd){
                border-right:none ;
            }

            &:nth-of-type(3){
                background: #1A1C20;
            }
            &:nth-of-type(4){
                background: #1A1C20;
            }
            &:nth-of-type(7){
                background: #1A1C20;
            }
            &:nth-of-type(8){
                background: #1A1C20;
            }
            &:hover{
                background: #232529;
            }

            .title{
                width: 40px;
                height: 100%;
                text-align: center;
                line-height: 60px;
                font-size: 12px;
                color: #374E46;
            }

            .img_box{
                width: 40px;
                height: 40px;

                img{
                    width: 100%;
                }
            }

            .song_info{
                height: 40px;
                font-size: 12px;
                margin-left: 10px;
                div:nth-of-type(1){
                     color: #CFDDC5;
                    margin-bottom: 5px;

                 }
                div:nth-of-type(2){
                    color: #5F5F63;

                }
            }

        }
    }

</style>
