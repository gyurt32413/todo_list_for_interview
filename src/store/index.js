import { createStore } from "vuex";

export default createStore({
  state: {
    todos: JSON.parse(localStorage.getItem("todos")),
  },
  getters: {},
  mutations: {
    updateTodos(state, todos) {
      state.todos = [...todos];
      localStorage.setItem("todos", JSON.stringify(todos));
    },
  },
  actions: {},
  modules: {},
});
