import { Component, Prop, Vue, Model, Emit, Watch } from 'vue-property-decorator';
interface option {
  label: string | number;
  value: string | number | boolean;
}
@Component
export default class Select extends Vue {
  @Prop() private label?: string;
  @Prop() private placeholder?: string;
  @Prop({default: 16}) private fontSize?: number;
  @Prop() private options!: option[];

  @Model('input', {type: String}) value!: string;

  @Emit('input')
  emitInput(value: string) {}
  @Emit('change')
  emitChange(value: string) {}
  @Watch('isFocus')
  onFocusChange(val: boolean, oldVal: boolean) {
    if (val) {
      console.log(this.$refs['input-wrap'])
    }
  }
  private isFocus: boolean = false;
  
  private currentValue: string = this.value;

  handleInput() {
    this.emitInput(this.currentValue)
    this.emitChange(this.currentValue)
  }
}