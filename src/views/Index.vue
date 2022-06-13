<template>
  <div>
    <div class="home_slider">
      <div class="row">
        <div class="col-md-6">
          <div class="home_slider_text">
            <h3>Invest in <br />world markets!</h3>
            <span
              >Open an account now to invest <br />in the world's leading
              brands!</span
            >
            <div class="cont_lgn_btn">Login</div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="home_slider_img">
            <img :src="homeSlider" />
          </div>
        </div>
      </div>
    </div>
    <!-- Home Slider End -->

    <div class="home_bac_bar">
      <!-- Swiper -->
      <div class="swiper HomebGSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="bac_swi_item">
              <div class="bac_item_img">
                <img :src="bacIcon" />
              </div>
              <div class="bac_item_text">
                <h5>DOW INC</h5>
                <h6>57.22 USD</h6>
                <span>+0.04 (+0.07%)</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="bac_swi_item">
              <div class="bac_item_img">
                <img :src="bacIconTwo" />
              </div>
              <div class="bac_item_text">
                <h5>DOW INC</h5>
                <h6>57.22 USD</h6>
                <span>+0.04 (+0.07%)</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="bac_swi_item">
              <div class="bac_item_img">
                <img :src="bacIconThree" />
              </div>
              <div class="bac_item_text">
                <h5>DOW INC</h5>
                <h6>57.22 USD</h6>
                <span>+0.04 (+0.07%)</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="bac_swi_item">
              <div class="bac_item_img">
                <img :src="bacIcon" />
              </div>
              <div class="bac_item_text">
                <h5>DOW INC</h5>
                <h6>57.22 USD</h6>
                <span>+0.04 (+0.07%)</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="bac_swi_item">
              <div class="bac_item_img">
                <img :src="bacIcon" />
              </div>
              <div class="bac_item_text">
                <h5>DOW INC</h5>
                <h6>57.22 USD</h6>
                <span>+0.04 (+0.07%)</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="bac_swi_item">
              <div class="bac_item_img">
                <img :src="bacIcon" />
              </div>
              <div class="bac_item_text">
                <h5>DOW INC</h5>
                <h6>57.22 USD</h6>
                <span>+0.04 (+0.07%)</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="bac_swi_item">
              <div class="bac_item_img">
                <img :src="bacIcon" />
              </div>
              <div class="bac_item_text">
                <h5>DOW INC</h5>
                <h6>57.22 USD</h6>
                <span>+0.04 (+0.07%)</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="bac_swi_item">
              <div class="bac_item_img">
                <img :src="bacIcon" />
              </div>
              <div class="bac_item_text">
                <h5>DOW INC</h5>
                <h6>57.22 USD</h6>
                <span>+0.04 (+0.07%)</span>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="bac_swi_item">
              <div class="bac_item_img">
                <img :src="bacIcon" />
              </div>
              <div class="bac_item_text">
                <h5>DOW INC</h5>
                <h6>57.22 USD</h6>
                <span>+0.04 (+0.07%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Home Bac Bar End -->

    <div class="home_bar_fmr_cntn">
      <div class="home_form_bar">
        <div class="row">
          <div class="col-md-4">
            <div class="hm_form_left_icon">
              <img :src="hmFormLeftIcon" />
            </div>
            <div class="hm_form_left_text">
              <span
                >Yatırımı öğrenmek için hemen <br /><b>ÜCRETSİZ</b> demo hesabı
                açın!</span
              >
            </div>
          </div>
          <div class="col-md-4">
            <div class="home_form_content">
              <div class="hm_form_item">
                <label>Name Surname</label>
                <input type="text" name="" />
              </div>
              <div class="hm_form_item">
                <label>Phone</label>
                <input type="text" name="" />
              </div>
              <div class="hm_form_item">
                <label>E-mail</label>
                <input type="text" name="" />
              </div>
              <div class="row">
                <div class="col-md-6">
                  <button class="form_btn_left">Demo Hesap Oluştur</button>
                </div>
                <div class="col-md-6">
                  <button class="form_btn_right">Gerçek Hesap Oluştur</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="hm_form_right_text">
              <h6>
                10.000$ sanal para ile size özel tanımlanan platformlarda
                yatırım yaparak forexi keşfedin!
              </h6>
              <span
                >*Butona tıklayarak kişisel verilerin işleme politikasını,
                kullanım koşullarını ve gizlilik sözleşmesini kabul etmiş
                olursunuz.</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- home form bar end -->

    <div class="home_section_one">
      <h2>Profesyonel Yatırım Platformu</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="hm_sec_one_item">
            <div class="hm_sec_one_icon">
              <img :src="userIcon" />
            </div>
            <div class="hm_sec_one_text">
              <h4>Gerçek Hesap Oluştur</h4>
              <span
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim</span
              >
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="hm_sec_one_item">
            <div class="hm_sec_one_icon">
              <img :src="walletIcon" />
            </div>
            <div class="hm_sec_one_text">
              <h4>Hesabına Para Yatır</h4>
              <span
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim</span
              >
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="hm_sec_one_item">
            <div class="hm_sec_one_icon">
              <img :src="financeIcon" />
            </div>
            <div class="hm_sec_one_text">
              <h4>Gerçek Hesap Oluştur</h4>
              <span
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Home Section End -->

    <div class="home_section_two">
      <div class="row">
        <div class="col-md-6">
          <div class="hm_sc_two_left">
            <h2>Profesyonel <br />Yatırım Platformu</h2>
            <span
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in</span
            >

            <div class="row">
              <div class="col-md-6">
                <div class="mobil_app_item">
                  <img :src="iosIcon" />
                  <h6>IOS için indirin</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mobil_app_item">
                  <img :src="androidIcon" />
                  <h6>Android için indirin</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mobil_app_item">
                  <img :src="windowsIcon" />
                  <h6>Windows için indirin</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="home_section_two_right">
            <img :src="yatirim" />
          </div>
        </div>
      </div>
    </div>
    <!-- Home Section Two End -->

    <div class="home_section_three">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="sc_three_left">
              <img :src="takim" />
            </div>
          </div>
          <div class="col-md-7">
            <div class="sc_three_right">
              <h2>Profesyonel Yatırım Platformu</h2>
              <span
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id
              </span>

              <div class="cont_lgn_btn">Gerçek Hesap Oluştur</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Home Section Three End -->

    <div class="home_section_four">
      <div class="row">
        <div class="col-md-7">
          <div class="sc_four_left">
            <h4>Profesyonel Yatırım Platformu</h4>
            <span
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea
            </span>

            <div class="row">
              <div class="col-md-6">
                <div class="sc_four_item">
                  <img :src="money" />
                  <div class="sc_four_item_text">
                    <h5>1.213.543 $</h5>
                    <h6>İşlem Hacmi</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="sc_four_item">
                  <img :src="yellowUser" />
                  <div class="sc_four_item_text">
                    <h5>1.213.543 $</h5>
                    <h6>Kullanıcı Sayısı</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="sc_four_item">
                  <img :src="money" />
                  <div class="sc_four_item_text">
                    <h5>1.213.543 $</h5>
                    <h6>İşlem Hacmi</h6>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="sc_four_item">
                  <img :src="money" />
                  <div class="sc_four_item_text">
                    <h5>1.213.543 $</h5>
                    <h6>İşlem Hacmi</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="sc_four_right">
            <img :src="personel" />
          </div>
        </div>
      </div>
    </div>
    <!-- Home Secton Four End -->

    <div class="home_section_five">
      <h3>Forex Income Calculator</h3>
      <span
        >You can pre-calculate the amount you will earn by choosing your
        <br />margin, leverage and currency movement.</span
      >

      <div class="home_calcu">
        <div class="row">
          <div class="col-md-3">
            <div class="home_calcu_item">
              <label>Guarantee</label>
              <input type="text" name="" value="23.233" />
            </div>
          </div>
          <div class="col-md-3">
            <div class="home_calcu_item">
              <label>Lever</label>
              <select>
                <option selected="">1/25</option>
                <option>2/25</option>
              </select>
            </div>
          </div>

          <div class="col-md-3">
            <div class="home_calcu_item">
              <label>Guarantee</label>
              <div class="item_calcu_range">
                <input
                  type="range"
                  value="24"
                  min="1"
                  max="100"
                  oninput="this.nextElementSibling.value = this.value"
                />
                <output>24</output>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="live_calcu">
              <div class="live_calcu_left">
                <img :src="paraIcon" />
              </div>
              <div class="live_calcu_right">
                <h4>Your Earnings</h4>
                <span>1.213.543 $</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Home section five end -->

    <div class="home_section_six">
      <h5>What we offer</h5>

      <div class="row">
        <div class="col-md-3">
          <div class="what_item">
            <span>Advantageous <br />Account Groups</span>
          </div>
        </div>
        <div class="col-md-3">
          <div class="what_item">
            <span>Basic <br />analysis support</span>
          </div>
        </div>
        <div class="col-md-3">
          <div class="what_item">
            <span>5/24 <br />Live Support</span>
          </div>
        </div>
        <div class="col-md-3">
          <div class="what_item">
            <span>EFT and Wire Transfer Options in TL-USD-EUR to T.C</span>
          </div>
        </div>
        <div class="col-md-3">
          <div class="what_item">
            <span>Corporate <br />Bank Accounts</span>
          </div>
        </div>
        <div class="col-md-3">
          <div class="what_item">
            <span>made until <br />16:00 and 24/5</span>
          </div>
        </div>
        <div class="col-md-3">
          <div class="what_item">
            <span>Ensuring the same day sending of withdrawal requests</span>
          </div>
        </div>
        <div class="col-md-3">
          <div class="what_item">
            <span>Up to 1/200 leverage ratio</span>
          </div>
        </div>
      </div>
    </div>
    <!-- home section six end -->
  </div>
</template>

<script>
export default {
  name: "index",
  bodyClass: "index-page",
  props: {
    homeSlider: {
      type: String,
      default: require("@/assets/img/home_slider_img.svg"),
    },
    bacIcon: {
      type: String,
      default: require("@/assets/img/bac_icon1.svg"),
    },
    bacIconTwo: {
      type: String,
      default: require("@/assets/img/bac_icon2.svg"),
    },
    bacIconThree: {
      type: String,
      default: require("@/assets/img/bac_icon3.svg"),
    },
    hmFormLeftIcon: {
      type: String,
      default: require("@/assets/img/hm_form_left_icon.svg"),
    },
    userIcon: {
      type: String,
      default: require("@/assets/img/user_icon.svg"),
    },
    walletIcon: {
      type: String,
      default: require("@/assets/img/wallet_icon.svg"),
    },
    financeIcon: {
      type: String,
      default: require("@/assets/img/finance_icon.svg"),
    },
    iosIcon: {
      type: String,
      default: require("@/assets/img/ios_icon.svg"),
    },
    androidIcon: {
      type: String,
      default: require("@/assets/img/android_icon.svg"),
    },
    windowsIcon: {
      type: String,
      default: require("@/assets/img/windows_icon.svg"),
    },
    yatirim: {
      type: String,
      default: require("@/assets/img/yaitirim_img.svg"),
    },
    takim: {
      type: String,
      default: require("@/assets/img/takim_img.svg"),
    },
    money: {
      type: String,
      default: require("@/assets/img/money_icon.svg"),
    },
    yellowUser: {
      type: String,
      default: require("@/assets/img/yellow_user_icon.svg"),
    },
    personel: {
      type: String,
      default: require("@/assets/img/personel_img.svg"),
    },
    paraIcon: {
      type: String,
      default: require("@/assets/img/para_icon.svg"),
    },
  },
};
</script>
