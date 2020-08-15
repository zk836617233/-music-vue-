<template>
    <div class="login_delog">
        <div class="backlogin" v-if="!registerBtn" @click="register(true)">< 返回登录</div>
        <slot name="out" class="out">
        </slot>
        <div class="login_box" v-if="tagnote">
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
                <button @click="Login" v-if="btnshow">登录</button>
                <button @click="singIn" v-else>注册</button>
            </div>

            <div class="zhuce_box">
                <a href="javascript:void(0)" v-if="registerBtn" @click="register(false)">注册</a>
            </div>

            <div class="terms_box">
                <input type="checkbox">
                同意<span>《服务条款》《隐私政策》《儿童隐私政策》</span>
            </div>
        </div>
        <div class="note-box" v-else>
            <div class="note-title">为了安全，我们向你的手机发送短信校验码</div>
            <div class="note-mid">
                <input type="text" v-model="note" placeholder="填写验证码">
                <button :disabled="noteShow" :class="noteShow ? 'disabled' : ''" @click="resend">
                    重新获取
                    <span v-if="noteShow">({{remainingTime}})</span>
                </button>
            </div>
            <div class="note-btn">
                <button @click="verify">下一步</button>
            </div>
        </div>

        <el-dialog
                title="注册"
                :visible.sync="dialogVisible"
                width="30%"
                >
            <el-input v-model="FormLogin.name" placeholder="请输入呢称"></el-input>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>

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
                registerBtn:true,
                // 验证码
                note:'',
                tagnote:true,
                // 显示重新发送按钮
                noteShow:false,
                remainingTime:60,
                dialogVisible:false
            }
        },
        created() {

        },
        methods:{
            // 点击注册
            register(code){
                if (code){
                    this.btnshow = true
                    this.tagnote = true
                }else{
                    this.btnshow = false
                    this.FormLogin = []
                }

                this.registerBtn = code
            },

            // 登录
            Login() {
                this.axios.get("/login/cellphone", {
                    params: {
                        phone: this.FormLogin.phone,
                        password: this.FormLogin.password
                    }
                }).then(({data}) => {
                    console.log(data)
                    if (data.code !== 200) return this.$message.error("登录失败！")
                    this.axios.get('/login/status').then( res =>{
                        console.log(res)
                    })
                    this.$emit('UserInfo',data.profile)


                    // this.UserInfo = data.profile
                    // this.logindelog = false
                }).catch(res => {

                    return this.$message.error("登录失败！手机号或密码错误！")

                })
            },

            // 注册
            singIn() {
                this.axios.get('/cellphone/existence/check',{
                    params:{
                        phone:this.FormLogin.phone
                    }
                }).then( ({data}) =>{
                    if (data.code !== 200){
                       return  this.$message.error("注册时发生错误请重试！")
                    }
                    if (data.exist !== -1){
                        return this.$message.error("该手机号以被注册过！请直接登录")
                    }
                    this.tagnote = false
                    this.noteShow = true
                    // 调用 发送验证码
                    this.resend()
                })
            },




            // 重新发送验证码
            resend(){
                this.noteShow = true
                this.getNote()
                let InTime = setInterval( () => {
                    this.remainingTime--
                    if (this.remainingTime === 1){
                        clearInterval(InTime)
                        this.remainingTime = 59
                        this.noteShow = false
                    }
                },1000)
            },

            // 获取短信验证码
            getNote(){
                this.axios.post('/captcha/sent',
                    {
                        phone:this.FormLogin.phone
                    }).then( ({data}) => {
                    if (data.code !== 200) return this.$message.error("发送验证码失败！")

                    this.$message.success("发送成功！请查看手机短信验证码")
                }).catch( res => {
                    return this.$message.error("发送验证码超过限制:每个手机号一天只能发5条验证码")
                })
            },

            // 验证手机验证码是否正确
            verify(){

                this.axios.get('/captcha/verify',{
                    params:{
                        phone:this.FormLogin.phone,
                        captcha:this.note
                    }

                }).then( ({data}) => {
                    if (data.code !== 200){
                        return this.$message.error("验证码错误")
                    }
                    this.$message.success("验证成功！")
                    this.dialogVisible = true

                }).catch( res => {
                    console.log(res)
                    return this.$message.error("验证码错误")
                })
            }

        }

    }
</script>

<style lang="less" scoped>
    .disabled{
        background: #DEDEDE !important;
        cursor: not-allowed!important;
    }
    // wyy按钮
    .WYYBtn(){
        color: #fff;
        background: #EA4848;
        font-size: 16px;
        border: none;
        outline: none;
        border-radius: 5px;
        font-weight: 300;

        &:hover{
            background: #C72E2E;
            cursor: pointer;
        }
    }


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

        .note-box{
            width: 260px;
            margin: 130px auto;

            .note-title{
                font-size: 12px;
                text-align: center;
                color: #333;
            }
            .note-mid{
                width: 260px;
                margin: 40px auto;
                 display: flex;
                justify-content: space-between;
                input{
                    width: 125px;
                    height: 40px;
                    font-size: 14px;
                    text-indent: 10px;
                    border: 1px solid #D8D8D8;
                    outline: none;
                    border-radius: 5px;
                }

                button{
                    width: 125px;
                    height: 40px;
                    .WYYBtn();
                }
            }

            .note-btn{
                button{
                    width: 260px;
                    height: 40px;
                    .WYYBtn();
                }
            }
        }
    }
</style>
