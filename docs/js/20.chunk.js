webpackJsonp([20],{208:function(e,o,r){var i,a,t;!function(b,c){a=[o,r(11)],i=c,t="function"==typeof i?i.apply(o,a):i,!(void 0!==t&&(e.exports=t))}(this,function(o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=r.Radio.Group,a=r.Collapse.Panel,t=r.Checkbox.Group,b=r.Breadcrumb.Item;o.default={components:{Radio:r.Radio,RadioGroup:i,Alert:r.Alert,Icon:r.Icon,Collapse:r.Collapse,Panel:a,iButton:r.iButton,Checkbox:r.Checkbox,CheckboxGroup:t,Switch:r.Switch,InputNumber:r.InputNumber,Breadcrumb:r.Breadcrumb,BreadcrumbItem:b,LoadingBar:r.LoadingBar,step:r.step},props:{},data:function(){return{isStepShow:!0,single:!1,radio:!1,radioGroup:"段模",activeKey:[1,2],phone:"apple",animal:"爪哇犀牛",social:["facebook","github"],disabledSingle:!0,disabledGroup:["苹果"],list:[{text:"这是第二个步骤的提示文字",el:"btn2",position:"bottom",size:22},{title:"步骤一",text:"这是第一个步骤的提示文字",el:"btn1",position:"right",size:22},{title:"步骤三",text:"这是第三个步骤的提示文字",el:"btn3",position:"left",size:22},{title:"步骤四",text:"这是第四个步骤的提示文字",el:"btn4",position:"top",size:22}],list2:[{title:"步骤三",text:"这是第三个步骤的提示文字",el:"btn3",position:"left",size:22},{text:"这是第二个步骤的提示文字",el:"btn2",position:"bottom",size:22},{title:"步骤一",text:"这是第一个步骤的提示文字",el:"btn1",position:"right",size:22},{title:"步骤四",text:"这是第四个步骤的提示文字",el:"btn4",position:"top",size:22}]}},computed:{},methods:{changeGroup:function(e){console.log(e)},closed:function(e){console.log(e)},change:function(e){console.log(e)},open:function(){this.$refs.step.open()},changeList:function(){this.list=this.list2}},ready:function(){r.LoadingBar.start()}},e.exports=o.default})},428:function(e,o){e.exports=' <div> <radio-group :model.sync=phone vertical> <radio value=apple id=btn1> <icon type=social-apple></icon> <span>Apple</span> </radio> <radio value=android disabled=disabled> <icon type=social-android></icon> <span>Android</span> </radio> <radio value=windows> <icon type=social-windows></icon> <span>Windows</span> </radio> </radio-group> <radio-group :model.sync=animal> <radio value=金斑蝶></radio> <radio value=爪哇犀牛></radio> <radio value=印度黑羚></radio> </radio-group> <br/> <br/> <i-button @click="activeKey = \'2\'">换</i-button> </div> <radio :checked.sync=radio>Radio</radio> <i-button @click="radio = !radio">change radio</i-button> <br/> <br/> <radio-group :model.sync=phone type=button vertical> <radio value=apple> <icon type=social-apple></icon> <span>Apple</span> </radio> <radio value=android> <icon type=social-android></icon> <span>Android</span> </radio> <radio value=windows> <icon type=social-windows></icon> <span>Windows</span> </radio> </radio-group> <radio-group :model.sync=animal type=button> <radio value=金斑蝶 id=btn4 style=height:200px></radio> <radio value=爪哇犀牛></radio> <radio value=印度黑羚></radio> </radio-group> <radio-group :model.sync=animal type=button> <radio value=金斑蝶 disabled=disabled></radio> <radio value=爪哇犀牛 disabled=disabled></radio> <radio value=印度黑羚></radio> </radio-group> <br/> <br/> <radio-group :model.sync=animal type=button size=large> <radio value=金斑蝶></radio> <radio value=爪哇犀牛></radio> <radio value=印度黑羚></radio> </radio-group> <radio-group :model.sync=animal type=button> <radio value=金斑蝶></radio> <radio value=爪哇犀牛></radio> <radio value=印度黑羚></radio> </radio-group> <radio-group :model.sync=animal type=button size=small> <radio value=金斑蝶 id=btn3></radio> <radio value=爪哇犀牛></radio> <radio value=印度黑羚></radio> </radio-group> <br/> <br/> <br/> <br/> <checkbox :checked.sync=radio>Checkbox</checkbox> <br/> <br/> <checkbox-group :model=social> <checkbox value=twitter> <icon type=social-twitter></icon> <span>Twitter</span> </checkbox> <checkbox value=facebook> <icon type=social-facebook></icon> <span>Facebook</span> </checkbox> <checkbox value=github> <icon type=social-github></icon> <span>Github</span> </checkbox> <checkbox value=snapchat> <icon type=social-snapchat></icon> <span>Snapchat</span> </checkbox> </checkbox-group> <br/> <br/> <checkbox :checked.sync=disabledSingle disabled=disabled>Checkbox</checkbox> <checkbox-group :model=disabledGroup> <checkbox value=香蕉 disabled=disabled></checkbox> <checkbox value=苹果 disabled=disabled></checkbox> <checkbox value=西瓜></checkbox> </checkbox-group> <br/> <br/> <switch @on-change=change></switch> <br/> <br/> <switch> <span slot=open>开</span> <span slot=close>关</span> </switch> <br/> <br/> <switch> <icon type=android-done slot=open></icon> <icon type=android-close slot=close></icon> </switch> <switch disabled=disabled></switch> <switch size=small></switch> <br/> <br/> <input-number :max=10 :min=1 :step=1.2 :value=1></input-number> <input-number :value=2 size=small></input-number> <input-number :value=2></input-number> <input-number :value=2 size=large></input-number> <br/> <br/> <breadcrumb> <breadcrumb-item href=/ id=btn2>Home</breadcrumb-item> <breadcrumb-item href=/components/breadcrumb>Components</breadcrumb-item> <breadcrumb-item>Breadcrumb</breadcrumb-item> </breadcrumb> <breadcrumb> <breadcrumb-item href=/ > <icon type=ios-home-outline></icon>Home </breadcrumb-item> <breadcrumb-item href=/components/breadcrumb> <icon type=social-buffer-outline></icon>Components </breadcrumb-item> <breadcrumb-item> <icon type=pound></icon>Breadcrumb </breadcrumb-item> </breadcrumb> <breadcrumb separator=">"> <breadcrumb-item href=/ >Home</breadcrumb-item> <breadcrumb-item href=/components/breadcrumb>Components</breadcrumb-item> <breadcrumb-item>Breadcrumb</breadcrumb-item> </breadcrumb> <breadcrumb separator="<b class=\'demo-breadcrumb-separator\'>=></b>"> <breadcrumb-item href=/ >Home</breadcrumb-item> <breadcrumb-item href=/components/breadcrumb>Components</breadcrumb-item> <breadcrumb-item>Breadcrumb</breadcrumb-item> </breadcrumb> <br/> <br/> <checkbox :checked.sync=single></checkbox> <step :next-text=nextText :is-step-show=isStepShow :list=list v-ref:step></step> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> '},562:function(e,o,r){var i,a,t={};i=r(208),a=r(428),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var b="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;a&&(b.template=a),b.computed||(b.computed={}),Object.keys(t).forEach(function(e){var o=t[e];b.computed[e]=function(){return o}})}});