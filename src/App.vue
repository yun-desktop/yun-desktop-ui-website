<template>
  <!-- 导航栏 -->
  <header-menu>
    <template #logo>
      <h3 class="title" style="margin: 0;">Yun-Desktop-UI</h3>
    </template>

    <template #buttons>
      <!-- 云桌面按钮 -->
      <header-menu-item url="https://bndiya.com/desktop#/login">
        <h5 style="color: #8af;">云桌面</h5>
      </header-menu-item>
      <!-- 文档按钮 -->
      <header-menu-item url="/documents">
        <h5>文档</h5>
      </header-menu-item>
      <!-- 组件按钮 -->
      <header-menu-item url="/components">
        <h5>组件</h5>
      </header-menu-item>
      <!-- Github链接按钮 -->
      <header-menu-item url="https://github.com/yun-desktop/yun-desktop-ui">
        <svg class="github-button" aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </header-menu-item>
    </template>
  </header-menu>
  <!-- 导航栏 end -->


  <router-view/>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import HeaderMenu from './views/components/HeaderMenu.vue'
import HeaderMenuItem from './views/components/HeaderMenuItem.vue'


@Options({
  components: {
    HeaderMenu,
    HeaderMenuItem
  }
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.title {
  font-size: 26px;
  font-weight: 700;
}

.github-button {
  fill: #fff;
}
</style>
