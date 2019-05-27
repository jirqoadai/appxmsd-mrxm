<template>
  <div class="border">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Border',
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.border {
  box-sizing: border-box;
  position: relative;
  margin: 0 15px 20px;
  z-index: 1;
  &::after {
    position: absolute;
    content: '';
    left: -3px;
    bottom: -3px;
    top: -3px;
    right: -3px;
    border-radius: 10px;
    background-image: linear-gradient(180deg, rgba(247, 214, 128, 1), rgba(249, 150, 150, 1));
    z-index: -1;
  }
  .inner {
    box-sizing: border-box;
    position: relative;
    border-radius: 8px;
    background-color: #fff;
    padding: 37px 12px 17px;
  }
  &.nopadding {
    .inner {
      padding: 37px 0 17px;
    }
  }
  &.nopadding_top {
    .inner {
      padding: 15px 12px 17px;
    }
  }
}
</style>