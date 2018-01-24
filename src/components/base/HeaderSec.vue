<template>
   <header id="headerTab" class="flex flex_align_center">
       <img src="../../../static/img/icon/arrowBack.png" @click="onBack" />
       <p>{{tabname}}</p>
   </header>
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

<style  lang="less" scoped>
@import "../../../static/less/base.less";
  header{
    height: .8rem;
    text-align: center;
    background: @theme_background;
    color: @base_color;
    font-size:.26rem;
    z-index:10;
    width: 100%;
    top:0;
    position: fixed;
  }
  img{
    width: .4rem;
    height: .4rem;
    margin-left: .2rem;
  }
  p{
    text-align: center;
    width: 100%;
    margin-right: .6rem;
  }
</style>
