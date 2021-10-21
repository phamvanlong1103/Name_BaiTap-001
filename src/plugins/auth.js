import store from "../store";
const auth = (to, from, next) => {
  if (store.getters["getSubMit"] === true) {
    next();
  } else {
    next({ path: "main/about-us" });
  }
};
export { auth };
