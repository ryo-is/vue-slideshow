import { Component, Vue, Watch } from "vue-property-decorator";
import { transitionPageInfoType, pageContentsType } from "@/types";

@Component({
  beforeRouteUpdate(to, from, next) {
    this.$data.pageName = to.path;
    next();
  }
})
export default class Introduction extends Vue {
  created() {
    this.setContentInfo();
  }

  @Watch("pageName")
  onPageNameChange() {
    this.setContentInfo();
  }

  contents: pageContentsType = {
    page1: {
      mainText: "v-kansaiローンチ、おめでとうございます！！",
      prebLink: "/selfIntroduction",
      nextLink: "/introduction/page2"
    },
    page2: {
      mainText: "素直に嬉しいです！",
      prebLink: "/introduction/page1",
      nextLink: "/introduction/page3"
    },
    page3: {
      mainText: "私は6月からVueを触り始めた新参者です。",
      prebLink: "/introduction/page2",
      nextLink: "/introduction/page4"
    },
    page4: {
      mainText: "仲良くなってやってください m(_ _)m",
      prebLink: "/introduction/page3",
      nextLink: "/introduction/page5"
    },
    page5: {
      mainText: "それでは本題いきましょう！",
      prebLink: "/introduction/page4",
      nextLink: "/summary/page1"
    }
  };
  transitionPageInfo: transitionPageInfoType = {
    preb: "",
    next: ""
  };
  mainText: string = "";
  pageName: string = "";

  public setContentInfo() {
    this.pageName = this.$route.params.pageName;
    this.mainText = this.contents[this.pageName].mainText;
    this.transitionPageInfo.preb = this.contents[this.pageName].prebLink;
    this.transitionPageInfo.next = this.contents[this.pageName].nextLink;
  }
}
