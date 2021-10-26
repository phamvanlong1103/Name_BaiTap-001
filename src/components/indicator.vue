<template>
  <div class="indicator" :style="{ width: progress }"></div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "indicator",
  data() {
    return {
      totalSteps: 3,
    };
  },
  computed: {
    ...mapGetters(["getCurrentStep"]),
    progress: function() {
      return ((this.getCurrentStep) / this.totalSteps) * 100 + "%";
    },
  },
};
</script>
