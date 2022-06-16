<template>
  <div style="margin-bottom: 150px">
    <div id="webterminal" style="width: 100%; height: 600px"></div>
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