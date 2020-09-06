<template>
  <div class="products">
    <nav class="sub-menu-wrap">
      <div class="container">
        <ul class="sub-menu">          
          <li>
            <span>皂皂商品</span>
          </li>
        </ul>
      </div>
    </nav>
    <div class="main-content">
      <div class="container">
        <!-- 產品列表 -->
        <h2 class="mb-3">皂皂商品</h2>
        <div class="product-list row">
          <template v-for="(item, index) in products">
            <div class="product-item col-lg-4 col-md-6" :key="`item${index}`">
              <router-link :to="`/product/${item.id}`"><img :src="item.imageUrl[0]"/></router-link>

              <div class="product-text">
                <h5 class="title">
                  <router-link :to="`/product/${item.id}`">{{ item.title }}</router-link>
                </h5>
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
          </template>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade bd-example-modal-lg"
        id="messageModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                系統訊息
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {{ messageText }}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="closeMessage()">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade bd-example-modal-lg"
      id="messageModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              系統訊息
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{ messageText }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="closeMessage()">OK</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $*/
const getProductUrl = `${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/products`;
const editShopCartUrl = `${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/shopping`;

export default {
  name: "Products",
  data() {
    return {
      products: [],
      messageModelOpen: false,
      messageText: ""
    };
  },
  mounted() {
    this.getDataApi();
  },
  methods: {
    openMessage(msg) {
      this.messageText = msg;
      $("#messageModal").modal("show");
      this.messageModelOpen = true;
    },
    closeMessage() {
      this.messageText = "";
      $("#messageModal").modal("hide");
      this.messageModelOpen = false;
    },
    isAlreadyInCart(id) {
      return this.shopCart.findIndex(item => {
        return item.id === id;
      });
    },
    addToCart(item, quantity = 1) {
      this.$parent.isLoading = true;
      const data = {
        product: item.id,
        quantity: quantity
      };

      this.axios
        .post(editShopCartUrl, data)
        .then(() => {
          this.getDataApi();
          this.$parent.isLoading = false;
          this.openMessage("已加入購物車");
        })
        .catch(() => {
          this.openMessage("已經在購物車了");
          this.$parent.isLoading = false;
        });
    },
    getDataApi() {
      this.$parent.isLoading = true;
      this.$http.get(getProductUrl).then(res => {
        this.products = res.data.data;
        // event bus
        this.$bus.$emit("updateCart");
        this.$parent.isLoading = false;
      });
    }
  }
};
</script>
