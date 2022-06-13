<template>
  <div>
    <div class="footer">
      <div class="row">
        <div class="col-md-4">
          <div class="footer_logo"><!--Logo--></div>
          <span
            >Our FSCA License guarantees investors' investments of up to 100,000
            USD.</span
          >

          <div class="footer_social">
            <ul>
              <li>
                <a href="#"><div class="fa_social_icon"></div></a>
              </li>
              <li>
                <a href="#"><div class="twi_social_icon"></div></a>
              </li>
              <li>
                <a href="#"><div class="ins_social_icon"></div></a>
              </li>
              <li>
                <a href="#"><div class="pin_social_icon"></div></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="footer_menu_item col-md-3">
              <label>Site Map</label>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Corporate</a></li>
                <li><a href="/trading">Trading</a></li>
                <li><a href="/platform">Platform</a></li>
                <li><a href="/spreads">Spreads</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div class="footer_menu_item col-md-3">
              <label>Investment</label>
              <ul>
                <li><a href="/bulten">Bulten</a></li>
                <li><a href="/demo-account">Demo Account</a></li>
                <li><a href="/real-account">Real Account</a></li>
                <li><a href="/money">Money</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms">Terms</a></li>
                <li><a href="/risk">Risk</a></li>
              </ul>
            </div>
            <div class="footer_menu_item col-md-6">
              <label>Our Offices</label>
              <ul>
                <li>
                  <img :src="kvFlag" /><a href="#">Kuveyt: +972 3 7621622</a>
                </li>
                <li>
                  <img :src="usFlag" /><a href="#">Londra: +44 20 80892277</a>
                </li>
                <li>
                  <img :src="rmFlag" /><a href="#">Romania: +40 31 2295433</a>
                </li>
                <li>
                  <img :src="msFlag" /><a href="#">Moscow: +7 499 6097072</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer end -->
    <div class="footer_bottom">
      <span>Copyright © 2019 | Powered by KMD FX Ltd.</span>
      <div class="foo_bottom_center">
        <img :src="foCenLogo" />
      </div>
    </div>
    <!-- Footer bottom end -->
  </div>
</template>
<script>
export default {
  props: {
    kvFlag: {
      type: String,
      default: require("@/assets/img/kv_flag.svg"),
    },
    usFlag: {
      type: String,
      default: require("@/assets/img/us_flag.svg"),
    },
    rmFlag: {
      type: String,
      default: require("@/assets/img/rm_flag.svg"),
    },
    msFlag: {
      type: String,
      default: require("@/assets/img/ms_flag.svg"),
    },
    foCenLogo: {
      type: String,
      default: require("@/assets/img/fo_cen_logo.svg"),
    },
  },
};
</script>
