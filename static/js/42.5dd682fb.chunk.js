"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[42],{5676:function(e,t,n){var r=n(1245),a=n(3329);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"LocalPhone")},3978:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(885),a=n(1048),o=n(2793),i=n(2791),c=n(8182),s=n(4419),l=n(277),d=n(5513),u=n(1245),p=n(3329),v=(0,u.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=n(1217);function f(e){return(0,m.Z)("MuiAvatar",e)}(0,n(5878).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],b=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===n.variant&&{borderRadius:0},n.colorDefault&&(0,o.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),h=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,l.ZP)(v,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var x=i.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiAvatar"}),l=n.alt,u=n.children,v=n.className,m=n.component,x=void 0===m?"div":m,w=n.imgProps,S=n.sizes,y=n.src,k=n.srcSet,C=n.variant,P=void 0===C?"circular":C,M=(0,a.Z)(n,g),N=null,I=function(e){var t=e.crossOrigin,n=e.referrerPolicy,a=e.src,o=e.srcSet,c=i.useState(!1),s=(0,r.Z)(c,2),l=s[0],d=s[1];return i.useEffect((function(){if(a||o){d(!1);var e=!0,r=new Image;return r.onload=function(){e&&d("loaded")},r.onerror=function(){e&&d("error")},r.crossOrigin=t,r.referrerPolicy=n,r.src=a,o&&(r.srcset=o),function(){e=!1}}}),[t,n,a,o]),l}((0,o.Z)({},w,{src:y,srcSet:k})),A=y||k,R=A&&"error"!==I,j=(0,o.Z)({},n,{colorDefault:!R,component:x,variant:P}),G=function(e){var t=e.classes,n={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(n,f,t)}(j);return N=R?(0,p.jsx)(h,(0,o.Z)({alt:l,src:y,srcSet:k,sizes:S,ownerState:j,className:G.img},w)):null!=u?u:A&&l?l[0]:(0,p.jsx)(Z,{className:G.fallback}),(0,p.jsx)(b,(0,o.Z)({as:x,ownerState:j,className:(0,c.Z)(G.root,v),ref:t},M,{children:N}))}))},5953:function(e,t,n){n.d(t,{ZP:function(){return M}});var r=n(2982),a=n(4942),o=n(1048),i=n(2793),c=n(2791),s=n(8182),l=n(1184),d=n(8519),u=n(4419),p=n(277),v=n(5513),m=n(6636);var f=c.createContext(),g=n(1217);function b(e){return(0,g.Z)("MuiGrid",e)}var h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Z=(0,n(5878).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,r.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),(0,r.Z)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),(0,r.Z)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),(0,r.Z)(h.map((function(e){return"grid-xs-".concat(e)}))),(0,r.Z)(h.map((function(e){return"grid-sm-".concat(e)}))),(0,r.Z)(h.map((function(e){return"grid-md-".concat(e)}))),(0,r.Z)(h.map((function(e){return"grid-lg-".concat(e)}))),(0,r.Z)(h.map((function(e){return"grid-xl-".concat(e)}))))),x=n(3329),w=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function S(e){var t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}function y(e){var t=e.breakpoints,n=e.values,r="";Object.keys(n).forEach((function(e){""===r&&0!==n[e]&&(r=e)}));var a=Object.keys(t).sort((function(e,n){return t[e]-t[n]}));return a.slice(0,a.indexOf(r))}var k=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,a=n.container,o=n.direction,i=n.item,c=n.spacing,s=n.wrap,l=n.zeroMinWidth,d=n.breakpoints,u=[];a&&(u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[n["spacing-xs-".concat(String(e))]];var r=[];return t.forEach((function(t){var a=e[t];Number(a)>0&&r.push(n["spacing-".concat(t,"-").concat(String(a))])})),r}(c,d,t));var p=[];return d.forEach((function(e){var r=n[e];r&&p.push(t["grid-".concat(e,"-").concat(String(r))])})),[t.root,a&&t.container,i&&t.item,l&&t.zeroMinWidth].concat((0,r.Z)(u),["row"!==o&&t["direction-xs-".concat(String(o))],"wrap"!==s&&t["wrap-xs-".concat(String(s))]],p)}})((function(e){var t=e.ownerState;return(0,i.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(e){var t=e.theme,n=e.ownerState,r=(0,l.P$)({values:n.direction,breakpoints:t.breakpoints.values});return(0,l.k9)({theme:t},r,(function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(Z.item)]={maxWidth:"none"}),t}))}),(function(e){var t=e.theme,n=e.ownerState,r=n.container,o=n.rowSpacing,i={};if(r&&0!==o){var c,s=(0,l.P$)({values:o,breakpoints:t.breakpoints.values});"object"===typeof s&&(c=y({breakpoints:t.breakpoints.values,values:s})),i=(0,l.k9)({theme:t},s,(function(e,n){var r,o=t.spacing(e);return"0px"!==o?(0,a.Z)({marginTop:"-".concat(S(o))},"& > .".concat(Z.item),{paddingTop:S(o)}):null!=(r=c)&&r.includes(n)?{}:(0,a.Z)({marginTop:0},"& > .".concat(Z.item),{paddingTop:0})}))}return i}),(function(e){var t=e.theme,n=e.ownerState,r=n.container,o=n.columnSpacing,i={};if(r&&0!==o){var c,s=(0,l.P$)({values:o,breakpoints:t.breakpoints.values});"object"===typeof s&&(c=y({breakpoints:t.breakpoints.values,values:s})),i=(0,l.k9)({theme:t},s,(function(e,n){var r,o=t.spacing(e);return"0px"!==o?(0,a.Z)({width:"calc(100% + ".concat(S(o),")"),marginLeft:"-".concat(S(o))},"& > .".concat(Z.item),{paddingLeft:S(o)}):null!=(r=c)&&r.includes(n)?{}:(0,a.Z)({width:"100%",marginLeft:0},"& > .".concat(Z.item),{paddingLeft:0})}))}return i}),(function(e){var t,n=e.theme,r=e.ownerState;return n.breakpoints.keys.reduce((function(e,a){var o={};if(r[a]&&(t=r[a]),!t)return e;if(!0===t)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,l.P$)({values:r.columns,breakpoints:n.breakpoints.values}),s="object"===typeof c?c[a]:c;if(void 0===s||null===s)return e;var d="".concat(Math.round(t/s*1e8)/1e6,"%"),u={};if(r.container&&r.item&&0!==r.columnSpacing){var p=n.spacing(r.columnSpacing);if("0px"!==p){var v="calc(".concat(d," + ").concat(S(p),")");u={flexBasis:v,maxWidth:v}}}o=(0,i.Z)({flexBasis:d,flexGrow:0,maxWidth:d},u)}return 0===n.breakpoints.values[a]?Object.assign(e,o):e[n.breakpoints.up(a)]=o,e}),{})}));var C=function(e){var t=e.classes,n=e.container,a=e.direction,o=e.item,i=e.spacing,c=e.wrap,s=e.zeroMinWidth,l=e.breakpoints,d=[];n&&(d=function(e,t){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return["spacing-xs-".concat(String(e))];var n=[];return t.forEach((function(t){var r=e[t];if(Number(r)>0){var a="spacing-".concat(t,"-").concat(String(r));n.push(a)}})),n}(i,l));var p=[];l.forEach((function(t){var n=e[t];n&&p.push("grid-".concat(t,"-").concat(String(n)))}));var v={root:["root",n&&"container",o&&"item",s&&"zeroMinWidth"].concat((0,r.Z)(d),["row"!==a&&"direction-xs-".concat(String(a)),"wrap"!==c&&"wrap-xs-".concat(String(c))],p)};return(0,u.Z)(v,b,t)},P=c.forwardRef((function(e,t){var n=(0,v.Z)({props:e,name:"MuiGrid"}),r=(0,m.Z)().breakpoints,a=(0,d.Z)(n),l=a.className,u=a.columns,p=a.columnSpacing,g=a.component,b=void 0===g?"div":g,h=a.container,Z=void 0!==h&&h,S=a.direction,y=void 0===S?"row":S,P=a.item,M=void 0!==P&&P,N=a.rowSpacing,I=a.spacing,A=void 0===I?0:I,R=a.wrap,j=void 0===R?"wrap":R,G=a.zeroMinWidth,O=void 0!==G&&G,z=(0,o.Z)(a,w),L=N||A,W=p||A,F=c.useContext(f),D=Z?u||12:F,B={},V=(0,i.Z)({},z);r.keys.forEach((function(e){null!=z[e]&&(B[e]=z[e],delete V[e])}));var E=(0,i.Z)({},a,{columns:D,container:Z,direction:y,item:M,rowSpacing:L,columnSpacing:W,wrap:j,zeroMinWidth:O,spacing:A},B,{breakpoints:r.keys}),T=C(E);return(0,x.jsx)(f.Provider,{value:D,children:(0,x.jsx)(k,(0,i.Z)({ownerState:E,className:(0,s.Z)(T.root,l),as:b,ref:t},V))})})),M=P},2087:function(e,t,n){n.d(t,{ZP:function(){return G}});var r=n(4942),a=n(1048),o=n(2793),i=n(2791),c=n(8182),s=n(4419),l=n(627),d=n(2065),u=n(277),p=n(5513),v=n(221),m=n(6258),f=n(3026),g=n(7933),b=n(8826),h=n(1217),Z=n(5878);function x(e){return(0,h.Z)("MuiListItem",e)}var w=(0,Z.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var S=(0,Z.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function y(e){return(0,h.Z)("MuiListItemSecondaryAction",e)}(0,Z.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var k=n(3329),C=["className"],P=(0,u.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,o.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),M=i.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiListItemSecondaryAction"}),r=n.className,l=(0,a.Z)(n,C),d=i.useContext(b.Z),u=(0,o.Z)({},n,{disableGutters:d.disableGutters}),v=function(e){var t=e.disableGutters,n=e.classes,r={root:["root",t&&"disableGutters"]};return(0,s.Z)(r,y,n)}(u);return(0,k.jsx)(P,(0,o.Z)({className:(0,c.Z)(v.root,r),ownerState:u,ref:t},l))}));M.muiName="ListItemSecondaryAction";var N=M,I=["className"],A=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],R=(0,u.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,o.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!a.disablePadding&&(0,o.Z)({paddingTop:8,paddingBottom:8},a.dense&&{paddingTop:4,paddingBottom:4},!a.disableGutters&&{paddingLeft:16,paddingRight:16},!!a.secondaryAction&&{paddingRight:48}),!!a.secondaryAction&&(0,r.Z)({},"& > .".concat(S.root),{paddingRight:48}),(t={},(0,r.Z)(t,"&.".concat(w.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,r.Z)(t,"&.".concat(w.selected),(0,r.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(w.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,r.Z)(t,"&.".concat(w.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),t),"flex-start"===a.alignItems&&{alignItems:"flex-start"},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},a.button&&(0,r.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(w.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),a.hasSecondaryAction&&{paddingRight:48})})),j=(0,u.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),G=i.forwardRef((function(e,t){var n=(0,p.Z)({props:e,name:"MuiListItem"}),r=n.alignItems,d=void 0===r?"center":r,u=n.autoFocus,h=void 0!==u&&u,Z=n.button,S=void 0!==Z&&Z,y=n.children,C=n.className,P=n.component,M=n.components,G=void 0===M?{}:M,O=n.componentsProps,z=void 0===O?{}:O,L=n.ContainerComponent,W=void 0===L?"li":L,F=n.ContainerProps,D=(F=void 0===F?{}:F).className,B=n.dense,V=void 0!==B&&B,E=n.disabled,T=void 0!==E&&E,q=n.disableGutters,$=void 0!==q&&q,_=n.disablePadding,H=void 0!==_&&_,Y=n.divider,J=void 0!==Y&&Y,K=n.focusVisibleClassName,Q=n.secondaryAction,U=n.selected,X=void 0!==U&&U,ee=(0,a.Z)(n.ContainerProps,I),te=(0,a.Z)(n,A),ne=i.useContext(b.Z),re={dense:V||ne.dense||!1,alignItems:d,disableGutters:$},ae=i.useRef(null);(0,f.Z)((function(){h&&ae.current&&ae.current.focus()}),[h]);var oe=i.Children.toArray(y),ie=oe.length&&(0,m.Z)(oe[oe.length-1],["ListItemSecondaryAction"]),ce=(0,o.Z)({},n,{alignItems:d,autoFocus:h,button:S,dense:re.dense,disabled:T,disableGutters:$,disablePadding:H,divider:J,hasSecondaryAction:ie,selected:X}),se=function(e){var t=e.alignItems,n=e.button,r=e.classes,a=e.dense,o=e.disabled,i={root:["root",a&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",o&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,s.Z)(i,x,r)}(ce),le=(0,g.Z)(ae,t),de=G.Root||R,ue=z.root||{},pe=(0,o.Z)({className:(0,c.Z)(se.root,ue.className,C),disabled:T},te),ve=P||"li";return S&&(pe.component=P||"div",pe.focusVisibleClassName=(0,c.Z)(w.focusVisible,K),ve=v.Z),ie?(ve=pe.component||P?ve:"div","li"===W&&("li"===ve?ve="div":"li"===pe.component&&(pe.component="div")),(0,k.jsx)(b.Z.Provider,{value:re,children:(0,k.jsxs)(j,(0,o.Z)({as:W,className:(0,c.Z)(se.container,D),ref:le,ownerState:ce},ee,{children:[(0,k.jsx)(de,(0,o.Z)({},ue,!(0,l.Z)(de)&&{as:ve,ownerState:(0,o.Z)({},ce,ue.ownerState)},pe,{children:oe})),oe.pop()]}))})):(0,k.jsx)(b.Z.Provider,{value:re,children:(0,k.jsxs)(de,(0,o.Z)({},ue,{as:ve,ref:le,ownerState:ce},!(0,l.Z)(de)&&{ownerState:(0,o.Z)({},ce,ue.ownerState)},pe,{children:[oe,Q&&(0,k.jsx)(N,{children:Q})]}))})}))}}]);
//# sourceMappingURL=42.5dd682fb.chunk.js.map