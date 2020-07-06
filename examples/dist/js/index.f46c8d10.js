(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],p=0,u=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={index:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("8365")},"2b98":function(t,e,a){},"3eb2":function(t,e,a){"use strict";var r=a("4a2b"),n=a.n(r);n.a},"4a2b":function(t,e,a){},8365:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{staticStyle:{background:"white"},attrs:{xs12:"",md10:"","offset-md-1":""}},[a("span",{staticClass:"display-1"},[t._v(" Dv Data List "),a("v-chip",{attrs:{label:"",outline:"",color:"red"}},[a("strong",[t._v(" dv-data-list ")])])],1),a("br"),t._t("head-line"),a("example1",{ref:"ex1"}),a("v-card",{staticClass:"px-2"},[a("span",{staticClass:"font-weight-medium",staticStyle:{color:"#cfcdcd"}},[t._v(" > API ")]),a("dv-data-list",{attrs:{data:t.data}})],1)],2)],1)],1)},o=[],i=a("2909"),s=[{nombre:"data",default:"[ ]",important:!0,tipo:"Array",descripcion:'Contiene los datos que mostrará el componente. Los datos deben estar estructurados de acuerdo a la pestaña de <b style="font-size:15px">Estructura Data</b>'}],l=[{nombre:"descripcion",default:"null",tipo:"String",descripcion:'Contiene la descripción del grupo de datos, soporta estructuras html <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/html-126-287291.png" height="40px" >.'},{nombre:"items",default:"[ ]",important:"true",tipo:"Array",descripcion:'Contiene los items que se listarán dentro de la pestaña, Los items deben estar estructurados de acuerdo a la pestaña de <b style="font-size:15px">Estructura Item</b>'},{nombre:"title",default:"tabTitle${index}",important:"true",tipo:"String",descripcion:"Etiqueta que se muestra en la pestaña que agrupará los items."}],c=[{nombre:"descripcion",default:"null",tipo:"String",descripcion:'Contiene la descripción de la propiedad, soporta estructuras html <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/html-126-287291.png" height="40px" >.'},{nombre:"default",default:"null",important:"true",tipo:"String",descripcion:"Contiene el valor por defecto de la propiedad, si no se modifica no se muestra."},{nombre:"nombre",default:"prop${index}",important:"true",tipo:"String",descripcion:"Contiene el nombre de la propiedad."},{nombre:"tipo",default:"null",important:"true",tipo:"String",descripcion:"Contiene el tipo de valor que espera la propiedad, si no se modifica no se muestra."}],d=[{title:"Propiedades",items:s},{title:"Estructura Data",descripcion:'Cada objeto dentro del array <b style="font-size:15px">data</b> puede contener las siguientes propiedades:',items:l},{title:"Estructura Items",descripcion:'Cada objeto dentro del array <b style="font-size:15px">items</b>, que a su vez se encuentre dentro de un objeto en el array <b style="font-size:15px">data</b>, puede contener las siguientes propiedades:',items:c}],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-tabs",{staticStyle:{border:"solid 1px black"},attrs:{color:"cyan","slider-color":"yellow"},on:{change:function(e){return t.refreshAll()}},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("v-tab",{attrs:{ripple:""}},[a("span",{staticClass:"font-weight-bold text-capitalize"},[t._v("Example")])]),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("dv-data-list",{ref:"dataList",attrs:{data:t.data}})],1)],1),a("v-tab",{attrs:{ripple:""}},[a("span",{staticClass:"font-weight-bold text-capitalize"},[t._v("Template")])]),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.codeTemplate,expression:"codeTemplate",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{color:t.copiado?"green":"white",dark:!!t.copiado,small:"",absolute:"",top:"",right:"",fab:""}},[a("v-icon",[t._v("file_copy")])],1),a("codemirror",{ref:"cmTemplateE1",attrs:{value:t.codeTemplate,options:t.cmOptions}})],1)],1),a("v-tab",{attrs:{ripple:""}},[a("span",{staticClass:"font-weight-bold text-capitalize"},[t._v("Script")])]),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.codeScript,expression:"codeScript",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{color:t.copiado?"green":"white",dark:!!t.copiado,small:"",absolute:"",top:"",right:"",fab:""}},[a("v-icon",[t._v("file_copy")])],1),a("codemirror",{ref:"cmScriptE1",attrs:{value:t.codeScript,options:t.cmOptions}})],1)],1)],1)],1)},u=[],m=(a("4de4"),a("4160"),a("d3b7"),a("159b"),a("96cf"),a("1da1")),f=a("8785"),b=a("a7ef"),v=a.n(b);function h(){var t=Object(f["a"])([" <script>\n  export default {\n    data () {\n      return {\n        data: [{ items: [], title: 'Fotos' }]\n      }\n    },\n    created () {\n      this.llenarDatos()\n    },\n    methods: {\n      llenarDatos() {\n        fetch('https://jsonplaceholder.typicode.com/photos')\n          .then((response) => {\n            return response.json();\n          })\n          .then((myJson) => {\n            const top6 = myJson.filter(obj => (obj.id < 7))\n            top6.forEach(obj => {\n              obj.nombre = obj.title\n              obj.descripcion = `<v-spacer /><img src=\"${obj.url}\" height=\"50px\" />`\n            })\n            this.data[0].items = [ ...top6 ]\n            this.$refs.dataList.inicializar()\n          });\n      }\n    }\n  }\n<\/script>"],[" <script>\n  export default {\n    data () {\n      return {\n        data: [{ items: [], title: 'Fotos' }]\n      }\n    },\n    created () {\n      this.llenarDatos()\n    },\n    methods: {\n      llenarDatos() {\n        fetch('https://jsonplaceholder.typicode.com/photos')\n          .then((response) => {\n            return response.json();\n          })\n          .then((myJson) => {\n            const top6 = myJson.filter(obj => (obj.id < 7))\n            top6.forEach(obj => {\n              obj.nombre = obj.title\n              obj.descripcion = \\`<v-spacer /><img src=\"\\${obj.url}\" height=\"50px\" />\\`\n            })\n            this.data[0].items = [ ...top6 ]\n            this.$refs.dataList.inicializar()\n          });\n      }\n    }\n  }\n<\\/script>"]);return h=function(){return t},t}function x(){var t=Object(f["a"])([' <template>\n  <v-card flat>\n    <dv-data-list :data="data" ref="dataList" />\n  </v-card>\n</template>'],[' <template>\n  <v-card flat>\n    <dv-data-list :data="data" ref="dataList" />\n  </v-card>\n<\\/template>']);return x=function(){return t},t}var g={data:function(){return{data:[{items:[],title:"Fotos"}],copiado:!1,cmOptions:{tabSize:4,mode:"text/x-vue",theme:"monokai",lineNumbers:!0,line:!0},active:null,codeTemplate:v()(x()),codeScript:v()(h())}},created:function(){this.llenarDatos()},methods:{refreshAll:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$sleep(150);case 2:t.$refs.cmTemplateE1.refresh(),t.$refs.cmScriptE1.refresh();case 4:case"end":return e.stop()}}),e)})))()},onCopy:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.copiado=!0,e.next=3,t.$sleep(1500);case 3:t.copiado=!1;case 4:case"end":return e.stop()}}),e)})))()},onError:function(){return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:alert("Failed to copy texts");case 1:case"end":return t.stop()}}),t)})))()},llenarDatos:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/photos").then((function(t){return t.json()})).then((function(e){var a=e.filter((function(t){return t.id<57&&2===t.albumId}));a.forEach((function(t){t.nombre=t.title,t.descripcion='<v-spacer /><img src="'.concat(t.url,'" height="50px" />')})),t.data[0].items=Object(i["a"])(a),t.$refs.dataList.inicializar()}))}}},y=g,j=a("2877"),_=a("6544"),w=a.n(_),C=a("8336"),O=a("b0af"),k=a("132d"),E=a("71a3"),S=a("c671"),T=a("fe57"),I=Object(j["a"])(y,p,u,!1,null,null,null),F=I.exports;w()(I,{VBtn:C["a"],VCard:O["a"],VIcon:k["a"],VTab:E["a"],VTabItem:S["a"],VTabs:T["a"]});var D={name:"App",components:{Example1:F},data:function(){return{data:Object(i["a"])(d)}}},$=D,B=(a("3eb2"),a("cc20")),V=a("a523"),q=a("0e8f"),z=a("a722"),A=Object(j["a"])($,n,o,!1,null,null,null),L=A.exports;w()(A,{VCard:O["a"],VChip:B["a"],VContainer:V["a"],VFlex:q["a"],VLayout:z["a"]});var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"dv-data-list ma-2"},[a("v-flex",{staticClass:"px-2",attrs:{md12:"",sm12:"",xs12:""}},[a("v-tabs",{attrs:{"fixed-tabs":"","show-arrows":"","slider-color":"yellow"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._l(t.data,(function(e){return[a("v-tab",{key:t.data.indexOf(e),staticClass:"dv-data-list__v-tab",attrs:{ripple:""}},[t._v(" "+t._s(e.title?e.title:"tabTitle"+t.data.indexOf(e))+" ")]),a("v-tab-item",{key:t.data.indexOf(e),staticClass:"dv-data-list__v-tab-item"},[a("v-card",{attrs:{flat:""}},[null!=e.descripcion?a("v-layout",[a("v-flex",[a("span",{domProps:{innerHTML:t._s(e.descripcion)}})])],1):t._e(),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"pb-0 ",attrs:{md6:"",sm6:"",xs12:""}},[!0===e.allItems?a("v-chip",{attrs:{label:"",color:"orange darken-4",small:"","text-color":"white"}},[a("strong",[t._v("Todas")])]):a("v-chip",{attrs:{label:"",color:"grey lighten-1","text-color":"white",small:""},on:{click:function(a){return e.changeAllItems(t.entorno,!0)},keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.changeAllItems(t.entorno,!0)}}},[a("strong",[t._v("Todas")])]),!1===e.allItems?a("v-chip",{attrs:{label:"",small:"",color:"orange darken-4","text-color":"white"}},[a("strong",[t._v("Importantes")])]):a("v-chip",{attrs:{label:"",color:"grey lighten-1","text-color":"white",small:""},on:{click:function(a){return e.changeAllItems(t.entorno,!1)},keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:e.changeAllItems(t.entorno,!1)}}},[a("strong",[t._v("Importantes ")])])],1),a("v-flex",{staticClass:"pt-0 ",attrs:{md6:"",sm6:"",xs12:""}},[a("v-text-field",{attrs:{label:"Buscar",height:"20","prepend-icon":"search"},on:{keyup:function(a){return e.buscar(t.entorno)}},model:{value:e.textoBusqueda,callback:function(a){t.$set(e,"textoBusqueda",a)},expression:"group.textoBusqueda"}})],1)],1),a("div",t._l(e.itemsFiltered,(function(r){return a("v-layout",{key:r.nombre,style:"background:"+t.colorProp(r,e.itemsFiltered),attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{md4:"",sm4:"",xs6:"","pb-1":""}},[a("strong",{staticStyle:{"font-size":"12px"}},[t._v(" Nombre ")]),a("br"),a("strong",{staticStyle:{color:"#B71C1C"}},[t._v(" "+t._s(r.nombre?r.nombre:"prop"+e.itemsFiltered.indexOf(r))+" ")])]),null!=r.default?a("v-flex",{attrs:{md4:"",sm4:"",xs6:"","pb-1":""}},[a("strong",{staticStyle:{"font-size":"12px"}},[t._v(" Default ")]),a("br"),a("strong",{staticStyle:{color:"#1B5E20"}},[t._v(" "+t._s(r.default)+" ")])]):t._e(),null!=r.tipo?a("v-flex",{attrs:{md4:"",sm4:"",xs12:"","pb-1":""}},[a("strong",{staticStyle:{"font-size":"12px"}},[t._v(" Tipo ")]),a("br"),a("strong",{staticStyle:{color:"#01579B"}},[t._v(" "+t._s(r.tipo)+" ")])]):t._e(),a("v-flex",{attrs:{"pt-0":"",md12:"",sm12:"",xs12:""}},[a("span",{domProps:{innerHTML:t._s(r.descripcion)}})])],1)})),1)],1)],1)]}))],2)],1)],1)},M=[],N=(a("caad"),a("c975"),a("0d03"),a("e25e"),a("25f0"),a("2532"),a("498a"),{name:"DvDataList",props:{data:{type:Array,default:function(){return[]}}},data:function(){return{active:null,entorno:null,mainId:"0000"}},created:function(){this.mainId=this.setMainId(),this.entorno=this,this.inicializar()},methods:{inicializar:function(){this.data.forEach((function(t){t.items=Object(i["a"])(null!=t.items?t.items:[]),t.textoBusqueda="",t.allItems=!0,t.itemsFiltered=Object(i["a"])(t.items),t.buscar=function(t){var e=this;this.textoBusqueda=this.textoBusqueda?this.textoBusqueda.trim():null;var a=Object(i["a"])(this.items);this.allItems||(a=Object(i["a"])(this.items.filter((function(t){return t.important})))),null==this.textoBusqueda||""===this.textoBusqueda?(this.itemsFiltered=[],this.itemsFiltered=Object(i["a"])(a)):(this.itemsFiltered=[],this.itemsFiltered=a.filter((function(t){return t.nombre.toUpperCase().includes(e.textoBusqueda.toUpperCase())||t.descripcion.toUpperCase().includes(e.textoBusqueda.toUpperCase())}))),t.$forceUpdate()},t.changeAllItems=function(t,e){this.allItems=e;var a=Object(i["a"])(this.items);this.allItems||(a=Object(i["a"])(this.items.filter((function(t){return t.important})))),this.itemsFiltered=Object(i["a"])(a),t.$forceUpdate()}})),this.$forceUpdate()},colorProp:function(t,e){var a=e.indexOf(t);return a%2===0?"#EDE7F6":"#F9FBE7"},setMainId:function(){var t=parseInt(9998*Math.random()+1),e=t.toString();return 3===e.length?e="0"+e:2===e.length?e="00"+e:1===e.length&&(e="000"+e),e}}}),R=N,U=(a("b396"),a("2677")),J=Object(j["a"])(R,P,M,!1,null,null,null),H=J.exports;w()(J,{VCard:O["a"],VChip:B["a"],VFlex:q["a"],VLayout:z["a"],VTab:E["a"],VTabItem:S["a"],VTabs:T["a"],VTextField:U["a"]});var G={install:function(t){t.component("dv-data-list",H)}};r["default"].use(G);a("4795");var K={install:function(t){t.prototype.$sleep=function(t){return new Promise((function(e){return setTimeout(e,t)}))}}};r["default"].use(K);var Q=a("4eb5"),W=a.n(Q);r["default"].use(W.a);var X=a("8f94"),Y=a.n(X);a("a7be"),a("7a7a"),a("693d");r["default"].use(Y.a);a("ac1f"),a("5319");var Z=a("bb71"),tt=(a("da64"),a("c0a4")),et=a.n(tt),at=a("d7a2");r["default"].use(Z["a"],{iconfont:"md",theme:{primary:"#12491D",accent:et.a.grey.darken3,secondary:"#8A322C",info:et.a.teal.lighten1,warning:et.a.amber.base,error:et.a.deepOrange.accent4,success:et.a.lightGreen.darken4,update:"#2196F3",accent1:"#62737D",accent2:"#2E2D2E",base:"#12491D",sombra1:"#115746",sombra2:"#136139",sombra3:"#1B6113",sombra4:"#315711",complementarioa:"#4FE36D",complementario1:"#359648",complementariob:"#39A34E",complementarioc:"#E30B28",complementario2:"#96081C",complementariod:"#A3081D"},directives:{Ripple:at["Ripple"],Scroll:at["Scroll"],ClickOutside:at["ClickOutside"]},options:{minifyTheme:function(t){return t.replace(/[\s|\r\n|\r|\n]/g,"")}}}),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(L)}}).$mount("#app")},b396:function(t,e,a){"use strict";var r=a("2b98"),n=a.n(r);n.a}});
//# sourceMappingURL=index.f46c8d10.js.map