<script lang="ts">
import { defineComponent, ref } from 'vue'
import TodoList from './TodoList.vue';

export default defineComponent({
    components: { TodoList },
    setup () {
        const todoArray = ref([])
        return {
            todoArray
        }
    },
})
</script>

<template>
    <div>
        <TodoList :todo-items="todoArray" />
    </div>
</template>
