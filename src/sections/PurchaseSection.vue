<template>
    <div class="d-flex flex-column align-center bg-primary pa-4 mx-sm-12">
        <v-btn rounded="xl" color="red" class="mb-4 btn-xl" @click="scrollToSection('#purchase')">SWAP REALITIES</v-btn>
        <v-btn  variant="outlined" color="white" class="btn-xl" rounded="xl"
            href="https://drive.google.com/file/d/1E3jNl2VlCZMm6P-LtuWsUbugUuH_iVPs/view?usp=sharing"
            target="_blank">WHITEPAPER</v-btn>
    </div>
    <v-row class="px-sm-12 ">

        <v-col cols="3" class="hidden-sm-and-down" >
            <img src="/assets/images/landing-2.png" class="h-100" alt="Descripción de la imagen" />
        </v-col>
        <v-col cols="12" sm="6" class="text-center py-12">
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
        <v-col cols="3" class="hidden-sm-and-down">
            <img src="/assets/images/landing-3.png" class="h-100" alt="Descripción de la imagen" />
        </v-col>
    </v-row>
    <v-row class="d-flex justify-space-around mx-sm-12 py-5 bg-primary " id="purchase">
        <PurchaseCard v-for="purchaseCard in purchaseCards" :key="purchaseCard.id" :data="purchaseCard"></PurchaseCard>
    </v-row>
</template>

<script>
import PurchaseCard from '../components/PurchaseCard.vue';

export default {
    components: { PurchaseCard },
    methods: {
        scrollToSection(path) {
            const element = document.querySelector(path);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
    },
    data: () => ({
        purchaseCards: [
            {
                id: 1,
                title: 'Realities',
                amount: 1000,
                price: 100.00
            },
            {
                id: 2,
                title: 'Realities',
                amount: 7500,
                price: 500.00
            },
            {
                id: 3,
                title: 'Realities',
                amount: 30000,
                price: 1500.00
            }
        ]
    })
}
</script>

