<template>
    <v-row class="px-12 ">
        <v-col cols="3">
            <img src="/assets/images/landing-2.png" class="h-100" alt="Descripción de la imagen" />
        </v-col>
        <v-col cols="6" class="text-center py-12">
            <h2>REALITY NEAR</h2>
            <h4>World of infinite opportunities</h4>
            <p>
                Explore endless possibilities in Reality Near! Our XR experience aims to enhance and change the way you
                interact with your reality in a decentralized world. It is designed for a diverse community with varied
                interests. By utilizing technologies, such as augmented and virtual reality, we create a space where brands
                can connect with their audience in innovative and exciting ways, generating value for both.
                At Reality Near, we promote innovation, enabling businesses to provide immersive experiences to their
                customers across multiple realities. Our decentralized model creates an equal playing field, where every
                member can unleash their creativity and bring their wildest ideas to life.
                Our advanced technology is poised to revolutionize the global market, driving innovation, creativity, and
                reach to new heights. By strengthening brand-consumer bonds, we're unlocking new growth opportunities.
                Join the Reality Near community today and explore the possibilities! The future is now, and Reality Near
                leads the way!
            </p>
        </v-col>
        <v-col cols="3">
            <img src="/assets/images/landing-3.png"  class="h-100" alt="Descripción de la imagen" />
        </v-col>
    </v-row>
    <v-row class="d-flex justify-space-around mx-12 py-5 bg-primary ">
        <PurchaseCard  v-for="purchaseCard in purchaseCards"
          :key="purchaseCard.id" :data="purchaseCard"></PurchaseCard>
    </v-row>
</template>

<script>
import PurchaseCard from '../components/PurchaseCard.vue';

export default {
    components: { PurchaseCard },
    data: () => ({
        purchaseCards: [
            {
                id: 1,
                title: 'Realities',
                amount: '1,000',
                price: '100.00'
            },
            {
                id: 2,
                title: 'Realities',
                amount: '7,500',
                price: '500.00'
            },
            {
                id: 3,
                title: 'Realities',
                amount: '30,000',
                price: '1500.00'
            }
        ]
    })
}
</script>

<style lang="css" scoped>
</style>