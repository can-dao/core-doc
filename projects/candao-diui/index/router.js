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
      ]
    }
    ,{
      path: '/css'
      ,component:EmptyParent
      ,children:[
        {path:'/css/start',component:require('./pages/css/start.vue')}
        ,{path:'/css/base',component:EmptyParent
          ,children:[
            {path:'/css/base/color',component:require('./pages/css/base/color.vue')}
          ]
        }
        ,{path:'/css/form',component:EmptyParent,children:[
          {path:'/css/form/index',component:require('./pages/css/form/index.vue')}
          ,{path:'/css/form/input',component:require('./pages/css/form/input.vue')}
          ,{path:'/css/form/button',component:require('./pages/css/form/button.vue')}
          ,{path:'/css/form/radio',component:require('./pages/css/form/radio.vue')}
          ,{path:'/css/form/checkbox',component:require('./pages/css/form/checkbox.vue')}
          ,{path:'/css/form/select',component:require('./pages/css/form/select.vue')}
        ]}
        ,{path:'/css/data',component:EmptyParent,children:[
          {path:'/css/data/table',component:require('./pages/css/data/table.vue')}
          ,{path:'/css/data/card',component:require('./pages/css/data/card.vue')}
          ,{path:'/css/data/pagination',component:require('./pages/css/data/pagination.vue')}
        ]}
        
      ]
    }

    ,{
      path: '/components'
      ,component:EmptyParent
      ,children:[
        {path:'/components/start',component:require('./pages/components/start.vue')}
        ,{path:'/components/ionicons',component:require('./pages/components/ionicons.vue')}
        ,{path:'/components/dropdown',component:require('./pages/components/dropdown.vue')}
        ,{path:'/components/gbutton',component:require('./pages/components/gbutton.vue')}
      ]
    }

    
  ]
}

export default defalutConfig
