<template>
    <div>
        <div class="recommendSong">
            <div class="title_box">
                <div class="title">全球榜</div>
                <div class="more">更多></div>
            </div>
            <div class="rank_box">
                <div>
                    <wyy-rank-list :rank-list="rankList"></wyy-rank-list>

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
    border: 1px solid;
}
</style>
