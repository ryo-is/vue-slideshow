import Vue from "vue";
import Router from "vue-router";
import Title from "./components/title/Title.vue";
import SelfIntroduction from "./components/selfIntroduction/SelfIntroduction.vue";
import Introduction from "./components/introduction/Introduction.vue";
import Summary from "./components/summary/Summary.vue";
import Conclusion from "./components/conclusion/Conclusion.vue";
import WhyCreate from "./components/whyCreate/WhyCreate.vue";
import MainContents from "./components/mainContents/MainContents.vue";
import SectionTitle from "./components/sectionTitle/SectionTitle.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "title",
      component: Title
    },
    {
      path: "/selfIntroduction",
      name: "selfIntroduction",
      component: SelfIntroduction
    },
    {
      path: "/introduction/:pageName",
      name: "introduction",
      component: Introduction
    },
    {
      path: "/summary/:pageName",
      name: "summary",
      component: Summary
    },
    {
      path: "/conclusion",
      name: "conclusion",
      component: Conclusion
    },
    {
      path: "/whyCreate/:pageName",
      name: "whyCreate",
      component: WhyCreate
    },
    {
      path: "/mainContents/:pageName",
      name: "mainContents",
      component: MainContents
    },
    {
      path: "/sectionTitle/:pageName",
      name: "sectionTitle",
      component: SectionTitle
    }
  ]
});
