import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import(/* webpackChunkName: "about" */ '../views/myView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/regester',
    name: 'regester',
    component: () => import( '../views/regester.vue')
  },
  {
    path: '/travel',
    name: 'travel',
    component: () => import( '../views/travelView.vue')
  },
  {
    path: '/location',
    name: 'location',
    component: () => import( '../views/location.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import( '../views/city.vue')
  },
  {
    path: '/myself',
    name: 'myself',
    component: () => import( '../components/MySelf.vue')
  },
  {
    path: '/share',
    name: 'share',
    component: () => import( '../components/share.vue')
  },
  {
    path: '/ChoseCity',
    name: 'ChoseCity',
    component: () => import( '../components/city/ChoseCity.vue')
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: () => import( '../components/function/tickets.vue')
  },
  {
    path: '/theme',
    name: 'theme',
    component: () => import( '../components/function/theme.vue')
  },
  {
    path: '/siJia',
    name: 'siJia',
    component: () => import( '../components/function/siJia.vue')
  },
  {
    path: '/oneDay',
    name: 'oneDay',
    component: () => import( '../components/function/oneDay.vue')
  },
  {
    path: '/high',
    name: 'high',
    component: () => import( '../components/function/high.vue')
  },
  {
    path: '/customization',
    name: 'customization',
    component: () => import( '../components/function/customization.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import( '../components/details.vue')
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import( '../components/collect.vue')
  },
  {
    path: '/PingJia',
    name: 'PingJia',
    component: () => import( '../views/PingJia.vue')
  },
  {
    path: '/success',
    name: 'success',
    component: () => import( '../components/successBuy.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


// router.beforeEach((to,from,next)=>
// {
//   //登录及注册页面可以直接进入,而主页面需要分情况
//   if(to.path=='/login')
//   {
//     next();
//     console.log(localStorage.s);
//   }
//   else if(to.path=='/regester')
//   {
//     next();
//   }
//   else
//   {
//     if(from.path=="/login")//从登录页面可以直接通过登录进入主页面
//     {
//       next();
//     }
//     else{
//     	//从/进入,如果登录状态是true，则直接next进入主页面
// 	      if(localStorage.s === "true")
// 		    {
// 		      next();
// 		      console.log(localStorage['s'])
// 		    }
// 	    else {//如果登录状态是false，那么跳转至登录页面,需要登录才能进入主页面
// 	      next('/login');
// 	      console.log("需要登录")
// 	    }
//     }
//   }
// })
export default router
