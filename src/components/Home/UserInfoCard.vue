<template>
    <div style="position: absolute;top: 50px;right: 70px;z-index: 999">
        <div class="box">
                <div class="header" >
                    <img src="http://p1.music.126.net/-5qHEP5HSChuus4ZexQJDA==/109951165162410997.jpg" alt="" style="width: 42px;height: 42px">
                    <div>王巴德</div>
                </div>
            <div class="mid">
                <div class="mid_box">
                    <div class="cont">0</div>
                    <div>动态</div>
                </div>
                <div class="mid_box">
                    <div class="cont">1</div>
                    <div>关注</div>
                </div>
                <div class="mid_box">
                    <div class="cont">3</div>
                    <div>粉丝</div>
                </div>
            </div>

            <div class="one">
                <div class="hovers"> <span class="el-icon-medal icon"></span> 会员中心</div>
                <div class="hovers"> <span class="el-icon-collection-tag icon"></span> 等级</div>
                <div class="hovers"> <span class="el-icon-shopping-cart-2 icon"></span> 商城</div>
            </div>
            <div class="two">
                <div class="hovers"><span class="el-icon-setting icon"></span> 个人信息设置</div>
                <div class="hovers"><span class="el-icon-mobile icon"></span>绑定社交账号</div>
            </div>
            <div class="outlogin">
                <span class="el-icon-switch-button icon"></span>退出登录
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfoCard"
    }
</script>

<style lang="less" scoped>
    .hovors{
        cursor: pointer;
        &:hover{

            color: red!important;
            background: #393B3E!important;
        }

    }

.box{
    width: 275px;
    height: 348px;
    /*border: 1px solid;*/
    border-radius: 5px;
    top: 20px;
    background-color: #2D2F33;

    .header{
        width: 100%;
        height: 75px;
        padding: 0 20px;
        align-items: center;
        display: flex;
        color: #DCDDE4;
        font-weight: 300;
        img{
            margin-right: 15px;
            font-size: 13px;
        }
    }

    .mid{
        width: 100%;
        height: 50px;

        display: flex;
        .mid_box{
            width: 33.33%;
            text-align: center;

            &:hover{
                cursor: pointer;
                div:nth-of-type(2){
                    color: #DCDDE4!important;
                }

            }

            .cont{
                color: #D4D4D4;
                font-weight: 600;
            }

            div:nth-of-type(2){
                color: #828385;
                font-size: 14px;
                font-weight: 300;
            }
        }
    }

    .one{
        height: 110px;
        border-top: 1px solid #36383C;
        border-bottom:1px solid #36383C ;
        line-height: 36px;


        div{
            height: 33.33%;
            color: #DCDDE4;
            font-size: 12px;
            font-weight: 300;
        }
    }

    .two{
        height: 73px;
        border-bottom:1px solid #36383C ;
        line-height: 36px;
        div{
            height: 50%;
            color: #DCDDE4;
            font-size: 12px;
            font-weight: 300;
        }
    }

    .outlogin{
        height: 36px;
            color: #DCDDE4;
            font-size: 12px;
            font-weight: 300;
        line-height: 36px;
    }
}


.icon{
        font-size: 22px !important;
   margin: 0 15px 0 15px;
}
</style>
