webpackJsonp([20],{197:function(e,t,o){var n,i,u;!function(o,m){i=[t],n=m,u="function"==typeof n?n.apply(t,i):n,!(void 0!==u&&(e.exports=u))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{theme1:"light",ak:"1"}}},e.exports=t.default})},394:function(e,t){e.exports=" <menu mode=horizontal :theme=theme1 :active-key.sync=ak> <menu-item key=1> <icon type=ios-paper></icon> 内容管理 </menu-item> <menu-item key=2> <icon type=ios-people></icon> 用户管理 </menu-item> <submenu key=3> <template slot=title> <icon type=stats-bars></icon> 统计分析 </template> <menu-group title=使用> <menu-item key=3-1>新增和启动</menu-item> <menu-item key=3-2>活跃分析</menu-item> <menu-item key=3-3>时段分析</menu-item> </menu-group> <menu-group title=留存> <menu-item key=3-4>用户留存</menu-item> <menu-item key=3-5>流失用户</menu-item> </menu-group> </submenu> <menu-item key=4> <icon type=settings></icon> 综合设置 </menu-item> </menu> <br> <p>切换主题</p> <radio-group :model.sync=theme1> <radio value=light></radio> <radio value=dark></radio> <radio value=primary></radio> </radio-group> <i-button @click=\"ak = '2'\">change</i-button> "},520:function(e,t,o){var n,i,u={};n=o(197),i=o(394),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports.default);var m="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(m.template=i),m.computed||(m.computed={}),Object.keys(u).forEach(function(e){var t=u[e];m.computed[e]=function(){return t}})}});