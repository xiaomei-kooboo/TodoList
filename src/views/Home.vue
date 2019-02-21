<template>
  <div class="home">
    <Todo msg="notepad"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Todo from '@/components/Todo.vue'; // @ is an alias to /src

@Component({
  components: {
    Todo,
  },
})
export default class Home extends Vue {}
</script>
