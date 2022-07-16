<template>
  <header class="header-menu">
    <div class="logo-container">
      <slot name="logo"></slot>
    </div>
    <div class="buttons-container">
      <slot name="buttons"></slot>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
@Options({})
export default class HeaderMenu extends Vue {}
</script>

<style lang="scss" scoped>
.header-menu {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $nav-height;
  box-shadow: 0px 10px 50px 5px $low-light;

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 80%;
    border-right: 1px solid $low-light;
  }

  .buttons-container {
    padding-right: 20px;
    display: flex;
    height: 100%;
  }
}
</style>

