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
            <input type="text" class="form-control" v-model="formData.number" />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <input type="submit" class="btn btn-primary mt-3" tect="Submit" />
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
        number: "",
      },
    };
  },
  methods: {
    ...mapActions(["loginAcoount"]),
    onSubmit() {
      this.loginAcoount(true);
    },
  },
};
</script>
<style scoped></style>
