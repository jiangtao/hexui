webpackJsonp([9],{212:function(o,t,e){var l,a,r;!function(c,g){a=[t,e(10)],l=g,r="function"==typeof l?l.apply(t,a):l,!(void 0!==r&&(o.exports=r))}(this,function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={components:{Tag:e.Tag,Modal:e.Modal,iButton:e.iButton},data:function(){return{modal1:!1,loading:!0}},methods:{ok:function(){var o=this;setTimeout(function(){o.modal1=!1},2e3)},clickTag:function(){console.log("click tag")},clickTagClose:function(){console.log("click tag close-icon")}}},o.exports=t.default})},409:function(o,t){o.exports=' <tag>标签一</tag> <tag>标签二</tag> <tag closable>标签三</tag> <tag closable color=blue>标签一</tag> <tag closable color=green>标签二</tag> <tag closable color=red>标签三</tag> <tag closable color=yellow>标签四</tag> <br><br> <tag type=dot>标签一</tag> <tag type=dot closable>标签一</tag> <tag type=dot color=blue>标签一</tag> <tag type=dot color=blue closable>标签一</tag> <tag type=dot color=green>标签一</tag> <tag type=dot color=green closable>标签一</tag> <tag type=dot color=red>标签一</tag> <tag type=dot color=red closable>标签一</tag> <tag type=dot color=yellow>标签一</tag> <tag type=dot color=yellow closable>标签一</tag> <br><br> <tag type=border>标签一</tag> <tag type=border closable>标签一</tag> <tag type=border color=blue>标签一</tag> <tag type=border color=blue closable>标签一</tag> <tag type=border color=green>标签一</tag> <tag type=border color=green closable>标签一</tag> <tag type=border color=red>标签一</tag> <tag type=border color=red closable>标签一</tag> <tag type=border color=yellow>标签一</tag> <tag type=border color=yellow closable>标签一</tag> <i-button type=primary @click="modal1 = true">显示对话框</i-button> <modal :visible.sync=modal1 title=普通的Modal对话框标题 :loading=loading @on-ok=ok> <p>对话框内容</p> <p>对话框内容</p> <p>对话框内容</p> {{ loading }} <i-button @click="loading = true">true</i-button> <i-button @click="loading = false">false</i-button> </modal> <br><br> <tag type=border color=yellow closable @click=clickTag @on-close=clickTagClose>标签一</tag> '},534:function(o,t,e){var l,a,r={};l=e(212),a=e(409),o.exports=l||{},o.exports.__esModule&&(o.exports=o.exports.default);var c="function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports;a&&(c.template=a),c.computed||(c.computed={}),Object.keys(r).forEach(function(o){var t=r[o];c.computed[o]=function(){return t}})}});