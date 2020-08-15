<template>
    <div>
       <table  cellspacing="0px" cellpadding="0px">
           <thead>
           <tr :style="{'@table-height':tableHeight}">
               <td v-for="(item, index) in titleList" :key="index">{{item.title}}</td>
<!--               <td>操作</td>-->
<!--               <td>音乐标题</td>-->
<!--               <td>歌手</td>-->
<!--               <td>专辑</td>-->
<!--               <td>时长</td>-->
           </tr>
           </thead>
           <tbody>
           <tr v-for="(item, index) in model">
               <td>{{index + 1}}</td>
               <td>{{item.singer}}</td>
               <td>{{item.name}} <span v-if="item.alia[0]">({{item.alia[0] | demo}})</span> </td>
               <td>{{item.ar[0].name}}</td>
               <td>{{item.al.name}}</td>
               <td>{{item.key}}</td>
           </tr>
           </tbody>
       </table>
    </div>
</template>

<script>
    export default {
        name: "index",

        props:{
            titleList:{
                type:Array,
            },
            model:{
                    type:Array,
            },
            demo: {
                type:Array,
            },
            // 控制表格高度
            tableHeight:{
                type:Number,
                default:60,
            }
        },
        filters:{
            demo(val){
                console.log(val)
                if (!val) return
                if (val.length > 15){
                    return  val.slice(0,15) + '...'
                }
                return val
            }
        },
        data(){
            return{
                tableHeight:90+ 'px',
                list:[
                    {title:'123'},
                    {title:'123'},
                    {title:'123'},
                    {title:'123'},
                    {title:'123'},
                ],
                data:[]
            }
        },
        mounted() {
            console.log(this.demo)

        },


    }
</script>

<style lang="less" scoped>

    @table-height: 30px;

 :root{

 }
    table{
        border: 1px solid #23262C;
        width: 100%;
        color: #fff;
        thead{
            tr{
                color: #828385;
               font-size: 13px;
                font-weight: 300;
                height: @table-height;
                td{

                    padding: 0 5px;
                    border-left: 1px solid #23262C;
                    border-bottom: 1px solid #23262C;
                }
                td:nth-of-type(3){
                    width: 265px;
                }
            }

        }

        tbody{

            tr{
                height: 30px;
                font-size: 12px;
                color: #828385;
                &:hover{
                    background: #232529;
                }
                td{
                  color: #828385;
                }
                td:nth-of-type(3){
                    color: #DCDDE4;
                    span{
                        color: #5F5F63;
                    }
                }
            }
        }
    }


</style>
