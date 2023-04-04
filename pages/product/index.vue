<template>
  <div>
    <h1>Product</h1>
    <div class="product">
      <div v-for="(item, i) in product.data" class="product-card" :key="i">
        <nuxt-link :to="`/product/${item.id}`">
          <img :src="item.thumbnail" :alt="item.title" />
          <div class="info">
            <p class="product-name">{{ item.title }}</p>
            <p class="product-price">${{ item.price }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  head() {
    return {
      title: 'Judul Product',
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: 'Halaman product',
        },
      ],
    };
  },
  methods: {
    ...mapActions("product", ["GET_RPODUCT"]),
  },
  computed: {
    ...mapState("product", {
      product: (state) => state.product,
    }),
  },
  async fetch(ctx) {
    await ctx.store.dispatch("product/GET_RPODUCT");
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 16px;

  .product-card {
    min-height: 260px;
    background: #fff;
    box-shadow: 1px 1px 16px 0px #ccc;
    border-radius: 10px;
    cursor: pointer;

    img {
      width: 100%;
      height: 180px;
      background: #fafafa;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }

    .info {
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .product-name {
        font-size: 16px;
        font-weight: 600;
      }

      .product-price {
        font-size: 14px;
      }
    }
  }
}
</style>
