<template>
  <div>
    <!-- loading 套件 start -->
    <loading :active.sync="isLoading"></loading>
    <!-- loading 套件 end -->
    <Header></Header>

    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/_shared/Header.vue";
import Footer from "@/components/_shared/Footer.vue";
export default {
  name: "FrontLayout",
  components: { Header, Footer },
  data() {
    return {
      isLoading: false
    };
  }
};
</script>
