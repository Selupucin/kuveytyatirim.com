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
          <h3>Open Your Account</h3>
          <span
            >Opening an account undertakes that you are 18 years old and that
            you have read and accepted the confidentiality agreement.</span
          >

          <div class="ac_sec_form_item name">
            <input
              v-model="name"
              type="text"
              name="name"
              placeholder="Name Surname"
            />
          </div>
          <div class="ac_sec_form_item phone">
            <input
              v-model="phone"
              class="form_phone_item"
              type="text"
              name="number"
              id="mobPhone"
              placeholder="Phone"
            />
          </div>
          <div class="ac_sec_form_item mail">
            <input
              v-model="mail"
              type="mail"
              name="mail"
              placeholder="E-mail"
            />
          </div>
          <div class="ac_sec_form_item country">
            <input
              v-model="country"
              type="text"
              name="country"
              placeholder="Country"
            />
          </div>

          <span
            >Opening an account undertakes that you are 18 years old and that
            you have read and accepted the confidentiality agreement.</span
          >

          <span id="resMessage"></span>

          <button @click="onSubmit" class="submit_btn_taa">
            Move Your Account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "real-account",
  bodyClass: "real-account-page",
  methods: {
    onSubmit() {
      var GonderData = {
        name: this.name,
        mail: this.mail,
        country: this.country,
        phone: this.phone,
        ref: "RealHesapAc",
      };
      var gonder = axios
        .post("https://kuveyt.fxcrm.me/api/new", GonderData, {
          headers: {
            token: "2s98XDwWauJNjpXQRFvPgUwQFQrEEQ",
          },
        })
        .then((response) => {
          if (response.data.status == false || !response.data.status) {
            if (response.data.msg) {
              document.getElementById("resMessage").innerText =
                response.data.msg;
            } else {
              document.getElementById("resMessage").innerText = alert(
                "İşlemde bir hata oluştu, tekrar yönlendirileceksiniz."
              );
              setTimeout(() => {
                location.reload();
              }, 1500);
            }
          } else {
            document.getElementById("resMessage").innerText =
              "Kaydınız alındı.";
            setTimeout(() => {
              location.href("/login");
            }, 1500);
          }
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
  },
  data() {
    return {
      name: "",
      mail: "",
      country: "",
      phone: "",
    };
  },
  props: {
    aboutRight: {
      type: String,
      default: require("@/assets/img/about_right_img.jpg"),
    },
  },
};
</script>