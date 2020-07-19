<template>
<!--    新碟上架-->
    <div>
       <div class="box">
           <div class="p_box" v-for="item in InfoList" :key="item.id">
               <div class="img_box">
                   <img :src="item.picUrl" alt="" style="width: 140px">
               </div>
               <div class="song_name">{{item.name}}</div>
               <div class="sing_name">{{item.artist.name}}</div>
           </div>

       </div>
    </div>
</template>

<script>
    export default {
        name: "Putaway",
        data(){
            return{
                InfoList:[]
            }
        },

        created() {
            this.GetnewPutaway()
        },
        methods:{
            GetnewPutaway(){
                this.axios.get('/top/album?offset=0&limit=32').then( ({data}) => {
                    if (data.code !== 200) return this.$message.error('获取失败！')
                    this.InfoList = data.albums
                    console.log(data)
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .box{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .p_box{
            width: 140px;
            height: 190px;
            margin-right: 17px;
            margin-top: 20px;

            .song_name{
                color: #DCDDE4;
                font-size: 12px;
                margin-bottom: 5px;
            }

            .sing_name{
                color:#5F5F63;
                font-size: 12px;
                font-weight: 300;
            }
        }
    }

</style>
