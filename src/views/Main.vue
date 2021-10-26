<template>
  <div class="progressBar">
    <indicator />
    <listMain />
    <br />
    <br>
    <br>
    <br>
    <br>
    <div v-for="item in items" :key="item.id">
      <div v-if="getCurrentStep === item.id">
        <Form :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import listMain from "../components/listMain.vue";
import indicator from "../components/indicator.vue";
import Form from "../components/Form.vue";
import { mapGetters } from "vuex";
export default {
  name: "Main",
  components: {
    listMain,
    indicator,
    Form,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          listitems: [
            {
              id: 1,
              key: "value",
              value: "FullName",
              type: "text",
              rules: "required|alpha",
              model: "",
              name: "Name",
            },
            {
              id: 2,
              key: "label",
              label: "Your Email",
              type: "email",
              model: "",
              name: "E-Mail",
              rules: "required|email",
            },
          ],
        },
        {
          id: 2,
          listitems: [
            {
              id: 1,
              key: "value",
              value: "Your Company Name",
              model: "",
              type: "text",
              rules: "required|alpha",
              name: "Name",
            },
            {
              id: 2,
              key: "label",
              type: "number",
              label: "Number of Employees",
              model: "",
            },
          ],
        },
        {
          id: 3,

          listitems: [
            {
              id: 1,
              key: "value",
              value: "From Where did you hear about us",
              model: "",
              type: "text",
              rules: "required|alpha",
              name: "Name",
              seclect: true,
              options: ["nam", "nữ"],
            },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getCurrentStep"]),
  },
};
</script>

<style lang="scss" scoped></style>