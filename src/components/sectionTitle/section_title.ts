import { Component, Vue } from "vue-property-decorator";
import { transitionPageInfoType, pageContentsType } from "@/types";

@Component({})
export default class SectionTitle extends Vue {
  created() {
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
      mainText: "",
      prebLink: "/mainContents/page2",
      nextLink: "/mainContents/page3"
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
