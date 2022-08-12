<template>
  <div class="components">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="line"></div>
    <ul class="com-list-wrap">
      <!-- Input -->
      <list-item
        v-for="item of list"
        :key="item.name"
        class="component-list-item"
        group="component"
        :URL="item.URL"
        :normalStyle="{ backgroundColor: 'transparent', width: '110px' }"
        :hoverStyle="{backgroundColor: '#2e5efe28', width: '120px'}"
        :selectStyle="{backgroundColor: '#2e5efe55 !important', width: '200px'}"
      >
        <h5>{{item.name}}</h5>
        <component 
          :is="item.name" disabled :value="item.message"
          style="cursor: pointer; pointer-events: none;"
        >
          {{item.message}}
        </component>
      </list-item>

    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import ListItem from '../components/ListItem.vue'

@Options({
  components: {
    ListItem
  }
})
export default class Components extends Vue {
  list = [
    { name: 'input', URL: './input', message: '输入框'  },
    { name: 'button', URL: './button', message: '按钮'  }
  ]
}
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
  height: 96%;
  border-left: 1px solid $low-light;
}

.com-list-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: auto;
  padding-left: 10px;
  width: 120px;
  height: 100%;
}

.content {
  overflow: auto;
  width: calc(100vw - 200px);
  height: 100%;
}

.component-list-item {
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 32px;
  background-color: $low-light;
  border-radius: 8px 0 0 8px;
  cursor: pointer;
  
  h5 {
    margin-right: 4px;
    margin-left: 10px;
  }
}
</style>
