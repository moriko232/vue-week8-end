<template>
  <header class="is-sticky">
    <div class="container">
      <div class="d-block d-sm-flex align-items-center justify-content-between">
        <h1 class="logo">
          <router-link to="/">
            <span class="text-h1">皂皂市集</span><br />
            <span class="logo-en">soap soap market</span>
          </router-link>
        </h1>
        <div>
          <nav class="top-menu text-right d-none d-sm-block">
            <li>
              <router-link to="/admin/">後台管理</router-link>
            </li>
          </nav>
          <nav class="main-menu">
            <li>
              <router-link to="/about">關於皂皂</router-link>
            </li>
            <li>
              <router-link to="/products">皂皂商品</router-link>
            </li>
            <li>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="color1 fa fa-shopping-cart" aria-hidden="true"></i>
                </button>
                <div class="dropdown-menu p-3  dropdown-menu-right text-muted" style="width:300px">
                  <template v-if="miniCart.length">
                    <h3 class="text-h4">購物清單：</h3>
                    <table class="table">
                      <tr v-for="(item, index) in miniCart" :key="`cart${index}`">
                        <th>
                          <router-link :to="`/product/${item.product.id}`">
                            {{ item.product.title }}</router-link
                          >
                        </th>
                        <th>x {{ item.quantity }}</th>
                      </tr>
                    </table>

                    <div>
                      <router-link to="/cart" class="w-100 text-center more-btn"
                        >結帳去</router-link
                      >
                    </div>
                  </template>
                  <template v-else>
                    <div>
                      購物車沒有東西...
                      <router-link to="/products" class="w-100 text-center more-btn more-btn--s"
                        >來去購物</router-link
                      >
                    </div>
                  </template>
                </div>
              </div>
            </li>
          </nav>
        </div>
      </div>
    </div>

    <!-- loading 套件 start -->
    <loading :active.sync="isLoading"></loading>
    <!-- loading 套件 end -->
  </header>
</template>

<script>
const editShopCartUrl = `${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/shopping`;

/* global $*/
export default {
  name: "Header",
  data() {
    return {
      miniCart: []
    };
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.$bus.$on("updateMiniCart", data => {
      this.miniCart = data;
    });
  },
  mounted() {
    this.getShopCartApi();
    $('[data-toggle="popover"]').popover();
  },
  methods: {
    openCart() {
      this.$refs.popper.popover("show");
    },
    getShopCartApi() {
      this.$http.get(editShopCartUrl).then(res => {
        this.miniCart = res.data.data;
      });
    }
  }
};
</script>
