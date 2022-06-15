<template>
  <div>
    <div class="about_top_content">
      <div class="row">
        <div class="col-md-6">
          <div class="about_top_left">
            <h3>
              Our FSCA License guarantees investors' investments of up to
              100,000 USD.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h3>WHY KUWAIT INVESTMENT ?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="about_right_img">
            <img :src="aboutRight" />
          </div>
        </div>
      </div>
    </div>
    <!-- about top content end -->

    <div class="about_botm_content">
      <div class="row">
        <div class="col-md-6">
          <div class="about_bot_left">
            <img :src="aboutLeft" />
            <a href="#"
              ><div class="about_play">
                <div class="play_icon"></div></div
            ></a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="about_bot_right">
            <h3>Our Vision and Mission</h3>
            <p>
              Kuwait Investment, as a branch of Kuwait Global, which has been a
              pioneer in the sector for many years, aims to lead the sector by
              expanding its investor network in the field of financial markets
              in the sector with its strong technological infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- about bot content end -->
  </div>
</template>

<script>
export default {
  name: "about",
  bodyClass: "about-page",
  props: {
    aboutRight: {
      type: String,
      default: require("@/assets/img/about_right_img.jpg"),
    },
    aboutLeft: {
      type: String,
      default: require("@/assets/img/about_left_img.jpg"),
    },
  },
};
</script>