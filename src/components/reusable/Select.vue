<script lang="ts">
import { PropType } from '@vue/runtime-core'
export default {
    props: {
        options: Array as PropType<string[]>,
        modelValue: String,
    }
}
</script>

<template>
    <div>
        <select required @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)">
            <optgroup>
                <option value="null" disabled selected>Selecciona una opción</option>
                <option v-for="(option, index) in options" :value="option" :key="index">{{ option }}</option>
            </optgroup>
        </select>
    </div>
</template>