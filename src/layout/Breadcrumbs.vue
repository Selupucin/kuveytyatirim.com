<template>
  <div class="breadcumb_bar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li>
        <router-link :to="pageLink">{{ pageName }}</router-link>
      </li>
    </ul>
  </div>
  <!--breadcumb bar end -->
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      pageName: this.$route.meta.pageName,
      pageLink: this.$route.meta.pageLink,
    };
  },
};
</script>