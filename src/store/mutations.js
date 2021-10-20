export default {
  SET_USER_INFO(state, user) {
    state.users = user;
  },

  POST_DETAIL(state, data) {
    state.user = data;
  },
};
