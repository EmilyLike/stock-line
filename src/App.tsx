import '@/assets/base.less'
import { defineComponent, ref } from 'vue'
import { RouterView } from 'vue-router'

const menuList = ['全部股票', '单个股票']

export default defineComponent({
  setup() {
    const selectedKeys = ref<string[]>([menuList[0]])
    // const menuList = ref<string[]>()
    return () => (
      <div>
        <a-config-provider>
          <a-layout class="layout">
            <a-layout-header>
              <div class="logo" />
              <a-menu
                v-model:selectedKeys={selectedKeys.value}
                theme={'dark'}
                mode={'horizontal'}
                style="lineHeight:64px"
              >
                {menuList.map((menu, index) => (
                  <a-menu-item key={menu}>{menu}</a-menu-item>
                ))}
              </a-menu>
            </a-layout-header>
          </a-layout>
          <router-view></router-view>
        </a-config-provider>
      </div>
    )
  }
})
