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
    getListPost: (state) => {
        return state.postList;
    },
    getListSave: (state) => {
        return state.citiesChecked;
    },

    getOpenList: (state) => {
        return state.open;
    },
};