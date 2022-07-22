<template>
  <div class="components">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="line"></div>
    <div class="com-list-wrap">
      <!-- Input -->
      <div class="com-button" @click="$router.push({ name: 'input' })">
        <h4>Input</h4>
        <input style="cursor: pointer;" disabled type="text" placeholder="请输入内容">
      </div>
      <!-- Button -->
      <div class="com-button" @click="$router.push({ name: 'button' })">
        <h4>Button</h4>
        <button style="pointer-events: none;" disabled>按钮</button>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'

@Options({})
export default class Components extends Vue {}
</script>

<style lang="scss" scoped>
.components {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: calc(100vh - #{$nav-height});
}

.line {
  width: 10px;
  height: 94%;
  border-left: 2px solid $low-light;
}

.com-list-wrap {
  overflow: auto;
  width: 170px;
  height: 100%;
}

.content {
  overflow: auto;
  width: calc(100vw - 200px);
  height: 100%;
}

.com-button {
  display: flex;
  align-items: center;
  height: 32px;
  cursor: pointer;
  border-top-left-radius : 4px;
  border-bottom-left-radius : 4px;

  * {
    margin-left: 10px;
  }

  &:hover {
    background: $low-light;
  }
}
</style>
