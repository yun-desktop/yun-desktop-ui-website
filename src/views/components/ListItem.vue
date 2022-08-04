<template>
  <li 
    class="list-item"
    ref="list-item" 
    @click="goPage"
    :style="{
      ...(isHover ? hoverStyle : {}),
      ...(isSelected ? selectStyle : {})
    }"
  >
    <slot ref="list-item"></slot>
      <div
        ref="sub-ele"
        v-if="true"
        class="sub-ele"
        :style="{
          ...subNormalStyle,
          ...(isSelected ? subSelectStyle : {})
        }"
      >
      </div>
  </li>
</template>

<script lang="ts">
import { StyleValue } from '@vue/runtime-dom'
import { Properties } from 'csstype'
import { Vue, Prop, Options, Watch } from 'vue-property-decorator'

@Options({})
export default class ListItem extends Vue {
  /** 所有Item对象 */
  static allItems: Array<ListItem> = []

  /** Item跳转URL */
  @Prop({ type: String, required: true }) URL!: string
  /** 所属List */
  @Prop({ type: String, default: 'default' }) group!: string
  /** 鼠标上浮的样式 */
  @Prop({ default: {} }) hoverStyle: StyleValue = {}
  /** 被选中时的样式 */
  @Prop({ default: {} }) selectStyle: StyleValue = {}
  /** 是否有子元素 */
  @Prop({ type: Boolean, default: false }) isSubEle!: boolean
  /** 子元素鼠标上浮样式 */
  @Prop({ default: {} }) subHoverStyle: Keyframe = {}
  /** 子元选中样式 */
  @Prop({ default: {} }) subSelectStyle: StyleValue = {}
  /** 自元素常态样式 */
  @Prop({ default: {} }) subNormalStyle: Keyframe = {}

  /** 是否为http链接 */
  get isAnchor() { return this.URL.startsWith('http') }
  /** 是否被选中 */
  get isSelected() { 
    if(this.isAnchor) return false
    if(this.selectPageURL === this.URL) return true
    return false
  }

  /** 鼠标是否悬浮在上方 */
  isHover: boolean = false
  /** 当前组被选中的Item的URL */
  selectPageURL: string = ''
  /** 子元素上浮展现动画 */
  subHoverAnimation: Animation | null = null
  

  @Watch('isHover')
  onIsHoverChanged(val: boolean, oldVal: boolean) {
    const ele = this.$refs['sub-ele'] as HTMLElement
    if(this.isSelected) return

    if(val) {
      // 展现动画
      if(this.subHoverAnimation) {
        this.subHoverAnimation.pause()
        this.subHoverAnimation.playbackRate = 1
        this.subHoverAnimation.play()
      } else {
        this.subHoverAnimation = ele.animate([this.subHoverStyle], { duration: 200, fill: 'forwards' })
      }
    } else {
      // 消失动画
      if(!this.subHoverAnimation) {
        this.subHoverAnimation = ele.animate([this.subHoverStyle], { duration: 200, fill: 'forwards' })
      }
      this.subHoverAnimation.pause()
      this.subHoverAnimation.playbackRate = -1
      this.subHoverAnimation.play()
    }
  }

  /** 跳转页面 */
  goPage() {
    if(this.isAnchor) {
      open(this.URL)
    } else {
      this.$router.push(this.URL)
      ListItem.allItems.forEach(item => item.selectNoticeCallback(this.URL, this.group))
    }
  }

  /** 选中回调（当前List组某个Item被选中会通知全部Item） */
  selectNoticeCallback(URL: string, group: string = 'default') {
    if(this.group === group) this.selectPageURL = URL
  }


  mounted() {
    ListItem.allItems.push(this)

    // 监听鼠标是否在元素上方
    const ele = <HTMLDivElement>this.$refs['list-item']
    ele.addEventListener('mouseenter', (e) => { if(e.target === ele) this.isHover = true })
    ele.addEventListener('mouseleave', (e) => { if(e.target === ele) this.isHover = false })
  }

  unmounted() {
    ListItem.allItems = ListItem.allItems.filter(item => item !== this)
  }
}

</script>

<style lang="scss" scoped>
.list-item {
  position: relative;
  cursor: pointer;
  transition: all .3s;
}
</style>

