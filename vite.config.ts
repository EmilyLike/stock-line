import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      // 按需加载
      Components({
        include: [/\.vue$/, /\.tsx$/], // 支持 vue和tsx
        resolvers: [
          AntDesignVueResolver({
            // 不加载css, 而是手动加载css. 通过手动加载less文件并将less变量绑定到css变量上, 即可实现动态主题色
            importStyle: true,
            // 加载所有icon
            resolveIcons: true
          })
        ]
      })
    ],
    base: mode === 'development' ? '/' : './',
    server: {
      port: 8888
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, '/src')
      }
    }
  })
