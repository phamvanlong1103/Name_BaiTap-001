<template>
  <div class="list__main">
    <div id="list__main-box" :class="show(1)">
      <span class="list__main-box-number">1</span> About You
    </div>
    <div id="list__main-box" :class="show(2)">
      <span class="list__main-box-number">2</span>About your Company
    </div>
    <div id="list__main-box" :class="show(3)">
      <span class="list__main-box-number">3</span>Finishing Up
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "listMain",
  data() {
    return {
      isOpen: true,
      isCLoseTwo: false,
      getStep: this.getCurrentStep,
      
    };
  },

  computed: {
    ...mapGetters(["getCurrentStep", "getOpen"]),
  },
  methods: {
    show(n) {
      if (this.getCurrentStep == n) {
        return "show";
      } else if (this.getCurrentStep >= n) {
        return "show";
      } else {
        return "";
      }
    },
  },
};
</script>
