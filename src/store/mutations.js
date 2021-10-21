export default {
  SET_USER_INFO(state, user) {
    state.users = user;
  },

  POST_DETAIL(state, data) {
    state.user = data;
  },
  CURRENT_STEP(state, data) {
    state.currentStep = data;
  },
  LOGIN(state,data){
    state.login = data;

  }
};
