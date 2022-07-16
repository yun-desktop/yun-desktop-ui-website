<template>
  <div class="home">
    <h2 class="home-title">Yun-Desktop-UI</h2>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'

@Options({})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home-title {
  text-align: center;
  height: 30vh;
  line-height: 30vh;
  font-size: 58px;
  text-shadow: 5px 5px 5px #2e5efe88;
}
</style>
