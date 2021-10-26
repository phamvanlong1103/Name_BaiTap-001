import axiosInstance from "../../axios";
export default {
    async getUserById({ commit }) {
        try {
            const result = await axiosInstance.get("posts");

            if (result.status === 200) {
                commit("SET_USER_INFO", result.data);
            }
        } catch (error) {
            return {
                ok: false,
                error: error.message,
            };
        }
    },
    async postDetail({ commit }, id) {
        try {
            const result = await axiosInstance.get("posts/" + id);
            if (result.status === 200) {
                commit("POST_DETAIL", result.data);
                return {
                    data: result.data,
                };
            }
        } catch (error) {
            return {
                ok: false,
                error: error.message,
            };
        }
    },
    handelNext({ commit }, currentStep) {
        commit("CURRENT_STEP", currentStep);
    },
    async getListPostHasPaging({ commit }) {
        try {
            const result = await axiosInstance.get(
                "https://provinces.open-api.vn/api/"
            );
            commit("SET_LIST_POSTS", result.data);
        } catch (error) {
            console.log(error);
        }
    },
    openData({ commit }, data) {
        commit("OPEN_LIST", data);
    },

    saveItem({ commit }) {
        commit("SAVE_LIST_POSTS");
    },
    cancelItem({ commit }) {
        commit("CANCEL_LIST_POSTS");
    },
    Delete({ commit }, item) {

        commit("SAVE_LIST_New", item);
    },
};