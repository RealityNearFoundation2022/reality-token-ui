<template>
    <div class="text-center ">
        <v-dialog v-model="dialog" width="500" transition="dialog-top-transition">
            <template v-slot:activator="{ props }">

                <v-btn rounded="xl" color="red" v-bind="props" class="ma-2 btn-xl">PURCHASE REALITIES</v-btn>

            </template>

            <v-card class="bg-background rounded-xl text-center pa-8 d-flex justify-center align-items-center" border="150">
                <v-card-title class="text-center">
                    Transaction Summary
                </v-card-title>
                <div class="d-flex justify-space-around">
                    <h2>PACK #{{ id }}</h2>
                    <div class="d-flex">
                        <v-btn icon color="surface" variant="outlined" @click="() => amountToBuy += 1" border
                            size="x-small">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                        <h3 class="mx-3 mt-1">{{ amountToBuy }}</h3>
                        <v-btn icon color="surface" variant="outlined" :disabled="amountToBuy <= 1"
                            @click="() => amountToBuy <= 1 ? 1 : amountToBuy -= 1" border size="x-small">
                            <v-icon>mdi-minus</v-icon>
                        </v-btn>
                    </div>


                </div>
                <div>
                    <div class="d-flex justify-center align-items-center mt-auto">
                        <img src="/assets/logos/IconRLTS.png" :width="30" :height="30" class="align-self-center"
                            alt="Descripción de la imagen" />
                        <h2 class="ml-1">{{ amountToBuy * amount }}</h2>
                    </div>
                </div>
                <hr class="my-5">
                <h2>Price:</h2>
                <div class="d-flex justify-center align-content-center mt-auto">
                    <img src="/assets/logos/reality.png" :width="30" :height="30" class="align-self-center"
                        alt="Descripción de la imagen" />
                    <h2 class="ml-1">{{ amountToBuy * price }}</h2>
                </div>
                <v-card-actions class="mt-3 d-flex justify-center">
                    <v-btn variant="outlined" color="white" class="btn-xl" rounded="xl" @click="() => dialog =false">Next</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: ['amount', 'title', 'price', 'id'],
    data() {
        return {
            dialog: false,
            amountToBuy: 1
        }
    },
}
</script>

<style lang="css" scoped></style>