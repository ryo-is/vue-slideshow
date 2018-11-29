import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Conclusion extends Vue {
  @Prop()
  private contentText!: string;
}
