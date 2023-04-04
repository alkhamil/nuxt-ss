export default {
  SET_PRODUCT_LOADING(state, loading) {
    state.product.loading = loading;
  },
  SET_PRODUCT_DATA(state, res) {
    state.product.data = res.products;
  },
  SET_PRODUCT_DETAIL(state, res) {
    state.product.detail = res;
  },
};
