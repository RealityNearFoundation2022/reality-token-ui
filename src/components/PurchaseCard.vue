<template>
    <div class="rounded-xl purchase-card pa-4 d-flex flex-column text-center">
        <h1>{{data.amount }}</h1>
        <h2> {{data.title }}</h2>
        <div class="d-flex justify-center align-content-center mt-auto">
            <img src="/assets/logos/reality.png" :width="30" :height="30" class="align-self-center" alt="Descripción de la imagen" />
            <h1>{{data.price}}</h1>
        </div>
        <v-btn @click="buy(data.id, data.price)" rounded="xl" color="red">SWAP REALITIES</v-btn>
    </div>
</template>

<script>

export default {
  props: ['data'],
  methods: {
    async buy(packageId, price) {
        price = parseInt(price);
        // Verifica que el usuario ha iniciado sesión
        let signIn = await this.$store.state.wallet.startUp()
        console.log(signIn)
        if (!signIn) {
            // Pide al usuario que inicie sesión si no lo ha hecho
            this.$store.state.wallet.signIn()
            return
        }

        // Realiza la  llamada al método del contrato
        try {
            await this.$store.state.wallet.callMethodBatch({
                package: packageId,
                // Deberías obtener el monto de depósito necesario para el paquete seleccionado y convertirlo a yoctoNEAR aquí
                deposit: `${price}`,
            })
        } catch (err) {
            console.error('Error al comprar el paquete:', err)
        }
    },
  },
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