<template>
   <div class="page">
       <header-sec tabname="个人信息 "></header-sec>
     <transition name="slide-go">
       <div class="container" v-show="mainArea">
         <img src="../../../static/img/1.jpg" alt="" />
         <p>小成成是最棒的</p>
         <!--eslint-disable-next-line-->
         <div class="address-item" v-for="addressItem in this.$store.state.address">
           <p>个人地址：{{addressItem}}</p>
         </div>
       </div>
     </transition>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderSec from '../base/HeaderSec';

export default {
  components: {
    HeaderSec,
  },
  data() {
    return {
      mainArea: true,
    };
  },
  computed: {
    ...mapGetters([
      'this.$store.state.address',
    ]),
  },

};
</script>

<style lang="less" scoped>
  .container{
    text-align: center;
    img{
      margin-top: .3rem;
      width: 4rem;
      height: 5rem;
    }
    p{
      margin-top: .3rem;
      font-size: .28rem;
    }
  }
</style>
