<template>
  <section id="contact" class="d-flex justify-space-around pa-12">
    <div class="contact text-center" v-for="data in informationData" :key="data.asset">
      <img :src="`/assets/images/${data.asset}.png`" class="circle" alt="Descripción de la imagen" />
      <h1>{{ data.name }}</h1>
      <h2>{{ data.job }}</h2>
      <p>
       {{ data.description }}
      </p>
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
        description:
          'Business owner & Expert in the field of entertainment and retail for more than 18 years.\n Fullstack Developer/Blockchain by MIT.\n Mentor & Judge "Stanford Web3 Research Lab"'
      },
      {
        asset: 'cco',
        name: 'Damián Gamarra',
        job: 'CCO / Co-Founderr',
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
