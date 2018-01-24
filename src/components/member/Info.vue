<template>
   <div class="page">
       <header-sec tabname="个人信息 "></header-sec>
     <transition name="slide-go">
       <div class="containner" v-show="mainArea">
         <img src="../../../static/img/1.jpg" alt="" />
         <p>小成成是最棒的</p>
       </div>
     </transition>
   </div>
</template>

<script>
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
};
</script>

<style lang="less" scoped>
  .containner{
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
