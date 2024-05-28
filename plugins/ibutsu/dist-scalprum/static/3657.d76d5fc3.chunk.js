/*! For license information please see 3657.d76d5fc3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkinternal_backstage_plugin_ibutsu=self.webpackChunkinternal_backstage_plugin_ibutsu||[]).push([[3657],{3657:(e,t,n)=>{n.r(t),n.d(t,{AbortedDeferredError:()=>r.AbortedDeferredError,Await:()=>r.Await,BrowserRouter:()=>U,Form:()=>V,HashRouter:()=>P,Link:()=>M,MemoryRouter:()=>r.MemoryRouter,NavLink:()=>K,Navigate:()=>r.Navigate,NavigationType:()=>r.NavigationType,Outlet:()=>r.Outlet,Route:()=>r.Route,Router:()=>r.Router,RouterProvider:()=>N,Routes:()=>r.Routes,ScrollRestoration:()=>I,UNSAFE_DataRouterContext:()=>r.UNSAFE_DataRouterContext,UNSAFE_DataRouterStateContext:()=>r.UNSAFE_DataRouterStateContext,UNSAFE_ErrorResponseImpl:()=>i.VV,UNSAFE_FetchersContext:()=>_,UNSAFE_LocationContext:()=>r.UNSAFE_LocationContext,UNSAFE_NavigationContext:()=>r.UNSAFE_NavigationContext,UNSAFE_RouteContext:()=>r.UNSAFE_RouteContext,UNSAFE_ViewTransitionContext:()=>E,UNSAFE_useRouteId:()=>r.UNSAFE_useRouteId,UNSAFE_useScrollRestoration:()=>te,createBrowserRouter:()=>y,createHashRouter:()=>b,createMemoryRouter:()=>r.createMemoryRouter,createPath:()=>r.createPath,createRoutesFromChildren:()=>r.createRoutesFromChildren,createRoutesFromElements:()=>r.createRoutesFromElements,createSearchParams:()=>d,defer:()=>r.defer,generatePath:()=>r.generatePath,isRouteErrorResponse:()=>r.isRouteErrorResponse,json:()=>r.json,matchPath:()=>r.matchPath,matchRoutes:()=>r.matchRoutes,parsePath:()=>r.parsePath,redirect:()=>r.redirect,redirectDocument:()=>r.redirectDocument,renderMatches:()=>r.renderMatches,resolvePath:()=>r.resolvePath,unstable_HistoryRouter:()=>k,unstable_usePrompt:()=>ae,unstable_useViewTransitionState:()=>oe,useActionData:()=>r.useActionData,useAsyncError:()=>r.useAsyncError,useAsyncValue:()=>r.useAsyncValue,useBeforeUnload:()=>ne,useBlocker:()=>r.useBlocker,useFetcher:()=>X,useFetchers:()=>Z,useFormAction:()=>Q,useHref:()=>r.useHref,useInRouterContext:()=>r.useInRouterContext,useLinkClickHandler:()=>W,useLoaderData:()=>r.useLoaderData,useLocation:()=>r.useLocation,useMatch:()=>r.useMatch,useMatches:()=>r.useMatches,useNavigate:()=>r.useNavigate,useNavigation:()=>r.useNavigation,useNavigationType:()=>r.useNavigationType,useOutlet:()=>r.useOutlet,useOutletContext:()=>r.useOutletContext,useParams:()=>r.useParams,useResolvedPath:()=>r.useResolvedPath,useRevalidator:()=>r.useRevalidator,useRouteError:()=>r.useRouteError,useRouteLoaderData:()=>r.useRouteLoaderData,useRoutes:()=>r.useRoutes,useSearchParams:()=>Y,useSubmit:()=>G});var a=n(5478),o=n(484),r=n(9829),i=n(1613);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}const l="get",c="application/x-www-form-urlencoded";function f(e){return null!=e&&"string"==typeof e.tagName}function d(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,n)=>{let a=e[n];return t.concat(Array.isArray(a)?a.map((e=>[n,e])):[[n,a]])}),[]))}let h=null;const m=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function v(e){return null==e||m.has(e)?e:null}const p=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],w=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],g=["fetcherKey","navigate","reloadDocument","replace","state","method","action","onSubmit","relative","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}function y(e,t){return(0,i.aE)({basename:null==t?void 0:t.basename,future:s({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,i.zR)({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||R(),routes:e,mapRouteProperties:r.UNSAFE_mapRouteProperties,unstable_dataStrategy:null==t?void 0:t.unstable_dataStrategy,window:null==t?void 0:t.window}).initialize()}function b(e,t){return(0,i.aE)({basename:null==t?void 0:t.basename,future:s({},null==t?void 0:t.future,{v7_prependBasename:!0}),history:(0,i.TM)({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||R(),routes:e,mapRouteProperties:r.UNSAFE_mapRouteProperties,unstable_dataStrategy:null==t?void 0:t.unstable_dataStrategy,window:null==t?void 0:t.window}).initialize()}function R(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=s({},t,{errors:S(t.errors)})),t}function S(e){if(!e)return null;let t=Object.entries(e),n={};for(let[e,a]of t)if(a&&"RouteErrorResponse"===a.__type)n[e]=new i.VV(a.status,a.statusText,a.data,!0===a.internal);else if(a&&"Error"===a.__type){if(a.__subType){let t=window[a.__subType];if("function"==typeof t)try{let o=new t(a.message);o.stack="",n[e]=o}catch(e){}}if(null==n[e]){let t=new Error(a.message);t.stack="",n[e]=t}}else n[e]=a;return n}const E=a.createContext({isTransitioning:!1}),_=a.createContext(new Map),C=a.startTransition,x=o.flushSync,L=a.useId;function T(e){x?x(e):e()}class A{constructor(){this.status="pending",this.promise=new Promise(((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}}))}}function N(e){let{fallbackElement:t,router:n,future:o}=e,[i,s]=a.useState(n.state),[u,l]=a.useState(),[c,f]=a.useState({isTransitioning:!1}),[d,h]=a.useState(),[m,v]=a.useState(),[p,w]=a.useState(),g=a.useRef(new Map),{v7_startTransition:y}=o||{},b=a.useCallback((e=>{y?function(e){C?C(e):e()}(e):e()}),[y]),R=a.useCallback(((e,t)=>{let{deletedFetchers:a,unstable_flushSync:o,unstable_viewTransitionOpts:r}=t;a.forEach((e=>g.current.delete(e))),e.fetchers.forEach(((e,t)=>{void 0!==e.data&&g.current.set(t,e.data)}));let i=null==n.window||"function"!=typeof n.window.document.startViewTransition;if(r&&!i){if(o){T((()=>{m&&(d&&d.resolve(),m.skipTransition()),f({isTransitioning:!0,flushSync:!0,currentLocation:r.currentLocation,nextLocation:r.nextLocation})}));let t=n.window.document.startViewTransition((()=>{T((()=>s(e)))}));return t.finished.finally((()=>{T((()=>{h(void 0),v(void 0),l(void 0),f({isTransitioning:!1})}))})),void T((()=>v(t)))}m?(d&&d.resolve(),m.skipTransition(),w({state:e,currentLocation:r.currentLocation,nextLocation:r.nextLocation})):(l(e),f({isTransitioning:!0,flushSync:!1,currentLocation:r.currentLocation,nextLocation:r.nextLocation}))}else o?T((()=>s(e))):b((()=>s(e)))}),[n.window,m,d,g,b]);a.useLayoutEffect((()=>n.subscribe(R)),[n,R]),a.useEffect((()=>{c.isTransitioning&&!c.flushSync&&h(new A)}),[c]),a.useEffect((()=>{if(d&&u&&n.window){let e=u,t=d.promise,a=n.window.document.startViewTransition((async()=>{b((()=>s(e))),await t}));a.finished.finally((()=>{h(void 0),v(void 0),l(void 0),f({isTransitioning:!1})})),v(a)}}),[b,u,d,n.window]),a.useEffect((()=>{d&&u&&i.location.key===u.location.key&&d.resolve()}),[d,m,i.location,u]),a.useEffect((()=>{!c.isTransitioning&&p&&(l(p.state),f({isTransitioning:!0,flushSync:!1,currentLocation:p.currentLocation,nextLocation:p.nextLocation}),w(void 0))}),[c.isTransitioning,p]),a.useEffect((()=>{}),[]);let S=a.useMemo((()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:e=>n.navigate(e),push:(e,t,a)=>n.navigate(e,{state:t,preventScrollReset:null==a?void 0:a.preventScrollReset}),replace:(e,t,a)=>n.navigate(e,{replace:!0,state:t,preventScrollReset:null==a?void 0:a.preventScrollReset})})),[n]),x=n.basename||"/",L=a.useMemo((()=>({router:n,navigator:S,static:!1,basename:x})),[n,S,x]);return a.createElement(a.Fragment,null,a.createElement(r.UNSAFE_DataRouterContext.Provider,{value:L},a.createElement(r.UNSAFE_DataRouterStateContext.Provider,{value:i},a.createElement(_.Provider,{value:g.current},a.createElement(E.Provider,{value:c},a.createElement(r.Router,{basename:x,location:i.location,navigationType:i.historyAction,navigator:S,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?a.createElement(F,{routes:n.routes,future:n.future,state:i}):t))))),null)}function F(e){let{routes:t,future:n,state:a}=e;return(0,r.UNSAFE_useRoutesImpl)(t,void 0,a,n)}function U(e){let{basename:t,children:n,future:o,window:s}=e,u=a.useRef();null==u.current&&(u.current=(0,i.zR)({window:s,v5Compat:!0}));let l=u.current,[c,f]=a.useState({action:l.action,location:l.location}),{v7_startTransition:d}=o||{},h=a.useCallback((e=>{d&&C?C((()=>f(e))):f(e)}),[f,d]);return a.useLayoutEffect((()=>l.listen(h)),[l,h]),a.createElement(r.Router,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:o})}function P(e){let{basename:t,children:n,future:o,window:s}=e,u=a.useRef();null==u.current&&(u.current=(0,i.TM)({window:s,v5Compat:!0}));let l=u.current,[c,f]=a.useState({action:l.action,location:l.location}),{v7_startTransition:d}=o||{},h=a.useCallback((e=>{d&&C?C((()=>f(e))):f(e)}),[f,d]);return a.useLayoutEffect((()=>l.listen(h)),[l,h]),a.createElement(r.Router,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:o})}function k(e){let{basename:t,children:n,future:o,history:i}=e,[s,u]=a.useState({action:i.action,location:i.location}),{v7_startTransition:l}=o||{},c=a.useCallback((e=>{l&&C?C((()=>u(e))):u(e)}),[u,l]);return a.useLayoutEffect((()=>i.listen(c)),[i,c]),a.createElement(r.Router,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:i,future:o})}const D="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,O=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M=a.forwardRef((function(e,t){let n,{onClick:o,relative:l,reloadDocument:c,replace:f,state:d,target:h,to:m,preventScrollReset:v,unstable_viewTransition:w}=e,g=u(e,p),{basename:y}=a.useContext(r.UNSAFE_NavigationContext),b=!1;if("string"==typeof m&&O.test(m)&&(n=m,D))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=(0,i.pb)(t.pathname,y);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:b=!0}catch(e){}let R=(0,r.useHref)(m,{relative:l}),S=W(m,{replace:f,state:d,target:h,preventScrollReset:v,relative:l,unstable_viewTransition:w});return a.createElement("a",s({},g,{href:n||R,onClick:b||c?o:function(e){o&&o(e),e.defaultPrevented||S(e)},ref:t,target:h}))})),K=a.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:o=!1,className:l="",end:c=!1,style:f,to:d,unstable_viewTransition:h,children:m}=e,v=u(e,w),p=(0,r.useResolvedPath)(d,{relative:v.relative}),g=(0,r.useLocation)(),y=a.useContext(r.UNSAFE_DataRouterStateContext),{navigator:b,basename:R}=a.useContext(r.UNSAFE_NavigationContext),S=null!=y&&oe(p)&&!0===h,E=b.encodeLocation?b.encodeLocation(p).pathname:p.pathname,_=g.pathname,C=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(_=_.toLowerCase(),C=C?C.toLowerCase():null,E=E.toLowerCase()),C&&R&&(C=(0,i.pb)(C,R)||C);const x="/"!==E&&E.endsWith("/")?E.length-1:E.length;let L,T=_===E||!c&&_.startsWith(E)&&"/"===_.charAt(x),A=null!=C&&(C===E||!c&&C.startsWith(E)&&"/"===C.charAt(E.length)),N={isActive:T,isPending:A,isTransitioning:S},F=T?n:void 0;L="function"==typeof l?l(N):[l,T?"active":null,A?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let U="function"==typeof f?f(N):f;return a.createElement(M,s({},v,{"aria-current":F,className:L,ref:t,style:U,to:d,unstable_viewTransition:h}),"function"==typeof m?m(N):m)})),V=a.forwardRef(((e,t)=>{let{fetcherKey:n,navigate:o,reloadDocument:r,replace:i,state:c,method:f=l,action:d,onSubmit:h,relative:m,preventScrollReset:v,unstable_viewTransition:p}=e,w=u(e,g),y=G(),b=Q(d,{relative:m}),R="get"===f.toLowerCase()?"get":"post";return a.createElement("form",s({ref:t,method:R,action:b,onSubmit:r?h:e=>{if(h&&h(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,a=(null==t?void 0:t.getAttribute("formmethod"))||f;y(t||e.currentTarget,{fetcherKey:n,method:a,navigate:o,replace:i,state:c,relative:m,preventScrollReset:v,unstable_viewTransition:p})}},w))}));function I(e){let{getKey:t,storageKey:n}=e;return te({getKey:t,storageKey:n}),null}var H,B;function j(e){let t=a.useContext(r.UNSAFE_DataRouterContext);return t||(0,i.Oi)(!1),t}function z(e){let t=a.useContext(r.UNSAFE_DataRouterStateContext);return t||(0,i.Oi)(!1),t}function W(e,t){let{target:n,replace:o,state:i,preventScrollReset:s,relative:u,unstable_viewTransition:l}=void 0===t?{}:t,c=(0,r.useNavigate)(),f=(0,r.useLocation)(),d=(0,r.useResolvedPath)(e,{relative:u});return a.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==o?o:(0,r.createPath)(f)===(0,r.createPath)(d);c(e,{replace:n,state:i,preventScrollReset:s,relative:u,unstable_viewTransition:l})}}),[f,c,d,o,i,n,e,s,u,l])}function Y(e){let t=a.useRef(d(e)),n=a.useRef(!1),o=(0,r.useLocation)(),i=a.useMemo((()=>function(e,t){let n=d(e);return t&&t.forEach(((e,a)=>{n.has(a)||t.getAll(a).forEach((e=>{n.append(a,e)}))})),n}(o.search,n.current?null:t.current)),[o.search]),s=(0,r.useNavigate)(),u=a.useCallback(((e,t)=>{const a=d("function"==typeof e?e(i):e);n.current=!0,s("?"+a,t)}),[s,i]);return[i,u]}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(H||(H={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(B||(B={}));let J=0,q=()=>"__"+String(++J)+"__";function G(){let{router:e}=j(H.UseSubmit),{basename:t}=a.useContext(r.UNSAFE_NavigationContext),n=(0,r.UNSAFE_useRouteId)();return a.useCallback((function(a,o){void 0===o&&(o={}),function(){if("undefined"==typeof document)throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}();let{action:r,method:s,encType:u,formData:d,body:m}=function(e,t){let n,a,o,r,s;if(f(u=e)&&"form"===u.tagName.toLowerCase()){let s=e.getAttribute("action");a=s?(0,i.pb)(s,t):null,n=e.getAttribute("method")||l,o=v(e.getAttribute("enctype"))||c,r=new FormData(e)}else if(function(e){return f(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return f(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let s=e.form;if(null==s)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||s.getAttribute("action");if(a=u?(0,i.pb)(u,t):null,n=e.getAttribute("formmethod")||s.getAttribute("method")||l,o=v(e.getAttribute("formenctype"))||v(s.getAttribute("enctype"))||c,r=new FormData(s,e),!function(){if(null===h)try{new FormData(document.createElement("form"),0),h=!1}catch(e){h=!0}return h}()){let{name:t,type:n,value:a}=e;if("image"===n){let e=t?t+".":"";r.append(e+"x","0"),r.append(e+"y","0")}else t&&r.append(t,a)}}else{if(f(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=l,a=null,o=c,s=e}var u;return r&&"text/plain"===o&&(s=r,r=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:r,body:s}}(a,t);if(!1===o.navigate){let t=o.fetcherKey||q();e.fetch(t,n,o.action||r,{preventScrollReset:o.preventScrollReset,formData:d,body:m,formMethod:o.method||s,formEncType:o.encType||u,unstable_flushSync:o.unstable_flushSync})}else e.navigate(o.action||r,{preventScrollReset:o.preventScrollReset,formData:d,body:m,formMethod:o.method||s,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:n,unstable_flushSync:o.unstable_flushSync,unstable_viewTransition:o.unstable_viewTransition})}),[e,t,n])}function Q(e,t){let{relative:n}=void 0===t?{}:t,{basename:o}=a.useContext(r.UNSAFE_NavigationContext),u=a.useContext(r.UNSAFE_RouteContext);u||(0,i.Oi)(!1);let[l]=u.matches.slice(-1),c=s({},(0,r.useResolvedPath)(e||".",{relative:n})),f=(0,r.useLocation)();if(null==e){c.search=f.search;let e=new URLSearchParams(c.search);e.has("index")&&""===e.get("index")&&(e.delete("index"),c.search=e.toString()?"?"+e.toString():"")}return e&&"."!==e||!l.route.index||(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),"/"!==o&&(c.pathname="/"===c.pathname?o:(0,i.HS)([o,c.pathname])),(0,r.createPath)(c)}function X(e){var t;let{key:n}=void 0===e?{}:e,{router:o}=j(H.UseFetcher),u=z(B.UseFetcher),l=a.useContext(_),c=a.useContext(r.UNSAFE_RouteContext),f=null==(t=c.matches[c.matches.length-1])?void 0:t.route.id;l||(0,i.Oi)(!1),c||(0,i.Oi)(!1),null==f&&(0,i.Oi)(!1);let d=L?L():"",[h,m]=a.useState(n||d);n&&n!==h?m(n):h||m(q()),a.useEffect((()=>(o.getFetcher(h),()=>{o.deleteFetcher(h)})),[o,h]);let v=a.useCallback(((e,t)=>{f||(0,i.Oi)(!1),o.fetch(h,f,e,t)}),[h,f,o]),p=G(),w=a.useCallback(((e,t)=>{p(e,s({},t,{navigate:!1,fetcherKey:h}))}),[h,p]),g=a.useMemo((()=>a.forwardRef(((e,t)=>a.createElement(V,s({},e,{navigate:!1,fetcherKey:h,ref:t}))))),[h]),y=u.fetchers.get(h)||i.HW,b=l.get(h);return a.useMemo((()=>s({Form:g,submit:w,load:v},y,{data:b})),[g,w,v,y,b])}function Z(){let e=z(B.UseFetchers);return Array.from(e.fetchers.entries()).map((e=>{let[t,n]=e;return s({},n,{key:t})}))}const $="react-router-scroll-positions";let ee={};function te(e){let{getKey:t,storageKey:n}=void 0===e?{}:e,{router:o}=j(H.UseScrollRestoration),{restoreScrollPosition:u,preventScrollReset:l}=z(B.UseScrollRestoration),{basename:c}=a.useContext(r.UNSAFE_NavigationContext),f=(0,r.useLocation)(),d=(0,r.useMatches)(),h=(0,r.useNavigation)();a.useEffect((()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"})),[]),function(e,t){let{capture:n}={};a.useEffect((()=>{let t=null!=n?{capture:n}:void 0;return window.addEventListener("pagehide",e,t),()=>{window.removeEventListener("pagehide",e,t)}}),[e,n])}(a.useCallback((()=>{if("idle"===h.state){let e=(t?t(f,d):null)||f.key;ee[e]=window.scrollY}try{sessionStorage.setItem(n||$,JSON.stringify(ee))}catch(e){}window.history.scrollRestoration="auto"}),[n,t,h.state,f,d])),"undefined"!=typeof document&&(a.useLayoutEffect((()=>{try{let e=sessionStorage.getItem(n||$);e&&(ee=JSON.parse(e))}catch(e){}}),[n]),a.useLayoutEffect((()=>{let e=t&&"/"!==c?(e,n)=>t(s({},e,{pathname:(0,i.pb)(e.pathname,c)||e.pathname}),n):t,n=null==o?void 0:o.enableScrollRestoration(ee,(()=>window.scrollY),e);return()=>n&&n()}),[o,c,t]),a.useLayoutEffect((()=>{if(!1!==u)if("number"!=typeof u){if(f.hash){let e=document.getElementById(decodeURIComponent(f.hash.slice(1)));if(e)return void e.scrollIntoView()}!0!==l&&window.scrollTo(0,0)}else window.scrollTo(0,u)}),[f,u,l]))}function ne(e,t){let{capture:n}=t||{};a.useEffect((()=>{let t=null!=n?{capture:n}:void 0;return window.addEventListener("beforeunload",e,t),()=>{window.removeEventListener("beforeunload",e,t)}}),[e,n])}function ae(e){let{when:t,message:n}=e,o=(0,r.useBlocker)(t);a.useEffect((()=>{"blocked"===o.state&&(window.confirm(n)?setTimeout(o.proceed,0):o.reset())}),[o,n]),a.useEffect((()=>{"blocked"!==o.state||t||o.reset()}),[o,t])}function oe(e,t){void 0===t&&(t={});let n=a.useContext(E);null==n&&(0,i.Oi)(!1);let{basename:o}=j(H.useViewTransitionState),s=(0,r.useResolvedPath)(e,{relative:t.relative});if(!n.isTransitioning)return!1;let u=(0,i.pb)(n.currentLocation.pathname,o)||n.currentLocation.pathname,l=(0,i.pb)(n.nextLocation.pathname,o)||n.nextLocation.pathname;return null!=(0,i.B6)(s.pathname,l)||null!=(0,i.B6)(s.pathname,u)}}}]);
//# sourceMappingURL=3657.d76d5fc3.chunk.js.map