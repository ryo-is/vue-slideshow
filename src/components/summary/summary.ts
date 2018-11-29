import { Component, Vue } from "vue-property-decorator";
import { transitionPageInfoType } from "@/types";

@Component({})
export default class Summary extends Vue {
  transitionPageInfo: transitionPageInfoType = {
    preb: "/patternA/5",
    next: "conclusion"
  };
}
