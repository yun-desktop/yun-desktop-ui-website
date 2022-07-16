<template>
  <div 
    ref="header-menu-item" 
    class="header-menu-item" 
    @click="goPage"
  >
    <slot></slot>
    <transition @before-enter="beforeEnter" @after-enter="afterEnter" name="current">
      <div v-if="isCurrent" class="low-light"></div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

@Options({})
export default class HeaderMenuItem extends Vue{
  static allHeaderMenuItems: Array<HeaderMenuItem> = []

  @Prop({default: ''}) url: string = ''
  @Prop({default: 'default'}) listName: string = ''

  /** 计算属性 */
  get isAnchor() { return this.url.startsWith('http') }
  get isCurrent() { 
    if(this.currentURL === this.url) return true
    if(this.isAnchor) return false
    if(this.isHover) return true
    return false
  }

  /** 鼠标是否悬浮在上方 */
  isHover: boolean = false;
  currentURL: string = '';

  /** 跳转页面 */
  goPage() {
    if(this.isAnchor) {
      open(this.url)
    } else {
      this.$router.push(this.url)
      HeaderMenuItem.allHeaderMenuItems.forEach(item => item.selectNoticeCallback(this.url, this.listName))
    }
  }

  /** 选中的通知回调 */
  selectNoticeCallback(url: string, listName: string) { 
    if(listName === this.listName && this.currentURL !== url) this.currentURL = url 
  }

  mounted() {
    /** 绑定鼠标上浮事件 */
    const ele = <HTMLDivElement>this.$refs['header-menu-item']
    ele.addEventListener('mouseenter', (e) => { if(e.target === ele) this.isHover = true })
    ele.addEventListener('mouseleave', (e) => { if(e.target === ele) this.isHover = false })

    HeaderMenuItem.allHeaderMenuItems.push(this)
  }

  unmounted() {
    HeaderMenuItem.allHeaderMenuItems = HeaderMenuItem.allHeaderMenuItems.filter(item => item !== this)
  }

  beforeEnter() {
    // console.log('beforeEnter')
  }

  afterEnter() {
    // console.log('afterEnter')
  }
}
</script>

<style>

</style>

<style lang="scss" scoped>
.header-menu-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;

  padding-left: 18px;
  padding-right: 18px;

  .low-light {
    position: absolute;
    top: 0;
    width: 80%;
    height: 4px;
    background: $low-light;
  }
}

// 过渡动画
.current-enter-from,
.current-leave-to {
  width: 10px !important;
}

.current-enter-active,
.current-leave-active {
  transition: all .1s ease;
}
</style>