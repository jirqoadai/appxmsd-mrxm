<template>
  <div class="fixButton" :class="{fix: type === 'fix', ipx: isIphoneX}">
    <div class="inner">{{title}}</div>
  </div>
</template>
<script>
import { isIphoneX } from '../common/utils/tool';
export default {
  name: 'FixButton',
  data() {
    return {
      isIphoneX: isIphoneX()
    };
  },
  components: {},
  props: {
    type: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '看看另一半的样子吧~'
    }
  },
  created() {},
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
.fixButton {
  &.fix {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    background:rgba(255,255,255,.5);
    padding: 8px 0;
  }
  &.fix.ipx {
    padding-bottom: 34px;
  }
  .inner {
    margin: 0 12px;
    height: 50px;
    background: linear-gradient(90deg, rgba(251, 133, 111, 1) 0%, rgba(251, 125, 125, 1) 100%);
    box-shadow: 0px 1px 1px 0px rgba(245, 137, 136, 1);
    border-radius: 10px;
    font-size: 15px;
    color: #ffffff;
    text-align: center;
    line-height: 50px;
    font-weight: 500;
  }
}
</style>