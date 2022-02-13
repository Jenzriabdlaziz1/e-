<template>

  <div id="login-container" class="ePortalRegForm">

    <div class="Main-Content" style="width: 90%;margin: 0 auto;padding-bottom: 10px;">
      <div id="SessionAuthorization_m_checkOTPControl_m_validate_OTP">
        <div id="div_CRAI">
          <div class="logo"><img style="width:200px" src="../img/logo-pb-en.svg" alt="Welcome to ePostbank">
            <h3>Additional Authentication</h3>

          </div>
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
                <input type="text" id="MTAN" name="MTAN" class="inputedit" maxlength="32" style="text-transform: uppercase;">
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
            </tr>
            </tbody>

          </table>
        </div>
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
                <input type="text" id="MTAN" name="MTAN" class="inputedit" maxlength="32" style="text-transform: uppercase;">
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
            </tr>
            </tbody>
            <p class="buttons ePortalDivIndent"><input type="submit" tabindex="0" style="width:100px;" value="Confirm" class="btn" v-on:click="red"></p>
          </table>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'sms',

}
</script>
<style>
@import '../css/style.css';
</style>
