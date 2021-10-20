<template>
  <div class="ass1-login">
    <div class="ass1-login__content">

      <div class="ass1-login__form">
        <form action="#">
          <input
            v-model="UserDetail.body"
            type="text"
            class="form-control"
            required=""
          />
          <input
            type="number"
            v-model="UserDetail.id"
            name="avatar"
            placeholder="Ảnh đại
          diện"
            class="form-control"
          />
          <input
            type="number"
            v-model="UserDetail.userId"
            name="avatar"
            placeholder="Ảnh đại
          diện"
            class="form-control"
          />
          <input
            class="form-control"
            cols="30"
            rows="5"
            v-model="UserDetail.title"
          >
         
          <div class="ass1-login__send justify-content-center">
            <button type="submit" class="ass1-btn">Cập nhật</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { headers } from "../helps/index";

export default {
  data() {
    return {
      post: {
        body: "",
        id: null,
        userId: null,
        title: "",
      },
      header: headers,
      iditem: 1,
    };
  },
  methods: {
    ...mapActions(["postDetail"]),
  },

  created() {
    this.postDetail(this.$route.params.id);
  },
  computed: {
    LinkPost() {
      return {
        name: "Edit",
        params: {
          id: this.$route.params.id,
        },
      };
    },
    ...mapGetters(["UserDetail"]),
  },
};
</script>

<style scoped>
* {
  text-align: center;
}

.ass1-login {
  width: 800px;
  margin: auto;
  margin-top: 200px;
}
input{
  margin-top: 20px;
}
</style>
