<template>
  <div class="raiders">
    <InfoTitle :title="info.infoTitle"></InfoTitle>
    <div class="raiders_step">
      <div
        class="step_title"
        :class="{color2: info.index === 1, color3: info.index === 2}"
      >{{info.raidersTitle}}</div>
      <div class="step_content">
        <div class="step_img">
          <div v-for="(item, index) in leftDesc" :key="index">{{item}}</div>
        </div>
        <div class="step_link_img"></div>
        <div class="step_img">
          <div v-for="(item, index) in rightDesc" :key="index">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InfoTitle from './InfoTitle.vue';

export default {
  data() {
    return {
        leftDesc: [],
        rightDesc: []
    };
  },
  components: {
    InfoTitle
  },
  props: {
    info: {
      infoTitle: '',
      raidersTitle: '',
      leftDesc: '',
      rightDesc: '',
      index: 0
    }
  },
  created() {
    
  },
  mounted() {
    this.leftDesc = this.getDescArr(this.info.leftDesc);
    this.rightDesc = this.getDescArr(this.info.rightDesc);
  },
  methods: {
      getDescArr(desc) {
          return desc.split(' ');
      }
  }
};
</script>
<style lang="scss" scoped>
@import '../common/scss/mixin.scss';
.raiders {
  text-align: center;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  .raiders_step {
    background-color: #fbf0eb;
    border-radius: 5px;
    padding: 10px 0 18px;
    margin-top: 9px;
    .step_title {
      display: inline-block;
      height: 25px;
      background: #efc768;
      border-radius: 3px;
      padding: 0 10px;
      color: #fff;
      font-size: 15px;
      line-height: 25px;
      margin-bottom: 14px;
      &.color2 {
        background: #f5aa82;
      }
      &.color3 {
        background: #f19c97;
      }
    }
    .step_content {
      display: flex;
      align-items: center;
      justify-content: center;
      .step_img {
        width: 101px;
        height: 111px;
        @include bg('../assets/home_tdgl_paper');
        background-size: cover;
        color: #e08c86;
        font-size: 16px;
        line-height: 23px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .step_link_img {
        width: 37px;
        height: 16px;
        @include bg('../assets/home_tdgl_line');
        background-size: cover;
        margin: 0 19px 0 17px;
        @media screen and (max-width: 325px) {
          margin: 0 5px 0;
        }
      }
    }
  }
}
</style>