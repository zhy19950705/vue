<template>
   <div class="page">
     <headers tabname="零食商店"></headers>
     <transition :name="slideName">
        <div class="containner" v-show="mainArea">
          p
        </div>
     </transition>
      <footers :urlRouter="$route.path" ref="footer"></footers>
   </div>
</template>

<script>
import Headers from './base/Header';
import Footers from './base/Footer';

export default {
  name: 'index',
  data() {
    return {
      slideName: 'slide-back',
      mainArea: false,
    };
  },
  components: {
    Headers,
    Footers,
  },
  mounted() {
    this.mainArea = true;
  },
};
</script>

<style scoped>

  .slide-back-enter {
    opacity:0;
  }
  .slide-back-leave{
    opacity:1;
  }
  .slide-back-enter-active{
    transition:opacity .5s;
  }
  .slide-back-leave-active{
    opacity:0;
    transition:opacity .5s;
  }

</style>
