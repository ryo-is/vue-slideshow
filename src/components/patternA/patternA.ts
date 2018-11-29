import { Component, Vue, Watch } from "vue-property-decorator";
import { transitionPageInfoType } from "@/types";

@Component({
  beforeRouteUpdate(to, from, next) {
    this.$data.pageName = to.path;
    next();
  }
})
export default class Contents extends Vue {
  created() {
    this.setContentInfo();
  }

  @Watch("pageName")
  onPageNameChange() {
    this.setContentInfo();
  }

  contents: any = {
    1: {
      mainText: "v-kansaiローンチ、おめでとうございます！！",
      prebLink: "/introduction",
      nextLink: "/patternA/2"
    },
    2: {
      mainText: "素直に嬉しいです！",
      prebLink: "/patternA/1",
      nextLink: "/patternA/3"
    },
    3: {
      mainText: "私は6月からVueを触り始めた新参者です。",
      prebLink: "/patternA/2",
      nextLink: "/patternA/4"
    },
    4: {
      mainText: "仲良くなってやってください m(_ _)m",
      prebLink: "/patternA/3",
      nextLink: "/patternA/5"
    },
    5: {
      mainText: "それでは本題いきましょう！",
      prebLink: "/patternA/4",
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
