<template>
  <header id="headerTab">
    <p>{{tabname}}</p>
  </header>
</template>

<script>
export default {
  props: ['tabname'],
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
  @import "../../../static/less/variable.less";

  header {
    height: .8rem;
    text-align: center;
    background: @theme_background;
    color: @base_color;
    font-size: .26rem;
    line-height: .8rem;
    z-index: 10;
    width: 100%;
    position: fixed;
    top: 0;
  }
</style>
