<template>
  <div class="documents">
    <router-view class="document-sub-page" />

    <ul class="document-list">
      <!-- <list-item 
        v-for="item in itemList"
        :key="item.URL"
        :URL="item.URL"
        class="document-list-item"
        :hoverStyle="{transform: 'translateX(-10px)', backgroundColor: '#2e5efe28', width: '200px'}"
        :selectStyle="{transform: 'translateX(-10px)', backgroundColor: '#2e5efe55', width: '200px'}"
        group="document"
      >
        <h5 style="margin: 0;">{{item.content}}</h5>
      </list-item> -->
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'

import ListItem from '../components/ListItem.vue'

@Options({
  components: { ListItem }
})
export default class Documents extends Vue {
  itemList = [
    { URL: '/documents/introduce', content: '介绍' },
    { URL: '/documents/install', content: '安装' }
  ]
}
</script>

<style lang="scss" scoped>
.documents {
  display: flex;
  justify-content: flex-end;
  height: calc(100vh - #{$nav-height});

  .document-sub-page {
    width: calc(100vw - 200px);
  }
}

.document-list-item {
  display: flex;
  align-items: center;
  padding-left: 6px;
  height: 32px;
  width: 180px;
  border-radius: 4px 0 0 4px;
}

.document-list {
  width: 120px;
  border-left: 1px solid $low-light;
  padding-left: 30px;
}
</style>
