<template>
  <div class="box" v-if="showCheckedCities.length > 0">
    <div class="box-content">
      <div
        class="box-content-item"
        v-for="item in showCheckedCities"
        :key="item.code"
      >
        <span>{{ item.name }} </span>
        <i
          class="fa fa-times"
          aria-hidden="true"
          @click="DeleteItem(item.code)"
        ></i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "Box",
  computed: {
    ...mapGetters(["getListPost", "getOpenList"]),
    ...mapState(["citiesChecked"]),
  },
  data() {
    return { showCheckedCities: [] };
  },
  watch: {
    citiesChecked(val) {
      this.showCheckedCities = this.getListPost.filter((item) =>
        val.includes(item.code)
      );
    },
  },
  methods: {
    ...mapActions([
      "saveItem",
      "Delete",
    ]),
    DeleteItem(code) {
      const data = this.citiesChecked.filter((item) => item != code);
      this.saveItem(data);
    },
  },
};
</script>
<style lang="scss">
.box {
  position: absolute;
  top: 102px;
  left: 95px;
  background: #ffffff;
  border-radius: 4px;
  width: 480px;
  height: auto;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-content: center;

  .box-search {
    width: 480px;
    height: 48px;
    display: flex;
    justify-content: space-around;

    i {
      position: absolute;
      right: 22px;
      bottom: 24px;
      height: 4px;
      width: 8px;
      left: 446px;
    }

    input {
      width: 277px;
      height: 16px;
      position: absolute;
      top: 16px;
      left: 10px;
    }
  }
}

.box-content {
  position: relative;
  width: 480px;
  height: auto;
  /* White */
  background: #ffffff;
  /* Gray/Gray02 */
  border: 1px solid #999999;
  border-radius: 4px;

  .box-content-item {
    display: inline-flex;
    justify-content: center;
    align-content: center;
    position: relative;
    background: #f8f8f8;
    color: #333333;
    width: 180px;
    border-radius: 32px;
    height: 32px;
    margin-top: 4px;
    padding-top: 4px;

    i {
      position: absolute;
      right: 8px;
      top: 8px;
    }
  }
}
</style>
