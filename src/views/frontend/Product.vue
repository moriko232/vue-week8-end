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
        <div>
          <h1 class="text-h1">{{ item.title }}</h1>
        </div>
        <div class="row align-items-start justify-content-center">
          <div class="product-item col-md-8">
            <img :src="item.imageUrl[0]" />
          </div>
          <div class="product-item col-md-4">
            <div class="product-text">
              <p class="product-tag">{{ item.category }}</p>
              <div v-html="item.content"></div>
              <div class="text-right">
                <p class="price">$ {{ item.price }}</p>
                <p class="origin-price">原價 $ {{ item.origin_price }}</p>
              </div>
              <span>
                <button class="add-cart" @click="addToCart(item, 1)">
                  <i class="fa fa-shopping-cart mr-3"></i>加入購物車
                </button>
              </span>
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
const getProductDetailUrl = `${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/product`;

const editShopCartUrl = `${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/shopping`;

export default {
  name: "Product",
  data() {
    return {
      messageText: "",
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
  mounted() {
    this.getProductDetailApi();
  },
  methods: {
    getProductDetailApi() {
      this.$parent.isLoading = true;
      this.$http.get(`${getProductDetailUrl}/${this.$route.params.id}`).then(res => {
        this.item = res.data.data;
        this.$parent.isLoading = false;
      });
    },
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
    }
  }
};
</script>
