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
            <label>Full Name</label>
            <input type="text" class="form-control" v-model="formData.name" />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="E-Mail"
          rules="required|email"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="formData.email" />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <b-button type="submit" variant="primary">Submit</b-button>
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
        email: "",
      },
    };
  },
  methods: {
    ...mapActions(["loginAcoount", "handelNext"]),
    onSubmit() {
      this.handelNext();
    },
  },
};
</script>
<style scoped></style>
