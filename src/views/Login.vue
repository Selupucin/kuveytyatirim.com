<template>
  <div class="account_section">
    <div class="row">
      <div class="col-md-6">
        <div class="about_section_img">
          <img :src="aboutRight" />
        </div>
      </div>
      <div class="col-md-6">
        <div class="account_section_form">
          <h3>Open a real account</h3>
          <span
            >Opening an account undertakes that you are 18 years old and that
            you have read and accepted the confidentiality agreement.</span
          >

          <div class="ac_sec_form_item name">
            <input type="text" name="" placeholder="Name Surname" />
          </div>
          <div class="ac_sec_form_item phone">
            <input type="text" name="" placeholder="Phone" />
          </div>
          <div class="ac_sec_form_item mail">
            <input type="text" name="" placeholder="E-mail" />
          </div>

          <span
            >Opening an account undertakes that you are 18 years old and that
            you have read and accepted the confidentiality agreement.</span
          >

          <button class="submit_btn_taa">Open a real account</button>

          <h6>Already an have a account? <a href="#">Sign In</a></h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  bodyClass: "login-page",
  props: {
    aboutRight: {
      type: String,
      default: require("@/assets/img/about_right_img.jpg"),
    },
  },
};
</script>