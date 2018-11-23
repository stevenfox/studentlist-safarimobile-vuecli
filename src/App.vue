<template>
  <div id="app">
    <navbar-vue></navbar-vue>
    <img alt="Vue logo" src="./assets/student.svg" class="col-md-4">
    <div class="hr-line"></div>
    <!-- Student Component-->
    <StudentList> </StudentList>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import HelloWorld from './components/HelloWorld.vue'
import StudentList from './components/studentList.vue'

export default {
  name: 'app',
  components: {
    StudentList,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.hr-line {

    border: 1px solid #f5dcb4;
    width: 80%;
    margin: 5% auto;

}
</style>
