<template>
<section id="contact" class="d-flex justify-space-around pa-12 mt-4 flex-wrap">
    <div class="contact text-center my-6" v-for="data in informationData" :key="data.asset">
        <img :src="`/assets/images/${data.asset}.png`" class="circle" alt="Descripción de la imagen" />
        <h1>{{ data.name }}</h1>
        <h2>{{ data.job }}</h2>
        <p>{{ data.description }}</p>
        <a :href="data.linkedin" target="_blank" rel="noreferrer">
            <img :src="`/assets/logos/linkedin.png`" width="40" class="logo mt-3">
        </a>
    </div>
</section>


</template>

<script>
export default {
  data: () => ({
    informationData: [
      {
        asset: 'ceo',
        name: 'Javier Bambaren',
        job: 'CEO / Co-Founder',
        linkedin: 'https://www.linkedin.com/in/javier-bambaren-dabdoub/',
        description:
          'Business owner & Expert in the field of entertainment and retail for more than 18 years.\n Fullstack Developer/Blockchain by MIT.\n Mentor & Judge "Stanford Web3 Research Lab"'
      },
      {
        asset: 'cco',
        name: 'Damián Gamarra',
        job: 'CCO / Co-Founderr',
        linkedin: 'https://www.linkedin.com/in/damian-gamarra/',
        description:
          'Graphic designer specialized in marketing and branding.\n Experienced in videogame design.\n Experienced with NoCode tools.'
      }
    ]
  })
}
</script>

<style lang="css" scoped>
.circle {
  border-radius: 50%;
  width: 200px;
  border: 3px solid white;
}

.contact {
  max-width: 300px;
}
</style>
