<template>
   <div class="page">
     <headers tabname="购物车"></headers>
     <transition :name="slideName">
       <div class="container" v-show="mainArea">
         <div v-show="!havePage">
           <nopage></nopage>
         </div>
         <div v-show="havePage">
             <!--eslint-disable-next-line-->
             <div class="cart-item" v-for="(cartItem,cartIndex) in $store.state.carts">
               <div class="cart-content flex_align_center">
                 <div class="goods-radio">
                   <img src="../../../static/img/icon/radio.png" >
                 </div>
                 <div class="flex">
                   <div class="goods-img">
                     <img :src="cartItem.GoodsImage">
                   </div>
                   <div class="goods-textBox">
                     <p class="goods-name">{{cartItem.GoodsName}}</p>
                     <div class="goodsOp flex">
                       <img src="../../../static/img/icon/shop_cut.png">
                       <input type="text" :value="cartItem.GoodsNum"/>
                       <img src="../../../static/img/icon/shop_add.png">
                     </div>
                     <p class="goods-coach">￥ {{cartItem.GoodsPrice}}</p>
                   </div>
                 </div>
               </div>
             </div>
         </div>
       </div>
     </transition>
     <footers :urlRouter="$route.path"></footers>
   </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Headers from '../base/Header';
import Footers from '../base/Footer';
import Nopage from '../base/NoPage';

export default {
  data() {
    return {
      mainArea: false,
      havePage: false,
      slideName: 'slide-go',
    };
  },
  components: {
    Headers,
    Footers,
    Nopage,
  },
  mounted() {
    const that = this;
    that.mainArea = true;
    if (that.$store.state.carts.length === 0) {
      that.havePage = false;
    } else {
      that.havePage = true;
      that.$store.state.carts.forEach((item) => {
        if (typeof item.goodsRadio === 'undefined') {
          that.$set(item, 'goodsRadio', false);
        }
      });
    }
    /* 判断动画是进还是出 */
    if (this.$store.state.comname === 'index' || this.$store.state.comname === 'category' || this.$store.state.comname === 'goodsdetail') {
      this.slidename = 'slide-go';
    } else {
      this.slidename = 'slide-back';
    }
    this.setComname('cart');
  },
  computed: {
    ...mapGetters([
      'this.$store.state.carts',
      'this.$store.state.comname',
    ]),
  },
  methods: {
    ...mapMutations({
      setOrders: 'SET_ORDERS',
      setGoods: 'SET_GOODS',
      setComname: 'SET_COMENAME',
    }),
  },
};
</script>

<style lang="less" scoped>
@import "../../../static/less/variable";
  .cart-item{
    border-bottom: 1px solid #ccc;
    padding-top: .2rem;
    height: 2.4rem;
    position: relative;
  }
  .cart-content{
    width: 100%;
  }
  .goods-radio{
    margin: 0 .2rem;
    width: .34rem;
    height: .34rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .goods-img{
    margin-right: .2rem;
    width: 2rem;
    height: 2rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .goods-name{
    font-size: .32rem;
  }
  .goodsOp{
    margin: .4rem 0;
    img{
      width: .4rem;
      height: .4rem;
    }
    input{
      border: none;
      font-size: .28rem;
      text-align: center;
      width: .6rem;
    }
  }
  .goods-coach{
    font-size:.28rem;
    color:red;
    align-self: flex-end;
  }
</style>
