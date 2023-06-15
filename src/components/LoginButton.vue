<template>
    <div class="text-center">
        <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ props }">
                <v-btn prepend-icon="mdi-account-circle"
                 v-if="signIn" color="primary-darken-1" v-bind="props"
                    variant="text">
                    My Account
                    <template v-slot:append>
                        <v-icon color="warning"></v-icon>
                    </template>
                </v-btn>
                <v-btn v-else variant="outlined" color="primary-darken-1" @click="login()" rounded="xl" class="mr-3 ml-2">
                    Login
                </v-btn>
            </template>

            <v-card min-width="300" class="bg-background pa-3">
                <v-list class="bg-background">
                    <v-list-item prepend-avatar="/assets/logos/LogoWhite.png" :title="accountId"
                        :subtitle="`$RLTS: ${balance}`">

                    </v-list-item>
                </v-list>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="outlined" color="primary-darken-1" @click="signOut()" rounded="xl">
                        Sing Out
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
    </div>
</template>

<script>
export default {
    data: () => ({
        menu: false,
        balance: 0,
        signIn: false,
        accountId: '',
    }),
    methods: {
        login() {
            this.$store.state.wallet.signIn()
        },
        signOut() {
            this.$store.state.wallet.signOut()
        }
    },
    async created() {
        this.signIn = await this.$store.state.wallet.startUp();
        this.balance = await this.$store.state.wallet.viewMethod();
        this.accountId = await this.$store.state.wallet.accountId;

    },
}
</script>