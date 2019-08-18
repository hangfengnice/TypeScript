<template>
  <div class="todo">
    <ul>
      <todo-item v-for="(item, index) of list" :key='index'
      :item='item'
      :index='index'
      :editingIndex='editingIndex'
      @on-save='handleSave'
      @on-edit='handleEdit'
      @on-cancel='handleCancel'
      @on-complete='handleComplete'

      >
      </todo-item>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '../components/todo-item'
import {State, Mutation} from 'vuex-class'

@Component({
  name: 'todo',
  components: {
    TodoItem
  },
})
export default class Todo extends Vue {
  @State('todoList') public list
  public editingIndex = -1
  @Mutation('updateTodoList') public updateList
  @Mutation("todoItemComplete") public handleComplete
  public handleSave({index, content}) {
    console.log(index, content)
    this.updateList({index, content})
    this.handleCancel()
  }
  public handleEdit(index) {
    this.editingIndex = index
  }
  public handleCancel() {
    this.editingIndex = -1
  }
}
</script>
