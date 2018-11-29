import { Component, Vue } from "vue-property-decorator";
import { transitionPageInfoType } from "@/types";

@Component({})
export default class Contents extends Vue {
  textValues: string[] = [
    "泉 亮輔 (Ryosuke Izumi / is_ryo)",
    "IoT.kyoto (https://iot.kyoto)",
    "フロントエンドエンジニア",
    "Vueにガチハマり中",
    "(自称)AWS中毒者",
    "JAWS-UG京都 / Node学園",
    "Twitter / Qiitadon などに生息"
  ];
  transitionPageInfo: transitionPageInfoType = {
    preb: "/",
    next: ""
  };
}
