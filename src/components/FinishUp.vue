<template>
  <div>
    <ValidationObserver>
      <form>
        <ValidationProvider name="Gender" rules="required" v-slot="{ errors }">
          <div class="form-group">
            <label>From Where did you hear about us</label>
            <select class="form-control" v-model="formData.gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
            </select>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <b-form-checkbox>
          I accept the terms and use
        </b-form-checkbox>
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
        email: "",
        gender: "",
      },
    };
  },
  methods: {
    ...mapActions(["handelNext"]),
    onSubmit() {
      this.handelNext(4);
    },
    prevPage() {
      this.handelNext(3);
    },
  },
};
</script>
<style scoped></style>
