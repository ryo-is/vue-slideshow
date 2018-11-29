import { Component, Vue, Watch } from "vue-property-decorator";
import { transitionPageInfoType } from "@/types";

@Component({
  beforeRouteUpdate(to, from, next) {
    this.$data.pageName = to.path;
    next();
  }
})
export default class SelfIntroduction extends Vue {
  created() {
    this.setContentInfo();
  }

  @Watch("pageName")
  onPageNameChange() {
    this.setContentInfo();
  }

  contents: any = {
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
      nextLink: "/summary"
    }
  };
  transitionPageInfo: transitionPageInfoType = {
    preb: "",
    next: ""
  };
  useContent: any = "";
  pageName: string = "";

  public setContentInfo() {
    this.pageName = this.$route.params.pageName;
    this.useContent = this.contents[this.pageName];
    this.transitionPageInfo.preb = this.useContent.prebLink;
    this.transitionPageInfo.next = this.useContent.nextLink;
  }
}
