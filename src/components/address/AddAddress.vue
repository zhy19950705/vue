<template>
    <div class="page">
      <headerSec tabname="添加地址"></headerSec>
      <transition :name="slideName">
        <div class="containner" v-show="mainArea">
          <input type="text" placeholder="选择地区" :value="addressText"
                 readonly="" @click="addressModel=true"/>
          <div class="model" v-show="addressModel" @click="addressModel=false">
            <div class="model-content" @click.stop="addressModel=true">
              <div class="addressBox">
                <ul>
                  <!--eslint-disable-->
                  <li v-for="(provinceItem,provinceIndex) in addressList" :class="{active:provinceIndex === activeProvince}"
                  @click.stop="onProvinceSelect(provinceIndex,provinceItem.text)">
                      <span>{{provinceItem.text}}</span>
                    <div class="cityBox">
                      <ul>
                        <li v-for="(cityItem,cityIndex) in provinceItem.children" :class="{active:cityIndex === activeCity}"
                        @click.stop="onCitySelect(cityIndex,cityItem.text)">
                          <span>{{cityItem.text}}</span>
                          <div class="areaBox">
                            <ul>
                              <li v-for="(areaItem,areaIndex) in cityItem.children" :class="{active:areaIndex === activeArea}"
                              @click.stop="onAreaSelect(areaIndex,areaItem.text)">
                                <span>{{areaItem.text}}</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div class="pageBottom" @click="onSave">
        <span class="tabbar-label">保存</span>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
/* eslint-disable */
import init_city_picker from '../../../static/js/data.city';
import HeaderSec from '../base/HeaderSec';

export default {
  data() {
    return {
      slideName: 'slide-go',
      mainArea: false,
      addressModel: false,
      addressText: '请选择',
      addressList: [],
      province: '',
      city: '',
      area: '',
      activeProvince: 0,
      activeCity: 0,
      activeArea: 0,
    };
  },
  components: {
    HeaderSec,
  },
  computed: {
    ...mapGetters([
      'this.$store.state.comname',
    ]),
  },
  mounted() {
    const that = this;
    that.mainArea = true;
    that.addressList = init_city_picker;
    this.setComname('addressadd')
  },
  methods: {
    onSave() {
      this.setAddress(this.addressText)
      this.$router.back();
    },
    ...mapMutations({
      setAddress: 'SET_ADDRESS',
      setComname: 'SET_COMNAME',
    }),
    // onProvinceSelect:(index,item) => {
    //   let that = this;
    //   that.activeProvince=index;
    //   that.province=item;
    //   that.addressText=that.province;
    // },
    // onCitySelect:(index, item) => {
    //   let that = this;
    //   that.activeCity = index;
    //   that.city = item;
    //   that.addressText = that.province + " " + that.city;
    // },
    // onAreaSelect: (index,item) => {
    //   let that = this;
    //   that.activeArea = index;
    //   that.area = item;
    //   that.addressText = that.province + " " + that.city + " " + that.area;
    //   that.addressModel = false;
    // }
    /*选择省份*/
    onProvinceSelect: function(index, item) {
      let that = this;
      that.activeProvince = index;
      that.province = item;
      that.addressText = that.province;

    },
    /*选择城市*/
    onCitySelect: function(index, item) {
      let that = this;
      that.activeCity = index;
      that.city = item
      that.addressText = that.province + " " + that.city;

    },
    /*选择区域*/
    onAreaSelect: function(index, item) {
      let that = this;
      that.activeArea = index;
      that.area = item
      that.addressText = that.province + " " + that.city + " " + that.area;
      that.addressModel = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../../static/less/variable";
  input{
    width: 100%;
    text-align: center;
    font-size: .32rem;
    margin-top: .3rem;
    border:1px solid #ccc ;
  }
  .pageBottom{
    position:fixed;
    bottom: 0;
    width: 100%;
    background-color: @theme_background;
    color: @base_color;
    text-align: center;
    height: .8rem;
    line-height: .8rem;
    font-size: .28rem;
  }
  .addressBox{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5.1rem;
    z-index: 9;
    background: #f5f5f5;
    display: block !important;
  }
  .addressBox ul{
    width: 33%;
    height: 5.1rem;
    background: @base_color;
    overflow-y: scroll;
    overflow-x: auto;
  }
  .addressBox li {
    font-size: .26rem;
    height: .62rem;
    line-height: .62rem;
    color: @base_textColor;
    text-align: center;
    padding-left: .5rem;
  }
  .cityBox{
    position: absolute;
    top: 0;
    left: 33%;
    width: 100%;
    height: 5.1rem;
    display: none;
    overflow-y: scroll;
    z-index: 19;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
  }
  .cityBox ul{
    width: 100%;
    height: 5.1rem;
  }
  .cityBox li{
    padding-left: .17rem;
    text-align: left;
    border-bottom: .01rem solid #e6e6e6;
  }
  .areaBox{
    position: absolute;
    top: 0;
    left: 34%;
    width: 34%;
    height: 5.1rem;
    display: none;
    overflow-y: scroll;
    z-index: 9999;
    -webkit-overflow-scrolling: touch;
  }
  .model-content{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: .15rem;
    margin: auto;
    background-color: #ffffff;
    text-align: center;
  }

   /* 点击省份，出现城市 */
  .addressBox .active{
    background: @theme_background;
    color: @base_color;
  }
  .addressBox .active .cityBox{
    display: block;
  }

   /* 点击城市，出现区域 */
   .cityBox .active{
      background: @theme_background;
    }
   .cityBox .active .areaBox{
     display: block;
   }


</style>
