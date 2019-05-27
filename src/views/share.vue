<template>
  <div class="share_page">
    <img src="../assets/wdlyb_banner@3x.png" class="banner">
    <Title title="TA的模样" class="no_transform"></Title>
    <Border>
      <InfoTitle :sex="!otherHalf.sex" class="special_title"></InfoTitle>
      <div class="result_text">{{otherHalf.data[3].content}}</div>
    </Border>
    <Border class="nopadding_top">
      <InfoTitle title="适合相遇的地点" class="info_title"></InfoTitle>
      <div class="result_text">{{otherHalf.data[3].contentTwo}}</div>
    </Border>
    <FixButton title="猛戳查看另一半的样子吧~" @click.native="toIndex"></FixButton>
  </div>
</template>
<script>
import { getOrderDetail } from '../common/api/api';
import { fixIphoneX } from '../common/utils/tool';
import setShare from '../common/utils/setShare';

import Border from '../components/Border.vue';
import Title from '../components/Title.vue';
import InfoTitle from '../components/InfoTitle.vue';
import FixButton from '../components/FixButton.vue';
export default {
  name: 'share',
  data() {
    return {
      otherHalf: {}
    };
  },
  components: {
    Border,
    Title,
    InfoTitle,
    FixButton
  },
  props: {},
  created() {
    getOrderDetail(this.$route.query).then((res) => {
      this.otherHalf = res.data.data;
    });
    setShare();
  },
  mounted() {
    fixIphoneX(0, false);
  },
  methods: {
    toIndex() {
      window.location.href = window.location.href.split('#')[0];
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
.share_page {
  padding-bottom: 50px;
  text-align: justify;
  .banner {
    width: 100%;
  }
  .result_text {
    font-size: 15px;
    line-height: 21px;
    color: #333333;
  }
  .special_title {
    margin-top: -58px;
  }
  .info_title {
    margin-bottom: 13px;
  }
  .no_transform {
    margin-top: -25px;
  }
}
</style>