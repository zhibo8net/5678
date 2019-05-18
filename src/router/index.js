import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import live from '@/views/live'
import live1 from '@/views/live1'
import mindex from '@/views/mindex'
import mlive from '@/views/mlive'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '',
      name: 'index',
      component: index,
      alias: '/index'
    },
    {
      path: '/live',
      name: 'live',
      component: live
    },
    {
      path: '/live1',
      name: 'live1',
      component: live1
    },
    {
      path: '/mindex',
      name: 'mindex',
      component: mindex
    }, {
      path: '/mlive',
      name: 'mlive',
      component: mlive
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});


router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  // debugger
  let isMob = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
  if (isMob && to.name == 'live') {
    next({
      path: '/mlive',
      query: to.query
    })
  } else if (isMob && to.name == 'index') {
    next({
      path: '/mindex'
    })
  } else if (!isMob && to.name == 'mindex') {
    next({
      path: '/index'
    })
  } else if (!isMob && to.name == 'mlive') {
    next({
      path: '/live',
      query: to.query
    })
  } else {
    next();
  }
});

export default router;
