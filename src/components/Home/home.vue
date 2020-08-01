<template>
<<<<<<< HEAD
    <div style="position: relative">
        <el-container style="position: relative">
            <el-header>
                <!--                logo区域-->
                <div class="logo_box">
                    <img src="../../../src/assets/img/download.png" alt="">
                </div>
                <!--                搜索区域-->
                <div class="search">
                    <div class="search_box">
                        <input type="text" v-model="Search" placeholder="搜索音乐，视频，歌词，电台" @focus="hotSearch(true)"
                               @keyup.enter="SearchSong">
                        <i class="el-icon-search"></i>
                        <!--                        搜索热搜-->
                        <hot-search v-if="Hotlist" @searchName="getsearchName" style="position: absolute"></hot-search>
=======
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
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
                    </div>
                </div>

                <div class="header_right">
<<<<<<< HEAD
                    <div class="img_box"><img :src="UserInfo.avatarUrl" alt=""></div>
                    <div class="right_font" @click="Openlogin">{{UserInfo.nickname ? UserInfo.nickname : '未登录'}}</div>
=======
                    <div class="right_font">未登录</div>
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
                    <div class="right_font" style="margin-left: 30px">开通VIP</div>
                    <ul>
                        <li><i class="el-icon-open right_font"></i></li>
                        <li><i class="el-icon-message right_font"></i></li>
                        <li><i class="el-icon-setting right_font"></i></li>
                    </ul>
                </div>
<<<<<<< HEAD

<!--                个人资料卡-->

                <UserInfoCard v-if="false"></UserInfoCard>
=======
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <div v-for="(item, index) in SongList">
                        <div class="List_title webfont">{{item.title}}</div>
                        <div>
                            <ul>
<<<<<<< HEAD
                                <router-link v-for="(item, index) in SongList[index].children" tag="li"
                                             active-class="active" :to="item.router"><i :class="item.icon"></i>{{item.name}}
                                </router-link>
=======
                                <router-link v-for="(item, index) in SongList[index].children" tag="li" active-class="active" :to="item.router"><i :class="item.icon"></i>{{item.name}}</router-link>
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
                            </ul>
                        </div>
                    </div>

                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
<<<<<<< HEAD
            <!--           <div  class="music" style="position: absolute">-->
            <!--               <audio controls src="http://m7.music.126.net/20200724223616/e82406ba7ae73504d7a56ba91bd3af29/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3" controls="controls">-->
            <!--                   Your browser does not support the audio element.-->
            <!--               </audio>-->
            <!--           </div>-->
        </el-container>
        <!--        登录弹出框-->

            <login v-if="logindelog" @UserInfo="GetUserInfo">
                 <span class="out el-icon-close" slot="out" @click="logindelog = false"></span>
            </login>

=======
        </el-container>
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
    </div>
</template>

<script>
<<<<<<< HEAD
    import HotSearch from "./hotSearch";
    import Login from "./login";
    import UserInfoCard from "./UserInfoCard";

    export default {
        name: "home",
        components: {UserInfoCard, Login, HotSearch},
        data() {
            return {
                SongList: [
                    {
                        title: '推荐', children: [
                            {name: '发现音乐', icon: 'el-icon-mic', router: '/'},
                            {name: '私人FM', icon: 'el-icon-magic-stick', router: '1'},
                            {name: 'LOOK直播', icon: 'el-icon-video-camera-solid', router: '2'},
                            {name: '视频', icon: 'el-icon-video-camera', router: '3'},
                            {name: '朋友', icon: 'el-icon-user', router: '4'},
                        ]
                    },
                    {
                        title: '我的音乐', children: [
                            {name: '本地音乐', icon: 'el-icon-headset', router: '5'},
                            {name: '下载管理', icon: 'el-icon-bottom', router: '6'},
                        ]
                    },
                    {
                        title: '推荐', children: [
                            {name: '我喜欢的音乐', icon: 'el-icon-star-off', router: '7'},
                        ]
                    },


                ],

                Hotlist: false,
                // 搜索框
                Search: '',
                // 控制登录框
                logindelog: false,

                // 储存个人信息
                UserInfo: []
            }
        },
        created() {

        },

        methods: {
            change(link) {
                console.log(123)
                // this.$router.push(link)
            },

            hotSearch(tab) {
                this.Hotlist = tab
            },

            // 接受子组件参数
            getsearchName(data) {
                console.log(data)
                this.Search = data
                this.Hotlist = false
            },

            // 回车搜索事件
            SearchSong() {
                this.Hotlist = false
                // this.$store.state.Search = this.this.Search
                this.$router.push({path: '/search', query: {keywords: this.Search}})
            },

            // 接受登录子组件传回来的个人信息
            GetUserInfo(data){
                console.log(data)
                this.UserInfo = data
                this.logindelog = false
            },

            // 点击登录按钮
            Openlogin() {
                if (!this.UserInfo.nickname){
                    this.logindelog = true
                }


=======
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
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
            }
        }

    }
</script>

<style lang="less" scoped>
<<<<<<< HEAD
    @defaultFont: #ADAFB2;
.out{
    position: absolute;
    z-index: 9999;
    top: 0;
    right: 10px;
}

    .music {
        width: 100%;
        right: 0;
        bottom: -4px;

        audio {
            width: 100%;
            height: 50px;
            outline: none;
            /*border-radius: 0;*/
        }
    }

    .color {
=======
    @defaultFont:#ADAFB2;
    .color{
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
        border-left: 3px solid #B82525;
        background: #26282C;
        color: #DCDDE3 !important;
    }

<<<<<<< HEAD
    .active {
=======
    .active{
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
        border-left: 3px solid #B82525;
        background: #26282C;
        color: #DCDDE3 !important;
    }

<<<<<<< HEAD
    .el-header {
        height: 50px !important;
        background: #222225;
        border-bottom: 2px solid #A21C1C;
        display: flex;
        align-items: center;
        position: relative;

        .search {
            margin-left: 110px;

            .search_box {
                position: relative;

                input {
=======
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
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
                    width: 220px;
                    height: 25px;
                    border-radius: 15px;
                    border: none;
                    outline: none;
                    /*text-indent: 15px;*/
                    padding: 0 30px 0 15px;
                    background: #171719;
<<<<<<< HEAD
                    color: #D0D0D1 !important;
                }

                i {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translate(0, -50%);
=======
                    color: #D0D0D1!important;
                }
                i{
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translate(0,-50%);
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
                    color: #575759;

                }
            }


        }
<<<<<<< HEAD

        .logo_box {
=======
        .logo_box{
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
            width: 132px;
            height: 30px;
            position: relative;
            /*margin:12px 0 ;*/
            overflow: hidden;

<<<<<<< HEAD
            img {
=======
            img{
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
                width: 190px;
                position: absolute;
                top: -15px;
                left: 2px;
            }
        }
<<<<<<< HEAD

        .header_right {
            margin-left: 155px;
            display: flex;

            .img_box {
                width: 25px;
                height: 25px;
                margin-right: 5px;

                img {
                    width: 25px;
                    height: 25px;
                    border: 1px solid;
                    border-radius: 50%;
                }
            }


            .right_font {
                height: 25px;
                line-height: 25px;
                font-size: 12px;
                color: @defaultFont;


                &:hover {
=======
        .header_right{
            margin-left: 155px;
            display: flex;

            .right_font{
                font-size: 12px;
                color: @defaultFont;

                &:hover{
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
                    color: #fff;
                    cursor: pointer;
                }
            }

<<<<<<< HEAD
            ul {
                display: flex;

                li {
                    list-style: none;
                    margin-left: 25px;

                    i {
                        font-size: 18px !important;
=======
            ul{
                display: flex;
                li{
                    list-style: none;
                    margin-left: 25px;
                    i{
                        font-size: 18px!important;
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
                    }

                }
            }
        }
    }
<<<<<<< HEAD

    .el-main {
        background: #16181C;
        height: 600px;
        padding: 0 30px 60px 30px;

    }

    .el-aside {
        background: #191B1F;
        border: 1px solid #23262c;

        .List_title {
=======
    .el-main{
        background: #16181C;
        height: 600px;
        padding: 0 30px 30px 30px;

    }
    .el-aside{
        background: #191B1F;
        border: 1px solid #23262c;

        .List_title{
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
            height: 32px;
            color: #7C7C7C;
            font-size: 12px;
            line-height: 32px;
            margin-left: 10px;
            /*font-family: "webfont";*/
        }

<<<<<<< HEAD
        ul {
            li {
=======
        ul{
            li{
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
                height: 32px;
                color: @defaultFont;
                font-size: 13px;
                line-height: 32px;

                padding-left: 15px;
                list-style: none;
<<<<<<< HEAD

                &:hover {
=======
                &:hover{
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
                    cursor: pointer;
                    color: #DCDDE3;
                }

<<<<<<< HEAD
                i {
=======
                i{
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
                    font-size: 16px;
                    margin-right: 10px;
                }
            }
        }

    }
<<<<<<< HEAD

=======
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
    /*.line{*/
    /*    width: 100%;*/
    /*    height: 2px;*/
    /*    background: #A21C1C;*/
    /*}*/
</style>
