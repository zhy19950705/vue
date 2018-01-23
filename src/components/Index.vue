<template>
   <div class="page">
     <headers tabname="零食商店"></headers>
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

    };
  },
  components: {
    Headers,
    Footers,
  },
};
</script>

<style scoped>

</style>
