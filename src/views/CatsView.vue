<!-- live_zICgyTlYjKLD13f7VpOu3HEqgk3kkLrlGMZ0qOO3n6LDFReGG2Hy0EunbYSKLHTS -->

<script lang="ts">
import { requestHandler } from "@/application/requestHandler";
import { AxiosRequest } from "@/infrastructure/AxiosHTTPRequest";
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";


export default defineComponent({
    setup () {

        const imageUrl = ref<string>()

        const request = new requestHandler(new AxiosRequest())

        request.handle('https://dog.ceo/api/breeds/image/random').then((response) => imageUrl.value = response.message)
        return { imageUrl }
    }
})
</script>

<template>
    <div>
        <h1>Cats Gallery</h1>
    </div>
</template>