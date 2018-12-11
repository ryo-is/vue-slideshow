import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class PageContent extends Vue {
  @Prop()
  private contentText!: string;
}
