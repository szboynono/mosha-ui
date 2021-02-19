import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/home/szboynono/code/mosha-ui/node_modules/@vuepress/theme-default/lib/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/home/szboynono/code/mosha-ui/node_modules/@vuepress/theme-default/lib/layouts/Layout.vue")),
}
