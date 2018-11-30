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
  pageContentText: string = "Vueでなんか作りたいなーって";
  pageTitleText: string = "なぜこんなことをしたのか";
}
