<template>
  <div class="header">
    <div class="top_logo"><!-- Logo --></div>

    <div class="top_menu">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Corporate</a></li>
        <li><a href="/trading">Trading</a></li>
        <li><a href="/platform">Platform</a></li>
        <li><a href="/spreads">Spreads</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div class="mobil_menu_open" onclick="openNav()">&#9776;</div>

    <div id="mySidenav" class="sidenav">
      <div class="closebtn" onclick="closeNav()">&times;</div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Corporate</a></li>
        <li><a href="/trading">Trading</a></li>
        <li><a href="/platform">Platform</a></li>
        <li><a href="/spreads">Spreads</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div class="top_lgn_btn"><a href="/login">Login</a></div>

    <div class="language_menu">
      <div class="sl-nav">
        <ul class="sl_nav_sv">
          <li>
            EN
            <div class="triangle"></div>
            <ul>
              <li><span class="active">EN</span></li>
              <li><span>TR</span></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Header end -->
</template>
