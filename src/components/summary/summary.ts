import { Component, Vue } from "vue-property-decorator";
import { transitionPageInfoType } from "@/types";
import PageTitle from "../parts/pageTitle/PageTitle.vue";
import PageContent from "../parts/pageContent/PageContent.vue";

@Component({
  components: {
    PageTitle,
    PageContent
  }
})
export default class Summary extends Vue {
  transitionPageInfo: transitionPageInfoType = {
    preb: "/introduction/page5",
    next: "conclusion"
  };
  pageContentText: string =
    "Vueが好きすぎて登壇スライドを自作して、いい意味でも悪い意味でも勉強になったって話をします";
  pageTitleText: string = "今日のお話";
}
