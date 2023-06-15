<template>
    <v-dialog v-model="dialog" width="500" transition="dialog-top-transition" @input="updateDialog">
        <v-card class="bg-background rounded-xl text-center pa-8 d-flex justify-center align-items-center" border="150">
            <img :src="asset" :width="100" :height="100" class="align-self-center"
                alt="Descripción de la imagen" />
            <h4 class="ma-3">{{ description }}</h4>
            <v-btn variant="outlined" color="primary-darken-1" class="align-self-center mt-2" :min-width="150"
            @click="close" rounded="xl"> {{ textButton }}</v-btn>
        </v-card>
    </v-dialog>
</template>
  
<script>
export default {
    props: ['dialogModalInfo', 'description', 'textButton', 'asset'],
    data: () => ({
        dialog: false
    }),
    watch: {
        dialogModalInfo: function (dialog) {
            this.dialog = dialog;
        },
    },
    methods: {
        close(){
            this.dialog = false;
            this.$emit('actionModalInfo')
        }
    }

};
</script>
  
<style lang="css" scoped></style>
  