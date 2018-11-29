import { Component, Vue } from "vue-property-decorator";
import { transitionPageInfoType } from "@/types";

@Component({})
export default class Contents extends Vue {
  transitionPageInfo: transitionPageInfoType = {
    preb: "/",
    next: ""
  };
}
