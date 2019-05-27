<template>
  <div class="score">
    <div class="score_head">
      <div class="title">{{dealTitle}}</div>
      <div class="star_section">
        <div v-for="(item, i) in getFullStar" class="full" :data-title="item" :key="i + 'full'"></div>
        <div v-for="(item, idx) in getHalfStar"  class="half" :data-title="item" :key="idx + 'half'"></div>
        <div v-for="(item, index) in getNoneStar" class="none" :data-title="item" :key="index + 'none'"></div>
      </div>
    </div>
    <div class="score_content">{{content}}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    score: {
      type: String,
      default: '0'
    },
    content: {
      type: String,
      default: ''
    }
  },
  created () {
    console.log(this.title);
  },
  computed: {
    dealTitle() {
      return this.title.indexOf('另一半') > -1 ? this.title.replace('另一半', '') + ':' : this.title + ':';
    },
    getFullStar() {
      return Math.floor(parseFloat(this.score));
    },
    getHalfStar() {
      let r = /^\+?[1-9][0-9]*$/;
      return r.test(parseFloat(this.score)) ? 0 : 1;
    },
    getNoneStar() {
      return 5 - (this.getFullStar + this.getHalfStar);
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../common/scss/mixin.scss';
.score {
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
  .score_head {
    display: flex;
    align-items: center;
    .title {
      margin-right: 5px;
      font-size: 15px;
      color: #f6a869;
      font-weight: 500;
    }
    .star_section {
      display: flex;
      align-items: center;
      div {
        margin-right: 5px;
      }
      .full {
        width: 16px;
        height: 16px;
        @include bg('../assets/star_full');
        background-size: cover;
      }
      .half {
        width: 16px;
        height: 16px;
        @include bg('../assets/star_half');
        background-size: cover;
      }
      .none {
        width: 16px;
        height: 16px;
        @include bg('../assets/star_un');
        background-size: cover;
      }
    }
  }
  .score_content {
    font-size: 15px;
    line-height: 21px;
    color: #333333;
    margin-top: 10px;
    text-align: justify;
  }
}
</style>