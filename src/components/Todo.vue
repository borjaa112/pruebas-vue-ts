<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import Input from './reusable/Input.vue';
import Select from './reusable/Select.vue';
import TodoList, { todoItems } from './TodoList.vue';

export default defineComponent({
    components: { TodoList, Input, Select },
    setup () {
        const todoArray: Ref<todoItems[]> = ref([])
        const textInput = ref()
        const taskState = ref()

        function addTask () {
            todoArray.value.push(
                {
                    task: textInput.value, state: taskState.value
                }
            )

        }
        function removeItem (index: number) {
            todoArray.value.splice(index, 1)
        }
        return {
            todoArray,
            textInput,
            enviar: addTask,
            removeItem,
            taskState
        }
    },
})
</script>

<template>
    <div>
        <form @submit.prevent="enviar()">
            <Input v-model="textInput" :place-holder="'Introduce tarea'" :id="'1'" />
            <Select :options="['completada', 'sin completar']" v-model="taskState" />
            <button type="submit">Enviar</button>
        </form>
        <TodoList :todo-items="todoArray" @removeIndex="(index) => removeItem(index)" />
    </div>
</template>
