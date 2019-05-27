<template>
  <div class="common_title">
    <div class="inner" :class="{long: isLongTitle}">
      <div class="inner_img">
        <div>{{title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    isLongTitle() {
      return this.title.length > 6;
    }
  }
};
</script>
<style lang="scss">
@import '../common/scss/mixin.scss';
.common_title {
  position: relative;
  transform: translateY(16px);
  z-index: 10;
  &.no_transform {
    transform: none;
    margin-bottom: 36px;
  }
  .inner {
    position: relative;
    display: flex;
    justify-content: center;
    .inner_txt {
      // position: relative;
      // color: #ffffff;
      // line-height: 40px;
      // z-index: 1;
      // font-size: 17px;
      // transform: translateX(-10px);
    }
    .inner_img {
      // position: absolute;
      width: 178px;
      height: 40px;
      @include bg('../assets/title_bg_img');
      background-size: cover;
      color: #ffffff;
      line-height: 40px;
      z-index: 1;
      font-size: 17px;
      text-align: center;
      div {
        transform: translateX(-10px);
        font-weight: 500;
      }
    }
    &.long {
      .inner_txt {
        transform: translateX(-10px);
      }
      .inner_img {
        width: 203px;
        height: 40px;
        @include bg('../assets/title_bg_long');
        background-size: cover;
      }
    }
  }
}
</style>