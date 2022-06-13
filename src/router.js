import Vue from "vue";
import Router from "vue-router";

import Index from "./views/Index.vue";
import About from "./views/About.vue";
import Bulten from "./views/Bulten.vue";
import Login from "./views/Login.vue";
import DemoAccount from "./views/DemoAccount.vue";
import RealAccount from "./views/RealAccount.vue";
import Platform from "./views/Platform.vue";
import Risk from "./views/Risk.vue";
import Contact from "./views/Contact.vue";
import PrivacyPolicy from "./views/PrivacyPolicy.vue";
import Spreads from "./views/Spreads.vue";
import Trading from "./views/Trading.vue";
import Money from "./views/Money.vue";
import Terms from "./views/Terms.vue";

import MainNavbar from "./layout/MainNavbar.vue";
import Breadcrumbs from "./layout/Breadcrumbs.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/about",
      name: "about",
      components: { default: About, header: MainNavbar, breadcrumbs: Breadcrumbs, footer: MainFooter },
      meta: {
        pageName: "About",
        pageLink: "/about"
      }
    },
    {
      path: "/bulten",
      name: "bulten",
      components: { default: Bulten, header: MainNavbar, breadcrumbs: Breadcrumbs, footer: MainFooter },
      meta: {
        pageName: "Bulten",
        pageLink: "/bulten"
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, breadcrumbs: Breadcrumbs, footer: MainFooter },
      meta: {
        pageName: "Login",
        pageLink: "/login"
      }
    },
    {
      path: "/demo-account",
      name: "demo-account",
      components: { default: DemoAccount, header: MainNavbar, breadcrumbs: Breadcrumbs, footer: MainFooter },
      meta: {
        pageName: "Demo Account",
        pageLink: "/demo-account"
      }
    },
    {
      path: "/real-account",
      name: "real-account",
      components: { default: RealAccount, header: MainNavbar, breadcrumbs: Breadcrumbs, footer: MainFooter },
      meta: {
        pageName: "Real Account",
        pageLink: "/real-account"
      }
    },
    {
      path: "/platform",
      name: "platform",
      components: { default: Platform, header: MainNavbar, breadcrumbs: Breadcrumbs, footer: MainFooter },
      meta: {
        pageName: "Platform",
        pageLink: "/platform"
      }
    },
    {
      path: "/risk",
      name: "risk",
      components: { default: Risk, header: MainNavbar, breadcrumbs: Breadcrumbs, footer: MainFooter },
      meta: {
        pageName: "Risk",
        pageLink: "/risk"
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: { default: Contact, header: MainNavbar, breadcrumbs: Breadcrumbs, footer: MainFooter },
      meta: {
        pageName: "Contact",
        pageLink: "/contact"
      }
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      components: { default: PrivacyPolicy, header: MainNavbar, breadcrumbs: Breadcrumbs, footer: MainFooter },
      meta: {
        pageName: "Privacy Policy",
        pageLink: "/privacy-policy"
      }
    },
    {
      path: "/spreads",
      name: "spreads",
      components: { default: Spreads, header: MainNavbar, breadcrumbs: Breadcrumbs, footer: MainFooter },
      meta: {
        pageName: "Spreads",
        pageLink: "/spreads"
      }
    },
    {
      path: "/trading",
      name: "trading",
      components: { default: Trading, header: MainNavbar, breadcrumbs: Breadcrumbs, footer: MainFooter },
      meta: {
        pageName: "Trading",
        pageLink: "/trading"
      }
    },
    {
      path: "/money",
      name: "money",
      components: { default: Money, header: MainNavbar, breadcrumbs: Breadcrumbs, footer: MainFooter },
      meta: {
        pageName: "Money",
        pageLink: "/money"
      }
    },
    {
      path: "/terms",
      name: "terms",
      components: { default: Terms, header: MainNavbar, breadcrumbs: Breadcrumbs, footer: MainFooter },
      meta: {
        pageName: "Terms",
        pageLink: "/terms"
      }
    }
  ]
});
