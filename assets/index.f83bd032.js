var oe=Object.defineProperty;var H=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var W=(e,t,n)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))re.call(t,n)&&W(e,n,t[n]);if(H)for(var n of H(t))ie.call(t,n)&&W(e,n,t[n]);return e};import{j as V,r as d,R as u,u as Q,a as ae,L as O,b as ce,c as R,_ as ue,N as de,B as le,d as _e}from"./vendor.a549d699.js";const me=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}};me();const q=[{dir:"guide",items:["why-milkdown","getting-started","interacting-with-editor","commands","styling","keyboard-shortcuts"]},{dir:"integrations",items:["react","vue","angular","svelte","vue2"]},{dir:"plugins",items:["using-plugins","integrating-plugins","writing-syntax-plugins","writing-theme-plugins","writing-custom-plugins"]},{dir:"tools",items:["prose","design-system","using-utils-package"]},{dir:"internals",items:["architecture","node-and-mark","parser","serializer","internal-plugins"]}],C={en:{display:"English",route:""},"zh-hans":{display:"\u7B80\u4F53\u4E2D\u6587",route:"zh-hans"}},ge=new Map([["guide",{en:"Guide","zh-hans":"\u5F15\u5BFC"}],["why-milkdown",{en:"Why Milkdown","zh-hans":"\u4E3A\u4EC0\u4E48\u4F7F\u7528Milkdown"}],["getting-started",{en:"Getting Started","zh-hans":"\u5F00\u59CB\u4F7F\u7528"}],["interacting-with-editor",{en:"Interacting With Editor","zh-hans":"\u4E0E\u7F16\u8F91\u5668\u4EA4\u4E92"}],["commands",{en:"Commands","zh-hans":"\u547D\u4EE4"}],["styling",{en:"Styling","zh-hans":"\u6837\u5F0F"}],["keyboard-shortcuts",{en:"Keyboard Shortcuts","zh-hans":"\u5FEB\u6377\u952E"}],["integrations",{en:"Integrations","zh-hans":"\u96C6\u6210"}],["react",{en:"React","zh-hans":"React"}],["vue",{en:"Vue","zh-hans":"Vue"}],["angular",{en:"Angular","zh-hans":"Angular"}],["svelte",{en:"Svelte","zh-hans":"Svelte"}],["vue2",{en:"Vue2","zh-hans":"Vue2"}],["plugins",{en:"Plugins","zh-hans":"\u63D2\u4EF6"}],["using-plugins",{en:"Using Plugins","zh-hans":"\u4F7F\u7528\u63D2\u4EF6"}],["integrating-plugins",{en:"Integrating Plugins","zh-hans":"\u96C6\u6210\u63D2\u4EF6"}],["writing-syntax-plugins",{en:"Writing Syntax Plugins","zh-hans":"\u7F16\u5199\u8BED\u6CD5\u63D2\u4EF6"}],["writing-theme-plugins",{en:"Writing Theme Plugins","zh-hans":"\u7F16\u5199\u4E3B\u9898\u63D2\u4EF6"}],["writing-custom-plugins",{en:"Writing Custom Plugins","zh-hans":"\u7F16\u5199\u81EA\u5B9A\u4E49\u63D2\u4EF6"}],["tools",{en:"Tools","zh-hans":"\u5185\u90E8"}],["prose",{en:"Prose","zh-hans":"Prose"}],["using-utils-package",{en:"Using Utils Package","zh-hans":"\u4F7F\u7528\u5DE5\u5177\u5305"}],["design-system",{en:"Design System","zh-hans":"\u8BBE\u8BA1\u7CFB\u7EDF"}],["internals",{en:"Internals","zh-hans":"\u5185\u90E8"}],["architecture",{en:"Architecture","zh-hans":"\u67B6\u6784"}],["node-and-mark",{en:"Node & Mark","zh-hans":"Node & Mark"}],["parser",{en:"Parser","zh-hans":"\u89E3\u6790\u5668"}],["serializer",{en:"Serializer","zh-hans":"\u5E8F\u5217\u5316"}],["internal-plugins",{en:"Internal Plugins","zh-hans":"\u5185\u7F6E\u63D2\u4EF6"}],["get-started",{en:"Get Started","zh-hans":"\u5FEB\u901F\u5F00\u59CB"}],["try-online",{en:"Try Online","zh-hans":"\u5728\u7EBF\u4F53\u9A8C"}],["home-describe",{en:"Plugin Based WYSIWYG Markdown Editor Framework","zh-hans":"\u63D2\u4EF6\u9A71\u52A8\u7684\u6240\u89C1\u5373\u6240\u5F97\u7684Markdown\u7F16\u8F91\u5668\u6846\u67B6"}]]),L=(e,t)=>{var n,r;return(r=(n=ge.get(e))==null?void 0:n[t])!=null?r:"Not Found"},he="modulepreload",G={},pe="/",o=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${pe}${r}`,r in G)return;G[r]=!0;const i=r.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":he,i||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),i)return new Promise((l,_)=>{c.addEventListener("load",l),c.addEventListener("error",_)})})).then(()=>t())};function Ee(e){switch(e){case"../pages/guide/commands/index.md":return o(()=>import("./index.724d8c8b.js"),[]);case"../pages/guide/commands/index.zh-hans.md":return o(()=>import("./index.zh-hans.f03324a6.js"),[]);case"../pages/guide/getting-started/index.md":return o(()=>import("./index.bf705a25.js"),[]);case"../pages/guide/getting-started/index.zh-hans.md":return o(()=>import("./index.zh-hans.eae40f87.js"),[]);case"../pages/guide/interacting-with-editor/index.md":return o(()=>import("./index.36dc1ad9.js"),[]);case"../pages/guide/interacting-with-editor/index.zh-hans.md":return o(()=>import("./index.zh-hans.ed45a7ba.js"),[]);case"../pages/guide/keyboard-shortcuts/index.md":return o(()=>import("./index.b3d607be.js"),[]);case"../pages/guide/keyboard-shortcuts/index.zh-hans.md":return o(()=>import("./index.zh-hans.b1678591.js"),[]);case"../pages/guide/styling/index.md":return o(()=>import("./index.684e9df2.js"),[]);case"../pages/guide/styling/index.zh-hans.md":return o(()=>import("./index.zh-hans.7f3c2d4b.js"),[]);case"../pages/guide/why-milkdown/index.md":return o(()=>import("./index.b97014e8.js"),[]);case"../pages/guide/why-milkdown/index.zh-hans.md":return o(()=>import("./index.zh-hans.33a6c9fd.js"),[]);case"../pages/integrations/angular/index.md":return o(()=>import("./index.98b1500f.js"),[]);case"../pages/integrations/angular/index.zh-hans.md":return o(()=>import("./index.zh-hans.03d3a1c8.js"),[]);case"../pages/integrations/react/index.md":return o(()=>import("./index.79ccea86.js"),[]);case"../pages/integrations/react/index.zh-hans.md":return o(()=>import("./index.zh-hans.d650eebe.js"),[]);case"../pages/integrations/svelte/index.md":return o(()=>import("./index.9470efa5.js"),[]);case"../pages/integrations/svelte/index.zh-hans.md":return o(()=>import("./index.zh-hans.cf034c7f.js"),[]);case"../pages/integrations/vue/index.md":return o(()=>import("./index.c38e12b1.js"),[]);case"../pages/integrations/vue/index.zh-hans.md":return o(()=>import("./index.zh-hans.fa4f894b.js"),[]);case"../pages/integrations/vue2/index.md":return o(()=>import("./index.b02cbb91.js"),[]);case"../pages/integrations/vue2/index.zh-hans.md":return o(()=>import("./index.zh-hans.3f197bf4.js"),[]);case"../pages/internals/architecture/index.md":return o(()=>import("./index.9e180a94.js"),[]);case"../pages/internals/architecture/index.zh-hans.md":return o(()=>import("./index.zh-hans.b809c4b8.js"),[]);case"../pages/internals/internal-plugins/index.md":return o(()=>import("./index.130e70f5.js"),[]);case"../pages/internals/internal-plugins/index.zh-hans.md":return o(()=>import("./index.zh-hans.e63f6113.js"),[]);case"../pages/internals/node-and-mark/index.md":return o(()=>import("./index.eb2f14d5.js"),[]);case"../pages/internals/node-and-mark/index.zh-hans.md":return o(()=>import("./index.zh-hans.d790bb56.js"),[]);case"../pages/internals/parser/index.md":return o(()=>import("./index.1bbb7703.js"),[]);case"../pages/internals/parser/index.zh-hans.md":return o(()=>import("./index.zh-hans.2f797c09.js"),[]);case"../pages/internals/serializer/index.md":return o(()=>import("./index.71837539.js"),[]);case"../pages/internals/serializer/index.zh-hans.md":return o(()=>import("./index.zh-hans.5fe3063e.js"),[]);case"../pages/plugins/integrating-plugins/index.md":return o(()=>import("./index.a692e2b2.js"),[]);case"../pages/plugins/integrating-plugins/index.zh-hans.md":return o(()=>import("./index.zh-hans.f166c30c.js"),[]);case"../pages/plugins/using-plugins/index.md":return o(()=>import("./index.6eb9b6b8.js"),[]);case"../pages/plugins/using-plugins/index.zh-hans.md":return o(()=>import("./index.zh-hans.8f9a61e7.js"),[]);case"../pages/plugins/writing-custom-plugins/index.md":return o(()=>import("./index.1a5a47e4.js"),[]);case"../pages/plugins/writing-custom-plugins/index.zh-hans.md":return o(()=>import("./index.zh-hans.4b53ad1b.js"),[]);case"../pages/plugins/writing-syntax-plugins/index.md":return o(()=>import("./index.a651aef7.js"),[]);case"../pages/plugins/writing-syntax-plugins/index.zh-hans.md":return o(()=>import("./index.zh-hans.fdbd6939.js"),[]);case"../pages/plugins/writing-theme-plugins/index.md":return o(()=>import("./index.8e88d80f.js"),[]);case"../pages/plugins/writing-theme-plugins/index.zh-hans.md":return o(()=>import("./index.zh-hans.454babfe.js"),[]);case"../pages/tools/design-system/index.md":return o(()=>import("./index.712f7150.js"),[]);case"../pages/tools/design-system/index.zh-hans.md":return o(()=>import("./index.zh-hans.72037275.js"),[]);case"../pages/tools/prose/index.md":return o(()=>import("./index.a3dce003.js"),[]);case"../pages/tools/prose/index.zh-hans.md":return o(()=>import("./index.zh-hans.ff864e6b.js"),[]);case"../pages/tools/using-utils-package/index.md":return o(()=>import("./index.f2a76203.js"),[]);case"../pages/tools/using-utils-package/index.zh-hans.md":return o(()=>import("./index.zh-hans.a3db958e.js"),[]);default:return new Promise(function(t,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const ve=(e,t,n)=>{const r=C[n].route,i=["index",r].filter(a=>a).join(".");return{title:L(t,n),link:"/"+[r,t].filter(a=>a).join("/"),content:()=>Ee(`../pages/${e}/${t}/${i}.md`)}},fe=({dir:e,items:t},n)=>({title:L(e,n),items:t.map(r=>ve(e,r,n))}),U=(e,t)=>e.map(n=>fe(n,t)),xe={en:U(q,"en"),"zh-hans":U(q,"zh-hans")};var f=(e=>(e[e.Default=0]="Default",e[e.TwoSide=1]="TwoSide",e))(f||{});const s=V.exports.jsx,g=V.exports.jsxs,St=V.exports.Fragment,k=d.exports.createContext(!1),N=d.exports.createContext(!1),F=d.exports.createContext(f.Default),z=d.exports.createContext(!1),M=d.exports.createContext("en"),j=d.exports.createContext([]),I=d.exports.createContext(()=>{}),X=d.exports.createContext(()=>{}),ee=d.exports.createContext(()=>{}),B=d.exports.createContext(()=>{}),$=d.exports.createContext(()=>{}),ye=({children:e})=>{const[t,n]=d.exports.useState(!1);return s(k.Provider,{value:t,children:s(I.Provider,{value:n,children:e})})},De=({children:e})=>{const[t,n]=d.exports.useState(f.Default);return s(F.Provider,{value:t,children:s(ee.Provider,{value:n,children:e})})},Le=({children:e})=>{const[t,n]=d.exports.useState(!1);return s(N.Provider,{value:t,children:s(X.Provider,{value:n,children:e})})},Pe=({children:e})=>{const[t,n]=d.exports.useState(!1);return s(z.Provider,{value:t,children:s(B.Provider,{value:n,children:e})})},we=({children:e})=>{const[t,n]=d.exports.useState("en"),r=d.exports.useMemo(()=>xe[t],[t]);return s(j.Provider,{value:r,children:s(M.Provider,{value:t,children:s($.Provider,{value:n,children:e})})})},Ce=({children:e})=>s(we,{children:s(Pe,{children:s(Le,{children:s(ye,{children:s(De,{children:e})})})})}),Y={light:"https://unpkg.com/prism-themes/themes/prism-material-light.css",dark:"https://unpkg.com/prism-themes/themes/prism-nord.css"},ke=()=>{const e=document.querySelector("#prism-theme");if(e)return e;const t=document.createElement("link");return t.id="prism-theme",t.setAttribute("rel","stylesheet"),document.head.appendChild(t),t},ze=(e,t)=>{d.exports.useEffect(()=>{var r;const n=Boolean((r=window.matchMedia)==null?void 0:r.call(window,"(prefers-color-scheme: dark)").matches);t(n)},[t]),d.exports.useEffect(()=>{document.documentElement.setAttribute("data-theme",e?"dark":"light"),ke().setAttribute("href",e?Y.dark:Y.light)},[e])},P=()=>{const e=u.useContext(M);return u.useMemo(()=>C[e].route,[e])};var y=(e=>(e[e.Home=0]="Home",e[e.Demo=1]="Demo",e[e.Page=2]="Page",e))(y||{});const Ie=(e,t)=>e.pathname==="/"+t?0:e.pathname==="/"+[t,"online-demo"].filter(n=>n).join("/")?1:2;function w(){const e=P(),t=Q();return[Ie(t,e),t]}const Te=()=>{const[e,t]=u.useState(!0),n=u.useContext(k),[r]=w();return u.useEffect(()=>{if(r===y.Page){t(!0);return}t(!1)},[r]),{showToggle:e,fold:n,isHomePage:r===y.Home}},Re=()=>{const[e]=w(),[t,n]=u.useState(!1);return u.useEffect(()=>{n(e===y.Demo)},[e]),t},Ae="_container_1ju03_1",be="_fold_1ju03_11",Oe="_header_1ju03_16",Se="_homepage_1ju03_37",Ve="_part_1ju03_41",Ne="_icon_1ju03_45",Fe="_logo_1ju03_58",Me="_github_1ju03_88",je="_mode_1ju03_98",Be="_translate_1ju03_114",$e="_langList_1ju03_118",He="_langItem_1ju03_132";var m={container:Ae,fold:be,header:Oe,homepage:Se,part:Ve,icon:Ne,logo:Fe,github:Me,mode:je,translate:Be,langList:$e,langItem:He};const A=`${m.icon} material-icons-outlined`,We=({show:e,setShow:t})=>{const n=P(),r=u.useContext($),i=ae(),a=Q();return e?s("ul",{className:m.langList,onClick:c=>{c.stopPropagation();const{target:l}=c;if(!(l instanceof HTMLLIElement))return;const{value:_,route:E}=l.dataset;if(!_)return;const ne=a.pathname.split("/").filter(D=>D).filter(D=>D!==n);r(_),t(!1);const se=[E,...ne].filter(D=>D).join("/");i("/"+se)},children:Object.entries(C).map(([c,{display:l,route:_}])=>s("li",{className:m.langItem,"data-value":c,"data-route":_,children:l},c))}):null},qe=()=>{const e=u.useContext(F),t=u.useContext(z),n=u.useContext(ee),r=u.useContext(B),i=Re(),[a,c]=u.useState(!1),l=()=>n(_=>_===f.Default?f.TwoSide:f.Default);return u.useEffect(()=>{const _=()=>{c(!1)},E=document.body;return E.addEventListener("click",_),()=>{E.removeEventListener("click",_)}},[]),g("div",{className:m.part,children:[i&&s("span",{onClick:()=>l(),className:[A,m.mode].join(" "),children:e===f.Default?"chrome_reader_mode":"wysiwyg"}),g("div",{className:m.translate,children:[s("span",{className:A,onClick:_=>{_.stopPropagation(),c(!0)},children:"translate"}),s(We,{show:a,setShow:c})]}),s("span",{onClick:()=>r(!t),className:A,children:t?"light_mode":"dark_mode"}),s("a",{href:"https://github.com/Saul-Mirone/milkdown",target:"_blank",className:m.github,children:s("span",{className:m.icon,children:s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:s("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})})]})},Ge=`${m.icon} material-icons-outlined`,Ue=()=>{const e=u.useContext(N),t=P();return g(O,{to:"/"+t,className:m.logo,children:[s("img",{src:"/milkdown-mini.svg"}),s("span",{style:{opacity:e?0:1,transition:"opacity, color, background 0.4s ease-in-out"},children:"Milkdown"})]})},Ye=()=>{const e=u.useContext(z),t=u.useContext(B),n=u.useContext(I),r=u.useContext(N),i=()=>n(E=>!E),{showToggle:a,fold:c,isHomePage:l}=Te();ze(e,t);const _=[m.container,l||!r?m.homepage:"",c?m.fold:""].join(" ");return s("div",{id:"header",className:_,children:g("header",{className:m.header,children:[g("div",{className:m.part,children:[a&&s("span",{className:Ge,onClick:E=>{i(),E.stopPropagation()},children:"menu"}),s(Ue,{})]}),s(qe,{})]})})},Ke="_footer_tx00c_1",Ze="_homepage_tx00c_12";var K={footer:Ke,homepage:Ze};const Je="MIT Licensed | Copyright \xA9 2021-present Mirone \u2661 Meo",Qe=()=>{const[e]=w(),t=[K.footer,e===y.Home?K.homepage:""].join(" ");return s("footer",{className:t,children:Je})},Xe="_body_14dsu_1",et="_main_14dsu_11",tt="_content_14dsu_20",nt="_container_14dsu_30",st="_title_14dsu_41",ot="_desc_14dsu_50",rt="_logo_14dsu_58",it="_buttons_14dsu_65",at="_curve_14dsu_100";var p={body:Xe,main:et,content:tt,container:nt,title:st,desc:ot,logo:rt,buttons:it,curve:at};const ct=()=>{const e=P(),t="/"+[e,"getting-started"].filter(i=>i).join("/"),n="/"+[e,"online-demo"].filter(i=>i).join("/"),r=u.useContext(M);return g("section",{className:p.body,children:[s("section",{className:p.main,children:g("div",{className:p.container,children:[g("div",{className:p.content,children:[s("h1",{className:p.title,children:"Milkdown"}),s("p",{className:p.desc,children:L("home-describe",r)}),g("section",{className:p.buttons,children:[s(O,{to:t,children:L("get-started",r)}),s(O,{to:n,children:L("try-online",r)})]})]}),s("section",{className:p.logo,children:s("img",{src:"/milkdown-homepage.svg"})})]})}),s("div",{className:p.curve,children:s("svg",{viewBox:"0 0 1152 73",children:s("path",{d:"M99.0331 0.252716C59.2655 0.284556 0 25.2197 0 25.2197V0.252716H99.0331C99.0585 0.252696 99.0839 0.252686 99.1093 0.252686C99.1538 0.252686 99.1982 0.252696 99.2427 0.252716H1152V73C1018.73 21.6667 957.818 24.4226 819.692 22.7693C672.54 21.008 573.085 73 427.919 73C308.414 73 218.068 0.307089 99.2427 0.252716H99.0331Z"})})})]})},ut="_right_pu2rl_1",dt="_fold_pu2rl_24",lt="_main_pu2rl_33",_t="_loading_pu2rl_39",mt="_container_pu2rl_48",gt="_content_pu2rl_53",ht="_homepage_pu2rl_73";var v={right:ut,fold:dt,main:lt,loading:_t,container:mt,content:gt,homepage:ht};const pt=d.exports.lazy(()=>o(()=>import("./MilkdownEditor.7bee4011.js").then(function(e){return e.a}),["assets/MilkdownEditor.7bee4011.js","assets/MilkdownEditor.93758c4a.css","assets/vendor.a549d699.js"]).then(e=>({default:e.MilkdownEditor}))),Et=d.exports.lazy(()=>o(()=>import("./Demo.d31830a8.js"),["assets/Demo.d31830a8.js","assets/Demo.729efd4d.css","assets/vendor.a549d699.js","assets/MilkdownEditor.7bee4011.js","assets/MilkdownEditor.93758c4a.css"]).then(e=>({default:e.Demo}))),b=({children:e})=>s(d.exports.Suspense,{fallback:s("div",{className:v.loading,children:s(ue,{color:"rgba(var(--primary), 1)",loading:!0,size:150})}),children:e}),vt=()=>{const e=d.exports.useContext(X);d.exports.useEffect(()=>{const t=()=>{e(window.pageYOffset>0)};return document.addEventListener("scroll",t),()=>{document.removeEventListener("scroll",t)}},[e])},ft=()=>{const[e]=w(),t=d.exports.useContext(F),n=d.exports.useContext(z),r=d.exports.useContext(j),i=d.exports.useMemo(()=>[v.container,e===y.Home?v.homepage:""].join(" "),[e]);vt();const a=d.exports.useMemo(()=>r.flatMap(l=>l.items),[r]),c=P();return g("div",{className:i,children:[s("div",{className:v.content,children:g(ce,{children:[a.map((l,_)=>s(R,{path:l.link,element:s(b,{children:s(pt,{content:l.content,readOnly:!0})})},_.toString())),s(R,{path:"/"+[c,"online-demo"].filter(l=>l).join("/"),element:s(b,{children:s(Et,{mode:t,isDarkMode:n})})}),s(R,{path:"/"+c,element:s(b,{children:s(ct,{})})})]})}),s(Qe,{})]})},h=document.createElement("div");h.style.position="fixed";h.style.right="0";h.style.top="0";h.style.bottom="0";h.style.background="rgba(var(--background), 1)";h.style.zIndex="99";let S;const Z=()=>{S&&window.clearTimeout(S);const{body:e}=document,t=document.getElementById("header"),n=window.innerWidth-e.clientWidth;e.style.marginRight=`${n}px`,e.style.overflow="hidden",e.style.transition="none",h.style.width=n+"px",t&&(t.style.marginRight=`${n}px`,t.style.transition="none"),h.style.display="block"},J=()=>{const{body:e}=document,t=document.getElementById("header");e.style.overflow="",e.style.marginRight="",t&&(t.style.marginRight=""),S=window.setTimeout(()=>{e.style.transition="",t&&(t.style.transition="")},400),h.style.display="none"},xt=()=>{const e=u.useContext(I),t=u.useRef(null),[n,r]=w();return u.useEffect(()=>{const i=document.documentElement.clientWidth<1080;if(n!==y.Page||i){e(!1);return}e(!0);const{current:a}=t;if(!!a)return document.body.appendChild(h),a.addEventListener("mouseenter",Z),a.addEventListener("mouseleave",J),()=>{document.body.removeChild(h),a.removeEventListener("mouseleave",J),a.removeEventListener("mouseenter",Z)}},[n,e,r]),t},yt="_sidebar_3fzld_1",Dt="_fold_3fzld_13",Lt="_hr_3fzld_28",Pt="_sectionTitle_3fzld_35",wt="_link_3fzld_44",Ct="_active_3fzld_56";var x={sidebar:yt,fold:Dt,hr:Lt,sectionTitle:Pt,link:wt,active:Ct};const kt=({title:e,link:t})=>s(de,{className:({isActive:n})=>[x.link,n?x.active:""].join(" "),to:t,children:e}),zt=({title:e,items:t})=>g("section",{className:x.section,children:[s("section",{className:x.sectionTitle,children:e}),t.map((n,r)=>s(kt,T({},n),r.toString()))]}),It=()=>{const e=u.useContext(j),t=u.useContext(k),n=xt(),r=u.useMemo(()=>`${x.sidebar} ${t?"":x.fold}`,[t]);return s("nav",{ref:n,className:r,children:e.map((i,a)=>g("section",{children:[s(zt,T({},i),a.toString()),a<e.length-1&&s("hr",{className:x.hr})]},a.toString()))})},Tt=()=>{const e=u.useContext(I),t=u.useContext(k),n=u.useContext($);return u.useEffect(()=>{const r=window.location.pathname.split("/").filter(c=>c.length>0),[i=""]=r;Object.values(C).map(({route:c})=>c).filter(c=>c).includes(i)&&n(i)},[n]),g("div",{onClick:()=>{document.documentElement.clientWidth<1142&&e(!1)},className:t?v.right:[v.right,v.fold].join(" "),children:[s(Ye,{}),s("main",{className:v.main,children:s(ft,{})})]})},Rt=()=>s(le,{children:g(Ce,{children:[s(It,{}),s(Tt,{})]})}),te=document.getElementById("app");if(!te)throw new Error("Root element #app not found");_e(te).render(s(Rt,{}));export{St as F,f as M,o as _,g as a,C as b,z as i,s as j,M as l};
