<template>
  <div class="dot">
    <b-button variant="success" @click="prevPage">PREVIOUS</b-button>
    <b-button variant="primary" @click="nextPage"
      ><router-link :to="linkPage" style="color:white">NEXT</router-link>
    </b-button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Dot",
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
  props: {
    submit: { type: Boolean, default: false },
  },
  methods: {
    ...mapActions(["handelNext", "handelPrev"]),
    nextPage() {
      if (this.getSubMit) {
        this.currentStep++;
        if (this.currentStep > 4) {
          this.currentStep = 4;
        }
        this.handelNext(this.currentStep);
      }
    },
    prevPage() {
      if (this.getSubMit) {
        this.currentStep = this.getCurrentStep;
        this.currentStep--;
        if (this.currentStep == 1) {
          this.currentStep = 2;
        }
        this.handelPrev(this.currentStep);
      }
    },
  },
  computed: {
    ...mapGetters(["getSubMit", "getCurrentStep"]),
    linkPage() {
      if ((this.getCurrentStep === 3) || (this.getCurrentStep === 2)) {
        return {
          name: "company",
        };
      } else if (this.getCurrentStep === 4) {
        return {
          path: "finish-up",
        };
      } else {
        return {
          path: "about-us",
        };
      }
    },
  },
};
</script>
