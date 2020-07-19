<template>
<!--    歌手-->
    <div>
<!--        语种-->
        <div class="classify_box">
            <span>语种：</span>
            <div class="box" v-for="(item, index) in LanguageList">
                <div class="title" @click="Language(item.id,index)" :class="Color.one === index ? 'color' : ''">{{item.name}}</div>
                <div class="line"></div>
            </div>
        </div>
<!--        分类-->
        <div class="classify_box">
            <span>分类：</span>
            <div class="box" v-for="(item, index) in commonList" :key="index">
                <div class="title" @click="common(item.id,index)" :class="Color.two === index ? 'color' : ''">{{item.name}}</div>
                <div class="line"></div>
            </div>
        </div>
<!--        热门-->
        <div class="classify_box">
            <span>筛选：</span>
            <div class="box" v-for="(item, index) in filtration" :key="index">
                <div class="title" @click="filtra(item.id,index)" :class="Color.three === index ? 'color' : ''">{{item.name}}</div>
                <div class="line"></div>
            </div>

        </div>

        <div class="line_mid"></div>
        <div class="Singer_box">
                <div class="cont" v-for="(item, index) in SingerList" :key="index">
                    <img :src="item.img1v1Url" :alt="item.name">
                    <span>{{item.name}}</span>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Singer",
        data(){
            return{

                query:{
                    Language:'',//语种分类
                    common:'',//普通分类
                    filtration:'',
                },

                //控制被选中颜色
                Color:{
                    one:0,
                    two:0,
                    three:0
                },

                SingerList:[],
                //普通分类
                commonList:[
                    {name:'全部',id:-1},
                    {name:'男歌手',id:1},
                    {name:'女歌手',id:2},
                    {name:'乐队',id:3},
                ],
                //语种分类
                LanguageList:[
                            {name:'全部',id:-1},
                            {name:'华语',id:7},
                            {name:'欧美',id:96},
                            {name:'日本',id:8},
                            {name:'韩国',id:16},
                            {name:'其他',id:0},
                        ],
                //字母分类
                filtration:[
                    {name:'热门',id:-1},
                    {name:'A',id:'a'},
                    {name:'B',id:'b'},
                    {name:'C',id:'c'},
                    {name:'D',id:'d'},
                    {name:'E',id:'e'},
                    {name:'F',id:'f'},
                    {name:'G',id:'g'},
                    {name:'H',id:'h'},
                    {name:'I',id:'i'},
                    {name:'J',id:'j'},
                    {name:'K',id:'k'},
                ]
            }
        },
        created() {
            this.GetList()
        },
        methods:{
            /*
            * type = 普通分类
            * area = 语言分类
            * initial = 按字母分类
            * limit = 返回数量
            * offset = 页数
            * */
            GetList(){
                this.axios.get('/artist/list',{
                    params:{
                        area:this.query.Language,
                        type:this.query.common,
                        initial:this.query.filtration
                    }
                }).then( ({data}) => {
                    if (data.code !== 200) return this.$message.error("获取列表失败！")
                    this.SingerList = data.artists
                    console.log(data)
                })
            },

            Language(id, index){
                this.Color.one = index
                this.query.Language = id
                this.GetList()
            },

            common(id, index){
                this.Color.two = index
                this.query.common = id
                this.GetList()
            },

            filtra(id, index){
                this.Color.three = index
                this.query.filtration = id
                this.GetList()
            }


        }
    }
</script>

<style lang="less" scoped>

    @ducolor:#828385;


    .color{
        background: #54575F;
        color: #000 !important;
    }
.classify_box{
    display: flex;
    margin-bottom: 10px;

  .box{
      width: 56px;
      height: 20px;
      display: flex;
      align-items: center;

      .title{
        width: 45px;
        /*  width: 100%;*/
          height: 100%;
         line-height: 20px;
          border-radius: 3px;
          margin: 0 auto;
            color: #828385;
          font-size: 12px;
          text-align: center;
          cursor: pointer;
      }
      .line{
          width: 1px;
          height: 12px;
          background: #32343B;
      }
  }
    span{
        font-size: 14px;
        color: @ducolor;
    }


}

    .line_mid{
        width: 100%;
        height: 1px;
        background: #23262C;
        margin-top: 20px;
    }

    .Singer_box{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
 .cont{
     width: 138px;
     height: 160px;
     margin-bottom: 15px;
     img{
         width: 138px;
         height: 138px;
     }

     span{
         font-size: 12px;
         color: #fff;

     }
        }
    }
</style>
