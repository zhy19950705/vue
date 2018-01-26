<template>
    <div class="page">
      <headersec tabname="我的地址"></headersec>
      <transition :name="slideName">
        <div class="container" v-show="mainArea">
          <div v-show="false">
            !havePage
          </div>
          <div v-show="havePage">
             <!--eslint-disable-next-line-->
             <div class="address-item" v-for="addressItem in this.$store.state.address">
                <p>{{addressItem}}</p>
             </div>
          </div>
        </div>
      </transition>
      <div class="pageBottom" @click="onAddAddress">
        <span class="tabbar-label">新增地址</span>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Headersec from '../base/HeaderSec';


export default {
  components: {
    Headersec,
  },
  data() {
    return {
      mainArea: false,
      havePage: false,
      slideName: 'slide-go',
    };
  },
  computed: {
    ...mapGetters([
      'this.$store.state.address',
      'this.$store.state.chooseAddress',
      'this.$store.state.isChoose',
      'this.$store.state.comname',
    ]),
  },
  mounted() {
    const that = this;
    that.mainArea = true;
    if (this.$store.state.address.length === 0) {
      this.havePage = false;
    } else {
      this.havePage = true;
    }
    // this.havePage = !(this.$store.state.address.length === 0);
    /* 判断动画是进还是出 */
    if (this.$store.state.comname === 'addressAdd') {
      this.slidename = 'slide-back';
    } else {
      this.slidename = 'slide-go';
    }
    this.setComname('address');
  },
  methods: {
    ...mapMutations({
      setChooseAddress: 'SET_CHOOSEADDRESS',
      setIsChoose: 'SET_ISCHOOSE',
      setComname: 'SET_COMNAME',
    }),
    onAddAddress() {
      this.$router.push('./addaddress');
    },
    onChooseAddress(item) {
      if (this.$store.state.isChoose === 1) {
        this.setChooseAddress(item);
        this.$router.push('./orderwait');
        this.setIsChoose(2);
      }
    },
  },
};
</script>

<style lang="less" scoped>
  @import "../../../static/less/variable.less";
  .pageBottom{
    position:fixed;
    bottom: 0;
    background: @theme_background;
    width: 100%;
    height: .8rem;
    text-align: center;
    font-size: .28rem;
    color:@base_color;
    line-height: .8rem;
  }
  .address-item{
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    font-size:.28rem;
    border-bottom: 1px solid #ccc;
  }
</style>
