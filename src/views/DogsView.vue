<script lang="ts">
import { requestHandler } from '@/application/requestHandler';
import { AxiosRequest } from '@/infrastructure/AxiosHTTPRequest';
import { ref } from '@vue/reactivity';
import { defineComponent } from '@vue/runtime-core';

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
        <h1>
            DOGs Gallery
        </h1>
        <img :src="imageUrl" alt="">
    </div>
</template>