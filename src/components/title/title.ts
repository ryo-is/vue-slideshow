import { Component, Vue } from "vue-property-decorator";
import { transitionPageInfoType } from "@/types";

@Component({})
export default class Title extends Vue {
  transitionPageInfo: transitionPageInfoType = {
    preb: "/sectionTitle/end",
    next: "/selfIntroduction"
  };
}
