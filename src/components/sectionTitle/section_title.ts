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
      mainText: "IoT.kyoto VIS",
      prebLink: "/summary/page1",
      nextLink: "/mainContents/page1"
    },
    page2: {
      mainText: "なぜVueなのか",
      prebLink: "/mainContents/page4",
      nextLink: "/mainContents/page5"
    },
    page3: {
      mainText: "Vueにした恩恵",
      prebLink: "/mainContents/page6",
      nextLink: "/mainContents/page7"
    },
    page4: {
      mainText: "ちょっとした苦労話とか",
      prebLink: "/mainContents/page7",
      nextLink: "/sectionTitle/page5"
    },
    page5: {
      mainText: "Webpack周りの設定",
      prebLink: "/sectionTitle/page4",
      nextLink: "/mainContents/page8"
    },
    page6: {
      mainText: "画面のリロード対策",
      prebLink: "/mainContents/page9",
      nextLink: "/mainContents/page10"
    },
    page7: {
      mainText: "AWSリソースへのアクセス",
      prebLink: "/mainContents/page12",
      nextLink: "/mainContents/page13"
    },
    page8: {
      mainText: "CF+S3 で公開するときの罠",
      prebLink: "/mainContents/page15",
      nextLink: "/mainContents/page16"
    },
    page9: {
      mainText: "今後の課題",
      prebLink: "/mainContents/page20",
      nextLink: "/mainContents/page21"
    },
    page10: {
      mainText: "Vueは素晴らしい！！！",
      prebLink: "/mainContents/page21",
      nextLink: "/sectionTitle/end"
    },
    end: {
      mainText: "おわり",
      prebLink: "/mainContents/page21",
      nextLink: "/"
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
