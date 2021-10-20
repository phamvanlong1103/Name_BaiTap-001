<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <table class="table">
            <thead>
              <tr>
                <th scope="col" v-for="item in header" :key="item.id">
                  {{ item.name }}
                </th>
              </tr>
            </thead>
            <BodyPost
              v-for="item in currentUser"
              v-bind:key="item.PID"
              v-bind:post="item"
            />
          </table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import BodyPost from "./BodyPost.vue";
import { headers } from "../helps/index";
export default {
  name: "About",
  data() {
    return {
      header: headers,
    };
  },
  components: {
    BodyPost,
  },
  created() {
    this.getUser();
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
  methods: {
    ...mapActions(["getUserById"]),
    getUser() {
      this.getUserById();
    },
  },
};
</script>

<style scoped></style>
