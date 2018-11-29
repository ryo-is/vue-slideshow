import { Component, Vue } from "vue-property-decorator";
import router from "@/router";

@Component({})
export default class App extends Vue {

  public transitionPage(action: string) {
    console.log(action);
    const targetRoute: string = this.$parent.$children[0].$children[1].$data.transitionPageInfo[action];
    console.log(targetRoute);
    if (targetRoute !== "") {
      router.push(targetRoute);
    }
  }
}
