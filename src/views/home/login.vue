<style lang="scss">
.container{
    height:100%;
    .login{
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        margin:auto;
        height:350px;
        text-align:center;
        .login-title{
            text-align:center;
        }
        #useremail{
            margin:0 auto;
        }
        #userpassword{
            margin:0 auto;
        }
    }
}
</style>

<template>
  <div class="container">
        <div class="login col-sm-4">
            <div class="login-inner">
                <p class="login-title">用户登录</p>
                <Form ref="formLogin" :model="formLogin" :rules="ruleLogin" >
                    <FormItem prop="email">
                        <Input type="text" class="col-sm-8" id="useremail" v-model="formLogin.username" placeholder="请输入用户名">
                        <Icon type="android-mail" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" class="col-sm-8" id="userpassword" name="password" v-model="formLogin.password" placeholder="请输入密码" @on-enter="login('formLogin')">
                        <Icon type="ios-locked" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem style="text-aling:center;margin-top:10px;">
                        <Button class="btn btn-group-justified" type="success" @click="login('formLogin')" style="width:65%;margin:15px auto;margin-bottom:0;" :loading="load">登录</Button>
                    </FormItem>
                    <FormItem style="text-aling:center;margin-top:10px;">
                        <a @click="signUp">注册一个新账号</a>
                    </FormItem>
                </Form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "login",
        data() {
            // 验证邮箱是否为空
        let validateLoginEmail = (rule, value, callback) => {
            /**验证邮箱**/
            // if (!(/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value))) {
            //     return callback(new Error('邮箱不能为空或邮箱错误'));
            // } else {
            //     callback();
            // }

            if (value === '') {
                return callback(new Error('用户名不能为空'));
            } else {
                callback();
            }
        };
        // 验证密码是否为空
        let validateLoginPassword = (rule, value, callback) => {
            if (value === '') {
                return callback(new Error('密码不能为空'));
            } else {
                callback();
            }
        };
        return {
            rememberPassword: false,
            load: false,
            formLogin: {
                username: '', //用户名
                password: ''  //密码
            },
            ruleLogin: {
                email: [{
                    validator: validateLoginEmail,
                    trigger: 'blur'
                }],
                password: [{
                    validator: validateLoginPassword,
                    trigger: 'blur'
                }]
            }
        }
        },
        created(){

        },
        methods:{
            login(name) {
                this.$store.state.token='';
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$router.push("/admin")
                    }
                })
            },
            signUp(){
               this.$router.push("/register") 
            }
        },
        mounted() {
         
        }
    }
</script>
