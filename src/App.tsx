import '@/assets/base.less'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <a-layout class="layout">
          <a-layout-header>
            <div class="logo" />
            <a-menu
              v-model:selectedKeys="selectedKeys"
              theme="dark"
              mode="horizontal"
              style="lineHeight:64px"
            >
              <a-menu-item key="1">nav 1</a-menu-item>
              <a-menu-item key="2">nav 2</a-menu-item>
              <a-menu-item key="3">nav 3</a-menu-item>
            </a-menu>
          </a-layout-header>
          <a-layout-content style="padding: 0 50px">
            <div style="background: '#fff', padding: '24px', minHeight:280px">Content</div>
          </a-layout-content>
        </a-layout>
      </div>
    )
  }
})
