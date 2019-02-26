<template>
  <div class="todo">
    <h1>╰✿ {{ msg }}</h1>
    <div class="todo_header">
      <input class="inputTodo" placeholder="Please enter what you want to do?" autofocus=""  v-model.trim="newTodo"  @keyup.enter="addTodo()">
      <div class="showTodoPart">
        <ul class="showTodoUl">
          <li v-for="(todo, index) in todoLists" :key = "index"
              :class="{completed: todo.isChecked, editing: index === editingIndex}">
            <div class="view">
              <input type="checkbox" class="toggle" v-model="todo.isChecked">
              <label @dblclick="editTodo(index)" >{{ todo.text }}</label>
              <button class="deleteMark" @click.stop="deteleTodo(index)"></button>
            </div>
            <input type="text" class="edit" v-model="todo.text" v-focus="index === editingIndex" @blur="saveTodo(todo)" @keyup.enter="saveTodo(todo)">
          </li>
        </ul>
        <div class="showComplete">
          <p class="countComplete">{{ activeCount }} Items Left (⌒▽⌒)</p>
          <p class="clearComplete" @click="clearComplete">clear completed</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import _ from 'lodash'
import focus from '../scripts/directive'
import { interfaces } from 'mocha'

@Component({
  directives: {
    focus
  }
})
export default class Todo extends Vue {
  @Prop() msg!: string

  newTodo: string = ''
  editingIndex: number = -1
  todoLists: any[] = []
  addTodo(): void {
    this.newTodo = this.newTodo.trim()

    if(this.newTodo.length < 1) return

    this.todoLists.unshift({
      text: this.newTodo,
      isChecked: false
    })
    this.newTodo = ''
    this.save()
  }

  deteleTodo(index:number): void {
    this.todoLists.splice(index, 1)
    this.save()
  }

  editTodo(index:number): void {
    this.editingIndex = index
  }

  saveTodo(todo:string): void {
    this.editingIndex = -1
    this.save()
  }
  save(): void {
   window.localStorage.setItem("content", JSON.stringify(this.todoLists))
  }

  created() {
    let todoStorage = window.localStorage.getItem('content')
    if(todoStorage === null) {
      return
    } else {
    this.todoLists = JSON.parse(todoStorage) || []
    }
  }
  clearComplete(todo:any[]): void {
    this.todoLists = this.todoLists.filter(todo => todo.isChecked === false)
    console.log('clear complete', this.todoLists)
    this.save()
  }
  get activeCount():number {    
    return this.todoLists.filter(todo => todo.isChecked === false).length
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
  margin: 20px 0 10px 0;
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
	right: 25px;
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
}
.showTodoUl li .deleteMark:after {
	content: '×';
}
.showTodoUl li:hover .deleteMark {
	display: block;
}
.showTodoUl .editing {
  border-bottom: none;
  padding: 0;
}
.showTodoUl .editing .view {
  display: none;
}
.showTodoUl .view label {
  font-size: 22px;
}
.showTodoUl li .edit {
  display: none;
}
.showTodoUl .editing .edit {
  display: block;
  width: 400px;
  padding: 8px 8px;
  margin: 0 0 0 43px;
  margin: 0 auto;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid lightsteelblue;
  font-size: 22px;
  color: mistyrose;
  font-family: monospace;
}
.showComplete {
  color: aliceblue;
  font-size: 20px;
}
.showComplete .countComplete{
  position: absolute;
  bottom: 8%;
  left: 5%;
}
.showComplete .clearComplete {
  position: absolute;
  bottom: 8%;
  right: 5%;
  cursor: pointer;
}
.clearComplete:hover {
  text-decoration: underline;
}
.showTodoUl .completed label {
  color: #d9d9d9;
  text-decoration: line-through;
}
.showTodoUl li .toggle {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 4px;
  bottom: 0;
  left: 26%;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 50%;
  border: 1px solid mistyrose;
}
</style>
