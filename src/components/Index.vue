<template>
   <div class="page">
     <headers tabname="零食商店"></headers>
     <transition :name="slideName">
        <div class="container" v-show="mainArea">
           <div class="content" v-cloak>
             <!--eslint-disable-->
              <div class="floorItem" v-for="(productItem, productIndex) in productList">
                <div class="productTop flex_between">
                  <p class="productTop-text">{{productItem.Category.TopText}}</p>
                  <div class="flex_align_center">
                    <p class="productTop-text">{{productIndex+1}}F</p>
                    <img src="../../static/img/icon/arrowBack.png" class="arrowImg">
                  </div>
                </div>
                <div class="productContent">
                  <div class="productBox flex" ref="div">
                     <div class="productItem" v-for="goodsItem in productItem.SalesProduct">
                       <div class="itemBox">
                         <div>
                           <img :src="goodsItem.GoodsImage" class="itemImg" />
                           <div>
                             <p class="goods-name text-ellipsis">{{goodsItem.GoodsName}}</p>
                           </div>
                         </div>
                         <div class="addCartBox flex_between">
                           <p><span class="goods-price">￥ {{goodsItem.GoodsPrice}}</span> </p>
                           <img src="../../static/img/icon/shop_addCart.png">
                           <!--<img src="../../static/img/icon/shop_addCart_select.png"/>-->
                         </div>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
     </transition>
      <footers :urlRouter="$route.path" ref="footer"></footers>
   </div>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapMutations } from 'vuex'
import Headers from './base/Header';
import Footers from './base/Footer';

export default {
  name: 'index',
  data() {
    return {
      slideName: 'slide-back',
      mainArea: false,
      productList:[],
    };
  },
  components: {
    Headers,
    Footers,
  },
  computed:{
    ...mapGetters([
      'this.$store.state.carts',
      'this.$store.state.comname'
    ])
  },
  mounted() {
    this.mainArea = true;
    this.getGoodsList();
    if(this.$store.state.comname === 'category' || 'cart' || 'member'){
      this.slideName = 'slide-back';
    } else {
      this.slideName = 'slide-go'
    }
    this.setComname('index');
  },
  methods: {
    getGoodsList() {
      const that = this;
      this.$http.get('/api/homedata').then(function (res) {
        that.productList = res.data.data;
      })
        .catch(function (error) {
          console.log(error);
        });
    },
    ...mapMutations({
      setComname:'SET_COMNAME'
    })
  },
};
</script>

<style lang="less" scoped>
@import "../../static/less/variable";
.productTop {
  height: .6rem;
  line-height: .6rem;
  padding: 0 .2rem;
  border-bottom:1px solid #ccc ;
  border-top: 1px solid #ccc;
  margin-bottom: .2rem;
}
  .productTop-text {
    font-size: .28rem;
  }
  .arrowImg {
    width: .4rem;
    height: .4rem;
    background-color: red;
    margin-left: .2rem;
  }
  .productItem:nth-child(odd){
    margin-right: 2%;
    border-right: 1px solid #ccc;
  }
  .productItem{
    width: 50%;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    margin-bottom: .2rem;
    flex:1;
    padding: 0 .2rem;
  }
  .itemImg{
    width: 100%;
    height: 100%;
  }
  .goods-name{
    font-size: .28rem;
    margin-bottom: .2rem;
  }
  .text-ellipsis{
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  [v-cloak]{
    display: none !important;
  }
</style>
