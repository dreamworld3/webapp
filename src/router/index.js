
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = (resolve) => {
  import('cpnts/recommend/recommend').then((module) => {
    resolve(module)
  })
}

const Singer = (resolve) => {
  import('cpnts/singer/singer').then((module) => {
    resolve(module)
  })
}

const Rank = (resolve) => {
  import('cpnts/rank/rank').then((module) => {
    resolve(module)
  })
}

const Search = (resolve) => {
  import('cpnts/search/search').then((module) => {
    resolve(module)
  })
}

const SingerDetail = (resolve) => {
  import('cpnts/singer-detail/singer-detail').then((module) => {
    resolve(module)
  })
}

const MusicList = (resolve) => {
  import('cpnts/music-list/music-list').then((module) => {
    resolve(module)
  })
}

const RankDetail = (resolve) => {
  import('cpnts/rank-detail/rank-detail').then((module) => {
    resolve(module)
  })
}

const User = (resolve) => {
  import('cpnts/user/user').then((module) => {
    resolve(module)
  })
}
const Mv = (resolve) => {
  import('cpnts/mv/mv').then((module) => {
    resolve(module)
  })
}


export default new Router({
  routes: [
   
    {
      path: '/recommend',
      component: Recommend, // Recommend是组件的名字，这个路由对应跳转到的组件
      children: [
        {
          path: ':id',
          component: MusicList
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: 'singer/:id',
          component: SingerDetail
        },
        {
          path: 'list/:id',
          component: MusicList
        }
      ]
    },
    {
      path: '/user',
      component: User
    },
    {
       path: '/mv',
      component: Mv
    }
  ]
})
