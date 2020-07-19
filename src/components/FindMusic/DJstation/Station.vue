<template>
<!--    主播电台-->
    <div>
<!--        轮播-->
        <div style="height: 200px;">
            <el-carousel trigger="click" :interval="3000" type="card" style="width: 760px" height="200">
                <el-carousel-item v-for="(item, index) in Djbanner" style="width: 540px;height: 200px" :key="index">
                    <img :src="item.pic" style="width: 100%">
                </el-carousel-item>
            </el-carousel>
        </div>


        <div  class="showicon">
            <i class="left icons el-icon-arrow-left" @click="leftGo"></i>
            <i class="right icons el-icon-arrow-right" @click="rightGo"></i>
        <div class="icon_show">
            <div class="dj_box" ref="box">
                <div class="icon_box" v-for="(item, index) in DjList" :key="index">
                    <img :src="item.pic96x96Url" alt=""  style="color:#828385;width: 28px;height: 28px; margin-left: 20px">
                    <span class="box_cont">{{item.name}}</span>
                </div>
            </div>
        </div>

        </div>

        <div class="recommendSong">
            <div class="title_box">
                <div class="title">推荐歌单</div>
                <div class="more">更多></div>
            </div>
            <div class="pay_box" >
                <div v-for="item in HotList" class="pay">
                    <div class="list">
                        <img :src="item.picUrl" alt="" style="width: 120px;height: 120px">
                        <div class="flex">
                            <div class="top">{{item.name}}</div>
                            <div>
                                <div class="mid">{{item.rcmdText}}</div>
                                <div class="mid">{{item.lastProgramName}}</div>
                            </div>
                            <div class="botton">￥{{item.originalPrice / 100}}</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Station",
        data(){
            return{
                DjList:[],
                count:0,
                Djbanner:[],
                HotList:[],
            }
        },

        created() {
            this.GetCateList()
            this.GetDjbanner()
            this.GetDjHot()
        },

        methods:{

            //获取轮播图
            GetDjbanner(){
                this.axios.get("/dj/banner").then( ({data}) => {
                    if (data.code !== 200){
                        return this.$message.error("获取失败！")
                    }
                    console.log(data)
                    this.Djbanner = data.data
                })
            },


            //获取付费精品
            GetDjHot(){
                this.axios.get("/dj/paygift?limit=4&offset=1").then( ({data}) => {
                    console.log(data)
                    this.HotList = data.data.list
                })
            },

            GetCateList(){
                this.axios.get("dj/catelist").then( ({data}) => {
                    if (data.code !== 200){
                        return this.$message.error("获取失败！")
                    }

                    this.DjList = data.categories
                    console.log(data)
                })
            },
            rightGo(){
                if (this.count === 2) return
                this.count++
                this.$refs.box.style.left = -730 * this.count+'px'

            },

            leftGo(){
                if (this.count === 0) return
                this.count--
                this.$refs.box.style.left =  -730 * this.count +'px'

            }
        }
    }
</script>

<style lang="less" scoped>
    .pay_box{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .pay{
            width: 360px;
            height: 120px;
            margin-bottom: 20px;
            .list{
                display: flex;

                .flex{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    margin-left: 10px;
                    .top{
                        font-size: 16px;
                        color: #DCDDE4;
                    }
                    .mid{
                        color: #4E4E52;
                        font-size: 12px;
                    }
                    .botton{
                        color: #B82525;
                    }
                }


            }
        }
    }



    .showicon{
        width: 730px;
        position: relative;
        margin-left: 20px;
        margin-top: 20px;

        .icons{
            position: absolute;
            font-size: 30px;
            top: 50%;
            transform: translate(0,-50%);
            cursor: pointer;
            color: #32343B;
            z-index: 999;

            &:hover{
                color: #4E4E52;
            }
        }
        .left{
            left: -25px;
        }
        .right{
            right:-25px;
        }
        .icon_show{

            width: 730px;
            height: 80px;
            display: flex;
            overflow:hidden ;
            position: relative;
            .dj_box{
                width: 5000px;
                height: 80px;
                display: flex;
                position: absolute;
                top: 0;
                left: 0;
                transition: ease-in-out 1.2s;
                /*left: -730px;*/
                .icon_box {
                    width:68px;
                    height: 73px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    text-align: center;
                    padding: 6px 0;
                    margin-right: 14px;
                    border-radius: 5px;

                    &:hover{
                        cursor: pointer;
                        background: #25272B;
                    }

                    .iconfont{
                        margin-right: 20px;

                    }

                    .box_cont{
                        font-size: 12px;
                        color: #5F5F63;
                    }
                }
            }

        }
    }



</style>
