<template>
    <div>
        <div style="height: 250px; border: 1px solid">
<!--            <el-carousel trigger="click" :interval="4000" type="card" style="width: 760px" height="200">-->
<!--                <el-carousel-item v-for="(item, index) in BannerList" style="width: 540px;height: 200px" :key="index">-->
<!--                    <img :src="item.imageUrl" style="width: 100%">-->
<!--                </el-carousel-item>-->
<!--            </el-carousel>-->
        </div>
<!--        推荐歌单-->
        <div class="recommendSong">
            <div class="title_box">
                <div class="title">推荐歌单</div>
                <div class="more">更多></div>
            </div>
            <div class="song_box" >
                <div v-for="item in SongList" class="song_x">
                    <div class="song">
                        <div class="song_mun"><i class="el-icon-headset"></i>{{item.playCount | wan}}</div>
                        <img :src="item.picUrl" alt="">
                    </div>
                    <span class="song_cont">{{item.name}}</span>
                    <i class="el-icon-video-play Play"></i>
                </div>
            </div>
        </div>

<!--        独家放送-->
        <div class="recommendSong">
            <div class="title_box">
                <div class="title">独家放送</div>
                <div class="more">更多></div>
            </div>
            <div class="home">
                <div v-for="(item,index) in PrivatecontentList" :key="index" style="position: relative">
                    <div class="home_box">
                        <img :src="item.sPicUrl" alt="" >
                    </div>
                    <span class="home_cont">{{item.name}}</span>
                </div>
            </div>
        </div>

<!--        推荐MV-->
        <div class="recommendSong" style="margin-top: 50px">
            <div class="title_box">
                <div class="title">推荐MV</div>
                <div class="more">更多></div>
            </div>
            <div class="home">
                <div v-for="(item,index) in PersonalizedMvList" :key="index" style="position: relative">
                    <div class="home_box">
                        <img :src="item.picUrl" alt="" >
                    </div>
                    <span class="home_cont">{{item.name}}<br><span class="font">{{item.artistName}}</span></span>

                </div>
            </div>
        </div>
<!--        最新音乐-->
        <div class="recommendSong" style="margin-top: 50px">
            <div class="title_box">
                <div class="title">最新音乐</div>
                <div class="more">更多></div>
            </div>
            <wyy-new-music :song-info="NewMusic"></wyy-new-music>
        </div>

    </div>
</template>

<script>
    export default {
        name: "style",
        data(){
            return{
                //储存轮播图数据
                BannerList:[],
                //储存推荐歌单数据
                SongList:[],
                //储存独家放送数据
                PrivatecontentList:[],
                //储存推荐Mv数据
                PersonalizedMvList:[],

                NewMusic:[]
            }
        },
        created() {
            this.GetBanner()
            this.GetSongList()
            this.GetPrivatecontent()
            this.GetPersonalizedMv()
            this.GetNewMusic()
        },
        methods:{
            //获取轮播图
            GetBanner(){
                this.axios.get("banner").then( ({data}) =>{
                    this.BannerList = data.banners
                })
            },
            //获取推荐歌单
            GetSongList(){
                this.axios.get("personalized").then( ({data}) => {
                    this.SongList = data.result.slice(0,10)
                })
            },
            //获取独家放送
            GetPrivatecontent(){
                this.axios.get('personalized/privatecontent').then( ({data}) => {
                    this.PrivatecontentList = data.result
                })
            },

            //获取推荐MV
            GetPersonalizedMv(){
                this.axios.get('/personalized/mv').then( ({data}) => {
                    this.PersonalizedMvList = data.result.slice(0,3)
                    console.log(this.PersonalizedMvList)
                    this.PersonalizedMvList.forEach((item ,index) => {

                        if (item.name.length > 20){
                           const s = item.name.substring(0,20) + "..."
                            console.log(this.PersonalizedMvList[index].name)
                            this.PersonalizedMvList[index].name = s
                        }

                    })
                    console.log(this.PersonalizedMvList[0].name.length)
                })
            },

            //获取推荐新音乐
            GetNewMusic(){
                this.axios.get("/personalized/newsong").then(({data}) => {
                    console.log(data)
                    this.NewMusic = data.result
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @duColor:#DCDDE4;
    @duLine:#23262C;
.home{
    display: flex;
    justify-content: space-between;
    .home_cont{
        width: 243px;
        max-width: 243px;
        color:@duColor ;
        font-size: 12px;
        margin-top: 6px;
        position: absolute;
        right: 0;

        .font{
            color: #828385;
        }

    }
    .home_box{
        width: 243px;
        height: 136px;


        img{
            width: 100%;
        }


    }
}

    .recommendSong{
        width: 100%;

        .title_box{
            height: 40px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid @duLine;
            align-items: center;
            margin-bottom: 10px;
            .title{
                color: @duColor;
                font-size: 18px;
            }
            .more{
                color: #828385;
                font-size: 12px;
            }
        }

        .song_box{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .song_x{
                position: relative;
                margin-bottom: 75px;
                &:hover{
                    cursor: pointer;
                    .Play{
                        font-size: 20px;
                        color: #F0EFEF;
                        position: absolute;
                        right: 8px;
                        bottom:8px;
                        opacity: 1;

                        &:hover{
                            color: #fff;
                        }
                    }

                }
            }
            .song{
                width: 138px;
                height: 138px;
                position: relative;
                img{
                    width: 138px;
                    height: 138px;
                }
                .song_mun{
                    width: 138px;
                    height: 20px;
                    background: rgba(0,0,0,0.5);
                    font-size: 12px;
                    color: #fff;
                    line-height: 20px;
                    text-align: right;
                    padding: 0 8px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    i{
                        margin-right: 5px;
                    }
                }
            }

            .song_cont{
                max-width: 138px;
                width: 138px;
                color:@duColor ;
                font-size: 12px;
                position: absolute;
                margin-top: 6px;
            }
        }
    }
    .Play{
        font-size: 22px;
        color: #F0EFEF;
        position: absolute;
        right: 10px;
        bottom:30px;
        opacity: 0;
    }


    .exclusive{

    }

    .el-carousel__item, .el-carousel__mask{
        left: -14px!important;
    }
    .el-carousel-item{
        width: 540px;
    }

</style>
