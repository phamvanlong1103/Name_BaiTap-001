<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          name="Name"
          rules="required|alpha"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>Your Company Name</label>
            <input type="text" class="form-control" v-model="formData.name" />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="Name"
          rules="required|alpha"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>Number of Employees</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.number"
            />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <b-button variant="success" @click="prevPage">PREVIOUS</b-button>
        <b-button type="submit" id="btn" variant="primary">NEXT</b-button>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "aboutus",
  components: {},
  data() {
    return {
      formData: {
        name: "",
        number: null,
      },
    };
  },
  methods: {
    ...mapActions(["handelNext"]),
    onSubmit() {
      this.handelNext(4);
    },
    prevPage() {
      this.handelNext(2);
    },
  },
};
</script>
<style scoped></style>
