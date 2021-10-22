export default {
  currentUser: (state) => {
    return state.users;
  },
  UserDetail: (state) => {
    return state.user;
  },
  getCurrentStep: (state) => {
    return state.currentStep;
  },
};
