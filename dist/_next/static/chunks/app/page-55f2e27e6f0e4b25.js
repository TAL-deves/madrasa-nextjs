(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7537:function(e,t,i){Promise.resolve().then(i.t.bind(i,6685,23)),Promise.resolve().then(i.bind(i,9564)),Promise.resolve().then(i.bind(i,9118)),Promise.resolve().then(i.bind(i,5243)),Promise.resolve().then(i.bind(i,1591))},1591:function(e,t,i){"use strict";i.r(t);var r=i(7437),s=i(2265);t.default=function(){let e=(0,s.useRef)(null),[t,i]=(0,s.useState)([]),[l,a]=(0,s.useState)(""),[n,c]=(0,s.useState)(0),[d,o]=(0,s.useState)(!1);(0,s.useEffect)(()=>{u();let e=document.getElementById("recapture");e.addEventListener("click",h);let t=document.getElementById("imageblobdata");return t.addEventListener("click",m),()=>{e.removeEventListener("click",h),t.removeEventListener("click",m)}},[]);let u=async()=>{try{let t=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});e.current.srcObject=t,e.current.play()}catch(e){console.error("Error initializing camera:",e)}},h=()=>{},m=()=>{};return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{style:{textAlign:"center"},children:"Image capture with blink detection"}),(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{className:"livecam",children:(0,r.jsx)("video",{id:"video",width:"720",height:"540",autoPlay:!0,muted:!0,ref:e})}),(0,r.jsx)("div",{id:"capturedImages",style:{border:"5px solid #1450a3",width:"740px",height:"580px"},children:l&&(0,r.jsx)("img",{src:l,alt:"Captured"})})]}),(0,r.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center mt-5",style:{width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"2rem"},children:[(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:"btn btn-warning btn-lg",style:{backgroundColor:"#ffc436",borderRadius:"5px",width:"100px",height:"50px"},id:"recapture",type:"button",children:"Recapture"})}),(0,r.jsx)("h4",{children:"Image:"}),(0,r.jsx)("div",{style:{width:"500px",height:"500px",overflowY:"scroll",overflowWrap:"break-word"},children:(0,r.jsx)("p",{id:"imageblob"})}),(0,r.jsx)("button",{style:{backgroundColor:"#1450a3",borderRadius:"5px",color:"white",width:"80px",height:"40px",marginTop:"1rem"},id:"imageblobdata",type:"button",children:"Copy"})]})]})}},9564:function(e,t,i){"use strict";i.r(t);var r=i(7437),s=i(2265);t.default=function(e){let{images:t}=e,[i,l]=(0,s.useState)(0),a=()=>{l(e=>(e+1)%t.length)};return(0,s.useEffect)(()=>{let e=setInterval(a,5e3);return()=>{clearInterval(e)}},[i]),(0,r.jsx)("div",{className:"w-full max-w-lg mx-auto",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("img",{src:t[i],alt:"Slider Image",className:"w-full h-auto p-10"}),(0,r.jsxs)("div",{className:"absolute inset-0 flex justify-between items-center",children:[(0,r.jsx)("button",{onClick:()=>{l(e=>0===e?t.length-1:e-1)},className:"p-2 bg-gray-800 bg-opacity-50 text-white",children:"<"}),(0,r.jsx)("button",{onClick:a,className:"p-2 bg-gray-800 bg-opacity-50 text-white",children:">"})]})]})})}},5243:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a}});var r=i(7437),s=i(2265),l=i(4741);function a(e){let{images:t}=e,[i,a]=(0,s.useState)(),[n,c]=(0,s.useState)();return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)("h2",{className:"bg-[#0335670f] text-black text-sm border-l-4 px-2.5 py-4 border-[#013622]",children:"ছবি"})}),(0,r.jsx)("div",{children:(0,r.jsx)(l.Z,{className:"m-4",asNavFor:n,ref:e=>a(e),arrows:!1,children:t.map(e=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,r.jsx)("img",{src:e,alt:""})})}))})}),(0,r.jsx)("div",{children:(0,r.jsx)(l.Z,{className:"m-10",asNavFor:i,ref:e=>c(e),slidesToShow:3,swipeToSlide:!0,focusOnSelect:!0,arrows:!0,children:t.map(e=>(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)("img",{height:80,src:e,alt:""})}))})})]})}i(4928),i(7881)},9118:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a}});var r=i(7437),s=i(2265),l=i(4741);function a(e){let{videos:t}=e,[i,a]=(0,s.useState)(),[n,c]=(0,s.useState)();return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("h1",{className:"text-center text-4xl pt-4",children:"ভিডিও গ্যালারি"}),(0,r.jsx)("img",{src:"https://darululoomhathazari.com/media/img/icon-image.png",alt:""})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"hidden md:block",children:(0,r.jsx)(l.Z,{className:"m-10 block ",ref:e=>c(e),slidesToShow:3,swipeToSlide:!0,arrows:!0,dots:!0,children:t.map(e=>(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)("iframe",{height:"250",width:"100%",src:e,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}))})}),(0,r.jsx)("div",{className:"block md:hidden",children:(0,r.jsx)(l.Z,{className:"m-10 hidden",ref:e=>c(e),slidesToShow:1,swipeToSlide:!0,arrows:!0,dots:!0,children:t.map(e=>(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)("iframe",{height:"250",width:"100%",src:e,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}))})})]})]})}i(4928),i(7881)}},function(e){e.O(0,[435,964,971,596,744],function(){return e(e.s=7537)}),_N_E=e.O()}]);