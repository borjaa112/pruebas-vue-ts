<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import Input from './reusable/Input.vue';
import TodoList from './TodoList.vue';

export default defineComponent({
    components: { TodoList, Input },
    setup () {
        const todoArray: Ref<string[]> = ref([])
        const textInput = ref()

        function addTask () {
            todoArray.value.push(textInput.value)

        }
        function removeItem (index: number) {
            todoArray.value.splice(index, 1)
        }
        return {
            todoArray,
            textInput,
            enviar: addTask,
            removeItem
        }
    },
})
</script>

<template>
    <div>
        <form @submit.prevent="enviar()">
            <Input v-model="textInput" :place-holder="'Introduce tarea'" :id="'1'" />
            <button type="submit">Enviar</button>
        </form>
        <TodoList :todo-items="todoArray" @removeIndex="(index) => removeItem(index)" />
    </div>
</template>
