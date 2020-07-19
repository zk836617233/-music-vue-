<template>
    <div class="login_delog">
        <div class="backlogin" v-if="!registerBtn" @click="register(true)">< 返回登录</div>
        <slot name="out" class="out">
        </slot>
        <div class="login_box">
            <div class="img_box"></div>
            <div class="icon_box">
                <span class="el-icon-mobile-phone"></span>
                <input type="text" placeholder="请输入手机号" v-model="FormLogin.phone">
            </div>
            <div class="icon_box">
                <span class="el-icon-lock bor_none"></span>
                <input type="password" placeholder="请输入密码" v-model="FormLogin.password">
            </div>
            <div class="btn_box">
                <button @click="Login">{{btnshow}}</button>
            </div>

            <div class="zhuce_box">
                <a href="javascript:void(0)" v-if="registerBtn" @click="register(false)">注册</a>
            </div>

            <div class="terms_box">
                <input type="checkbox">
                同意<span>《服务条款》《隐私政策》《儿童隐私政策》</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                logindelog:true,
                FormLogin: [],

                // 按钮切换
                btnshow:'登录',
                // 显示注册按钮隐藏
                registerBtn:true
            }
        },
        created() {

        },
        methods:{
            // 点击注册
            register(code){
                if (code){
                    this.btnshow = '登录'
                }else{
                    this.btnshow = '注册'
                }

                this.registerBtn = code
            },


            Login() {


                this.axios.get("/login/cellphone", {
                    params: {
                        phone: this.FormLogin.phone,
                        password: this.FormLogin.password
                    }
                }).then(({data}) => {
                    console.log(data)
                    if (data.code !== 200) return this.$message.error("登录失败！")
                    this.$emit('UserInfo',data.profile)
                    // this.UserInfo = data.profile
                    // this.logindelog = false
                }).catch(res => {

                    return this.$message.error("登录失败！手机号或密码错误！")

                })
            },
        }

    }
</script>

<style lang="less" scoped>
    // 登录框
    .login_delog {
        width: 350px;
        height: 450px;
        position: absolute;
        top: 70px;
        left: 50%;
        transform: translate(-50%);
        z-index: 999;
        background: #fff;
        box-shadow: 0 0 3px #fff;
        /*padding: 0 40px;*/

        .backlogin{
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 12px;
            font-weight: 300;
            color: #000;
            cursor: pointer;
        }

        .out {
            float: right;
            margin: 10px 10px;
            cursor: pointer;

            &:hover {
                color: #867b7b;
            }
        }

        .login_box {
            width: 260px;
            height: 100%;
            margin: 0 auto;

            .terms_box {
                /*width: 100%;*/
                width: 400px;
                display: flex;
                font-size: 12px;
                margin-top: 20px;

                input {
                    width: 15px;
                    height: 15px;
                    margin-right: 5px;

                }

                span {
                    color: #507DAF !important;
                    font-size: 12px;
                }
            }

            .zhuce_box {
                width: 100%;
                text-align: center;

                a {
                    color: #0A0B0D;
                    font-size: 14px;
                }
            }

            .btn_box {
                margin-bottom: 20px;

                button {
                    width: 100%;
                    height: 40px;
                    background: #EA4848;
                    border: none;
                    outline: none;
                    cursor: pointer;
                    border-radius: 5px;
                    color: #fff;

                    &:hover {
                        background: #C72E2E;
                    }
                }
            }

            .img_box {
                height: 150px;
                /*border: 1px solid;*/
            }

            .icon_box {
                position: relative;
                margin-bottom: 10px;

                span {
                    position: absolute;
                    top: 50%;
                    transform: translate(0, -50%);
                    left: 10px;
                }
            }

            input {
                width: 260px;
                height: 40px;
                border: 1px solid #D8D8D8;
                text-indent: 35px;
                outline: none;
                border-radius: 5px;
            }
        }
    }
</style>
