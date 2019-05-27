<template>
  <div class="feedback">
    <div class="feedback_list">
      <div v-for="(item,index) of feedback" class="item" v-bind:key="index">
        <div class="info">
          <div class="sex-img" :class="{female: !item.sex}"></div>
          <div class="right">
            <div class="top">
              <span class="name">{{item.name}}</span>
              <span class="address">{{item.city}}</span>
            </div>
            <div class="text">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feedback from '../common/utils/feedback';
export default {
  data() {
    return {
      feedback: feedback.list
    };
  },
  mounted() {
    feedback.showFeedback();
  },
  destroyed () {
    window.cancelAnimationFrame(feedback.animation);
  }
};
</script>

<style lang="scss" scoped>
@import '../common/scss/mixin.scss';
.feedback {
  overflow: hidden;
  height: 393px;
  padding: 0 15px;
  font-size: 16px;
  color: #333333;
  line-height: 21px;
  .item {
      padding: 17px 0 11px;
      position: relative;
      &::after {
          position: absolute;
          content: '';
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: #F3F3F3;
      }
    .info {
        display: flex;
        .right {
            flex: 1;
            .address {
                float: right;
                color: #999999;
                font-size: 13px;
            }
            .name {
                color: #F0847C;
            }
            .text {
                margin-top: 5px;
            }
        }
    }
    .sex-img {
      width: 40px;
      height: 40px;
      @include bg('../assets/boy');
      background-size: cover;
      margin-right: 10px;
      &.female {
        @include bg('../assets/girl');
        background-size: cover;
      }
    }
  }
}
</style>
