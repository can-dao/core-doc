Vue.use(VueRouter);
import * as Com from '@/common'
import * as Utils from 'build/plugs/utils'


import App from './App.vue'
import EmptyParent from './pages/emptyParent.vue'



const defalutConfig = {
  //mode: 'history',
  base: __dirname
  ,linkActiveClass:'active'
  ,routes: [

    {
      path: '/'
      ,beforeEnter(to, from, next){
        next('/intro/index');
      }
    }

    ,{
      path: '/intro'
      ,component:EmptyParent
      ,children:[
        {path:'/intro/index',component:require('./pages/intro/index.vue')}
        ,{path:'/intro/addPage',component:require('./pages/intro/addPage.vue')}
      ]
    }
    

    ,{
      path: '/dir'
      ,component:EmptyParent
      ,children:[
        {path:'/dir/all',component:require('./pages/dir/all.vue')}
      ]
    }
    

    ,{
      path: '/pages'
      ,component:EmptyParent
      ,children:[
        {path:'/pages/index',component:require('./pages/pages/index.vue')}
        ,{path:'/pages/login',component:require('./pages/pages/login.vue')}
      ]
    }

    
  ]
}

export default defalutConfig
