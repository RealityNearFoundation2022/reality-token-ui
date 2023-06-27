<template>
    <div class="rounded-xl purchase-card pa-4 ma-4 d-flex flex-column text-center">
        <h1>{{ data.amount }}</h1>
        <h2> {{ data.title }}</h2>
        <img :src="`/assets/images/Paquete${data.id}.png`"  :height="100" class="align-self-center"
            alt="Descripción de la imagen" />
        <div class="d-flex justify-center align-content-center mt-auto">
            <img src="/assets/logos/reality.png" :width="30" :height="30" class="align-self-center"
                alt="Descripción de la imagen" />
            <h1 class="ml-2">{{ data.price }}</h1>
        </div>
        <ModalTransaction :id="data.id" :title="data.title" :amount="data.amount" :price="data.price"></ModalTransaction>
    </div>
</template>

<script>
import ModalTransaction from '../components/ModalTransaction.vue'

export default {
    components: {
        ModalTransaction
    },
    props: ['data'],

}
</script>
<style lang="css" scoped>
.purchase-card {
    border: 3px solid white;
    height: 350px;
    min-width: 230px;
    max-width: 260px;
}
</style>