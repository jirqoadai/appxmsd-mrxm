<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import './common/utils/login';
import login from './common/utils/login';
login();
export default {
  data () {
    return {
    }
  },
  created() {
    console.log(`app created success!`);
  },
};
</script>
<style lang="scss">
@import './common/scss/commom.scss';
</style>
