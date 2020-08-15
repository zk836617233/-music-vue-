<template>
    <div>
        <div>
            <div class="header">
                搜索 <span>“{{demo}}”</span>，找到{{SongInfo.songCount}}首单曲
            </div>
            <div class="Song_tab">
                <ul>
                    <li v-for="(item, index) in tabList" :key="item.id" @click="tab(index)" :class="indexs === index ? 'tab' : ''">{{item.name}}</li>
                </ul>
            </div>
            <div class="Song_list">
                <table cellspacing="0" >
                    <tr >
                        <th></th>
                        <th>操作</th>
                        <th>音乐标题</th>
                        <th>歌手</th>
                        <th>专辑</th>
                        <th>时长</th>
                        <th>热度</th>
                    </tr>
                    <tr class="cont" v-for="(item, index) in SongInfo.songs" :key="item.id">
                        <th>{{index + 1}}</th>
                        <th><span class="el-icon-star-off"></span>
                            <span class="el-icon-download"></span></th>
                        <th>{{item.name}}<br>
                        <span>{{item.alias[0]}}</span></th>
                        <th>{{item.artists[0].name}}</th>
                        <th>{{item.album.name}}</th>
                        <th>03:22</th>
                        <th>热度</th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
            return{
                SongInfo:[],
                demo:'',
                tabList:[
                    {name:'单曲',id:'1'},
                    {name:'歌手',id:'2'},
                    {name:'专辑',id:'3'},
                    {name:'视频',id:'4'},
                    {name:'歌单',id:'5'},
                    {name:'歌词',id:'6'},
                    {name:'主播电台',id:'7'},
                    {name:'用户',id:'8'},
                ],
                indexs:0
            }
        },

        created() {
            this.GetSongList()
        },
        methods:{
            GetSongList(){
                this.demo = this.$route.query.keywords
                this.axios.get("/search",{
                    params:{
                        keywords:this.demo
                    }
                }).then( ({data}) => {
                    console.log(data)
                    if (data.code !== 200) return this.$message.error("搜索失败！")
                    this.SongInfo = data.result

                })
            },

            tab(index){
                this.indexs = index
            }

        },
        watch:{
            '$route'(){
                this.GetSongList()
            }
        }

    }
</script>

<style lang="less" scoped>
    body{
        padding: 0 !important;
    }
.header{
    width: 750px;
    height: 60px;
    margin: 0 auto;
    color: #DCDDE4;
    font-size: 12px;
    font-weight: 400;
    line-height: 60px;
    span{
        color: #2E6BB0;
    }
}
.tab{
    border-bottom: 4px solid #B82525 ;
    color: #B82525 !important;
}

    .Song_tab{

        ul{
            display: flex;
            li{
                /*width: 35px;*/
                height: 40px;
                color: #DCDDE4;
                margin-left: 50px;
                text-align: center;
                line-height: 40px;
                cursor: pointer;
                font-size: 14px;
            }
        }
    }

    .Song_list{
        margin-top: 20px;
        table{
            width: 100%;
            border-top: 1px solid #23262C;
            border-bottom: 1px solid #23262C;
            tr:nth-of-type(1){
                height: 30px;
                color: #828385;
                font-size: 12px;
            }

            tr:nth-of-type(odd){
                background: #1A1C20;
            }

            tr{
                text-align: left;
                /*border: 1px solid;*/

                th:nth-of-type(1){
                    width: 50px;
                    font-weight: 300;
                }
                th:nth-of-type(2){
                    width: 60px;
                }
                th:nth-of-type(3){
                    width: 222px;
                }
                th:nth-of-type(4){
                    width: 125px;
                }
                th:nth-of-type(5){
                    width: 160px;
                }
                th:nth-of-type(6){
                    width: 72px;
                }
            }

            .cont{
                font-size: 12px;
                height: 40px;

                &:hover{
                    background: #232529;
                }

                th:nth-of-type(1){
                    color: #828385;
                    font-weight: 300;
                    text-align: center;
                }
                th:nth-of-type(2){
                   span{
                       color: #47494C;
                       font-size: 16px;
                       margin-right: 5px;
                       cursor: pointer;
                       &:hover{
                           color: #898A8C;
                       }
                   }
                }

                th:nth-of-type(3){
                    color: #fff;
                    font-weight: 300;

                    span{
                        color: #5F5F63;
                    }
                }
                th:nth-of-type(4){
                    color: #828385;
                    font-weight: 300;
                }
                th:nth-of-type(5){
                    color: #828385;
                    font-weight: 300;
                }
                th:nth-of-type(6){
                    color: #828385;
                    font-weight: 300;
                }


            }
        }
    }
</style>
