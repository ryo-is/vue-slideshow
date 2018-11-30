import { Component, Vue } from "vue-property-decorator";
import { transitionPageInfoType } from "@/types";
import PageTitle from "../parts/pageTitle/PageTitle.vue";

@Component({
  components: {
    PageTitle
  }
})
export default class Introduction extends Vue {
  pageTitleText: string = "自己紹介";
  textValues: string[] = [
    "泉 亮輔 (Ryosuke Izumi / is_ryo)",
    "IoT.kyoto (https://iot.kyoto)",
    "(フロントエンド)エンジニア",
    "Vueにガチハマり中",
    "(自称)AWS中毒者",
    "JAWS-UG京都 / Node学園",
    "Twitter / Qiitadon などに生息"
  ];
  transitionPageInfo: transitionPageInfoType = {
    preb: "/",
    next: "/introduction/page1"
  };
}
