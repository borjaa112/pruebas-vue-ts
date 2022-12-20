<script lang="ts">
import { defineComponent, defineProps, PropType } from 'vue'


export default defineComponent({
    props: {
        todoItems: Array as PropType<string[]>
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
