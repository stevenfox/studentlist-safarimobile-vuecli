<template>
  <div id="student-dashboard" class="row">
    <div class="btn-group btn-group-vertical" id="btn-dash" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary" v-on:click="showTopThree =!showTopThree, topThree">Top Three</button>
      <button type="button" class="btn btn-secondary" v-on:click="showStudents =!showStudents">Student List</button>
      <button type="button" class="btn btn-secondary" v-on:click="classification">classification</button>
    </div>

    <div class="container row" id="container-students">
      <!--top first three students -->
      <div id="firstThree" class="col-md-4">
       
          <table class="table table-hover" v-show="showTopThree">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Grade</th>
                </tr>
              </thead>
              <tbody >
                 <tr v-for="student in topThree.slice(0,3)"  v-bind:key="student.firstname">
                  <th scope="row">{{student.id}}</th>
                  <td>{{student.firstname}}</td>
                  <td>{{student.lastname}}</td>
                  <td>{{student.grade}}</td>
                </tr>
              </tbody>
          </table>
      </div>

 <!--whole list of students -->
      <div id="studentslist" class="col-md-4" >
        
            <table class="table table-hover" v-show="showStudents">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Grade</th>
                </tr>
              </thead>
              <tbody >
                <tr v-for="student in students" v-bind:key="student.id" v-on:click="selectStudent(student)">
                  <th scope="row">{{student.id}}</th>
                  <td>{{student.firstname}}</td>
                  <td>{{student.lastname}}</td>
                  <td>{{student.grade}}</td>
                </tr>
              </tbody>
            </table>
        
      </div>
       <!--input to change the grade from the students -->
      <div class="col-md-12 fixed-bottom" v-show="selectStudent, showSelectedStudent">
        <div class="input-group">
            <input type="text" v-model="selectedStudent.firstname" disabled class="form-control" >
            <input type="text" v-model="selectedStudent.lastname" disabled class="form-control">
            <input type="text" v-model="selectedStudent.grade" class="form-control">
        </div>
      </div>
      
    </div>
  </div>
</template>

<style>
#btn-dash{
 width: 20%;
position: absolute;
}
#container-students{
  margin-left: 20.1%;
}

#studentslist .table-hover tbody tr:hover {

    font-size: 1.3em;

}
</style>

<script>
const studentJ = require("../assets/data/students.json")

export default {
 name: 'StudentList',
    data (){
        return {
            students: studentJ,
            showStudents: false,
            showTopThree: false,
            showSelectedStudent: false,
            selectedStudent: [],
            }
    },
    methods: {
      selectStudent : function(student){
          this.selectedStudent = student;
          this.showSelectedStudent = true;
          return this.selectedStudent; 
      },
      classification : function(grade) {
          this.students.sort();

          let current = null;
          let cnt = 0;
          for (var i = 0; i < this.students.length; i++) {
              if (this.students[i].grade != current) {
                  if (cnt > 0) {
                     document.write(" Grade: " + current + " | No. of Users " + cnt + '</br>') 
                  }
                  current = this.students[i].grade;
                  cnt = 1;
              } else {
                  cnt++;
              }
          }
          if (cnt > 0) {
              document.write(" Grade: " + current + " | No. of Users " + cnt)+'</br>';
          }
          
      }
    },
		computed : {
			topThree: function() {
                  function compare(a, b) {
                    if (a.grade < b.grade)
                      return -1;
                    if (a.grade > b.grade)
                      return 1;
                    return 0;
                    }
          return this.students.sort(compare);
        },
        
      },
    }   

</script>