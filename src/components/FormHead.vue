<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          v-for="items in item"
          :key="items.id"
          :name="items.name"
          :rules="items.rules"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>{{ items[items.key] }}</label>
            <input
              v-if="!items.seclect"
              :type="items.type"
              class="form-control"
              v-model="items.model"
            />

            <select v-if="items.seclect" class="form-control">
              <option
                class="opt"
                v-for="item in items.options"
                :key="item"
                :value="item"
              >
                {{ item }}
              </option>
            </select>

            <span class="error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <br />
        <b-button @click="prevPage" variant="success">PREVIOUS</b-button>
        <b-button type="submit" id="btn" variant="primary">NEXT</b-button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FormHead",
  props: {
    item: {
      type: Array,
    },
  },
  data() {
    return {
      step: 1,
    };
  },
  computed: {
    ...mapGetters(["getCurrentStep"]),
  },
  methods: {
    ...mapActions(["handelNext"]),
    onSubmit() {
      if (this.getCurrentStep === 4) {
        this.getCurrentStep = 2;
        this.handelNext(this.getCurrentStep + 1);
      }
    },

    prevPage() {
      this.step = this.getCurrentStep;
      if (this.getCurrentStep == 1) return (this.getCurrentStep = 1);
      this.step--;
      this.handelNext(this.step);
    },
  },
  created() {
    this.step = this.getCurrentStep;
    console.log(this.getCurrentStep);
  },
};
</script>

<style>
.error {
  color: red;
}

.opt {
  background: white;
}
</style>
