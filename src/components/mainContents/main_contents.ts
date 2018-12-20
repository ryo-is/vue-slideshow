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
      mainText: "IoTセンサーデータを可視化するアプリ",
      mainTitle: "IoT.kyoto VIS",
      prebLink: "/sectionTitle/page1",
      nextLink: "/mainContents/page2"
    },
    page2: {
      mainText: "",
      mainTitle: "IoT.kyoto VIS",
      prebLink: "/mainContents/page1",
      nextLink: "/mainContents/page3"
    },
    page3: {
      mainText: "",
      mainTitle: "IoT.kyoto VIS",
      prebLink: "/mainContents/page2",
      nextLink: "/mainContents/page4"
    },
    page4: {
      mainText: "",
      mainTitle: "IoT.kyoto VIS",
      prebLink: "/mainContents/page3",
      nextLink: "/sectionTitle/page2"
    },
    page5: {
      mainText: "jQueryから逃げたかった",
      mainTitle: "なぜVueなのか",
      prebLink: "/sectionTitle/page2",
      nextLink: "/mainContents/page6"
    },
    page6: {
      mainText: "",
      mainTitle: "なぜVueなのか",
      prebLink: "/mainContents/page5",
      nextLink: "/sectionTitle/page3"
    },
    page7: {
      mainText: "jQueryに別れを告げ、アプリがSPAになり、Serverlessになった！",
      mainTitle: "恩恵",
      prebLink: "/sectionTitle/page3",
      nextLink: "/sectionTitle/page4"
    },
    page8: {
      mainText:
        "Vue触り始めたころはまだVueCLI2でTypeScriptとかSassとかPugのWebpack周りの設定辛かったな…",
      mainTitle: "Webpack周りの設定",
      prebLink: "/sectionTitle/page4",
      nextLink: "/mainContents/page9"
    },
    page9: {
      mainText: "VueCLI3ではよしなに設定してくれるようになった！！！",
      mainTitle: "Webpack周りの設定",
      prebLink: "/mainContents/page8",
      nextLink: "/sectionTitle/page6"
    },
    page10: {
      mainText: "画面のリロードするとVuex内の変数ぶっ飛ぶじゃん…",
      mainTitle: "画面のリロード対策",
      prebLink: "/sectionTitle/page6",
      nextLink: "/mainContents/page11"
    },
    page11: {
      mainText:
        "`vuex-persistedstate` を使ってリロードしてもぶっ飛ばないようにした",
      mainTitle: "画面のリロード対策",
      prebLink: "/mainContents/page10",
      nextLink: "/mainContents/page12"
    },
    page12: {
      mainText: "他にこんな方法あるよ！というのがあれば教えてください",
      mainTitle: "画面のリロード対策",
      prebLink: "/mainContents/page10",
      nextLink: "/sectionTitle/page7"
    },
    page13: {
      mainText:
        "EC2なくなったけど、AWSリソースへのアクセスの認証をどないしましょうかね…",
      mainTitle: "AWSリソースへのアクセス",
      prebLink: "/sectionTitle/page7",
      nextLink: "/mainContents/page14"
    },
    page14: {
      mainText:
        "AmazonAPIGatewayトリガーでAWSLambdaをinvokeするようにして、axiosでPOSTする",
      mainTitle: "AWSリソースへのアクセス",
      prebLink: "/mainContents/page13",
      nextLink: "/mainContents/page15"
    },
    page15: {
      mainText: "あとはAppSync使ってGraphQLでデータをやり取りするようにした",
      mainTitle: "AWSリソースへのアクセス",
      prebLink: "/mainContents/page14",
      nextLink: "/sectionTitle/page8"
    },
    page16: {
      mainText:
        "SPAってURL的にはそれぞれのHTMLを表示しているように見えるけど、実際は index.html だけですよね",
      mainTitle: "CF+S3 で公開するときの罠",
      prebLink: "/sectionTitle/page8",
      nextLink: "/mainContents/page17"
    },
    page17: {
      mainText: "要するに `/` も `/hoge` も　index.html を表示しないといけない",
      mainTitle: "CF+S3 で公開するときの罠",
      prebLink: "/mainContents/page16",
      nextLink: "/mainContents/page18"
    },
    page18: {
      mainText: "でもS3の `/hoge` って hoge.html ことじゃない…？",
      mainTitle: "CF+S3 で公開するときの罠",
      prebLink: "/mainContents/page17",
      nextLink: "/mainContents/page19"
    },
    page19: {
      mainText: "Access Denied",
      mainTitle: "CF+S3 で公開するときの罠",
      prebLink: "/mainContents/page18",
      nextLink: "/mainContents/page20"
    },
    page20: {
      mainText: "",
      mainTitle: "CF+S3 で公開するときの罠",
      prebLink: "/mainContents/page19",
      nextLink: "/sectionTitle/page9"
    },
    page21: {
      mainText: "",
      mainTitle: "今後の課題",
      prebLink: "/sectionTitle/page9",
      nextLink: "/sectionTitle/page10"
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
