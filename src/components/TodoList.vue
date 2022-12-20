<script lang="ts">
import { defineComponent, defineProps, PropType } from 'vue'


export default defineComponent({
    props: {
        todoItems: Array as PropType<string[]>
    },
    emits: {
        removeIndex: (index: number) => true
    },
    setup (props, { emit }) {
        console.log(props.todoItems);

        function removeTask (index: number) {
            emit('removeIndex', index)
        }
        return {
            removeTask,
        }
    },
})
</script>

<template>
    <div>
        <ul>
            <li v-for="(todoItem, index) in todoItems" :key="index">{{ todoItem }}
                <button :key="index" v-on:click="removeTask(index)">X</button>
            </li>
        </ul>
    </div>
</template>
