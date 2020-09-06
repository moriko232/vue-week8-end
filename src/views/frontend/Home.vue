<template>
  <div>
    <div class="home">
      <div class="main-content mt-0">
        <div>
          <slick ref="slick" :options="slickOptions">
            <div
              class="slick__item"
              style="background-image:url('https://images.unsplash.com/photo-1548110579-405ee7448814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80')"
            >
              <div class="slick__title">
                <div class="text-center">
                  <h2>限時倒數</h2>
                  <p>夏日手工皂換季特價</p>
                  <br />
                  <router-link to="/products" class="more-btn m-auto">來去看看</router-link>
                </div>
              </div>
            </div>
            <div
              class="slick__item"
              style="background-image:url('https://images.unsplash.com/photo-1548110579-526dc051a76b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            >
              <div class="slick__title">
                <div class="text-center">
                  <h2>新品上市</h2>
                  <p>皂皂市集秋季新品</p>
                  <br />
                  <router-link to="/products" class="more-btn m-auto">來去看看</router-link>
                </div>
              </div>
            </div>
          </slick>
        </div>
        <div class="container">
          <div class="mt-3 title-wrap">
            <h2 class="text-center"></h2>
          </div>
          <div class="mt-5 mb-5 title-wrap">
            <h2>
              手工皂的好處
            </h2>
          </div>
          <div class="row align-items-center">
            <div class="col-sm-5 mb-4">
              <img
                src="https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </div>
            <div class="col-sm-7 mb-4">
              <h3 class="color1">
                清潔力剛剛好，更加不易乾澀
              </h3>
              比起市面上販售的肥皂，手工皂中含有大量經由皂化反應產生的甘油，這些甘油是手工皂被認為具有滋潤肌膚效果的主要原因。
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-sm-7 mb-4 order-2 order-sm-1">
              <h3 class="color1">
                添加天然配方或精油，非化學香精
              </h3>
              市面上販售的肥皂為了香味持久，通常會添加化學香精，而手工皂所添加的天然精油香味，雖然經皂化後只剩淡淡香味，但這才是最自然的狀態。
            </div>
            <div class="col-sm-5 mb-4 order-1 order-sm-2">
              <img
                src="https://images.unsplash.com/photo-1445510491599-c391e8046a68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-sm-5 mb-4">
              <img
                src="https://images.unsplash.com/photo-1533808235766-376cdc7e7661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </div>
            <div class="col-sm-7 mb-4">
              <h3 class="color1">
                更加友善環境
              </h3>
              手工皂的原料多數為天然素材，使用後可自然分解，與合成洗劑比較起來，較不易造成環境負擔。
            </div>
          </div>
          <div class="pt-3"></div>
          <div class="mt-5 mb-5 title-wrap">
            <h2>
              本季熱門商品
            </h2>
          </div>
          <div class="row recommends text-center">
            <div class="col-md-4 recommends__item">
              <router-link class="recommends__img" to="/product/QipkdBLhI8SNoBu35ugXN2uiaGHccpG0MdERriyimjre58ezd4xFqTVzbZmSCP6E">
                <span class="text">
                  <span class="text-h3 d-block">清爽香氛皂</span>
                  <span class="desc">夏日主打，恰到好處的洗淨力，還你一身清爽自在。</span>
                </span>
                <img
                  src="https://images.unsplash.com/photo-1595121574471-5e57fec127df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt=""
              /></router-link>
            </div>
            <div class="col-md-4 recommends__item">
              <router-link class="recommends__img" to="/product/NtQ67d80ZJEc2Cplxj4PvC2Md67d0Wa6zCvPdoSfH8mUsgpelixB4NZllQLrD4e9">
                <span class="text">
                  <span class="text-h3 d-block">茉莉潤膚皂</span>
                  <span class="desc"
                    >特別推薦肌膚敏感的你，添加潤澤配方，預防過度清潔導致的乾癢問題。
                  </span>
                </span>
                <img
                  src="https://images.unsplash.com/photo-1454873019514-eae2f086587a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
                  alt=""
              /></router-link>
            </div>
            <div class="col-md-4 recommends__item">
              <router-link class="recommends__img" to="/product/khw5fCoRMlv45dobq8CP670R6MuWMlSX1DBAdFZw5mLWuk7rEqhDFqOVSEXBnFed">
                <span class="text">
                  <span class="text-h3 d-block">寶貝嬰兒皂</span>
                  <span class="desc"
                    >適合六個月以上寶寶專用，呵護嬰兒細嫩肌膚，無添加人工香料色素好放心。</span
                  >
                </span>
                <img
                  src="https://images.unsplash.com/photo-1542038374755-a93543c5178f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  alt=""
              /></router-link>
            </div>
          </div>
          <div class="text-center">
            <router-link class="line-btn" to="/products">更多手工皂產品</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";
export default {
  name: "Home",
  components: { Slick },
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        fade: true
      }
    };
  },
  computed: {},
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    }
  }
};
</script>
