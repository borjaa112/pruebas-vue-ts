<script lang="ts">
export default {
    props: {
        id: String,
        labelText: String,
        modelValue: String,
        placeHolder: String
    },
};
</script>
<template>
    <label :for="id">{{ labelText }}</label>
    <input :value="modelValue" @change="$emit('update:modelValue', $event.target.value)" :id="id"
        :placeholder="placeHolder" />
</template>
  
  