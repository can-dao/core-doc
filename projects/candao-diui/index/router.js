Vue.use(VueRouter);
import * as Com from '@/common'
import * as Utils from 'build/plugs/utils'


import App from './App.vue'
import EmptyParent from './pages/emptyParent.vue'

import Intro from './pages/intro/index.vue'

import CssStart from './pages/css/start.vue'
import CssBaseColor from './pages/css/base/color.vue'

import CssFormInput from './pages/css/form/input.vue'
import CssFormRadio from './pages/css/form/radio.vue'
import CssFormSelect from './pages/css/form/select.vue'
import CssFormCheckbox from './pages/css/form/checkbox.vue'
import CssFormButton from './pages/css/form/button.vue'

import ComponentsStart from './pages/components/start.vue'
import ComponentsIonicons from './pages/components/ionicons.vue'
import ComponentsDropdown from './pages/components/dropdown.vue'
import ComponentsGbutton from './pages/components/gbutton.vue'



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
        {path:'/intro/index',component:Intro}
      ]
    }
    ,{
      path: '/css'
      ,component:EmptyParent
      ,children:[
        {path:'/css/start',component:CssStart}
        ,{path:'/css/base',component:EmptyParent
          ,children:[
            {path:'/css/base/color',component:CssBaseColor}
          ]
        }
        ,{path:'/css/form',component:EmptyParent,children:[
          {path:'/css/form/input',component:CssFormInput}
          ,{path:'/css/form/button',component:CssFormButton}
          ,{path:'/css/form/radio',component:CssFormRadio}
          ,{path:'/css/form/checkbox',component:CssFormCheckbox}
          ,{path:'/css/form/select',component:CssFormSelect}
        ]}
      ]
    }

    ,{
      path: '/components',component:EmptyParent,children:[
        {path:'/components/start',component:ComponentsStart}
        ,{path:'/components/ionicons',component:ComponentsIonicons}
        ,{path:'/components/dropdown',component:ComponentsDropdown}
        ,{path:'/components/gbutton',component:ComponentsGbutton}
      ]
    }

    
  ]
}

export default defalutConfig
