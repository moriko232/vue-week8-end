<template>
  <div class="cart">
    <div class="main-content">
      <div class="container">
        <template>
          <div class="row">
            <div class="col-lg-7 mb-5">
              <div class="row justify-content-between">
                <div class="col-6">
                  <h3>購物明細</h3>
                </div>
                <div v-if="shopCart.length" class="col-6 text-right">
                  <button class="btn btn-primary" @click="deleteCartAll()">清空購物車</button>
                </div>
              </div>
              <table class="table1 mb-3">
                <tr>
                  <th width="30%">品名</th>
                  <th width="80px">數量</th>
                  <th class="text-right">價格</th>
                  <th class="text-right">小計</th>
                  <th width="80px"></th>
                </tr>
                <template v-for="(item, index) in shopCart">
                  <tr :key="`cart${index}`">
                    <td>{{ item.product.title }}</td>
                    <td>
                      <div class="qty">
                        <input
                          class="form-control count"
                          type="number"
                          name="qty"
                          :value="item.quantity"
                          step="1"
                          @input="editCart(item.product.id, $event.target.value)"
                        />
                      </div>
                    </td>
                    <td class="text-right">{{ item.product.price }}</td>
                    <td class="text-right">{{ item.product.price * item.quantity }}</td>
                    <td class="text-right">
                      <button class="btn btn-danger" @click="deleteCartItem(item.product.id)">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                </template>

                <template v-if="shopCart.length">
                  <tr class="text-h3">
                    <td>總計</td>
                    <td></td>
                    <td></td>
                    <td class="text-right">{{ total }}</td>
                    <td></td>
                  </tr>
                </template>
                <template v-else>
                  <tr>
                    <td colspan="5" class="text-center p-2">
                      <div class="mb-2">購物車尚無商品</div>
                      <router-link to="/products" class="more-btn more-btn--s m-auto"
                        >來去看看</router-link
                      >
                    </td>
                  </tr>
                </template>
              </table>
            </div>
            <div class="col-lg-1"></div>
            <div class="col-lg-4">
              <div class="form-wrap">
                <div>
                  <h3>寄件資料</h3>
                </div>
                <validation-observer ref="observer" v-slot="{ invalid, handleSubmit }">
                  <form action="" class="form mt-4" @submit.prevent="handleSubmit(sendOrderApi)">
                    <validation-provider rules="required" v-slot="{ errors, classes }">
                      <h3>收件人姓名</h3>
                      <input
                        name="收件人姓名"
                        v-model="customer.name"
                        class="form-control"
                        :class="classes"
                      />
                      <span :class="classes">{{ errors[0] }}</span>
                    </validation-provider>
                    <validation-provider rules="required|email" v-slot="{ errors, classes }">
                      <h3>Email</h3>
                      <input
                        type="email"
                        name="email"
                        v-model="customer.email"
                        class="form-control"
                        :class="classes"
                      />
                      <span :class="classes">{{ errors[0] }}</span>
                    </validation-provider>
                    <validation-provider rules="required|min:8" v-slot="{ errors, classes }">
                      <h3>電話</h3>
                      <input
                        name="電話"
                        v-model="customer.tel"
                        class="form-control"
                        :class="classes"
                      />
                      <span :class="classes">{{ errors[0] }}</span>
                    </validation-provider>
                    <validation-provider rules="required" v-slot="{ errors, classes }">
                      <h3>地址</h3>
                      <input
                        name="地址"
                        v-model="customer.address"
                        class="form-control"
                        :class="classes"
                      />
                      <span :class="classes">{{ errors[0] }}</span>
                    </validation-provider>

                    <div class="form-item">
                      <h3>付款方式</h3>
                      <div class="form-group">
                        <select class="form-control" v-model="customer.payment">
                          <option value="WebATM">WebATM</option>
                          <option value="ATM">ATM</option>
                          <option value="CVS">CVS</option>
                          <option value="Barcode">Barcode</option>
                          <option value="Credit">Credit</option>
                          <option value="ApplePay">ApplePay</option>
                          <option value="GooglePay">GooglePay</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-item">
                      <h3>留言</h3>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        class="form-control"
                        v-model="customer.message"
                      ></textarea>
                    </div>
                    <br />

                    <input
                      class="more-btn w-100"
                      :disabled="invalid || !shopCart.length || $parent.isLoading"
                      type="submit"
                      value="確認訂購"
                    />
                  </form>
                </validation-observer>
              </div>
            </div>
          </div>
        </template>
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
  </div>
</template>

<script>
/* global $*/
const editShopCartUrl = `${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/shopping`;
const editShopCartAllUrl = `${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
const sendOrderUrl = `${process.env.VUE_APP_PATH}${process.env.VUE_APP_UUID}/ec/orders`;

export default {
  name: "Cart",
  components: {},
  data() {
    return {
      shopCart: [],
      initCustomer: {
        name: "",
        email: "",
        tel: "",
        address: "",
        payment: "WebATM",
        message: ""
      },
      customer: {
        name: "",
        email: "",
        tel: "",
        address: "",
        payment: "WebATM",
        message: ""
      },
      messageModelOpen: false,
      messageText: ""
    };
  },
  computed: {
    total() {
      let sum = 0;
      this.shopCart.forEach(item => {
        sum += item.product.price * item.quantity;
      });
      return sum;
    }
  },
  created() {
    this.$bus.$on("updateCart", () => {
      this.getShopCartApi();
    });
  },
  mounted() {
    this.getShopCartApi();
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
    sendOrderApi() {
      this.$parent.isLoading = true;
      this.$http.post(sendOrderUrl, this.customer).then(() => {
        this.getShopCartApi();
        this.shopCart = [];
        this.$parent.isLoading = false;
        this.openMessage("已收到您的訂單!");
        this.customer = Object.assign({}, this.initCustomer);
        this.$refs.observer.reset();
      });
    },
    getShopCartApi() {
      this.$parent.isLoading = true;
      this.$http.get(editShopCartUrl).then(res => {
        this.shopCart = res.data.data;
        this.$parent.isLoading = false;
        this.$bus.$emit("updateMiniCart", this.shopCart);
      });
    },
    deleteCartAll() {
      this.$parent.isLoading = true;
      this.$http.delete(editShopCartAllUrl).then(res => {
        this.shopCart = res.data.data;
        this.getShopCartApi();
        this.$parent.isLoading = false;
      });
    },
    deleteCartItem(id) {
      this.$parent.isLoading = true;
      this.$http.delete(`${editShopCartUrl}/${id}`).then(() => {
        this.getShopCartApi();
        this.$parent.isLoading = false;
      });
    },
    editCart(id, quantity = 1) {
      this.$parent.isLoading = true;
      const data = {
        product: id,
        quantity: quantity
      };
      this.$http.patch(editShopCartUrl, data).then(() => {
        this.getShopCartApi();
        this.$parent.isLoading = false;
      });
    }
  }
};
</script>
