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
  getOpen: (state) => {
    return state.open;
  },
  getSubMit: (state) => {
    return state.login;
  },
};
