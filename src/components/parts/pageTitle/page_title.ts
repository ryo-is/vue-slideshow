import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class PageTitle extends Vue {
  @Prop() private titleText!: string;
}
