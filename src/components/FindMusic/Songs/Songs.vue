<template>
    <div>
        <div class="head_box">
            <div class="left">
                <img :src="infoList.coverImgUrl" alt="">
            </div>
            <div class="right">
                <div class="title"><div class="icon">歌单</div>{{infoList.name}}</div>
                <div class="info">
                    <img :src="infoList.creator.avatarUrl" alt="">
                    <span>{{infoList.creator.nickname}}</span>
                    <span>2020-07-17创建</span>
                </div>
                <div class="btn_box">
                    <button>播放全部</button>
                    <button>收藏</button>
                    <button>分享</button>
                    <button>VIP下载</button>
                </div>
                <div class="tag_box">
                    <div class="tag">
                        标签：<span v-for="(item, index) in infoList.tags" :key="index">{{item}}</span>
                    </div>
                    <div class="introduce">
                        简介：{{infoList.description}}
                    </div>
                </div>
            </div>
        </div>
       <songs-list :title-list="list" :model="SongList"></songs-list>
    </div>
</template>

<script>
    import SongsList from "../../../views/Songs/index"

    export default {
        name: "Songs",
        components:{
            SongsList
        },
        data(){
            return{
                list:[
                    {title:''},
                    {title:'操作'},
                    {title:'音乐标题'},
                    {title:'歌手'},
                    {title:'专辑'},
                    {title:'时长'},
                ],
                SongList:[],
                infoList:[]

            }
        },
        created() {
            this.GetSongListInfo()
        },
        methods:{
            GetSongListInfo(){
                const id = this.$route.query.id
                console.log(id)
                this.axios.get(`/playlist/detail?id=${id}`).then( ({data}) => {
                    console.log(data)
                    this.infoList = data.playlist
                    this.SongList = data.playlist.tracks
                    console.log(this.SongList.playlist.coverImgUrl)
                })
            }
        }
    }
</script>

<style lang="less" scoped>
.head_box{
    width: 100%;
    height: 250px;
    border: 1px solid;
    display: flex;
    /*align-items: center;*/
     .left{
        img{
            width: 200px;
            height: 200px;
        }
     }
     .right{

         .title{
             font-size: 22px;
             color: #DCDDD7;
             display: flex;
             align-items: center;
             .icon{
                 width: 38px;
                 height: 20px;
                 text-align: center;
                 line-height: 20px;
                 color: #E03F40;
                 border: 1px solid #E03F40;
                 font-size: 12px;
                 font-weight: 300;
                 border-radius: 2px;
             }

         }
         .info{
            width: 100%;
             height: 40px;
            display: flex;
             align-items: center;
             img{
                 width: 32px;
                 height: 32px;
                 border-radius: 50%;
             }

             span:nth-of-type(1){
                 color: #828385;
                 font-size: 16px;
                 margin: 0 8px;
                 &:hover{
                     cursor: pointer;
                     color: #DCDDE4;
                 }
             }
             span:nth-of-type(2){
                 font-size: 12px;
                 color: #5F5F63;
             }

         }

         .btn_box{
             button{
                 cursor: pointer;
                 border: none;
                 outline: none;
                 margin-left: 15px;
             }
             button:nth-of-type(1){
                 width: 122px;
                 height: 28px;
                 color: #fff;
                 background: #B82525;
                 border-radius: 3px;
             }
             button:nth-of-type(2),
             button:nth-of-type(3),
             button:nth-of-type(4){
                 width: 103px;
                 height: 28px;
                 color: #DCDDE4;
                 background: #25272B;

             }
         }

         .tag_box{
             color: #DCDDE4;
             font-size: 12px;
             font-weight: 300;
         }
     }
}
</style>
