(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n.n(c),r=n(24),a=n.n(r),i=(n(46),n(21)),o=n(12),l=(n(47),n(16)),j=n(0),d=n.n(j),u=n(5),b=n(7),h=(n(49),n(38)),f=n(40),x=n(13),p=Object(h.a)({apiKey:"AIzaSyDRDA0vA5qYcGAJz5MkRgprb9vczlGnoL8",authDomain:"ck-firestore.firebaseapp.com",projectId:"ck-firestore",storageBucket:"ck-firestore.appspot.com",messagingSenderId:"435036377015",appId:"1:435036377015:web:9060ef5e79ac2488802232",measurementId:"G-HR5VXQPRJF"}),O=(Object(f.a)(p),Object(x.e)()),m=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(x.f)(Object(x.a)(O,"items")),e.next=3,Object(x.d)(t);case 3:n=e.sent,c=[],s=[];try{n.docs.map((function(e){return e.data().books.forEach((function(e){s.push(e)}))}))}catch(r){}return n.docs.forEach((function(e){c.push({value:e.id,id:e.id})})),e.abrupt("return",{categories:c,docs:s});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(x.f)(Object(x.a)(O,"orderHistory")),e.next=3,Object(x.d)(t);case 3:n=e.sent,c=[];try{c=n.docs.map((function(e){return e.data().history}))}catch(s){}return e.abrupt("return",{orders:c});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(d.a.mark((function e(t){var n,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(x.b)(O,"items",t),e.next=3,Object(x.c)(n);case 3:if(!(c=e.sent).exists()){e.next=9;break}return s=c.data().books,e.abrupt("return",s);case 9:console.log("error");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(x.b)(O,"kartStash","Orders"),e.next=3,Object(x.c)(t);case 3:if(!(n=e.sent).exists()){e.next=7;break}return c=n.data().books,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(d.a.mark((function e(t){var n,c,s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(x.b)(O,"kartStash","Orders"),e.next=3,Object(x.c)(n);case 3:return c=e.sent,s=c.data().books,(r=s).unshift(t),console.log(r),e.next=10,Object(x.h)(n,{books:r});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(x.b)(O,"kartStash","Orders"),e.next=3,Object(x.h)(n,{books:[]});case 3:return e.next=5,Object(x.g)(Object(x.b)(O,"orderHistory","order".concat(Math.floor(1000233*Math.random())+99)),{history:t});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=(n(51),n(1)),S=function(){return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"spinner-container-top",children:[Object(w.jsx)("span",{className:"span-square1"}),Object(w.jsx)("span",{className:"span-square2"})]}),Object(w.jsxs)("div",{className:"spinner-container-bottom",children:[Object(w.jsx)("span",{className:"span-square3"}),Object(w.jsx)("span",{className:"span-square4"})]})]})},C=(n(53),function(e){var t=e.docs,n=e.heading,s=void 0===n||n,r=Object(c.useState)(""),a=Object(b.a)(r,2),i=a[0],l=a[1],j=Object(c.useState)(),d=Object(b.a)(j,2),u=d[0],h=d[1],f=Object(o.f)();Object(c.useEffect)((function(){if(h(),t.length>0&&i.length>=2){var e=t.map((function(e){return e.Name})),n=i.toLowerCase(),c=e.filter((function(e){return e.slice(0,n.length).toLowerCase()===n}));h(c)}}),[i]);return Object(w.jsx)("div",{children:Object(w.jsxs)("div",{id:"header",className:"header",children:[!!s&&Object(w.jsx)("span",{id:"heading",className:"heading-style",active:!0,children:"Book Store"}),Object(w.jsxs)("div",{className:"search-style",children:[Object(w.jsxs)("div",{className:"search-bar-style",children:[Object(w.jsx)("input",{onChange:function(e){l(e.target.value)},value:i,style:{fontSize:"20px",fontFamily:"sans-serif",marginRight:"10px",borderColor:"purple",textAlign:"center"},type:"text"}),Object(w.jsx)("button",{type:"submit",className:"btn btn-primary",children:Object(w.jsx)("i",{class:"fas fa-search"})})]}),Object(w.jsx)("div",{className:void 0!==u?"results-style":"hide-style",children:void 0!==u&&u.map((function(e){return Object(w.jsx)("div",{onClick:function(){var n;f("/book/search?result=".concat((n=e)[0]+n[3]),{state:t.filter((function(e){return e.Name===n}))})},className:"result-style",children:u.length?e:"Not found"})}))}),Object(w.jsx)("div",{className:"nav-container",children:Object(w.jsxs)("nav",{id:"navi",className:"nav-style",children:[Object(w.jsx)("button",{onClick:function(){f("/")},style:{margin:"10px 20px 10px 20px"},className:"btn btn-default",children:Object(w.jsx)("span",{className:"navbtn-style",children:"Home"})}),Object(w.jsx)("button",{onClick:function(){window.scrollTo({top:1e6,behavior:"smooth"})},style:{margin:"10px 20px 10px 20px"},className:"btn btn-default",children:Object(w.jsx)("span",{className:"navbtn-style",children:"About Us"})}),Object(w.jsx)("button",{onClick:function(){return f("/OrderHistory",{state:t})},style:{margin:"10px 20px 10px 20px"},className:"btn btn-default",children:Object(w.jsx)("span",{className:"navbtn-style",children:"Order History"})}),Object(w.jsx)("button",{onClick:function(){return f("/your-kart",{state:t})},className:"btn btn-default",children:Object(w.jsx)("i",{style:{position:"relative",center:"100%"},class:"fas fa-shopping-cart fa-2x"})})]})})]})]})})}),R=(n(54),function(e){var t=e.docs,n=e.orders,c=Object(o.f)(),s=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r=function(){document.getElementById("b").classList.toggle("animating"),n.forEach((function(e){e.Timestamp=(new Date).getTime()})),s(n),setTimeout(a,2500)},a=function(){c("/OrderHistory",{state:{docs:t,orders:n}})};return Object(w.jsxs)("div",{className:"anime-body",children:[Object(w.jsx)("button",{id:"b",onClick:r,className:"lel",children:"Place Order"}),Object(w.jsx)("div",{onClick:r,className:"svg-container",children:Object(w.jsx)("span",{className:"icon-style",children:Object(w.jsx)("i",{className:"fas fa-check fa-3x"})})})]})}),L=function(){var e=Object(c.useState)(!0),t=Object(b.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(),a=Object(b.a)(r,2),i=a[0],j=a[1],h=Object(c.useState)(),f=Object(b.a)(h,2),x=f[0],p=f[1],O=Object(c.useState)(0),m=Object(b.a)(O,2),v=m[0],g=m[1],N=Object(c.useState)(0),k=Object(b.a)(N,2),L=k[0],A=k[1],z=Object(c.useState)(0),P=Object(b.a)(z,2),T=(P[0],P[1],Object(o.e)());Object(c.useEffect)((function(){try{var e=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,console.log(t),j(t),n=[],c=0,r=0,(n=t.map((function(e){return{value:e.Quantity,id:e.id,price:e.Price,singleprice:e.Price}}))).forEach((function(e){return c+=e.value})),n.forEach((function(e){return r+=e.price*e.value})),console.log(n),A(r),g(c),p(n),s(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log("666")}}),[]);var E=i;void 0!==E&&void 0!==x&&E.forEach((function(e){e.Quantity=x.filter((function(t){return t.id===e.id}))[0].value,e.Price=x.filter((function(t){return t.id===e.id}))[0].price}));return n?Object(w.jsx)(S,{}):Object(w.jsxs)("div",{className:"screen-style",children:[Object(w.jsx)(C,{heading:!1,docs:T.state}),Object(w.jsxs)("div",{className:"kart-container",children:[Object(w.jsxs)("div",{className:"kart-heading",children:[Object(w.jsx)("i",{style:{position:"relative",right:"45%"},class:"fas fa-shopping-cart fa-2x"}),Object(w.jsxs)("span",{style:{fontSize:"23px",textAlign:"center",position:"relative",right:"12%"},className:"badge bg-primary",children:["In Cart: ",v]}),Object(w.jsxs)("span",{style:{fontSize:"23px",marginRight:"20px"},class:"badge bg-primary",children:["Total: ",L,"\u20b9"]})]}),i.map((function(e){return Object(w.jsxs)("div",{className:"kart-item",children:[Object(w.jsx)("span",{className:"kart-span-the-image",children:Object(w.jsx)("img",{className:"kart-book-cover-style",src:e.CoverURL,alt:"lol"})}),Object(w.jsx)("span",{style:{display:"flex",height:"100%",width:"33%",flexDirection:"column",justifyContent:"center",flexWrap:"wrap",overflowX:"scroll"},children:Object(w.jsx)("span",{style:{fontSize:"18px"},className:"badge bg-secondary",children:e.Name})}),Object(w.jsxs)("div",{className:"control-bar-style",children:[Object(w.jsx)("button",{style:{fontSize:"22px",width:"40px"},onClick:function(){return function(e){var t=Object(l.a)(x);1!==t.filter((function(t){return t.id===e}))[0].value&&(t.filter((function(t){return t.id===e}))[0].value-=1,t.filter((function(t){return t.id===e}))[0].price-=t.filter((function(t){return t.id===e}))[0].singleprice,A(L-t.filter((function(t){return t.id===e}))[0].price),p(t),g(v-1))}(e.id)},className:"btn btn-secondary",children:"-"}),Object(w.jsxs)("span",{style:{fontSize:"22px"},className:"badge bg-light text-dark",children:["Quantity: ",x.filter((function(t){return t.id===e.id}))[0].value]}),Object(w.jsx)("button",{style:{fontSize:"22px",width:"40px"},onClick:function(){return function(e){var t=Object(l.a)(x);t.filter((function(t){return t.id===e}))[0].value+=1,t.filter((function(t){return t.id===e}))[0].price+=t.filter((function(t){return t.id===e}))[0].singleprice,A(L+t.filter((function(t){return t.id===e}))[0].singleprice),p(t),g(v+1),console.log(x)}(e.id)},className:"btn btn-secondary",children:"+"}),Object(w.jsx)("button",{style:{display:"flex",padding:"10px 10px 10px 10px",fontSize:"22px",width:"40px",justifyContent:"center"},onClick:function(){return function(e){var t=Object(l.a)(i),n=Object(l.a)(x),c=L-n.filter((function(t){return t.id===e}))[0].price,s=v-n.filter((function(t){return t.id===e}))[0].value;t=t.filter((function(t){return t.id!==e})),n=n.filter((function(t){return t.id!==e})),j(t),p(n),g(s),A(c)}(e.id)},className:"btn btn-danger",children:Object(w.jsx)("i",{class:"fas fa-trash"})})]}),Object(w.jsxs)("span",{style:{fontSize:"22px",position:"relative",left:"3%"},className:"badge bg-light text-dark",children:["Price:",x.filter((function(t){return t.id===e.id}))[0].price,"\u20b9"]})]})}))]}),i.length>0&&Object(w.jsx)(R,{orders:E,docs:T.state})]})},A=(n(55),n(56),n(35)),z=function(e){var t=e.duration,n=e.fade,c=void 0!==n&&n,s=e.variant,r=(e.alt,e.images),a=Object(o.f)(),i=r.documents.map((function(e){return{CoverURL:e.CoverURL}}));console.log(r.documents);for(var l=[],j=0;j<10;j++)l.push({src1:i[Math.floor(59*Math.random())+0].CoverURL,src2:i[Math.floor(59*Math.random())+0].CoverURL});var d=function(e){a("/book/".concat(e[10]+e[15],"/"),{state:r.documents.filter((function(t){return t.CoverURL===e}))})};return Object(w.jsx)("div",{className:"slider-container",children:Object(w.jsx)(A.a,{variant:s,fade:c,children:l.map((function(e){return Object(w.jsx)(A.a.Item,{interval:t,children:Object(w.jsxs)("div",{className:"double-frame",children:[Object(w.jsx)("span",{onClick:function(){d(e.src1)},className:"image-container",children:Object(w.jsx)("img",{className:"image-style",src:e.src1,alt:"lel"})}),Object(w.jsx)("span",{onClick:function(){d(e.src2)},className:"image-container",children:Object(w.jsx)("img",{className:"image-style",src:e.src2,alt:"lel"})})]})})}))})})},P=(n(60),function(e){var t=e.loading,n=void 0===t||t,s=e.docs,r=Object(o.f)(),a=Object(c.useState)(),i=Object(b.a)(a,2),l=i[0],j=i[1],h=Object(c.useState)(!0),f=Object(b.a)(h,2),x=f[0],p=f[1];Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:t=e.sent,j(t.categories),p(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);return x?Object(w.jsx)(S,{}):Object(w.jsx)("div",{className:"side-bar",children:Object(w.jsxs)("div",{id:"#category",className:"category-container",children:[Object(w.jsx)("p",{className:"heading",children:"Categories"}),l.map((function(e){return Object(w.jsx)("button",{onClick:function(){return function(e){r("/Category/".concat(e[0],"/").concat(e),{state:{category:e,docs:s}})}(e.id)},style:{fontSize:"18px",marginBottom:"5px",textAlign:"center",width:"100%"},className:"btn btn-info",children:Object(w.jsx)("span",{children:e.id})})}))]})})}),T=(n(61),function(e){var t=e.text,n=e.imgurl,c=e.doc,s=Object(o.f)();return Object(w.jsx)("div",{children:Object(w.jsx)("button",{onClick:function(){s("/book/".concat(n[10]+n[15],"/"),{state:[c]})},children:Object(w.jsxs)("div",{id:"img-container",className:"card-style",children:[Object(w.jsx)("img",{id:"card-img",alt:"AoT",src:"".concat(n)}),Object(w.jsx)("span",{id:"card-text",children:"".concat(t)})]})})})}),E=(n(62),function(){return Object(w.jsx)("div",{id:"footer",children:Object(w.jsxs)("div",{className:"absolute",children:[Object(w.jsx)("u",{children:Object(w.jsx)("h5",{children:"About Us:"})}),Object(w.jsx)("h6",{className:"first",children:"This Web Application is done by: D.Chadra Kiran"}),Object(w.jsx)("h6",{className:"second",children:"Karthik Emmadi"}),Object(w.jsx)("h6",{className:"first",children:"We are students of Vignana Bharathi Institute of Technology,Studying in 2nd year in Information Technology. We worked on this application as a part of our Participatory Learning Activity."}),Object(w.jsx)("h6",{className:"first",children:"Institute Address: Aushapur Village, Ghatkesar, MEDCHAL , 501301"}),Object(w.jsx)("hr",{size:"5",className:"third"}),Object(w.jsxs)("div",{className:"sixth",children:[Object(w.jsxs)("div",{className:"eighth",children:[Object(w.jsx)("u",{children:Object(w.jsx)("h5",{children:"Contact Us:"})}),Object(w.jsx)("h6",{className:"first",children:"Email: emmadikarthik924@gmail.com"}),Object(w.jsx)("h6",{className:"fourth",children:"chandra.dkiran@outlook.com"})]}),Object(w.jsx)("div",{className:"seventh"}),Object(w.jsxs)("div",{className:"ninth",children:[Object(w.jsx)("u",{children:Object(w.jsx)("h5",{children:"Follow Us:"})}),Object(w.jsxs)("h6",{className:"first",children:["Github: ",Object(w.jsx)("a",{href:"https://github.com/chandrakiran343",children:"karthik-924"})]}),Object(w.jsx)("h6",{className:"tenth",children:Object(w.jsx)("a",{href:"https://github.com/karthik-924",children:"chandrakiran343"})}),Object(w.jsx)("button",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{margin:"10px 20px 10px 20px"},className:"btn btn-default",children:Object(w.jsxs)("span",{className:"navbtn-style",children:[Object(w.jsx)("i",{style:{padding:"5px"},class:"fas fa-arrow-up"}),"Back to Top"]})})]})]})]})})}),U=function(){var e=Object(c.useState)(),t=Object(b.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!0),a=Object(b.a)(r,2),i=a[0],o=a[1],l=Object(c.useState)(),j=Object(b.a)(l,2),h=j[0],f=j[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:t=e.sent,s(t.docs),console.log(t),n=t.docs.filter((function(e){return"J.R.R. Tolkien"===e.Author})),f(n),o(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),i?Object(w.jsx)(S,{}):Object(w.jsxs)("div",{className:"container-style",children:[Object(w.jsx)("hr",{className:"hr-style"}),Object(w.jsx)(C,{docs:n}),Object(w.jsx)("hr",{className:"hr-style"}),Object(w.jsxs)("div",{className:"upper-body",children:[Object(w.jsx)(P,{loading:!1,docs:n}),Object(w.jsxs)("div",{className:"body",children:[Object(w.jsx)("span",{style:{fontSize:"30px",fontWeight:"bolder",marginLeft:"10vh"},children:"Popular Picks"}),Object(w.jsx)("div",{className:"slider-container",children:Object(w.jsx)(z,{images:{documents:n},variant:"dark"})}),Object(w.jsx)("hr",{style:{width:"100%",marginTop:"10px",border:"5px solid black"}}),Object(w.jsxs)("div",{className:"spotlight-style",children:[Object(w.jsxs)("span",{className:"banner-style",children:["Author SpotLight:- ",h[0].Author]}),Object(w.jsx)("hr",{}),Object(w.jsx)("span",{className:"series-name",children:"The Lord of the Rings"}),Object(w.jsx)("span",{style:{textAlign:"center",fontWeight:"bold"}}),Object(w.jsx)("div",{className:"card-container",children:h.map((function(e){return Object(w.jsx)(T,{doc:e,text:"NOW 41% OFF",imgurl:e.CoverURL})}))})]})]})]}),Object(w.jsx)(E,{})]})},W=(n(63),function(){var e=Object(o.e)(),t=Object(o.f)(),n=Object(c.useState)(!0),s=Object(b.a)(n,2),r=s[0],a=s[1],i=Object(c.useState)(),l=Object(b.a)(i,2),j=l[0],h=l[1],f=function(e){var t=j,n=0,c=0;return t=t.orders.filter((function(t){return t[0].id===e})),t[0].forEach((function(e){n+=e.Price,c+=e.Quantity})),{price:n,quantity:c}};Object(c.useEffect)((function(){try{console.log(j)}catch(e){}}),[]);var x=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,h(t),a(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return x(),r?Object(w.jsx)(S,{}):Object(w.jsxs)("div",{className:"first",children:[Object(w.jsxs)("div",{className:"container-style",children:[Object(w.jsx)("hr",{className:"hr-style"}),Object(w.jsx)(C,{docs:e.state}),Object(w.jsx)("hr",{className:"hr-style"}),Object(w.jsx)("h1",{children:"Order History"}),Object(w.jsx)("div",{className:"history-orders-container",children:j.orders.map((function(e){return Object(w.jsxs)("span",{className:"order-container",children:[Object(w.jsxs)("span",{style:{width:"100%",display:"flex",flexDirection:"row",borderBottom:"2px solid black",padding:"3px",justifyContent:"space-evenly"},children:[Object(w.jsxs)("span",{style:{fontSize:"20px",fontWeight:"bold"},children:["Ordered on: ",new Date(e[0].Timestamp).toLocaleDateString("IN")]}),Object(w.jsxs)("span",{style:{fontSize:"20px",fontWeight:"bold"},children:["Time: ",new Date(e[0].Timestamp).toTimeString().slice(0,8)]}),Object(w.jsxs)("span",{style:{fontSize:"20px",fontWeight:"bold"},children:["Price: \u20b9",f(e[0].id).price]}),Object(w.jsxs)("span",{style:{fontSize:"20px",fontWeight:"bold"},children:["Items bought: ",f(e[0].id).quantity]})]}),Object(w.jsx)("span",{className:"row-maker",children:e.map((function(e){return Object(w.jsxs)("span",{className:"order-item-container",children:[Object(w.jsx)("span",{children:Object(w.jsx)("img",{style:{cursor:"pointer"},onClick:function(){return t("/book/".concat(e.CoverURL[10]+e.CoverURL[15],"/"),{state:[e]})},src:e.CoverURL,alt:"lel"})}),Object(w.jsxs)("span",{className:"order-item-desc",children:[Object(w.jsx)("span",{style:{display:"flex",height:"11vh",width:"15vw",fontSize:"18px",overflow:"hidden"},children:e.Name}),Object(w.jsxs)("span",{style:{fontSize:"22px"},children:["Quantity:",e.Quantity]}),Object(w.jsxs)("span",{style:{fontSize:"22px"},children:["Price: \u20b9",e.Price]})]})]})}))})]})}))})]}),Object(w.jsx)(E,{})]})}),I=(n(64),function(){var e=Object(c.useState)(),t=Object(b.a)(e,2),n=t[0],s=t[1],r=Object(o.f)(),a=Object(o.e)(),i=Object(c.useState)(!0),l=Object(b.a)(i,2),j=l[0],h=l[1],f=a.state.category;Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(a.state.category);case 3:t=e.sent,s(t),h(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}));var x=function(e){console.log(e),r("/book/".concat(e.CoverURL[10]+e.CoverURL[15],"/"),{state:[e]})};return j?Object(w.jsx)(S,{}):Object(w.jsxs)("div",{children:[Object(w.jsx)(C,{id:f,docs:a.state.docs}),Object(w.jsx)("hr",{style:{color:"white"}}),Object(w.jsxs)("div",{className:"categorylist-style",children:[Object(w.jsx)(P,{loading:!1}),Object(w.jsxs)("div",{className:"categorybook-container",children:[Object(w.jsxs)("span",{className:"category-heading",children:["Selected category: ",a.state.category," "]}),Object(w.jsx)("hr",{style:{width:"100%",border:"2px solid black"}}),Object(w.jsx)("div",{className:"bookcontainer-style",children:n.map((function(e){return Object(w.jsxs)("div",{className:"book-style",children:[Object(w.jsx)("button",{style:{color:"rgb(59, 151, 252)",marginBottom:"5px",height:"20%"},onClick:function(){return x(e)},children:Object(w.jsx)("span",{style:{width:"100%",fontSize:"1em",textAlign:"center",fontWeight:"bolder"},children:e.Name})}),Object(w.jsxs)("div",{className:"content-holder",children:[Object(w.jsx)("span",{onClick:function(){return x(e)},className:"span-the-image",children:Object(w.jsx)("img",{className:"book-cover-style",src:e.CoverURL,alt:"lol"})}),Object(w.jsxs)("div",{className:"book-description",children:[Object(w.jsx)("h7",{style:{textAlign:"center",padding:"0px",fontWeight:"bolder",borderBottom:"0.5px solid black",borderTop:"0.5px solid black",width:"100%"},children:e.Author}),Object(w.jsxs)("h8",{style:{display:"flex",flexDirection:"row",fontWeight:"bolder",justifyContent:"space-between",padding:"0px",width:"100%",borderBottom:"0.5px solid black"},children:[Object(w.jsx)("p",{style:{marginBottom:"5px"},children:"Published: "+e.Published}),Object(w.jsx)("p",{style:{marginBottom:"5px"},children:e.Price+"\u20b9"}),Object(w.jsx)("p",{style:{marginBottom:"5px"},children:e.Rating+"/10 Rating"})]}),Object(w.jsx)("span",{style:{display:"flex",height:"68%",flexDirection:"column",flexWrap:"wrap",overflowY:"scroll",padding:"5px 10px 5px 10px"},children:e.Summary})]})]})]})}))})]})]}),Object(w.jsx)(E,{})]})}),B=(n(65),function(){var e=Object(o.e)(),t=Object(o.f)(),n=function(){var n=Object(u.a)(d.a.mark((function n(c){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.Quantity=1,n.next=3,N(c);case 3:t("/your-kart",{state:e.state});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"book-screen-style",children:[Object(w.jsx)(C,{heading:!1,docs:e.state}),Object(w.jsxs)("div",{className:"book-desc-container",children:[Object(w.jsxs)("span",{className:"book-image-container",children:[Object(w.jsx)("img",{className:"book-image-style",src:e.state[0].CoverURL,alt:"lel"}),Object(w.jsxs)("span",{style:{fontWeight:400},children:["Published: ",e.state[0].Published]}),Object(w.jsxs)("span",{style:{fontWeight:400},children:["Rating: ",e.state[0].Rating]}),Object(w.jsx)("button",{onClick:function(){return n(e.state[0])},className:"addkart-style",children:"Add to Kart"})]}),Object(w.jsxs)("span",{className:"book-desc-style",children:[Object(w.jsx)("span",{className:"book-heading-style",children:e.state[0].Name}),Object(w.jsx)("span",{children:e.state[0].Author}),Object(w.jsxs)("span",{className:"book-price-style",children:["\u20b9",e.state[0].Price]}),Object(w.jsx)("hr",{style:{width:"100%"}}),Object(w.jsx)("span",{className:"book-desc",children:e.state[0].Summary}),Object(w.jsx)("hr",{style:{width:"100%"}})]}),Object(w.jsx)("span",{className:e.state[0].Stock?"badge bg-info":"badge bg-danger",children:e.state[0].Stock?"Instock":"Out of Stock"})]})]})});var D=function(){return Object(w.jsx)(i.a,{children:Object(w.jsxs)(o.c,{children:[Object(w.jsx)(o.a,{path:"/test",element:Object(w.jsx)(B,{})}),Object(w.jsx)(o.a,{path:"/",element:Object(w.jsx)(U,{})}),Object(w.jsx)(o.a,{path:"/OrderHistory",element:Object(w.jsx)(W,{})}),Object(w.jsx)(o.a,{path:"/Category/*",element:Object(w.jsx)(I,{})}),Object(w.jsx)(o.a,{path:"/your-kart",element:Object(w.jsx)(L,{})}),Object(w.jsx)(o.a,{path:"/book/*",element:Object(w.jsx)(B,{})})]})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};n(37),n(66);a.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(D,{})}),document.getElementById("root")),H()}},[[67,1,2]]]);
//# sourceMappingURL=main.bfb38569.chunk.js.map