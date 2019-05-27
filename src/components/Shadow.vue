<template>
  <div class="shadow">
    <img class="shadow_txt" src="../assets/jsq_word@3x.png"/>
    <div class="shadow_inner">
      <div class="shadow_title">
        <div class="flex_wrap_out">
          <div class="flex_wrap">
            <div class="lock_icon"></div>
            <div class="title">
              <div v-if="title[0] && title[0] !== ''">{{title[0]}}</div>
              <div v-if="title[1] && title[1] !== ''">{{title[1]}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: []
    };
  },
  components: {},
  props: {
    lockTitle: {
      type: String,
      default: ''
    }
  },
  created() {
    this.title = this.lockTitle.split(' ');
  },
  methods: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
@import '../common/scss/mixin.scss';
.shadow {
  position: relative;
  .shadow_txt {
    width: 100%;
  }
  .shadow_inner {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -28px;
    text-align: center;
    .shadow_title {
      // box-sizing: border-box;
      height: 48px;
      display: inline-block;
      padding: 0 27px;
      background: rgba(241, 156, 151, 1);
      border-radius: 50px;
      font-size: 15px;
      color: #ffffff;
      text-align: left;
      @media screen and(max-width: 325px) {
        font-size: 13px;
      }
      .flex_wrap_out {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .flex_wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        .lock_icon {
          width: 27px;
          height: 35px;
          @include bg('../assets/js_lock_icon');
          background-size: cover;
          margin-right: 9px;
          display: inline-block;
        }
        .title {
          display: inline-block;
          div {
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>