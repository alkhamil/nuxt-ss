export default {
  GET_RPODUCT({ commit }) {
    commit("SET_PRODUCT_LOADING", true);

    return new Promise((resolve, reject) => {
      this.$axios
        .$get("/products")
        .then((response) => {
          commit("SET_PRODUCT_DATA", response);
          resolve(response);
        })
        .catch((error) => reject(error))
        .finally(() => commit("SET_PRODUCT_LOADING", false));
    });
  },
  GET_PRODUCT_BY_ID({ commit }, id) {
    commit("SET_PRODUCT_LOADING", true);
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(`/products/${id}`)
        .then((response) => {
          commit("SET_PRODUCT_DETAIL", response);
          resolve(response);
        })
        .catch((error) => reject(error))
        .finally(() => commit("SET_PRODUCT_LOADING", false));
    });
  },
};
