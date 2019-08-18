import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import './index.scss'

interface Item {
   text: string;
   completed: boolean;
}
@Component({
  name: 'todoItem',

})

export default class TodoItem extends Vue {
  @Prop(Object) public item!: Item;
  @Prop(Number) public index!: number;
  @Prop(Number) public editingIndex!: number;

  public editingContent = ''

  @Watch('editingIndex')
  public editingChange(index) {
    if (index === this.index) {
      this.editingContent = this.item.text
    } else {
      this.editingContent = ''
    }
  }
  public save() {
    this.$emit('on-save', {
      index: this.index,
      content: this.editingContent
    })
  }
  public edit() {
    this.$emit('on-edit', this.index)
  }
  public cancel() {
    this.$emit('on-cancel', this.index)
  }
  public complete() {
    this.$emit('on-complete', this.index)
  }

  protected render() {
    return (
      <li class='item_wrap' >
        {
          this.editingIndex === this.index
          ? (<div>
            <a-input v-model={this.editingContent} style='width: 200px;'></a-input>
            <a-icon type='check' nativeOn-click={this.save}></a-icon>
            <a-icon type='close' nativeOn-click={this.cancel}></a-icon>

          </div>)
          : ( <div>
            <span on-click={this.complete}
            style={this.item.completed ? {textDecoration: 'line-through'} : {}}>{this.item.text}</span>
            <a-icon type='edit' nativeOn-click={this.edit}></a-icon>
          </div> )
        }

      </li>
    )
  }
}
