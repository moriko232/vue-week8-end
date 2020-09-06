<template>
  <div class="product">
    <nav class="sub-menu-wrap">
      <div class="container">
        <ul class="sub-menu">
          <li>
             <router-link to="/products">皂皂商品</router-link>
          </li>
          <li>
            <span>{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </nav>
    <div class="main-content" v-if="!isLoading">
      <div class="container">
        <div class="row align-items-start justify-content-center">
          <div class="product-item col-md-6">
            <h1 class="text-h1">{{ item.title }}</h1>
            <img :src="item.imageUrl[0]" />
            <div class="product-text">
              <p class="text">{{ item.content }}</p>
              <div class="text-right">
                <p class="price">$ {{ item.price }}</p>
                <p class="origin-price">原價 $ {{ item.origin_price }}</p>
              </div>
            </div>

            <span>
              <button class="add-cart" @click="addToCart(item, 1)">加入購物車</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const getProductDetailUrl = `${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/product`;

export default {
  name: "Product",
  data() {
    return {
      isLoading: false,
      item: {
        id: "",
        title: "",
        content: "",
        price: "",
        origin_price: "",
        imageUrl: []
      }
    };
  },
  components: {},
  created() {
    this.getProductDetailApi();
  },
  methods: {
    getProductDetailApi() {
      this.$parent.isLoading = true;
      this.$http.get(`${getProductDetailUrl}/${this.$route.params.id}`).then(res => {
        this.item = res.data.data;
        this.$parent.isLoading = false;
      });
    }
  }
};
</script>
