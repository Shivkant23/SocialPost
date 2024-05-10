<template>
  <router-view />
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: #f0f0f0;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}

.logo {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

h1 {
  font-size: 35px;
  margin-bottom: 20px;
}

div label {
  font-size: 20px;
  margin-bottom: 5px;
}

.register input,
.login input {
  font-size: 14px;
  margin-top: 20px;
  text-align: left;
  color: blue;
  cursor: pointer;
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}

.register button,
.login button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  background-color: skyblue;
  cursor: pointer;
  font-weight: bold;
}
</style>
