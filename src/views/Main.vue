<template>
  <div class="progressBar">
    <indicator />
    <listMain />
    <div class="container" v-if="getCurrentStep">
      <div v-if="getCurrentStep === 2"><aboutUs /></div>
      <div v-if="getCurrentStep === 3"><company /></div>
      <div v-if="getCurrentStep === 4"><finishUp /></div>
    </div>
  </div>
</template>

<script>
import listMain from "../components/listMain.vue";
import indicator from "../components/indicator.vue";
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

    aboutUs,
    Company,
    FinishUp,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getCurrentStep"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  top: 150px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  #btn {
    margin-left: 20px;
  }
}
</style>
