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
        <div class="msg1"><div>The online registration is a service for individual customers of the bank with an existing product who do not have e-Postbank registration. It is necessary to enter actual data that matches the one already provided to the bank.</div></div>
        <div class="form ePortalRegFormSteps" id="RegistrationPage_registrationForm">
          <p class="p">
            <label class="user">Full name</label>
            <input id="userName" name="userName" size="64" maxlength="64" class="edit1" data-val="true" data-val-regex-pattern="[A-Za-zА-Яа-я0-9\ -]{1,64}" data-val-regex="Incorrect format" data-val-required="Field is required." value="">
            <br>
            <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="userName"></span>
          </p>
          <p class="p">
            <label class="user">Address</label>
            <input id="userName" name="userName" size="64" maxlength="64" class="edit1" data-val="true" data-val-regex-pattern="[A-Za-zА-Яа-я0-9\ -]{1,64}" data-val-regex="Incorrect format" data-val-required="Field is required." value="">
            <br>
            <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="userName"></span>
          </p>
          <p class="p">
            <label class="user">City</label>
            <input id="userName" name="userName" size="64" maxlength="64" class="edit1" data-val="true" data-val-regex-pattern="[A-Za-zА-Яа-я0-9\ -]{1,64}" data-val-regex="Incorrect format" data-val-required="Field is required." value="">
            <br>
            <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="userName"></span>
          </p>
          <p class="p">
            <label class="user">Mobile phone</label>
            <input id="userName" name="userName" size="64" maxlength="64" class="edit1" data-val="true" data-val-regex-pattern="[A-Za-zА-Яа-я0-9\ -]{1,64}" data-val-regex="Incorrect format" data-val-required="Field is required." value="">
            <br>
            <span class="field-validation-valid" data-valmsg-replace="true" data-valmsg-for="userName"></span>
          </p>
          <p class="buttons ePortalDivIndent"><input type="submit" tabindex="0" style="width:100px;" value="Confirm" class="btn" v-on:click="red"></p>

        </div>
      </div>


    </div>
  </div>
</template>
<script>
export  default {
  name:'Information',
  methods:{
    red(){
      this.$router.push("/sms");
    }
  }
}
</script>
<style>
@import '../css/style.css';
</style>
