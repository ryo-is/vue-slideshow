import { Component, Vue } from "vue-property-decorator";
import { transitionPageInfoType } from "@/types";

@Component({})
export default class Conclusion extends Vue {
  textValues: string[] = [];
  transitionPageInfo: transitionPageInfoType = {
    preb: "/summary",
    next: ""
  };
}
