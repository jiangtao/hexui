webpackJsonp([22],{205:function(e,t,o){var s,a,p;!function(r,n){a=[t,o(11)],s=n,p="function"==typeof s?s.apply(t,a):s,!(void 0!==p&&(e.exports=p))}(this,function(t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{Page:o.Page},methods:{pc:function(e){console.log(e)}}},e.exports=t.default})},425:function(e,t){e.exports=" <page :total=1000 show-sizer show-elevator show-total class=classr :style=\"{float: 'right'}\" @on-page-size-change=pc></page> <br><br> <page :total=1000 show-sizer show-elevator show-total size=small class=classr2></page> <br><br> <page :current=2 :total=50 simple></page> "},559:function(e,t,o){var s,a,p={};s=o(205),a=o(425),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default);var r="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(r.template=a),r.computed||(r.computed={}),Object.keys(p).forEach(function(e){var t=p[e];r.computed[e]=function(){return t}})}});