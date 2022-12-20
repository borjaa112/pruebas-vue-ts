<script lang="ts">
import { defineComponent, defineProps } from 'vue'


export default defineComponent({
    props: {
        todoItems: Array
    },
    setup (props) {
        console.log(props.todoItems);
    },
})
</script>

<template>
    <div>
        HOla
        {{ todoItems }}
    </div>
</template>
