<template>
   <div id="headerTab" class="flex flex_align_center">
       <img src="../../../static/img/icon/arrowBack.png" @click="onBack" />
       <p>{{tabname}}</p>
   </div>
</template>

<script>
export default {
  props: ['tabname'],
  data() {
    return {
      isBack: true,
    };
  },
  methods: {
    onBack() {
      if (this.isBack) {
        this.$router.back();
      } else {
        this.$router.push('./member');
      }
    },
  },
};
</script>

<style scoped>

</style>
