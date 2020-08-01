<template>
    <div>
        <div class="recommendSong">
            <div class="title_box">
                <div class="title">全球榜</div>
<<<<<<< HEAD
<!--                <div class="more">更多></div>-->
=======
                <div class="more">更多></div>
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
            </div>
            <div class="rank_box">
                <div>
                    <wyy-rank-list :rank-list="rankList"></wyy-rank-list>
<<<<<<< HEAD
=======

>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Rank",
        data(){
            return{
                rankList:[]
            }
        },

        created() {
            this.GetRankList()
        },
        methods:{
            GetRankList(){
                this.axios.get("toplist").then( ({data}) => {
                    console.log(data)
                    this.rankList = data.list
                })
            }
        }
    }
</script>

<style scoped>
.rank_box{
    width: 100%;
<<<<<<< HEAD
=======
    border: 1px solid;
>>>>>>> be63f5af771de04cad0231e13d40826e564cb8fa
}
</style>
