<template>
  <p v-if="!product">Loading...</p>
  <main v-else>
    <nuxt-link to="/product">Kembali</nuxt-link>
    <hr />
    <div class="product-wrapper">
      <img
        class="product-image"
        :src="product.thumbnail"
        :alt="product.title"
      />
      <div class="product-description">
        <h3>{{ product.title }}</h3>
        <p>${{ product.price }}</p>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.product.title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.product.description,
        },
      ],
    };
  },
  async asyncData(ctx) {
    const product = await ctx.store
      .dispatch("product/GET_PRODUCT_BY_ID", ctx.params.id)
      .then((res) => res);
    if (product) {
      return {
        product: product,
      };
    } else {
      ctx.redirect("/");
    }
  },
};
</script>

<style lang="scss" scoped>
.product-wrapper {
  display: flex;
  gap: 16px;
  margin-top: 24px;

  .product-image {
    width: 300px;
    border: 1px solid #ccc;
  }

  .product-description {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
