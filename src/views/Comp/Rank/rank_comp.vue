<template>
    <div class="flexs">
        <div class="rank_body"  v-for="(item, index) in rankList" :key="index">
            <div class="rank_box">
            <div class="box_title">
                <i class="el-icon-headset"></i>
                <span>{{ item.playCount| wan}}</span>
            </div>
                <img :src="item.coverImgUrl" alt="" style="width: 140px">
            </div>
            <div class="footer">
               {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "rank_comp",
        props:{
            rankList:Array
        },
        data(){
            return{

            }
        }
    }
</script>

<style lang="less" scoped>
    .flexs{
        display: flex;
        flex-wrap: wrap;

        .rank_body{
            width: 140px;
            margin: 0 10px 50px 0;
            .rank_box{
                width: 140px;
                /*height: 140px;*/
                position: relative;
                .box_title{
                    width: 100%;
                    height: 20px;
                    position: absolute;
                    background: rgba(0,0,0,0.3);
                    text-align: right;
                    color: #fff;
                    font-size: 12px;
                    line-height: 20px;
                    span{
                        margin: 0 5px 0 5px;
                    }

                }
            }

            .footer{
                width: 140px;
                font-size: 14px;
                color: #fff;

            }
        }

    }

</style>
