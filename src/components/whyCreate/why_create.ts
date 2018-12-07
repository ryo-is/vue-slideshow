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
export default class WhyCreate extends Vue {
  created() {
    this.setContentInfo();
  }

  @Watch("pageName")
  onPageNameChange() {
    this.setContentInfo();
  }

  contents: pageContentsType = {
    page1: {
      mainText: "v-kansaiで15分枠を手に入れた！",
      prebLink: "/conclusion/page1",
      nextLink: "/whyCreate/page2"
    },
    page2: {
      mainText: "Vueでなんか作りたいなーって",
      prebLink: "/whyCreate/page1",
      nextLink: "/whyCreate/page3"
    },
    page3: {
      mainText: "発表スライドって自作できるんじゃ…",
      prebLink: "/whyCreate/page2",
      nextLink: "/whyCreate/page4"
    },
    page4: {
      mainText: "よし、作るか",
      prebLink: "/whyCreate/page3",
      nextLink: "/sectionTitle/page1"
    }
  };
  transitionPageInfo: transitionPageInfoType = {
    preb: "",
    next: ""
  };
  pageContentText: string = "";
  pageName: string = "";
  pageTitleText: string = "なぜこんなことをしたのか";

  public setContentInfo() {
    this.pageName = this.$route.params.pageName;
    this.pageContentText = this.contents[this.pageName].mainText;
    this.transitionPageInfo.preb = this.contents[this.pageName].prebLink;
    this.transitionPageInfo.next = this.contents[this.pageName].nextLink;
  }
}
