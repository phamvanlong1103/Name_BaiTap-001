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
  loginAcoount({ commit }, data) {
    commit("LOGIN", data);
  },
};
