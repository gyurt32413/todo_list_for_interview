<template>
  <div class="container">
    <h1>Management</h1>
    <div class="status-container">
      <div class="todo-list-status">
        <span>總 todo 數量</span>
        <span>{{ totalTodoNum }}</span>
      </div>
      <div style="margin: 5px 0px" class="todo-list-status">
        <span>未完成數量</span>
        <span>{{ unCompletedNum }}</span>
      </div>
      <div class="todo-list-status">
        <span>完成進度百分比</span>
        <span>{{ completedPersontage }}%</span>
      </div>
    </div>
    <button @click="deleteAllTodo" type="button" class="delete-all-todo">
      刪除所有
    </button>
    <ul class="todo-list">
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="['todo-item', { completed: todo.completed }]"
      >
        <span class="todo-title">{{ todo.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
/*
  import
*/
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

// 從store裡取得todos資料或刪除所有Todos時更新至store
const store = useStore();
const todos = ref([...store.state.todos]);
watch(
  todos,
  () => {
    store.commit("updateTodos", todos.value);
  },
  {
    deep: true,
  }
);

// 刪除所有Todo
const deleteAllTodo = () => {
  todos.value = [];
};

// todo清單統計資料
const totalTodoNum = computed(() => todos.value.length);
const unCompletedNum = computed(
  () => todos.value.filter((_item) => !_item.completed).length
);
const completedPersontage = computed(() => {
  if (!totalTodoNum.value) {
    return 0;
  } else {
    return Math.floor((1 - unCompletedNum.value / totalTodoNum.value) * 100);
  }
});
</script>

<style scoped>
@import url("@/assets/base.css");
.delete-all-todo {
  margin: 20px 0px;
  font-weight: 700;
  padding: 5px 30px;
  font-size: 14px;
  color: #fff;
  background-color: rgb(200, 28, 28);
}

.todo-list-status {
  display: flex;
  justify-content: space-between;
  width: 150px;
  font-size: 0.9em;
}
</style>
