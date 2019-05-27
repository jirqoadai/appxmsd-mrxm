<template>
  <div class="index">
    <div class="title"><img src="@/assets/banner.png"/></div>
    <block v-for="item in lists" :key="item.index">
      <div class="discount">
        <div class="icon">
          <img :src="item.icon">
        </div>
        <div class="desc">
          <div class="name">{{item.name.split('|')[0]}}</div>
          <div class="price">{{item.price.split('->')[0]}}</div>
          <!-- <div class="category">{{item.category}}</div> -->
          <div class="newFromeDate">{{item.newFromeDate}}</div>
          <a class="link" :href="item.url.split('https:')[1].replace('\/us', '')"><div class="btn" >详情</div></a>
        </div>
      </div>
    </block>
    <div class="footer">2017-2019 &copy; 限免速递</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getDiscounts } from '../common/api/api';

export default {
  name: 'index',
  data() {
    return {
      lists: []
    };
  },
  created() {
    // console.log(this.$route.query);
    getDiscounts().then((res) => {
      this.lists = res.data;
    });
  },
  mounted() {
    
  },
  computed: {},
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
// @import '../common/scss/mixin.scss';
@import '../common/scss/index.scss';
</style>