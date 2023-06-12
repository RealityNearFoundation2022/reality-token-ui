<template>
    <div id="about">
        <v-row class="d-flex justify-center py-12">
            <div>
                <h2 class="text-center">Realities</h2>
                <h4 class="text-box">These are tokens used as the official currency at Reality Near. To purchase Realities,
                    you have to enter the
                    Realities section, where you must link your NEAR wallet to exchange NEARS for Realities, or you can
                    click
                    the button “Purchase Realities” below. Once the transaction is made, these will be stored in your
                    wallet,
                    with which you can carry out the operations you want within Reality Near.</h4>
            </div>
        </v-row>
        <v-row class="d-flex justify-space-around py-12">
            <div>
                <h2 class="text-center">Functionality</h2>
                <h4 class="text-box">Realities serves as a cryptocurrency in the Reality Near experience, utilizing
                    blockchain technology withing the NEAR Protocol to securely record transactions, with low gas-fees and
                    quick transactions. Stored in your Near Wallet, Realities can be used to purchase a wide range of
                    products and services, from virtual real estate to fashion and premium experiences, all with just a few
                    clicks. Discover the endless possibilities that await you with Realities!</h4>
            </div>
            <div>
                <h2 class="text-center">Benefits</h2>
                <h4 class="text-box">Thanks to the token's integration with the NEAR Protocol, the Reality Token has high
                    throughput and low latency on the blockchain. With fast transaction times, users can enjoy near instant
                    settlements and minimize the risk of market fluctuations. Additionally, the low gas-fees associated with
                    Reality Token mean users can trade without worrying about high transaction costs eating into their
                    profits.</h4>
            </div>
        </v-row>
        <div class="d-flex flex-column align-center bg-primary pa-4 mx-12">
            <v-btn rounded="xl" color="red" class="mb-2 btn-xl">PURCHASE REALITIES</v-btn>
            <v-btn variant="outlined" color="white" class="btn-xl" rounded="xl">WHITEPAPER</v-btn>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.text-box {
    width: 350px;
    text-align: justify;
    text-align-last: justify;
}
</style>