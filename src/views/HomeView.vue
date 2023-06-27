<template >
  <div>
    <NavBar />
    <AboutSection />
    <DescriptionSection />
    <PurchaseSection />
    <BiographySection />
    <ContactSection />
    <FooterSection />
  </div>

</template>

<script lang="ts">
import NavBar from '../components/NavBar.vue';
import BiographySection from '../sections/ BiographySection.vue';
import AboutSection from '../sections/AboutSection.vue'
import ContactSection from '../sections/ContactSection.vue';
import DescriptionSection from '../sections/DescriptionSection.vue';
import PurchaseSection from '../sections/PurchaseSection.vue';
import FooterSection from '../sections/FooterSection.vue';

  export default {
    components: {
    AboutSection,
    DescriptionSection,
    PurchaseSection,
    BiographySection,
    ContactSection,
    NavBar,
    FooterSection
}

  }
</script>