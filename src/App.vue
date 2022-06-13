<template>
  <div class="container ">
    <router-view name="header" />
    <router-view name="breadcrumbs" />
    <div>
      <router-view />
    </div>
    <router-view name="footer" />
  </div>
</template>
