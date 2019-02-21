<template>
  <div class="todo">
    <h1>{{ msg }}</h1>
    <div class="todo_header">
      <input class="inputTodo" placeholder="what do you want to do?" autofocus=""  v-model.trim="newTodo"  @keyup.enter="addTodo()">
      <div class="showTodoPart">
        <ul class="showTodoUl">
          <li v-for="(text, index) in todoLists" :key = "index">
            <div class="view">
              <input class="toggle" type="checkbox" v-model="isChecked"/>
              <label>{{ todoLists[index]}}</label>
              <button class="deleteMark" @click="deteleTodo(index)"></button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang=i"ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import _ from 'lodash'

@Component
export default class Todo extends Vue {
  @Prop() private msg!: string

  newTodo: string = ''
  isChecked: boolean = false
  todoLists:string[] = ['学习TS']

  addTodo(): void {
    this.newTodo = this.newTodo.trim()
    if(this.newTodo.length < 1) return
    this.todoLists.push( this.newTodo )
    this.newTodo = ''
  }

  deteleTodo(index:number): void {
    console.log(this.todoLists, index)
    this.todoLists.splice(index, 1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.todo h1 {
  width: 100%;
  margin: 22px auto;
  font-size: 80px;
  font-weight: 100;
  text-align: center;
  color: papayawhip;
  
}
.todo_header {
  margin-top: 2rem;
}
.todo_header .inputTodo {
  padding: 20px 40px 20px 50px;
	position: relative;
	margin: 0;
	width: 30rem;
	font-size: 30px;
	font-weight: inherit;
  text-align: center;
	border: none;
  outline: none;
	padding: 6px;
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  background-color: transparent;
  color: papayawhip;
}
.todo_header .inputTodo::-webkit-input-placeholder {
    color: mistyrose;
  }
.showTodoUl {
  list-style: none;
}
.showTodoUl li {
  margin: 25px 0 15px 0;
}
.view {
  position: relative;
  width: 25rem;
  margin: 0 auto;
  color: mistyrose;
  font-family: monospace;
}
.view label {
  font-size: 30px;
}
.showTodoUl li .deleteMark {
	display: none;
	position: absolute;
	top: 0;
	right: 50px;
	bottom: 0;
	width: 25px;
	height: 25px;
	margin: auto 0;
	font-size: 30px;
	color: antiquewhite;
	margin-bottom: 7px;
	transition: color 0.2s ease-out;
  border: none;
  background-color: transparent;
  font-size: 30px;
}
.showTodoUl li .deleteMark:after {
	content: '×';
}
.showTodoUl li:hover .deleteMark {
	display: block;
}

</style>
