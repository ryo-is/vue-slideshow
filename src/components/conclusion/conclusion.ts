import { Component, Vue } from "vue-property-decorator";
import { transitionPageInfoType } from "@/types";
import PageTitle from "../parts/pageTitle/PageTitle.vue";
import PageContent from "../parts/pageContent/PageContent.vue";

@Component({
  components: {
    PageTitle,
    PageContent
  }
})
export default class Conclusion extends Vue {
  textValues: string[] = [];
  transitionPageInfo: transitionPageInfoType = {
    preb: "/summary",
    next: ""
  };
  pageContentText: string =
    "Vueの勉強にはなったけど…良い子は真似しちゃいけません";
  pageTitleText: string = "結論";
}
