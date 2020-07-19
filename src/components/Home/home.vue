<template>
    <div>
        <el-container>
            <el-header>
<!--                logo区域-->
                <div class="logo_box">
                    <img src="../../../src/assets/img/download.png" alt="">
                </div>
<!--                搜索区域-->
                <div class="search">
                    <div class="search_box">
                        <input type="text" placeholder="搜索音乐，视频，歌词，电台">
                        <i class="el-icon-search"></i>
                    </div>
                </div>

                <div class="header_right">
                    <div class="right_font">未登录</div>
                    <div class="right_font" style="margin-left: 30px">开通VIP</div>
                    <ul>
                        <li><i class="el-icon-open right_font"></i></li>
                        <li><i class="el-icon-message right_font"></i></li>
                        <li><i class="el-icon-setting right_font"></i></li>
                    </ul>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <div v-for="(item, index) in SongList">
                        <div class="List_title webfont">{{item.title}}</div>
                        <div>
                            <ul>
                                <router-link v-for="(item, index) in SongList[index].children" tag="li" active-class="active" :to="item.router"><i :class="item.icon"></i>{{item.name}}</router-link>
                            </ul>
                        </div>
                    </div>

                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                SongList:[
                    {title:'推荐',children:[
                            {name:'发现音乐',icon:'el-icon-mic',router:'/'},
                            {name:'私人FM',icon:'el-icon-magic-stick',router:'1'},
                            {name:'LOOK直播',icon:'el-icon-video-camera-solid',router:'2'},
                            {name:'视频',icon:'el-icon-video-camera',router:'3'},
                            {name:'朋友',icon:'el-icon-user',router:'4'},
                        ]},
                    {title:'我的音乐',children:[
                            {name:'本地音乐',icon:'el-icon-headset',router:'5'},
                            {name:'下载管理',icon:'el-icon-bottom',router:'6'},
                        ]},
                    {title:'推荐',children:[
                            {name:'我喜欢的音乐',icon:'el-icon-star-off',router:'7'},
                        ]},


                ],
           }
        },
        created() {
            console.log(this.SongList)
        },

        methods:{
            change(link){
                this.$router.push(link)
            }
        }

    }
</script>

<style lang="less" scoped>
    @defaultFont:#ADAFB2;
    .color{
        border-left: 3px solid #B82525;
        background: #26282C;
        color: #DCDDE3 !important;
    }

    .active{
        border-left: 3px solid #B82525;
        background: #26282C;
        color: #DCDDE3 !important;
    }

    .el-header{
       height: 50px!important;
       background: #222225;
        border-bottom: 2px solid  #A21C1C;
        display: flex;
        align-items: center;
        .search{
            margin-left: 110px;
            .search_box{
                position: relative;
                input{
                    width: 220px;
                    height: 25px;
                    border-radius: 15px;
                    border: none;
                    outline: none;
                    /*text-indent: 15px;*/
                    padding: 0 30px 0 15px;
                    background: #171719;
                    color: #D0D0D1!important;
                }
                i{
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translate(0,-50%);
                    color: #575759;

                }
            }


        }
        .logo_box{
            width: 132px;
            height: 30px;
            position: relative;
            /*margin:12px 0 ;*/
            overflow: hidden;

            img{
                width: 190px;
                position: absolute;
                top: -15px;
                left: 2px;
            }
        }
        .header_right{
            margin-left: 155px;
            display: flex;

            .right_font{
                font-size: 12px;
                color: @defaultFont;

                &:hover{
                    color: #fff;
                    cursor: pointer;
                }
            }

            ul{
                display: flex;
                li{
                    list-style: none;
                    margin-left: 25px;
                    i{
                        font-size: 18px!important;
                    }

                }
            }
        }
    }
    .el-main{
        background: #16181C;
        height: 600px;
        padding: 0 30px 30px 30px;

    }
    .el-aside{
        background: #191B1F;
        border: 1px solid #23262c;

        .List_title{
            height: 32px;
            color: #7C7C7C;
            font-size: 12px;
            line-height: 32px;
            margin-left: 10px;
            /*font-family: "webfont";*/
        }

        ul{
            li{
                height: 32px;
                color: @defaultFont;
                font-size: 13px;
                line-height: 32px;

                padding-left: 15px;
                list-style: none;
                &:hover{
                    cursor: pointer;
                    color: #DCDDE3;
                }

                i{
                    font-size: 16px;
                    margin-right: 10px;
                }
            }
        }

    }
    /*.line{*/
    /*    width: 100%;*/
    /*    height: 2px;*/
    /*    background: #A21C1C;*/
    /*}*/
</style>
