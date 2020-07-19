<template>
    <div class="m_box">
        <div class="box" v-for="(item, index) in HotSong" :key="index">
            <div class="img_box">
                <div>
                    <i class="el-icon-headset"></i>
                    <span>223万</span>
                </div>
                <img src="" alt="">
            </div>
            <div class="box_cont">
                121212312312w1我我我我我我我我
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "SongList",
        props:{
            HotSong:Array
        }
    }
</script>

<style lang="less" scoped>
.m_box{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .box{
        width: 177px;
        border: 1px solid;
        margin-bottom: 20px;

        .img_box{
            width: 177px;
            height: 177px;
            img{
                width: 100%;
            }
            div{
                width: 100%;
                height: 20px;
                line-height: 20px;
                font-size: 12px;
                color: #FDFDFD;
                text-align: right;
                background: rgba(0,0,0,0.5);
            }
            span{
                margin-right: 10px;
            }
            i{
                margin-right: 5px;
            }
        }

        .box_cont{
            width: 100%;
            color: #DCDDE4;
        }
    }
}
</style>
