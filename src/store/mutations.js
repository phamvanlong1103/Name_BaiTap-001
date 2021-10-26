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
    LOGIN(state, data) {
        state.login = data;
    },
    SET_LIST_POSTS(state, data) {
        state.postList = data;
    },
    SAVE_CITY_CHECKED(state, data) {
        state.citiesChecked = data;
    },
    CANCEL_LIST_POSTS(state) {
        state.postList = state.listSave;
    },
    OPEN_LIST(state, data) {
        state.open = data;
    },
    SAVE_LIST_New(state, data) {
        state.listSave = state.listSave.filter((item) => item.check != data.check);
    },
};