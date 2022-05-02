import { defineStore } from 'pinia';
import { ref, reactive, computed } from "vue";
import uniqueid from 'lodash.uniqueid';

export const useTodosStore = defineStore('todos', {
  state: () => {
    return {
      todos:[],
    }
  },

  getters: {
    finishedTodos: (state) => {
      return state.todos.filter((todo) => todo.done)
    },
    unfinishedTodos: (state) => {
      return state.todos.filter((todo) => !todo.done)
    },

    filteredTodos: (state) => {
      if (filter === 'finished') {
        return finishedTodos
      } else if (filter === 'unfinished') {
        return unfinishedTodos
      }
      return todos
    },
  },

  actions: {
  fill(){
      this.todos = [
      {
        label: "Learn Vue",
        done: false,
        id: uniqueid("todo-"),
      },
      {
        label: "Create a Vue project with the CLI",
        done: true,
        id: uniqueid("todo-"),
      },
      { label: "Have fun",
        done: true,
        id: uniqueid("todo-") },
      {
        label: "Create a to-do list",
        done: false,
        id: uniqueid("todo-"),
      }
    ]
  },


  // any amount of arguments, return a promise or not
    addTodo(label) {
      // you can directly mutate the state
      todos.push({ label: label, id: uniqueid("todo-"), done: false })
    },

    updateDoneStatus(todoId) {
      const todoToUpdate = TodoItems.find((item) => item.id === todoId);
      todoToUpdate.done = !todoToUpdate.done;
    },

    deleteTodo(todoId) {
      const itemIndex = TodoItems.findIndex((item) => item.id === todoId);
      TodoItems.splice(itemIndex, 1);
    },

    editTodo(todoId, newLabel) {
      const todoToEdit = TodoItems.find((item) => item.id === todoId);
      todoToEdit.label = newLabel;
    }
  }
})
