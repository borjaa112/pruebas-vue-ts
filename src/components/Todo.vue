<script lang="ts">
import { defineComponent } from 'vue'
import TodoList from './TodoList.vue';

export default defineComponent({
    components: { TodoList },
    setup () {

    },
})
</script>

<template>
    <div>
        <TodoList />
    </div>
</template>
