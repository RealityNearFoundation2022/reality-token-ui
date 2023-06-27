<template>
    <div id="about"> <v-row justify="center" class="bg-primary py-5 ">
            <img src="/assets/logos/logo_letter_green_reality.png" class="logo-image " alt="Descripción de la imagen" />
        </v-row>
        <div id="about" class="background-image mt-6 px-12">

            <v-row class="d-flex justify-center my-6">
                <div>
                    <h2 class="text-center">Realities</h2>
                    <p class="text-box mx-3">These are tokens used as the official currency at Reality Near. To purchase
                        Realities,
                        you have to enter the
                        Realities section, where you must link your NEAR wallet to exchange NEARS for Realities, or you can
                        click
                        the button "Swap Realities” below. Once the transaction is made, these will be stored in your
                        wallet,
                        with which you can carry out the operations you want within Reality Near.</p>
                </div>
            </v-row>
            <v-row class="d-flex justify-space-around">
                <div class="my-6">
                    <h2 class="text-center">Functionality</h2>
                    <p class="text-box mx-3">Realities serves as a cryptocurrency in the Reality Near experience, utilizing
                        blockchain technology withing the NEAR Protocol to securely record transactions, with low gas-fees
                        and
                        quick transactions. Stored in your Near Wallet, Realities can be used to purchase a wide range of
                        products and services, from virtual real estate to fashion and premium experiences, all with just a
                        few
                        clicks. Discover the endless possibilities that await you with Realities!</p>
                </div>
                <div class="my-6">
                    <h2 class="text-center">Benefits</h2>
                    <p class="text-box mx-3">Thanks to the token's integration with the NEAR Protocol, the Reality Token has
                        high
                        throughput and low latency on the blockchain. With fast transaction times, users can enjoy near
                        instant
                        settlements and minimize the risk of market fluctuations. Additionally, the low gas-fees associated
                        with
                        Reality Token mean users can trade without worrying about high transaction costs eating into their
                        profits.</p>
                </div>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.text-box {
    min-width: 300px;
    max-width: 360px;
    text-align: center;

    /* text-align: justify;
    text-align-last: justify; */
}

.logo-image {
    width: 500px;
    /* Ajusta el tamaño de la imagen según tus necesidades */
}

@media (max-width: 600px) {
    .logo-image {
        width: 250px;
        /* Tamaño más pequeño para dispositivos móviles */
    }
}

.background-image {
    background-image: url('/assets/logos/Fondo_Reality_Token.png');
    background-size: 600px 600px;
    background-position: center;

    @media (max-width: 600px) {
        margin: 10px;
    }
}</style>