(this["webpackJsonpface-recognition-app"]=this["webpackJsonpface-recognition-app"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},381:function(e,t,n){"use strict";n.r(t);var c=n(12),i=n.n(c),a=n(97),o=n.n(a),r=(n(103),n(39)),s=(n(104),n.p+"static/media/camera.8863c1d2.png"),u=(n(105),n(3)),l=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"logo-container",children:[" ",Object(u.jsx)("img",{src:s,alt:"logo"})]})})},d=(n(107),function(e){var t=e.onInputChange,n=e.onSubmit;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("p",{className:"title",children:"Test the Face Detector App"}),Object(u.jsxs)("div",{className:"input-container",children:[Object(u.jsx)("input",{type:"text",name:"url",placeholder:"Enter an image URL",onChange:t}),Object(u.jsx)("button",{onClick:n,children:"Detect Face"})]})]})}),b=(n(108),function(e){var t=e.face;return Object(u.jsx)("div",{className:"box",style:{top:t.top,left:t.left,right:t.right,bottom:t.bottom}})}),j=function(e){return console.log(e.faceBox),Object(u.jsx)("div",{className:"centered image-container",children:Object(u.jsxs)("div",{className:"relative",children:[Object(u.jsx)("img",{id:"inputimage",src:e.image,alt:""}),e.faceBox.map((function(t){return Object(u.jsx)(b,{face:t},e.faceBox.indexOf(t))}))]})})},m=n(98),p=n.n(m),f=n(52),g=n.n(f),h=new g.a.App({apiKey:"4c615670a3ec4693b50c86e896a357d2"}),x={particles:{number:{value:160,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:400,duration:4}}}};var O=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),o=Object(r.a)(a,2),s=o[0],b=o[1],m=Object(c.useState)([{}]),f=Object(r.a)(m,2),O=f[0],v=f[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p.a,{className:"particles",params:x}),Object(u.jsx)("div",{className:"header",children:Object(u.jsx)(l,{})}),Object(u.jsx)("div",{className:"content",children:Object(u.jsx)("div",{className:"input",children:Object(u.jsx)(d,{onInputChange:function(e){i(e.target.value)},onSubmit:function(){b(n),h.models.predict(g.a.FACE_DETECT_MODEL,n).then((function(e){return(t=function(e){var t=e.outputs[0].data.regions,n=document.getElementById("inputimage"),c=Number(n.width),i=Number(n.height);return t.map((function(e){return e.region_info.bounding_box})).map((function(e){return{left:c*e.left_col,right:c-c*e.right_col,top:i*e.top_row,bottom:i-i*e.bottom_row}}))}(e),void v(t)).catch((function(e){return console.log(e)}));var t}))}})})}),Object(u.jsx)(j,{image:s,faceBox:O})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,382)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),v()}},[[381,1,2]]]);
//# sourceMappingURL=main.e205fd16.chunk.js.map