import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Apple from './../components/Apple'
import RedApple from '@/components/RedApple'
import Other from './../page/Other'
// import Layout from '@components/Layout'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    },
    //上面注释的是默认访问首页，下面的这个采用
    //路由重定向，加载首页时候加载成apple页面
    // {
    // 	path:'/',
    // 	redirect:'apple'
    // },
    {
      path: '/apple',
      name: 'Apple',
      component: Apple,
      children:[
      	{
      		path:'red',
      		name:'RedApple',
      		component:RedApple
      	}
      ]
    }
  ]
})
