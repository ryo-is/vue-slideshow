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
export default class MainContents extends Vue {
  created() {
    this.setContentInfo();
  }

  @Watch("pageName")
  onPageNameChange() {
    this.setContentInfo();
  }

  basicContent: boolean = true;
  contents: pageContentsType = {
    page1: {
      mainText: "今見ているこれです！",
      mainTitle: "完成品",
      prebLink: "/sectionTitle/page1",
      nextLink: "/mainContents/page2"
    },
    page2: {
      mainText: "https://github.com/ryo-is/vue-slideshow",
      mainTitle: "完成品",
      prebLink: "/mainContents/page1",
      nextLink: "/sectionTitle/page2"
    },
    page3: {
      mainText: "デザインごとにComponentを分ける",
      mainTitle: "工夫した点",
      prebLink: "/sectionTitle/page2",
      nextLink: "/mainContents/page4"
    },
    page4: {
      mainText: "",
      mainTitle: "工夫した点",
      prebLink: "/mainContents/page3",
      nextLink: "/mainContents/page5"
    },
    page5: {
      mainText: "動的セグメントを利用して、なるべくRouterを汚さない",
      mainTitle: "工夫した点",
      prebLink: "/mainContents/page4",
      nextLink: "/mainContents/page6"
    },
    page6: {
      mainText: "",
      mainTitle: "工夫した点",
      prebLink: "/mainContents/page5",
      nextLink: "/mainContents/page7"
    },
    page7: {
      mainText: "画面(スライド)の切り替え",
      mainTitle: "工夫した点",
      prebLink: "/mainContents/page6",
      nextLink: "/mainContents/page8"
    },
    page8: {
      mainText: "",
      mainTitle: "工夫した点",
      prebLink: "/mainContents/page7",
      nextLink: "/mainContents/page9"
    },
    page9: {
      mainText: "",
      mainTitle: "工夫した点",
      prebLink: "/mainContents/page8",
      nextLink: "/sectionTitle/page3"
    },
    page10: {
      mainText: "",
      mainTitle: "IoT.kyotoVIS",
      prebLink: "/sectionTitle/page4",
      nextLink: "/mainContents/page11"
    },
    page11: {
      mainText: "",
      mainTitle: "IoT.kyotoVIS",
      prebLink: "/mainContents/page10",
      nextLink: "/mainContents/page12"
    },
    page12: {
      mainText: "",
      mainTitle: "IoT.kyotoVIS",
      prebLink: "/mainContents/page11",
      nextLink: "/sectionTitle/page5"
    },
    page13: {
      mainText: "",
      mainTitle: "まとめ",
      prebLink: "/sectionTitle/page5",
      nextLink: "/mainContents/page14"
    },
    page14: {
      mainText: "Vueは素晴らしい！！！",
      mainTitle: "まとめ",
      prebLink: "/mainContents/page13",
      nextLink: "/conclusion/page2"
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
