<template>
  <div class="progressBar">
    <indicator />
    <listMain />
    <div class="container">
      <div v-if="getCurrentStep === 2"><aboutUs /></div>
      <div v-if="getCurrentStep === 3"><company /></div>
      <div v-if="getCurrentStep === 4"><finishUp /></div>
    </div>
    <btnDot />
  </div>
</template>

<script>
import listMain from "../components/listMain.vue";
import indicator from "../components/indicator.vue";
import btnDot from "../components/btnDot.vue";
import aboutUs from "../components/AboutUs.vue";
import Company from "../components/Company.vue";
import FinishUp from "../components/FinishUp.vue";

FinishUp;
import { mapGetters } from "vuex";
export default {
  name: "Main",
  components: {
    listMain,
    indicator,
    btnDot,
    aboutUs,
    Company,
    FinishUp,
  },
  data() {
    return {
      currentStep: 2,
      totalSteps: 3,
      articles: [
        {
          step: 1,
          name: "About you",
        },
        {
          step: 2,
          name: "About your Company",
        },
        {
          step: 3,
          name: "Finishing Up",
        },
      ],
    };
  },
  computed: {
    ...mapGetters("getCurrentStep"),
  },
};
</script>

<style></style>
