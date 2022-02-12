<template>

  <div id="login-container" class="ePortalRegForm">

    <div class="Main-Content" style="width: 90%;margin: 0 auto;padding-bottom: 10px;">
      <div id="SessionAuthorization_m_checkOTPControl_m_validate_OTP">
        <div id="div_CRAI">
          <div class="logo"><img style="width:200px" src="../img/logo-pb-en.svg" alt="Welcome to ePostbank">
            <h3>Additional Authentication</h3>
          </div>

          <table class="filterBG">
            <tbody>
            <tr><td colspan="4">
              Моля, потвърдете с кода получен чрез Viber/SMS или автоматично обаждане, валиден до 11.02.2022 22:53:11
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
              Моля, потвърдете с кода получен чрез електронна поща  или автоматично обаждане, валиден до 11.02.2022 22:53:11
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
            <a href="#" id="Logout" style="float:right;" class="blue" onclick="DoLogout()"><span>Logout</span></a>
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
