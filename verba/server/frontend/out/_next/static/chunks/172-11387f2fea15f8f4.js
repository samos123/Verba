"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{79123:function(e,t,n){n.d(t,{I:function(){return d}});var s=n(85893),a=n(67294),l=n(55299),o=n(52677),r=n(84283),c=n(19954);let i=e=>{let{text:t,type:n}=e;return(0,s.jsx)(l.D,{components:{code(e){let{node:t,inline:n,className:a,children:l,...c}=e,i=/language-(\w+)/.exec(a||"");return!n&&i?(0,s.jsx)(o.Z,{...c,style:r.Yn,language:i[1],PreTag:"div",children:String(l).replace(/\n$/,"")}):(0,s.jsx)("code",{...c,className:a,children:l})}},children:t})};function d(e){let{title:t,text:n,type:l="Documentation",extract:o,docLink:r}=e,d=(0,a.useRef)(null);if((0,a.useEffect)(()=>{if(d.current){let e=d.current;e.scrollIntoView({behavior:"smooth",block:"center"})}},[n,o]),!t)return(0,s.jsx)("div",{className:""});let u=o?n.indexOf(o):-1,m=o?u+o.length:-1;return(0,s.jsxs)("div",{className:"border-2 border-gray-900 shadow-lg rounded-xl bg-gray-100 p-2 animate-pop-in overflow-y-auto max-h-[548px] document-container",children:[(0,s.jsx)("div",{className:"".concat(c.DOC_TYPE_COLORS[l]," text-black p-4 rounded-t-xl w-full sticky top-0 z-10 shadow-md"),children:(0,s.jsx)("a",{href:r||"#",target:"_blank",rel:"noopener noreferrer",children:t||"Placeholder Title"})}),(0,s.jsxs)("div",{className:"p-4 my-markdown-styles text-sm font-mono",children:[-1!==u&&(0,s.jsx)(i,{text:n.slice(0,u),type:l}),o&&(0,s.jsx)("div",{ref:d,className:"".concat(c.DOC_TYPE_COLORS[l]," rounded-lg p-3 shadow-lg text-sm"),children:(0,s.jsx)(i,{text:n.slice(u,m),type:l})}),-1!==u?(0,s.jsx)("div",{className:"pt-3",children:(0,s.jsx)(i,{text:n.slice(m),type:l})}):(0,s.jsx)(i,{text:n,type:l})]})]})}},19954:function(e,t,n){n.r(t),n.d(t,{DOC_TYPE_COLORS:function(){return m},DOC_TYPE_COLOR_HOVER:function(){return h},apiHost:function(){return u},default:function(){return p}});var s=n(85893),a=n(67294),l=n(5459),o=n.n(l),r=n(52677),c=n(84283);function i(e){let{onUserMessageSubmit:t,isFetching:n}=e,[l,i]=(0,a.useState)([]),d=(0,a.useRef)(null),u=e=>{let t=[],n=0;return e.replace(/```(.*?)\n([\s\S]*?)```/g,(s,a,l,o)=>(o>n&&t.push({type:"text",content:e.slice(n,o)}),t.push({type:"code",language:a.trim(),content:l.trim()}),n=o+s.length,s)),n<e.length&&t.push({type:"text",content:e.slice(n)}),t};return(0,a.useEffect)(()=>{if(t.length&&(0===l.length||t[t.length-1].content!==l[l.length-1].content)){let e=t[t.length-1];i(t=>[...t,e])}},[t]),(0,a.useEffect)(()=>{if(d.current){let e=l[l.length-1];if("system"===e.type){let t=25*e.content.length;setTimeout(()=>{var e;null===(e=d.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},t)}else d.current.scrollIntoView({behavior:"smooth"})}},[l]),(0,s.jsxs)("div",{className:"bg-gray-100 p-4 overflow-y-auto h-[400px]",children:[l.map((e,t)=>(0,s.jsx)("div",{ref:t===l.length-1?d:null,className:"mb-4 ".concat("user"===e.type?"text-right":""),children:(0,s.jsx)("span",{className:"inline-block p-3 rounded-xl animate-press-in shadow-md font-mono text-sm ".concat("user"===e.type?"bg-yellow-200":"bg-white"),children:"system"===e.type?u(e.content).map((e,t)=>"text"===e.type?(0,s.jsx)(o(),{onInit:t=>{t.typeString(e.content||"N/A").start()},options:{delay:15}},t):"code"===e.type?(0,s.jsx)(r.Z,{language:e.language,style:c.Yn,className:"rounded p-2",children:e.content},t):null):e.content})},t)),n&&(0,s.jsxs)("div",{className:"flex items-center pl-4 mb-4",children:[(0,s.jsx)("span",{className:"dot"}),(0,s.jsx)("span",{className:"dot"}),(0,s.jsx)("span",{className:"dot"})]})]})}var d=n(79123);let u="http://localhost:8000",m={Documentation:"bg-green-300",Blog:"bg-yellow-200"},h={Documentation:"hover:bg-green-400",Blog:"hover:bg-yellow-300"};function p(){let e;let[t,n]=(0,a.useState)([]),[l,o]=(0,a.useState)(""),[r,c]=(0,a.useState)(""),[p,x]=(0,a.useState)(""),[f,g]=(0,a.useState)("#"),[y,j]=(0,a.useState)([]),[b,v]=(0,a.useState)("Offline"),[w,N]=(0,a.useState)(null),[_,S]=(0,a.useState)([]),[O,C]=(0,a.useState)(!1),T=async()=>{try{let e=await fetch(u+"/api/health");200===e.status?v("Online"):v("Offline")}catch(e){v("Offline")}};(0,a.useEffect)(()=>{T()},[]);let k=async(e,t)=>{null==e||e.preventDefault(),T();let s=t||l;if(s.trim()){S(e=>[...e,{type:"user",content:s}]),o(""),n([]),C(!0);try{let e=await fetch(u+"/api/query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:s})}),t=await e.json();j([]),j(t.documents),t.system&&S(e=>[...e,{type:"system",content:t.system}])}catch(e){console.error("Failed to fetch from API:",e)}finally{C(!1)}}};(0,a.useEffect)(()=>{y&&y.length>0&&N(y[0])},[y]),(0,a.useEffect)(()=>{let e=async()=>{if(T(),w&&w.doc_uuid)try{let e=await fetch(u+"/api/get_document",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({document_id:w.doc_uuid})}),t=await e.json();c(t.document.properties.doc_name),x(t.document.properties.text),g(t.document.properties.doc_link)}catch(e){console.error("Failed to fetch document:",e)}};e()},[w]);let E=async e=>{try{let t=await fetch(u+"/api/suggestions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})}),s=await t.json();n(s.suggestions)}catch(e){console.error("Failed to fetch suggestions:",e)}},D=(e=null,function(){for(var t=arguments.length,n=Array(t),s=0;s<t;s++)n[s]=arguments[s];null!==e&&clearTimeout(e),e=window.setTimeout(()=>{null!==e&&clearTimeout(e),E(...n)},25)}),P=async e=>{o(e),k(void 0,e)};return(0,s.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-between p-12 text-gray-900",children:(0,s.jsxs)("div",{className:"flex flex-col w-full items-start",children:[(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsxs)("div",{className:"flex text-lg",children:[(0,s.jsx)("span",{className:"bg-opacity-0 rounded px-2 py-1 hover-container animate-pop-in",children:"The"}),(0,s.jsx)("span",{className:"bg-opacity-0 rounded font-bold px-2 py-1 hover-container animate-pop-in-late",children:"Golden"}),(0,s.jsx)("span",{className:"bg-yellow-200 rounded px-2 py-1 hover-container animate-pop-more-late",children:"RAGtriever"})]}),(0,s.jsx)("h1",{className:"text-8xl font-bold mt-2",children:"Verba"}),(0,s.jsx)("p",{className:"text-sm mt-1 text-gray-400",children:"Retrieval Augmented Generation system powered by Weaviate"})]}),(0,s.jsx)("div",{className:"p-1 flex overflow-x-auto justify-center w-full mb-2",children:y.map((e,t)=>(0,s.jsx)("button",{onClick:()=>N(e),children:(0,s.jsxs)("div",{className:"".concat(m[e.doc_type]," rounded-lg text-xs hover-container shadow-lg border-2 hover:border-white border-black mx-1 h-32 p-3 ").concat(h[e.doc_type]," animate-pop-in"),children:[(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsx)("span",{className:"font-bold",children:e.doc_name})}),(0,s.jsxs)("div",{className:"flex justify-between space-x-1 mt-3",children:[(0,s.jsx)("div",{className:"text-xs bg-white bg-opacity-50 p-2 rounded-lg",children:e.doc_type}),(0,s.jsxs)("div",{className:"text-xs bg-white bg-opacity-50 p-2 rounded-lg",children:[" ","Score ",Math.round(1e4*e._additional.score)]})]})]})},e.doc_name+t))}),(0,s.jsxs)("div",{className:"flex w-full space-x-4",children:[(0,s.jsxs)("div",{className:"w-1/2 p-2 border-2 shadow-lg h-2/3 border-gray-900 rounded-xl animate-pop-in",children:[(0,s.jsxs)("div",{className:"rounded-t-xl bg-yellow-200 p-4 flex justify-between items-center",children:["Verba Chat",(0,s.jsx)("div",{className:"text-xs text-white font-mono flex justify-center",children:(0,s.jsxs)("span",{className:"rounded-indicator text-white p-2 ".concat("Online"===b?"bg-green-500":"bg-red-500"),children:["Demo ",b]})})]}),(0,s.jsx)(i,{onUserMessageSubmit:_,isFetching:O}),(0,s.jsx)("form",{className:"rounded-b-xl bg-gray-800 p-4",onSubmit:k,children:(0,s.jsx)("input",{type:"text",value:l,onChange:e=>{o(e.target.value),D(e.target.value)},placeholder:"What is a vector database?",className:"w-full p-2 rounded-md bg-white text-gray-900 placeholder-gray-400"})}),(0,s.jsx)("div",{className:"mt-2 bg-gray-200 rounded-md relative",children:t.map((e,t)=>(0,s.jsx)("div",{className:"p-2 hover:bg-green-200 cursor-pointer text-sm animate-press-in mt-1 hover-container",onClick:()=>P(e),children:e},t))})]}),(0,s.jsx)("div",{className:"w-1/2 space-y-4",children:(0,s.jsx)(d.I,{title:r,text:p,extract:null==w?void 0:w.text,docLink:f,type:null==w?void 0:w.doc_type})})]})]})})}}}]);