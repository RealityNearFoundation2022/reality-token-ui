<template>
    <v-row id="description">
        <v-col cols="12" sm="6" order="2" order-sm="1" class="pa-sm-12 pcol-2">
            <h1 class="mb-2">REALITY NEAR</h1>
            <h5>Welcome to the Reality Near, where you will experience your realities in a whole new way! Our
                cutting-edge technology combines the power of augmented and virtual reality with real-life experiences to
                create an immersive world of endless possibilities. At the heart of our mission is a commitment to
                facilitating educational and economic growth for our users by reducing physical barriers. Whether you're a
                student looking to explore new horizons, an entrepreneur seeking fresh business opportunities, or simply
                someone who loves to connect with others, Reality Near has something for you!
                Reality ($RLTS) is the token and main component in the economy of Reality Near. Realities provides fast
                transaction times and low fees thanks to NEAR protocol, making it a practical choice for our users. Don't
                miss out on the chance to be a part of the future of reality and buy your Realities ($RLTS) today!</h5>
            <div class="mt-7 d-flex">
                <v-btn rounded="xl" color="red" class="mr-2 btn-xl mb-2" @click="scrollToSection('#purchase')">SWAP
                    REALITIES</v-btn>
                <v-btn variant="outlined" color="white" class="btn-xl rounded-xl"
                    href="https://drive.google.com/file/d/1E3jNl2VlCZMm6P-LtuWsUbugUuH_iVPs/view?usp=sharing"
                    target="_blank">WHITEPAPER</v-btn>
            </div>
        </v-col>
        <v-col cols="12" sm="6" order="1" order-sm="2">
            <img src="/assets/images/landing-1.png" alt="Descripción de la imagen" />
        </v-col>
    </v-row>
</template>

<script>
export default {
    methods: {
        scrollToSection(path) {
            const element = document.querySelector(path);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
    }
}
</script>

<style lang="css" scoped>
@media (max-width: 600px) {
  .pcol-2 {
    padding: 20px !important; /* Puedes ajustar este valor según tus necesidades */
  }

}
</style>