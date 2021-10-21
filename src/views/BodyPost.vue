<template>
  <tbody>
    <tr>
      <td v-for="item in header" :key="item.id">
        {{ post[item.key] }}
      </td>
      <td>
        <b-button variant="danger"
          >Button
          <router-link :to="LinkUser">Edit</router-link>
        </b-button>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "bodypost",
  data() {
    return {
      header: [
        {
          id: 3,
          key: "body",
          name: "Body",
        },
        {
          id: 2,
          key: "title",
          name: "Title",
        },
        {
          id: 1,
          key: "userId",
          name: "Id",
        },
      ],
    };
  },
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  computed: {
    LinkUser() {
      return {
        name: "Edit",
        params: {
          id: this.post.id | 1,
        },
      };
    },
  },
};
</script>
