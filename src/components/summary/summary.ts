import { Component, Vue } from "vue-property-decorator";
import { transitionPageInfoType, pageContentsType } from "@/types";
import PageTitle from "../parts/pageTitle/PageTitle.vue";
import PageContent from "../parts/pageContent/PageContent.vue";

@Component({
  components: {
    PageTitle,
    PageContent
  }
})
export default class Summary extends Vue {
  created() {
    this.setContentInfo();
  }

  contents: pageContentsType = {
    page1: {
      mainText: "",
      prebLink: "/introduction/page5",
      nextLink: "/conclusion/page1"
    },
    page2: {
      mainText: "",
      prebLink: "",
      nextLink: ""
    }
  };
  transitionPageInfo: transitionPageInfoType = {
    preb: "",
    next: ""
  };
  pageContentText: string =
    "Vueが好きすぎて発表スライドを自作した話をします";
  pageName: string = "";
  pageTitleText: string = "今日のお話";

  public setContentInfo() {
    this.pageName = this.$route.params.pageName;
    this.transitionPageInfo.preb = this.contents[this.pageName].prebLink;
    this.transitionPageInfo.next = this.contents[this.pageName].nextLink;
  }
}
