<template>
  <div>
      <FormHead :item="item.listitems" />
  </div>
</template>
<script>
import FormHead from "../components/FormHead.vue";
export default {
  name: "Form",
  components: { FormHead },
  props: {
    item: { type: Object },
  },
};
</script>
<style lang="scss" scoped></style>


