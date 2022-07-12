<template>
  <header class="nav-bar">
    <h1 class="title">Yun-Desktop-UI</h1>
    <div class="line"></div>
    <div class="buttons">
      <a 
        class="nav-button"
        target="_blank"
        href="https://bndiya.com/desktop"
      >
        <i>云桌面</i>
      </a>
      <router-link 
        class="nav-button" 
        :class="isSelect('documents')" 
        to="/documents"
      >
        文档
      </router-link>
      <router-link 
        class="nav-button" 
        :class="isSelect('components')" 
        to="/components"
      >
        组件
      </router-link>
      <a class="nav-button github" target="_blank" href="https://github.com/yun-desktop/yun-desktop-ui">
        <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github d-block mr-2 float-left">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>
    </div>
  </header>
  <router-view/>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'

@Options({})
export default class App extends Vue {
  /** 是否选中 */
  isSelect(page: string) {
    return String(this.$route.name).toLowerCase() === page ? 'current' : ''
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fefefe;
  height: 100vh;
  background: #334;
}

$low-light: #2e5efe55;
$nav-height: 58px;

.nav-bar {
  overflow: hidden;
  display: flex;
  align-items: center;
  height: $nav-height;
  box-shadow: 0 10px 50px 5px $low-light;

  .title {
    margin-left: 40px;
    margin-right: 40px;
    text-shadow: 4px 4px 2px $low-light;
  }

  .octicon {
    fill: #fefefe;
  }

  .line {
    margin-right: 40px;
    width: 1px;
    height: 32px;
    background-color: #6e6e6e;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 2;
    padding-right: 40px;
    height: 100%;

    .nav-button {
      position: relative;
      margin-right: 60px;
      height: 90%;
      width: 58px;
      
      color: #fefefe;
      font-weight: 700;
      text-decoration: none;
      font-size: 16px;
      line-height: $nav-height;
      text-align: center;

      box-sizing: content-box;

      &:hover {
        &:not(.github) {
           &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            color: transparent;
            width: 100%;
            height: 4px;
            background: $low-light;
          }
        }
      }
    }

    .github {
      line-height: 72px;
    }

    .current {
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        color: transparent;
        width: 100%;
        height: 4px;
        background: $low-light;
      }
    }
  }
}
</style>
