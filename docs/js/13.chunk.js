webpackJsonp([13],{207:function(e,t,o){var i,n,r;!function(s,l){n=[t,o(10)],i=l,r="function"==typeof i?i.apply(t,n):i,!(void 0!==r&&(e.exports=r))}(this,function(t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{Slider:o.Slider,Icon:o.Icon},data:function(){return{value:[20,50]}},methods:{format:function(e){return null},change:function(e){console.log(e)},input:function(e){console.log(e)}}},e.exports=t.default})},404:function(e,t){e.exports=' <div style="width: 140px;margin:100px"> {{ value }} <slider @on-change=change @on-input=input :step=15></slider> <slider :value=40 :tip-format=format></slider> <slider :value.sync=value show-input show-stops range @on-change=change @on-input=input :step=13></slider> <slider :max=10></slider> <slider :step=13></slider> <slider :step=13 :max=60></slider> <icon type=checkmark-circled size=40 color=#f60></icon> <p>附近的首付款是东方红看就是</p> <div class=ivu-article> <a href=http://www.hexuiui.com target=_blank>hexui</a> </div> <slider :value=75></slider> <slider :value="[20, 50]" range></slider> <slider :value="[20, 50]" show-tip=always></slider> <slider :value="[20, 50]" show-tip=hover></slider> <slider :value="[20, 50]" show-tip=never></slider> </div> '},529:function(e,t,o){var i,n,r={};i=o(207),n=o(404),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var s="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(s.template=n),s.computed||(s.computed={}),Object.keys(r).forEach(function(e){var t=r[e];s.computed[e]=function(){return t}})}});