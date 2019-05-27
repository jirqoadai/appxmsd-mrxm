<template>
  <div class="result">
    <div class="result_head">
      <img src="../assets/js_banner@3x.png" alt />
      <Border class="reasult_head_border">
        <InfoTitle :sex="detailData.sex" class="special_title"></InfoTitle>
        <div class="reslut_info">
          <div class="info">
            <div class="tag">
              <div>姓名</div>
            </div>
            <!-- <img src="../assets/js_zl_label_@3x.png" alt="" srcset="">姓名 -->
            <div>{{ detailData.name }}</div>
          </div>
          <div class="info">
            <div class="tag">出生日期</div>
            <div>{{ detailData.birthday }}</div>
          </div>
          <div class="info">
            <div class="tag">出生时间</div>
            <div>{{ detailData.birthTimeHour }}</div>
          </div>
        </div>
        <!-- <InfoTitle :title="detailData.scoreTitle"></InfoTitle> -->
        <InfoTitle title="你的爱情关键词"></InfoTitle>
        <div class="keyword">
          <div class="item" v-for="(item, i) in detailData.keyWord" :key="i">{{ item }}</div>
        </div>
      </Border>
    </div>
    <!-- 未支付页面 -->
    <div class="unpay_content" :class="{ ipx: isIphonex }" v-if="!detailData.isPay">
      <!-- <Title :title="detailData.data[0].title"></Title> -->
      <Title :title="detailData.data[0].title"></Title>
      <Border>
        <Shadow lock-title="改变自己的弱点 让自己更有优势" @click.native="pay"></Shadow>
      </Border>
      <Title :title="detailData.data[3].title" class="no_transform"></Title>
      <Border
        v-for="(item, id) in lockTitleList"
        :key="id"
        :class="{ nopadding_top: item.title !== '' }"
        @click.native="pay"
      >
        <InfoTitle
          :title="item.title"
          :sex="!detailData.sex"
          :class="{ special_title: item.title === '' }"
          class="list_title"
        ></InfoTitle>
        <Shadow :lock-title="item.lockTitle"></Shadow>
      </Border>
      <FixButton title="限时5.20，特价5.2折，获取甜蜜爱情" type="fix" @click.native="pay"></FixButton>
    </div>
    <!-- 已支付页面 -->
    <div class="payed_content" v-else>
      <Title :title="detailData.data[0].title"></Title>
      <Border class="nopadding_top">
        <div class="result_text need_margin">{{ detailData.data[0].content }}</div>
      </Border>
      <Title :title="detailData.data[3].title" class="no_transform"></Title>
      <Border>
        <InfoTitle :sex="!detailData.sex" class="special_title list_title"></InfoTitle>
        <div class="result_text">{{ detailData.data[3].content }}</div>
      </Border>

      <Border class="nopadding_top">
        <InfoTitle title="TA的各项指数" class="list_title"></InfoTitle>
        <Score
          v-for="(item, idx) in detailData.data[5].content"
          :key="idx"
          :score="item.score.toString()"
          :title="item.title"
          :content="item.dataContent"
        ></Score>
      </Border>

      <Border class="nopadding_top">
        <InfoTitle title="适合相遇的地点" class="list_title"></InfoTitle>
        <div class="result_text">{{ detailData.data[3].contentTwo }}</div>
      </Border>

      <Border class="nopadding_top">
        <InfoTitle title="在一起的感情生活" class="list_title"></InfoTitle>
        <Score
          :score="detailData.data[4].score.toString()"
          title="感情波折指数"
          :content="detailData.data[4].content"
        ></Score>
        <Score
          :score="detailData.data[4].twoscore"
          title="感情稳定指数"
          :content="detailData.data[4].contentTwo"
        ></Score>
      </Border>

      <Border class="nopadding_top">
        <InfoTitle :title="lockTitleList[4].title" class="list_title"></InfoTitle>
        <div class="result_text">{{ detailData.data[2].content }}</div>
      </Border>

      <Border class="nopadding_top">
        <InfoTitle title="感情专家的情感建议" class="list_title"></InfoTitle>
        <div class="result_text">{{ detailData.data[1].content }}</div>
      </Border>

      <Title title="猜你喜欢"></Title>
      <Border class="nopadding">
        <GoodsList></GoodsList>
      </Border>
      <CopyRight></CopyRight>
    </div>
  </div>
</template>
<script>
import { getOrderDetail } from '../common/api/api';
import { formatNumber, stringify, fixIphoneX, isIphoneX } from '../common/utils/tool';

import device from '../common/utils/device';
// import mockData from '../common/utils/data';
import config from '../common/utils/config';
import orderInfo from '../common/utils/orderInfo';
import setShare from '../common/utils/setShare';

import Border from '../components/Border.vue';
import Title from '../components/Title.vue';
import InfoTitle from '../components/InfoTitle.vue';
import Shadow from '../components/Shadow.vue';
import FixButton from '../components/FixButton.vue';
import Score from '../components/Score.vue';
import GoodsList from '../components/GoodsList.vue';
import CopyRight from '../components/CopyRight.vue';

export default {
  data() {
    return {
      detailData: {},
      lockTitleList: [],
      isIphonex: isIphoneX()
    };
  },
  components: {
    InfoTitle,
    Border,
    Title,
    Shadow,
    FixButton,
    Score,
    GoodsList,
    CopyRight
  },
  props: {},
  created() {
    getOrderDetail(this.$route.query).then((res) => {
      this.dealData(res.data.data);
    });
    // let data = mockData.unpayData;
    // this.dealData(data);
  },
  mounted() {},
  methods: {
    dealData(data) {
      console.log(data);
      data.birthTimeHour = formatNumber(data.birthTimeHour.split(':')[0]) + '时';
      data.birthday = data.birthday.replace('-', '年').replace('-', '月') + '日';
      config.lockTitleList[4].title = data.sex ? '能迎娶白富美吗?' : config.lockTitleList[4].title;
      if (data.isPay) {
        this.setShare(data);
        fixIphoneX(0, false);
      } else {
        setShare();
        fixIphoneX(50, false);
      }
      this.lockTitleList = config.lockTitleList;
      this.detailData = data;
    },
    setShare(data) {
      const shareInfo = {
        title: `快来看啊！${data.name}的另一半长这个样子！！！`,
        text: '点击收获脱单秘籍！',
        image: !data.sex
          ? 'https://qiniu.image.cq-wnl.com/content/201812198cc3bb7ca2f0477bbef46570e8dacc7f.png'
          : 'https://qiniu.image.cq-wnl.com/content/20181219bedd97ac85954a2289aa389fba696884.png',
        // url: window.location.href.replace('#/result?', `#/share?orderId=${data.orderID}`)
        url: `${config.pageHtml}#/share?orderId=${this.$route.query.orderId}&userId=${orderInfo.userId}&deviceId=${
          orderInfo.deviceId
        }&posId=${orderInfo.posId}`
      };
      setShare(shareInfo);
    },
    pay() {
      let detailUrl = `${config.pageHtml}#/result?orderId=${this.$route.query.orderId}&userId=${
        orderInfo.userId
      }&deviceId=${orderInfo.deviceId}&posId=${orderInfo.posId}&price=${this.$route.query.price}&goodsId=${
        this.$route.query.goodsId
      }`;

      let uid = orderInfo.userId ? orderInfo.userId : orderInfo.deviceId;
      let params = {
        openid: device.weixin ? orderInfo.openId : '',
        money: this.$route.query.price,
        source: orderInfo.orderName,
        parterid: 'wnl_mall_' + orderInfo.parterid,
        goodsid: this.$route.query.goodsId,
        parteruserid: uid,
        posId: orderInfo.posId,
        data: this.$route.query.orderId,
        returnUrl: encodeURIComponent(detailUrl),
        failUrl: encodeURIComponent(detailUrl),
        couponId: orderInfo.couponId || '',
        imei: orderInfo.ImeiNumber
      };

      window.location.href = '//order.51wnl-cq.com/pay_web/index_t.html?' + stringify(params);
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
@import '../common/scss/result.scss';
</style>
