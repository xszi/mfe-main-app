<template>
  <div class="home-container">
    <div class="home-text">{{ platform }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'home',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'name'
    ]),
    platform() {
      return 'MFE'
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

</style>
