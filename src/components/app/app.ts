import { Component, Vue } from "vue-property-decorator";
import router from "@/router";

@Component({})
export default class App extends Vue {
  prebArrow: boolean = false;
  nextArrow: boolean = false;

  public transitionPage(action: string) {
    const targetRoute: string = this.$parent.$children[0].$children[1].$data
      .transitionPageInfo[action];
    if (targetRoute !== "") {
      router.push(targetRoute);
    }
  }

  public showArrow(action: string) {
    switch (action) {
      case "preb":
        this.prebArrow = true;
        break;
      case "next":
        this.nextArrow = true;
        break;
      default:
        break;
    }
  }

  public hiddenArrow(action: string) {
    switch (action) {
      case "preb":
        this.prebArrow = false;
        break;
      case "next":
        this.nextArrow = false;
        break;
      default:
        break;
    }
  }
}
