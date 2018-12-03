import { Component, Vue, Watch } from "vue-property-decorator";
import { transitionPageInfoType, pageContentsType } from "@/types";

@Component({
  beforeRouteUpdate(to, from, next) {
    this.$data.pageName = to.path;
    next();
  }
})
export default class SectionTitle extends Vue {
  created() {
    this.setContentInfo();
  }

  @Watch("pageName")
  onPageNameChange() {
    this.setContentInfo();
  }

  contents: pageContentsType = {
    page1: {
      mainText: "完成品",
      prebLink: "/whyCreate/page4",
      nextLink: "/mainContents/page1"
    },
    page2: {
      mainText: "工夫した点",
      prebLink: "/mainContents/page2",
      nextLink: "/mainContents/page3"
    },
    page3: {
      mainText: "その他Vueで作ったアプリ",
      prebLink: "/mainContents/page9",
      nextLink: "/sectionTitle/page4"
    },
    page4: {
      mainText: "IoT.kyoto VIS",
      prebLink: "/sectionTitle/page3",
      nextLink: "/mainContents/page10"
    }
  };
  transitionPageInfo: transitionPageInfoType = {
    preb: "",
    next: ""
  };
  pageName: string = "";
  pageTitleText: string = "";

  public setContentInfo() {
    this.pageName = this.$route.params.pageName;
    this.pageTitleText = this.contents[this.pageName].mainText;
    this.transitionPageInfo.preb = this.contents[this.pageName].prebLink;
    this.transitionPageInfo.next = this.contents[this.pageName].nextLink;
  }
}
