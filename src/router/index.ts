import {
  createRouter,
  RouteRecordRaw,
  NavigationGuardNext,
  createWebHashHistory,
  RouteLocationNormalized
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/allStock',
    component: () => import('@/views/allStock'),
    children: [
      {
        path: '/allStock',
        name: '全部股票',
        component: () => import('@/views/allStock')
      },
      {
        path: '/singleStock',
        name: '单个股票',
        component: () => import('@/views/singleStock')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const user = localStorage.getItem('user')
    if (to.meta.type === 'login' && user) {
      next({ name: 'home' })
      return
    }

    if (to.meta.type === 'home' && !user) {
      next({ name: 'login' })
      return
    }

    next()
  }
)

export default router
