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
    vis_1: {
      mainText: "IoTセンサーデータを可視化するアプリ",
      mainTitle: "IoT.kyoto VIS",
      prebLink: "/sectionTitle/vis",
      nextLink: "/mainContents/vis_2"
    },
    vis_2: {
      mainText: "",
      mainTitle: "IoT.kyoto VIS",
      prebLink: "/mainContents/vis_1",
      nextLink: "/mainContents/vis_3"
    },
    vis_3: {
      mainText: "",
      mainTitle: "IoT.kyoto VIS",
      prebLink: "/mainContents/vis_2",
      nextLink: "/mainContents/vis_4"
    },
    vis_4: {
      mainText: "",
      mainTitle: "IoT.kyoto VIS",
      prebLink: "/mainContents/vis_3",
      nextLink: "/sectionTitle/vue"
    },
    vue_1: {
      mainText: "jQueryから逃げたかった",
      mainTitle: "なぜ Vue なのか",
      prebLink: "/sectionTitle/vue",
      nextLink: "/mainContents/vue_2"
    },
    vue_2: {
      mainText: "",
      mainTitle: "なぜ Vue なのか",
      prebLink: "/mainContents/vue_1",
      nextLink: "/mainContents/vue_3"
    },
    vue_3: {
      mainText: "Vueっていうフレームワーク使えばjQuery使わずに済むんやろ？くらいのノリでVueを触り始めた",
      mainTitle: "なぜ Vue なのか",
      prebLink: "/mainContents/vue_2",
      nextLink: "/sectionTitle/benefit"
    },
    benefit_1: {
      mainText: "jQueryに別れを告げ、アプリがSPAになり、Serverlessになった！",
      mainTitle: "恩恵",
      prebLink: "/sectionTitle/benefit",
      nextLink: "/sectionTitle/hardships"
    },
    webpack_1: {
      mainText:
        "Vue触り始めたころはまだVueCLI2でTypeScriptとかSassとかPugのWebpack周りの設定辛かったな…",
      mainTitle: "Webpack周りの設定",
      prebLink: "/sectionTitle/webpack",
      nextLink: "/mainContents/webpack_2"
    },
    webpack_2: {
      mainText: "VueCLI3ではよしなに設定してくれるようになった！！！",
      mainTitle: "Webpack周りの設定",
      prebLink: "/mainContents/webpack_2",
      nextLink: "/sectionTitle/reload"
    },
    reload_1: {
      mainText: "画面のリロードするとVuex内の変数ぶっ飛ぶじゃん…",
      mainTitle: "画面のリロード対策",
      prebLink: "/sectionTitle/reload",
      nextLink: "/mainContents/reload_2"
    },
    reload_2: {
      mainText:
        "`vuex-persistedstate` を使ってリロードしてもぶっ飛ばないようにした",
      mainTitle: "画面のリロード対策",
      prebLink: "/mainContents/reload_1",
      nextLink: "/mainContents/reload_3"
    },
    reload_3: {
      mainText: "他にこんな方法あるよ！というのがあれば教えてください",
      mainTitle: "画面のリロード対策",
      prebLink: "/mainContents/reload_2",
      nextLink: "/sectionTitle/aws"
    },
    aws_1: {
      mainText:
        "EC2なくなったけど、AWSリソースへの認証をどないしましょうかね…",
      mainTitle: "AWSリソースへのアクセス",
      prebLink: "/sectionTitle/aws",
      nextLink: "/mainContents/aws_2"
    },
    aws_2: {
      mainText:
        "AmazonAPIGatewayトリガーでAWSLambdaをinvokeするようにして、axiosでPOSTする",
      mainTitle: "AWSリソースへのアクセス",
      prebLink: "/mainContents/aws_1",
      nextLink: "/mainContents/aws_3"
    },
    aws_3: {
      mainText: "あとはAppSync使ってGraphQLでデータをやり取りするようにした",
      mainTitle: "AWSリソースへのアクセス",
      prebLink: "/mainContents/aws_2",
      nextLink: "/mainContents/aws_4"
    },
    aws_4: {
      mainText: "APIGatewayとAppSyncはCognitoTokenで認証する",
      mainTitle: "AWSリソースへのアクセス",
      prebLink: "/mainContents/aws_3",
      nextLink: "/sectionTitle/spa"
    },
    spa_1: {
      mainText:
        "SPAってURL的にはそれぞれのHTMLを表示しているように見えるけど、実際は index.html だけですよね",
      mainTitle: "SPA + CF + S3 の罠",
      prebLink: "/sectionTitle/spa",
      nextLink: "/mainContents/spa_2"
    },
    spa_2: {
      mainText: "要するに `/` も `/hoge` も　index.html を表示しないといけない",
      mainTitle: "SPA + CF + S3 の罠",
      prebLink: "/mainContents/spa_1",
      nextLink: "/mainContents/spa_3"
    },
    spa_3: {
      mainText: "でもS3での `/hoge` って hoge.html のことじゃない…？",
      mainTitle: "SPA + CF + S3 の罠",
      prebLink: "/mainContents/spa_2",
      nextLink: "/mainContents/spa_4"
    },
    spa_4: {
      mainText: "Access Denied",
      mainTitle: "SPA + CF + S3 の罠",
      prebLink: "/mainContents/spa_3",
      nextLink: "/mainContents/spa_5"
    },
    spa_5: {
      mainText: "",
      mainTitle: "SPA + CF + S3 の罠",
      prebLink: "/mainContents/spa_4",
      nextLink: "/sectionTitle/task"
    },
    task_1: {
      mainText: "",
      mainTitle: "今後の課題",
      prebLink: "/sectionTitle/task",
      nextLink: "/sectionTitle/summary"
    },
    summary_1: {
      mainText: "",
      mainTitle: "まとめ",
      prebLink: "/sectionTitle/summary",
      nextLink: "/sectionTitle/good_vue"
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
