<script lang="ts">
import { defineComponent } from 'vue'
import TodoVue from '@/components/Todo.vue';
export default defineComponent({
  components: {
    TodoVue
  }
})
</script>

<template>
  <div class="about">
    <h1>TODO List</h1>
    <TodoVue />
  </div>
</template>
