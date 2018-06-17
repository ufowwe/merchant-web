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
        #userpassword2{
            margin:0 auto;
        }
        a{
            font-style:normal;
            text-decoration:underline;
        }
    }
}
</style>

<template>
  <div class="container">
        <div class="login col-sm-4">
            <div class="login-inner">
                <p class="login-title">欢迎注册</p>
                <Form ref="formReg" :model="formReg" >
                    <FormItem>
                        <Input type="text" class="col-sm-8" id="useremail" v-model="formReg.username" placeholder="请输入用户名">
                        <Icon type="android-mail" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Input type="password" class="col-sm-8" id="userpassword" name="password" v-model="formReg.password" placeholder="请输入密码">
                        <Icon type="ios-locked" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Input type="password" class="col-sm-8" id="userpassword2" name="password" v-model="formReg.password" placeholder="请再次输入密码">
                        <Icon type="ios-locked" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                        <div style="margin-top:18px;">
                            <Checkbox v-model="agree">我同意注册协议</Checkbox>
                        </div>
                    <FormItem style="text-aling:center;margin-top:10px;">
                        <Button v-if="agree" class="btn btn-group-justified" type="success" @click="register('formLogin')" style="width:65%;margin:15px auto;margin-bottom:0;" :loading="load">注册</Button>
                        <Button v-else="agree" class="btn btn-group-justified" disabled  style="width:65%;margin:15px auto;margin-bottom:0;">注册</Button>
                    </FormItem>
                    <FormItem style="text-aling:center;margin-top:10px;">
                        <span>已经有账户了？<a @click="signIn">点击登陆</a></span>
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
            return {
                agree: false,
                load:false,
                formReg:{}
            }
        },
        created(){

        },
        methods:{
            signIn(){
                this.$router.push("/home")
            },
            //点击注册
            register(){

            }
        },
        mounted() {
         
        }
    }
</script>
