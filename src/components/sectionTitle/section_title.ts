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
    vis: {
      mainText: "IoT.kyoto VIS",
      prebLink: "/summary/page1",
      nextLink: "/mainContents/vis_1"
    },
    vue: {
      mainText: "なぜ Vue なのか",
      prebLink: "/mainContents/vis_4",
      nextLink: "/mainContents/vue_1"
    },
    benefit: {
      mainText: "Vueにした恩恵",
      prebLink: "/mainContents/vue_3",
      nextLink: "/mainContents/benefit_1"
    },
    hardships: {
      mainText: "ちょっとした苦労話とか",
      prebLink: "/mainContents/benefit_1",
      nextLink: "/sectionTitle/webpack"
    },
    webpack: {
      mainText: "Webpack周りの設定",
      prebLink: "/sectionTitle/hardships",
      nextLink: "/mainContents/webpack_1"
    },
    reload: {
      mainText: "画面のリロード対策",
      prebLink: "/mainContents/webpack_2",
      nextLink: "/mainContents/reload_1"
    },
    aws: {
      mainText: "AWSリソースへのアクセス",
      prebLink: "/mainContents/reload_3",
      nextLink: "/mainContents/aws_1"
    },
    spa: {
      mainText: "SPA + CF + S3 の罠",
      prebLink: "/mainContents/aws_3",
      nextLink: "/mainContents/spa_1"
    },
    task: {
      mainText: "今後の課題",
      prebLink: "/mainContents/spa_5",
      nextLink: "/mainContents/task_1"
    },
    summary: {
      mainText: "まとめ",
      prebLink: "/mainContents/task_1",
      nextLink: "/mainContents/summary_1"
    },
    good_vue: {
      mainText: "Vueは素晴らしい！！！",
      prebLink: "/mainContents/summary_1",
      nextLink: "/sectionTitle/end"
    },
    end: {
      mainText: "おわり",
      prebLink: "/sectionTitle/good_vue",
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
