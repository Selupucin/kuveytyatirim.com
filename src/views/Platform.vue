<template>
  <div>
    <div class="about_top_content">
      <div class="row">
        <div class="col-md-6">
          <div class="about_top_left">
            <h4>Profesyonel <br />Yatırım Platformu</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse
            </p>

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
    <!-- about top content end -->

    <div class="row about_platfrom_bot">
      <div class="col-md-3">
        <div class="about_item">
          <div class="about_item_icon">
            <img :src="grafikIcon" />
          </div>
          <div class="about_item_text">Gerçek Zamanlı Fiyatlar</div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="about_item">
          <div class="about_item_icon">
            <img :src="ceIslemGecmisi" />
          </div>
          <div class="about_item_text">Detaylı çevrimiçi işlem geçmişi</div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="about_item">
          <div class="about_item_icon">
            <img :src="gostergeIcon" />
          </div>
          <div class="about_item_text">30 adet en popüler teknik gösterge</div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="about_item">
          <div class="about_item_icon">
            <img :src="forexIcon" />
          </div>
          <div class="about_item_text">Yüzlerce Forex & Hisse Aracısı</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "platform",
  bodyClass: "platform-page",
  props: {
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
    grafikIcon: {
      type: String,
      default: require("@/assets/img/grafik_icon.svg"),
    },
    ceIslemGecmisi: {
      type: String,
      default: require("@/assets/img/ce_islem_gecmisi.svg"),
    },
    gostergeIcon: {
      type: String,
      default: require("@/assets/img/gosterge_icon.svg"),
    },
    forexIcon: {
      type: String,
      default: require("@/assets/img/forex_icon.svg"),
    },
  },
};
</script>