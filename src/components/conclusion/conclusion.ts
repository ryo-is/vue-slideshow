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
  created() {
    this.setContentInfo();
  }

  textValues: string[] = [];
  contents: any = {
    page1: {
      prebLink: "/summary/page1",
      nextLink: "/whyCreate/page1"
    },
    page2: {
      prebLink: "/mainContents/page14",
      nextLink: "/sectionTitle/page6"
    }
  };
  transitionPageInfo: transitionPageInfoType = {
    preb: "/summary/page1",
    next: "/whyCreate/page1"
  };
  pageContentText: string =
    "Vueの勉強にはなったけど…良い子は真似しちゃいけません";
  pageName: string = "";
  pageTitleText: string = "結論";

  public setContentInfo() {
    this.pageName = this.$route.params.pageName;
    this.transitionPageInfo.preb = this.contents[this.pageName].prebLink;
    this.transitionPageInfo.next = this.contents[this.pageName].nextLink;
  }
}
