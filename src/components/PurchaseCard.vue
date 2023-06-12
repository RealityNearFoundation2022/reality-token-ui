<template>
    <div class="rounded-xl purchase-card pa-4 d-flex flex-column text-center">
        <h1>{{ data.amount }}</h1>
        <h2> {{ data.title }}</h2>
        <div class="d-flex justify-center align-content-center mt-auto">
            <img src="/assets/logos/reality.png" :width="30" :height="30" class="align-self-center"
                alt="Descripción de la imagen" />
            <h1>{{ data.price }}</h1>
        </div>
        <ModalTransaction :id="data.id" :title="data.title" :amount="data.amount" :price="data.price"></ModalTransaction>
    </div>
</template>

<script>
import ModalTransaction from './ModalTransaction.vue';

export default {
    props: ['data'],
    components: {
        ModalTransaction
    }
}
</script>

<style lang="css" scoped>
.purchase-card {
    border: 3px solid white;
    height: 350px;
    min-width: 200px;
    max-width: 250px;
}
</style>