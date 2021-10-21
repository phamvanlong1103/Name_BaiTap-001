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
        email: "",
        gender: "",
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
