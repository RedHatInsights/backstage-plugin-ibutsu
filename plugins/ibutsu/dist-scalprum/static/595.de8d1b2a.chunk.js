"use strict";(self.webpackChunkinternal_backstage_plugin_ibutsu=self.webpackChunkinternal_backstage_plugin_ibutsu||[]).push([[595,2976],{2976:(e,t,r)=>{r.r(t),r.d(t,{MuiThemeProvider:()=>s.ThemeProvider,ServerStyleSheets:()=>s.ServerStyleSheets,StylesProvider:()=>s.StylesProvider,ThemeProvider:()=>s.ThemeProvider,alpha:()=>n.X4,createGenerateClassName:()=>s.createGenerateClassName,createMuiTheme:()=>a.D,createStyles:()=>l,createTheme:()=>a.A,darken:()=>n.e$,decomposeColor:()=>n.rP,duration:()=>b.p0,easing:()=>b.cz,emphasize:()=>n.tL,fade:()=>n.Rv,getContrastRatio:()=>n.eM,getLuminance:()=>n.J1,hexToRgb:()=>n.E2,hslToRgb:()=>n.YL,jssPreset:()=>s.jssPreset,lighten:()=>n.a,makeStyles:()=>c,recomposeColor:()=>n.X0,responsiveFontSizes:()=>g,rgbToHex:()=>n.Ob,styled:()=>S.A,unstable_createMuiStrictModeTheme:()=>o,useTheme:()=>y.A,withStyles:()=>A.A,withTheme:()=>T});var n=r(268),a=r(7047),i=r(6328);function o(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return a.A.apply(void 0,[(0,i.A)({unstable_strictMode:!0},e)].concat(r))}var s=r(1942);function l(e){return(0,s.createStyles)(e)}var u=r(9575),h=r(7247);const c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,s.makeStyles)(e,(0,u.A)({defaultTheme:h.A},t))};var m=r(7447),v=r(4586);function p(e){return String(parseFloat(e)).length===String(e).length}function d(e){return parseFloat(e)}function f(e){var t=e.lineHeight;return e.pixels/(t*e.htmlFontSize)}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.breakpoints,n=void 0===r?["sm","md","lg"]:r,a=t.disableAlign,i=void 0!==a&&a,o=t.factor,s=void 0===o?2:o,l=t.variants,h=void 0===l?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:l,c=(0,u.A)({},e);c.typography=(0,u.A)({},c.typography);var g,S=c.typography,b=(g=S.htmlFontSize,function(e,t){var r=String(e).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(r===t)return e;var n=d(e);if("px"!==r)if("em"===r)n=d(e)*d(g);else if("rem"===r)return n=d(e)*d(g),e;var a=n;if("px"!==t)if("em"===t)a=n/d(g);else{if("rem"!==t)return e;a=n/d(g)}return parseFloat(a.toFixed(5))+t}),y=n.map((function(e){return c.breakpoints.values[e]}));return h.forEach((function(e){var t=S[e],r=parseFloat(b(t.fontSize,"rem"));if(!(r<=1)){var n=r,a=1+(n-1)/s,o=t.lineHeight;if(!p(o)&&!i)throw new Error((0,m.A)(6));p(o)||(o=parseFloat(b(o,"rem"))/parseFloat(r));var l=null;i||(l=function(e){return(r=(t={size:e,grid:f({pixels:4,lineHeight:o,htmlFontSize:S.htmlFontSize})}).size)-(a=r-r%(n=t.grid))<(i=a+n)-r?a:i;var t,r,n,a,i}),S[e]=(0,u.A)({},t,function(e){var t=e.cssProperty,r=e.min,n=e.max,a=e.unit,i=void 0===a?"rem":a,o=e.breakpoints,s=void 0===o?[600,960,1280]:o,l=e.transform,u=void 0===l?null:l,h=(0,v.A)({},t,"".concat(r).concat(i)),c=(n-r)/s[s.length-1];return s.forEach((function(e){var n=r+c*e;null!==u&&(n=u(n)),h["@media (min-width:".concat(e,"px)")]=(0,v.A)({},t,"".concat(Math.round(1e4*n)/1e4).concat(i))})),h}({cssProperty:"fontSize",min:a,max:n,unit:"rem",breakpoints:y,transform:l}))}})),c}var S=r(882),b=r(3457),y=r(4917),A=r(7031);const T=(0,s.withThemeCreator)({defaultTheme:h.A})}}]);
//# sourceMappingURL=595.de8d1b2a.chunk.js.map