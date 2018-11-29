import Vue from "vue";
import Router from "vue-router";
import Title from "./components/title/Title.vue";
import Introduction from "./components/introduction/Introduction.vue";
import PatternA from "./components/patternA/PatternA.vue";

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
      path: "/introduction",
      name: "introduction",
      component: Introduction
    },
    {
      path: "/patternA/:pageName",
      name: "patternA",
      component: PatternA
    }
  ]
});
