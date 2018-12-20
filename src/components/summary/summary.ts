import { Component, Vue, Watch } from "vue-property-decorator";
import { transitionPageInfoType, pageContentsType } from "@/types";
import PageTitle from "../parts/pageTitle/PageTitle.vue";
import PageContent from "../parts/pageContent/PageContent.vue";

@Component({
  components: {
    PageTitle,
    PageContent
  },
  beforeRouteUpdate(to, from, next) {
    this.$data.pageName = to.path;
    next();
  }
})
export default class Summary extends Vue {
  created() {
    this.setContentInfo();
  }

  @Watch("pageName")
  onPageNameChange() {
    this.setContentInfo();
  }

  contents: pageContentsType = {
    page1: {
      mainTitle: "今日のお話",
      mainText: "Vue製アプリをServerlessで運用してる話をします(日本語下手)",
      prebLink: "/introduction/page5",
      nextLink: "/summary/page2"
    },
    page2: {
      mainTitle: "注意点",
      mainText:
        "途中AWSの話が出てきます。中毒者が話すので、脱線してしまうかもしれませんがご了承下さい。",
      prebLink: "/summary/page1",
      nextLink: "/sectionTitle/vis"
    }
  };
  transitionPageInfo: transitionPageInfoType = {
    preb: "",
    next: ""
  };
  pageContentText: string = "";
  pageName: string = "";
  pageTitleText: string = "";

  public setContentInfo() {
    this.pageName = this.$route.params.pageName;
    this.pageContentText = this.contents[this.pageName].mainText;
    this.pageTitleText = this.contents[this.pageName].mainTitle as string;
    this.transitionPageInfo.preb = this.contents[this.pageName].prebLink;
    this.transitionPageInfo.next = this.contents[this.pageName].nextLink;
  }
}
