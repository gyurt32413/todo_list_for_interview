<template>
  <nav>
    <router-link to="/todolist">Todo-List</router-link> |
    <router-link to="/management">Management</router-link>
  </nav>
  <router-view />
</template>

<style>
@import "@/assets/reset.css";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;300;400;500;600;700&display=swap");
#app {
  font-family: "Noto Sans", sans-serif, Arial, Avenir, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #959fa8;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
