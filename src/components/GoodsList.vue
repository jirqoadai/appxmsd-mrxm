<template>
  <div class="goods_list">
    <div class="goods_item" v-for="(item,index) of goodsList" v-bind:key="index">
      <a :href="item.url">
        <div class="img_box">
          <img :src="setImgUrl(item.img)" alt>
        </div>
        <div class="goods_item_title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
import { getRelevantGoodsList } from '../common/api/api';

export default {
  data() {
    return {
      goodsList: []
    };
  },
  mounted() {
    getRelevantGoodsList(1).then((res) => {
      this.goodsList = res.data.data;
    });
  },
  methods: {
    setImgUrl(img) {
      if (img) {
        return img.replace(/https/gi, 'http');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.goods_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .goods_item {
        width: 25%;
        text-align: center;
        margin-bottom: 23px;
        &:nth-last-of-type(1),
        &:nth-last-of-type(2),
        &:nth-last-of-type(3),
        &:nth-last-of-type(4) {
          margin-bottom: 0;
        }
    }
    a {
        text-decoration: none;
        color: #333333;
        font-size: 13px;
        display: block;
    }
    .img_box img {
        width: 48px;
        height: 48px;
    }
}
</style>
