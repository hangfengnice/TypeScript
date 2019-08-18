import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [
      {
        text: "学习 typescript",
        completed: false,
      },
      {
        text: "学习 vue",
        completed: false,
      }
    ]
  },
  mutations: {
    updateTodoList(state, {index, content}) {
      state.todoList[index].text = content
    },
    todoItemComplete(state, index) {
      state.todoList[index].completed = true
    }
  },
  actions: {

  },
});
