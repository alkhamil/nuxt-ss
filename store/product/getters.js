const GET_PRODUCT_BY_ID = (state) => (id) => {
    const product = state.product.data.find(item => Number(item.id) === Number(id))
    return product
}
export default {
    GET_PRODUCT_BY_ID
};
