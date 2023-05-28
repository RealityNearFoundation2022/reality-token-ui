<template >
  <div>
    <AboutSection />
    <DescriptionSection />
    <PurchaseSection />
    <BiographySection />
    <ContactSection />
  </div>

</template>

<script lang="ts">
import BiographySection from '../sections/ BiographySection.vue';
import AboutSection from '../sections/AboutSection.vue'
import ContactSection from '../sections/ContactSection.vue';
import DescriptionSection from '../sections/DescriptionSection.vue';
import PurchaseSection from '../sections/PurchaseSection.vue';

  export default {
    components: {
    AboutSection,
    DescriptionSection,
    PurchaseSection,
    BiographySection,
    ContactSection
}
   
  }
</script>

<style lang="scss" scoped>

</style>
