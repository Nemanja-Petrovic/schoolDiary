!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"api",(function(){return r})),n.d(t,"editNewMember",(function(){return o})),n.d(t,"getData",(function(){return c})),n.d(t,"fetchData",(function(){return u})),n.d(t,"addMember",(function(){return i})),n.d(t,"createMember",(function(){return a})),n.d(t,"updateMember",(function(){return s})),n.d(t,"deleteMember",(function(){return f}));const r={classes:process.env.REACT_APP_API+"/classes",students:process.env.REACT_APP_API+"/students",teachers:process.env.REACT_APP_API+"/teachers"},o=(e,t,n,r)=>t?{history:e,member:t.find(e=>e._id===n),id:n,groupName:r}:void 0;async function c(e,t){try{const n=await fetch(e,t);return await n.json()}catch(e){console.log(e)}}const u=async(e,t)=>{try{t(await c(r[e]))}catch(e){console.log(e)}},i=(e,t)=>t._id?s(e,t):a(e,t),a=(e,t)=>fetch(r[e],{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()),s=(e,t)=>fetch(`${r[e]}/${t._id}`,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then(e=>e.json()),f=async(e,t)=>{await fetch(`${r[e]}/${t}`,{method:"DELETE"})}}]));