<template>
    <div>
        <div class="top">
            <div class="right_btn" @click="Show = true" :class="Show ? 'bgd' : ''">新歌速递</div>
            <div class="left_btn" @click="Show = false" :class="!Show ? 'bgd' : ''">新歌上架</div>
        </div>

        <div class="mid">
            <ul>
                <li v-for="(item, index) in tag" @click="GetNewMusic(item.id,index)"
                     :key="index" :class="tagindex === index ? 'border' : ''">{{item.name}}
                </li>
            </ul>
        </div>

        <div class="cont" v-if="Show" v-loading="loading"
             element-loading-text="music 加载中"
             element-loading-spinner="el-icon-loading"
             element-loading-background="#16181C">
            <table cellspacing="0">
                <tr v-for="(item, index) in newMusicList" :key="index">
                    <th>{{index + 1}}</th>
                    <th><img  v-lazy="item.album.picUrl" :alt="item.album.name" style="width: 40px" @click="playMusic(item.id)">{{item.name
                        | omit}}
                    </th>
                    <th>{{item.album.artists[0].name}}</th>
                    <th>{{item.album.name}}</th>
                </tr>

            </table>
        </div>
        <Putaway v-if="!Show"></Putaway>


        <audio autoplay :src="musicUrl" controls="controls">
            Your browser does not support the audio element.
        </audio>
    </div>
</template>

<script>
    import Putaway from "./Putaway";
    export default {
        components: {Putaway},
        filters: {
            omit: function (val) {
                if (val.length > 30) {
                    return val.slice(0, 30) + "..."
                }
                return val
            }

        },
        name: "newmusic",
        data() {
            return {
                tag: [
                    {name: '全部', id: 0},
                    {name: '华语', id: 7},
                    {name: '欧美', id: 96},
                    {name: '日本', id: 8},
                    {name: '韩国', id: 16},
                ],
                tagindex: 1,
                newMusicList: [],
                loading: false,
                musicUrl: '',
                Show:true
            }
        },

        created() {
            this.GetNewMusic()
        },

        methods: {
            GetNewMusic(id,index) {
                if (!index){
                    index = 0
                }
                this.tagindex = index
                if (!id) {
                    id = 0
                }
                // this.loading = true
                this.axios.get(`/top/song?type=${id}`).then(({data}) => {
                    this.newMusicList = data.data
                    console.log(data.data)
                })
                // setTimeout(() => {
                //     this.loading = false
                // }, 1000)


            },

            playMusic(id) {

                this.axios.get(`/song/url?id=${id}`).then(({data}) => {
                    if (data.code !== 200) return this.$message.error("获取音乐失败！")

                    if (!data.data[0].url) {
                        return this.$message.error("对不起，暂无版权！")
                    }
                    this.musicUrl = data.data[0].url
                    console.log(data)
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    audio {
        position: absolute;
        bottom: 10px;
    }

    .bgd{
        background: #3A3A3F;
        color: #D7D7D8!important;
    }

    .border {
        border-bottom: 2px solid;
    }

    .top {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        div {
            width: 107px;
            height: 28px;
            border: 1px solid #2C2E32;
            text-align: center;
            cursor: pointer;
            color: #828385;
            font-size: 12px;
            line-height: 26px;

            &:hover {
                background: #202226;
            }
        }

        .right_btn {
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            border-right: none;
        }

        .left_btn {
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }

    .mid {
        ul {
            display: flex;
            border-bottom: 1px solid #23262C;

            li {
                height: 30px;
                color: #828385;
                font-size: 16px;
                margin-right: 23px;
                cursor: pointer;
                font-weight: 300;

                &:hover {
                    color: #DCDDE4;
                }
            }
        }
    }

    .cont {
        margin-top: 15px;

        table {
            width: 100%;
            border: 1px solid #1F2024;

            tr {
                height: 60px;

                &:nth-of-type(odd) {
                    background: #1A1C20;
                }

                &:hover {
                    background: #232529;

                    th {
                        color: #DCDDE4 !important;
                    }
                }

                th {
                    font-size: 12px;
                    font-weight: 400;
                }

                th:nth-of-type(1) {
                    width: 40px;
                    color: #424E3D;

                }

                th:nth-of-type(2) {
                    width: 300px;
                    color: #DCDDE4;
                    text-align: left;
                    line-height: 60px;

                    img{
                        float: left;
                        margin-right: 10px;
                        margin-top: 10px;
                        cursor: pointer;
                    }
                }

                th:nth-of-type(3) {
                    width: 125px;
                    color: #828385;
                }

                th:nth-of-type(4) {
                    width: 190px;
                    color: #828385;
                }

                th:nth-of-type(5) {
                    color: #828385;
                }

            }

        }
    }
</style>
