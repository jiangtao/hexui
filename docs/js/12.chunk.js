webpackJsonp([12],{221:function(e,t,n){var o,c,r;!function(n,s){c=[t],o=s,r="function"==typeof o?o.apply(t,c):o,!(void 0!==r&&(e.exports=r))}(this,function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{treeData:[{expand:!0,title:"parent 1",selected:!1,children:[{title:"parent 1-0",expand:!0,disabled:!0,children:[{title:"leaf1"},{title:"leaf2"},{title:"leaf3"}]},{title:"parent 1-1",checked:!0,children:[{title:'<span style="color: red">sss</span>'}]}]}]}},methods:{selectFn:function(e){console.log(e)},checkFn:function(e){console.log(e)}}},e.exports=t.default})},440:function(e,t){e.exports=" <tree :data.sync=treeData :show-checkbox=true :multiple=true @on-select-change=selectFn @on-check-change=checkFn></tree> "},576:function(e,t,n){var o,c,r={};o=n(221),c=n(440),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;c&&(s.template=c),s.computed||(s.computed={}),Object.keys(r).forEach(function(e){var t=r[e];s.computed[e]=function(){return t}})}});