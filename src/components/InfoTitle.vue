<template>
  <div class="infoTitle">
    <img src="../assets/title_adorn_img@3x.png" alt class="left">
    <div class="info_title">
      <div v-if="title !== ''">{{title}}</div>
      <div class="head_img" v-else>
        <div class="inner" :class="{male: sex}"></div>
      </div>
    </div>
    <img src="../assets/title_adorn_img@3x.png" alt class="right">
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    sex: {
      type: Boolean,
      default: false
    }
  },
  created() {
  }
};
</script>
<style lang="scss" scoped>
@import '../common/scss/mixin.scss';
.infoTitle {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 63px;
    height: 13px;
  }
  .right {
    transform: rotateY(180deg);
  }
  .info_title {
    margin: 0 10px;
    font-size: 16px;
    color: #ff8a75;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .head_img {
    width: 67px;
    height: 67px;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    transform: translateY(-8px);
    &::after {
      position: absolute;
      content: '';
      left: -3px;
      bottom: -3px;
      top: -3px;
      right: -3px;
      border-radius: 50%;
      background-image: linear-gradient(90deg, rgba(254, 236, 184, 1), rgba(242, 194, 160, 1));
      z-index: -1;
    }
    .inner {
      width: 67px;
      height: 67px;
      @include bg('../assets/girl');
      background-size: cover;
      &.male {
        @include bg('../assets/boy');
      }
    }
  }
}
</style>