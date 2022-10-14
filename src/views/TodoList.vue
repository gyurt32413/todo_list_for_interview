<template>
  <div class="container">
    <h1>TODO List</h1>
    <input
      v-model="newTodoTitle"
      @keyup.enter="addNewTodo"
      class="input-new-todo"
      type="text"
    />
    <button @click="addNewTodo" type="button" class="add-new-todo">新增</button>
    <ul class="todo-list">
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="['todo-item', { completed: todo.completed }]"
      >
        <button
          @click="completeTodo(todo.id)"
          type="button"
          class="done-button"
        >
          完成
        </button>
        <span class="todo-title">{{ todo.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
/* 
  import
*/
import { ref, watch } from "vue";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "vuex";

const store = useStore();

const todos = ref([...store.state.todos]);

const newTodoTitle = ref("");

const addNewTodo = () => {
  if (newTodoTitle.value.trim()) {
    todos.value.push({
      id: uuidv4(),
      title: newTodoTitle.value.trim(),
      completed: false,
    });
  }
  newTodoTitle.value = "";
};

const completeTodo = (todoId) => {
  todos.value.forEach((item) => {
    if (item.id === todoId) {
      item.completed = !item.completed;
    }
  });
};
watch(
  todos,
  () => {
    store.commit("updateTodos", todos.value);
  },
  {
    deep: true,
  }
);
</script>

<style scoped>
@import url("@/assets/base.css");
.input-new-todo {
  border: 1px solid #000;
  margin: 20px 20px 20px 0px;
  padding: 5px;
}
.add-new-todo {
  background-color: rgb(196, 233, 248);
}

.done-button {
  background: rgb(207, 243, 202);
  margin-right: 10px;
}
</style>
