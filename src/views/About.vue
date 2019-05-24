<template>
  <div id="about">
    <h1>About Fyne Gold Properties</h1>
    <p>Fyne Gold Properties is principally involved in the sale of lands and real estate development. Fyne Gold Properties has acquired large areas of land in the capital city of Abuja, The commercial hub of Nigeria, Lagos and the oil city of Port Harcourt. With plans to own lands in Warri. </p>
    <h2>Our Activities</h2>
    <ul>
      <li>Integrated Consult: Research Development, Consultation planning and design execution</li>
      <li>Building Construction: Residential projects, commercial building and hotels, cultural and religious buildings </li>
      <li>Utilities: Water supply installations, waste disposal, infill sites recycling systems incinerating plants.</li>
      <li>Special Civil Engineering Constructions</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from "vuex"

export default {
  name:'About',
  data() {
    return {
      message: ""
    }
  },
  computed: {
    ...mapState(['additional'])

  },
  mounted() {
    this.$store.watch((state) => state.additional)
  }
}
</script>

<style scoped>
#about {
  text-align: left; 
  padding: 50px;
  padding-top: 200px;
}
</style>

