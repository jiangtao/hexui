webpackJsonp([21],{206:function(t,o,e){var n,p,i;!function(e,c){p=[o],n=c,i="function"==typeof n?n.apply(o,p):n,!(void 0!==i&&(t.exports=i))}(this,function(o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={methods:{T:function(){console.log(222)},ok:function(t){console.log("ok")},cancel:function(t){console.log("cancel")}}},t.exports=o.default})},426:function(t,o){t.exports=' <div @click=T style="margin: 100px"> <poptip confirm title=您确认删除这条内容吗？ @on-ok=ok @on-cancel=cancel> <i-button>删除</i-button> </poptip> <poptip confirm title="Are you sure delete this task?" @on-ok=ok @on-cancel=cancel ok-text=yes cancel-text=no> <i-button>国际化</i-button> </poptip> <poptip trigger=hover placement=bottom title=提示标题 content=提示内容> <i-button>hover 激活</i-button> </poptip> <poptip title=提示标题 placement=bottom content=提示内容> <i-button>click 激活</i-button> </poptip> <poptip trigger=focus title=提示标题 content=提示内容> <i-input type=textarea></i-input> </poptip> <poptip trigger=focus placement=bottom title=提示标题 content=提示内容> <i-input></i-input> </poptip> </div> '},560:function(t,o,e){var n,p,i={};n=e(206),p=e(426),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var c="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;p&&(c.template=p),c.computed||(c.computed={}),Object.keys(i).forEach(function(t){var o=i[t];c.computed[t]=function(){return o}})}});