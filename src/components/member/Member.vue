<template>
   <div class="page">
     <headers tabname="我的"></headers>
     <transition :name="slideName">
       <div class="containner" v-show="mainArea">
         <div class="floor floor_one">
           <img src="../../../static/img/github.png" alt="" />
           <p>Open Free Share</p>
         </div>
         <div class="floor floor_item floor_two flex_align_center flex_between" @click="onInfo">
           <p>个人信息</p>
           <img src="../../../static/img/icon/arrowBack.png" alt="" />
         </div>
         <div class="floor floor_item floor_two flex_align_center flex_between">
           <p>我的订单</p>
           <img src="../../../static/img/icon/arrowBack.png" alt="" />
         </div>
         <div class="floor floor_item floor_two flex_align_center flex_between" @click="onAddress">
           <p>我的地址</p>
           <img src="../../../static/img/icon/arrowBack.png" alt="" />
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

export default {
  data() {
    return {
      slideName: 'slide-go',
      mainArea: false,
    };
  },
  components: {
    Headers,
    Footers,
  },
  methods: {
    onInfo() {
      this.$router.push('./info');
    },
    onAddress() {
      this.$router.push('./address');
    },
    ...mapMutations({
      setComname: 'SET_COMNAME',
    }),
  },
  computed: {
    ...mapGetters([
      'this.$store.state.comname',
    ]),
  },
  mounted() {
    this.mainArea = true;
    if (this.$store.state.comname === 'index' || this.$store.state.comname === 'category' || this.$store.state.comname === 'cart') {
      this.slideName = 'slide-go';
    } else {
      this.slideName = 'slide-back';
    }
    this.setComname('member');
  },
};
</script>

<style lang="less" scoped>
@import "../../../static/less/variable.less";
  .page{
    background: rgb(245,245,245);
  }
  .floor_one{
    width: 100%;
    height: 4rem;
    background: @theme_background;
    position: relative;
    img{
      position: absolute;
      width: 1.8rem;
      height: 1.8rem;
      left:0;
      right:0;
      top:15%;
      margin: auto;
    }
    p{
      position: absolute;
      bottom: 25%;
      left: 0;
      right: 0;
      text-align: center;
      color: white;
      font-size: .26rem;
    }
  }
.floor_item{
  padding:0 .2rem;
  height: .8rem;
  line-height: .8rem;
  font-size: .28rem;
  background: @base_color;
  margin-bottom: .4rem;
  img{
    width: .4rem;
    height: .4rem;
  }
}
</style>
