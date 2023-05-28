<template>
    <div justify="center" class="bg-primary text-center pa-4">
        <h1 class="py-2">CONTACT</h1>
        <div>
            <a v-for="socialNetwork in socialNetworks" :key="socialNetwork.asset" :href="socialNetwork.link" target="_blank"
                rel="noreferrer">
                <img :src="`/assets/logos/${socialNetwork.asset}.png`" class="logo mx-3">

            </a>
        </div>
    </div>
    <div class="text-center pa-4">
        <p>© Reality Near Foundation {{ new Date().getFullYear() }}</p>
    </div>
</template>

<script>
export default {
    data: () => ({
        socialNetworks: [
            {
                asset: 'ig',
                link: 'https://www.instagram.com/realitynear/',
            },
            {
                asset: 'fb',
                link: 'https://www.facebook.com/FundacionRealityNear'
            },
            {
                asset: 'linkedin',
                link: 'https://www.linkedin.com/company/reality-near/'
            },
            {
                asset: 'twitter',
                link: 'https://twitter.com/RealityNearOrg'
            }
        ]
    })
}
</script>

<style lang="css" scoped>
.logo {
    width: 50px;
}
</style>