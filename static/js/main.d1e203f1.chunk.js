(this["webpackJsonpproject-mercado-livre"]=this["webpackJsonpproject-mercado-livre"]||[]).push([[0],{31:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),a=c(20),i=c.n(a),s=c(7),j=c(3),o=c(18),u=c(25),l=c(9),b=Object(n.createContext)();var d=c(1);var O=function(e){var t=e.children,c=Object(n.useState)([]),r=Object(l.a)(c,2),a=r[0],i=r[1],s=Object(n.useState)(""),j=Object(l.a)(s,2),O=j[0],h=j[1],m=Object(n.useState)([]),x=Object(l.a)(m,2),p=x[0],f=x[1],v=Object(n.useState)(""),C=Object(l.a)(v,2),g=C[0],N=C[1],E=Object(n.useState)(""),k=Object(l.a)(E,2),y=k[0],q=k[1],S=Object(n.useState)([]),B=Object(l.a)(S,2),P=B[0],w=B[1],z=Object(n.useState)([]),M=Object(l.a)(z,2),T=M[0],$=M[1],A=Object(n.useState)(0),F=Object(l.a)(A,2),I=F[0],L=F[1];Object(n.useEffect)((function(){var e;(e=O,fetch("https://api.mercadolibre.com/sites/MLB/search?q=$".concat(e)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Api Error"))}))).then((function(e){i(e.results)})).catch((function(e){alert("Ocorreu um error ao buscar os items")}))}),[O]),Object(n.useEffect)((function(){fetch("https://api.mercadolibre.com/sites/MLB/categories").then((function(e){return e.ok?e.json():Promise.reject(new Error("Api Error"))})).then((function(e){f(e)})).catch((function(e){alert("Ocorreu um error ao buscar os items")}))}),[]),Object(n.useEffect)((function(){var e,t;(e=g,t=y,fetch("https://api.mercadolibre.com/sites/MLB/search?category=$".concat(e,"&q=$").concat(t)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Api Error"))}))).then((function(e){i(e.results)})).catch((function(e){alert("Ocorreu um error ao buscar os items")}))}),[g,y]);var _={items:a,setBusca:h,busca:O,category:p,setId:N,setName:q,details:P,createDetails:function(e,t,c,n,r,a){w([{imagem:e,title:t,price:c,marca:n,estado:r,city:a}])},createCart:function(e,t,c,n){$([].concat(Object(u.a)(T),[{imagem:e,title:t,price:c,quant:n}]))},cart:T,updateCart:function(e,t){$(T.map((function(c){return c.title===e?Object(o.a)(Object(o.a)({},c),{},{quant:t}):c})))},price:I,sumTotal:function(e){L(I+=e)},subtractTotal:function(e){L(I-=e)},removedCart:function(e){$(T.slice(0,e).concat(T.slice(e+1)))},setPrice:L};return Object(d.jsx)("div",{children:Object(d.jsx)(b.Provider,{value:_,children:t})})},h=c(22),m=c(23);c(31);var x=function(){var e=Object(n.useContext)(b).setBusca,t=Object(n.useState)(""),c=Object(l.a)(t,2),r=c[0],a=c[1],i=Object(j.g)().location.pathname;return Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:"/"===i?Object(d.jsxs)("div",{className:"container-header",children:[Object(d.jsx)("input",{type:"text",value:r,placeholder:"Buscar produtos, marcas e muito mais...",onChange:function(e){var t=e.target;return a(t.value)}}),Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(h.a,{onClick:function(){e(r),a("")}}),Object(d.jsx)(m.a,{})]})]}):Object(d.jsx)("div",{className:"container-header",style:{padding:"41px"}})})})};c(37);var p=function(){var e=Object(n.useContext)(b),t=e.category,c=e.setId,r=e.setName;return Object(d.jsx)("div",{className:"container-category",children:t.map((function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"radio",id:e.name,value:e.name,name:"category",onClick:function(){c(e.id),r(e.name)}}),Object(d.jsx)("label",{htmlFor:e.name,children:e.name})]},t)}))})};c(38);var f=function(){var e=Object(n.useContext)(b),t=e.items,c=e.createDetails;return Object(d.jsx)("div",{className:"container-items",children:t.map((function(e,t){return Object(d.jsx)("div",{className:"items",children:Object(d.jsxs)(s.b,{to:"/productdetails",onClick:function(){return c(e.thumbnail,e.title,e.price,e.attributes[0].value_name,e.attributes[1].value_name,e.address.state_name)},children:[Object(d.jsx)("img",{src:e.thumbnail,alt:e.title}),Object(d.jsx)("h2",{children:e.title}),Object(d.jsxs)("p",{children:["R$ ",e.price]})]})},t)}))})};var v=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),Object(d.jsx)(f,{}),Object(d.jsx)(p,{})]})};c(39);var C=function(){var e=Object(n.useContext)(b),t=e.details,c=e.createCart,r=e.cart;return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),t.map((function(e,t){return Object(d.jsx)("div",{className:"container-details",children:Object(d.jsxs)("div",{className:"details",children:[Object(d.jsx)("img",{src:e.imagem,alt:e.title}),Object(d.jsx)("h2",{children:e.title}),Object(d.jsx)("h4",{children:e.price}),Object(d.jsx)("p",{children:"Especifica\xe7\xf5es:"}),Object(d.jsxs)("p",{children:["Marca: ",e.marca]}),Object(d.jsxs)("p",{children:["Estado de conserva\xe7\xe3o: ",e.estado]}),Object(d.jsxs)("p",{children:["Cidade: ",e.city]}),r.filter((function(t){return t.title===e.title})).length>0?Object(d.jsx)(j.a,{to:"/cart"}):Object(d.jsx)(s.b,{to:"/cart",children:Object(d.jsx)("button",{onClick:function(){return c(e.imagem,e.title,e.price,0)},children:"Adicionar ao Carrinho"})})]})},t)}))]})};c(40);var g=function(){var e=Object(n.useContext)(b),t=e.details,c=e.cart,r=e.updateCart,a=e.price,i=(e.setPrice,e.removedCart),j=Object(n.useContext)(b),o=j.sumTotal,u=j.subtractTotal;return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),Object(d.jsxs)("div",{className:"container-cart",children:[c.map((function(e,t){return Object(d.jsxs)("div",{className:"cart",children:[Object(d.jsx)("img",{src:e.imagem,alt:e.title}),Object(d.jsx)("p",{children:e.title}),Object(d.jsx)("p",{children:e.price}),e.quant>0&&Object(d.jsx)(s.b,{onClick:function(){r(e.title,e.quant-1),u(e.price)},children:Object(d.jsx)("p",{children:"-"})}),Object(d.jsx)("p",{children:e.quant}),Object(d.jsx)(s.b,{onClick:function(){r(e.title,e.quant+1),o(e.price)},children:Object(d.jsx)("p",{children:"+"})}),Object(d.jsx)("h3",{children:e.price*e.quant}),Object(d.jsx)("button",{onClick:function(){i(t),u(e.price*e.quant)},children:"Excluir"})]},t)})),Object(d.jsxs)("div",{className:"cart-vazio",children:[0===t.length&&0===a&&Object(d.jsx)("h5",{children:"O seu carrinho est\xe1 vazio"}),Object(d.jsx)(s.b,{to:"/",children:"Continuar comprando"})]}),Object(d.jsxs)("div",{className:"cart-finalizar",children:[Object(d.jsxs)("h2",{children:["Total da compra: R$ ",a.toFixed(2)]}),Object(d.jsx)(s.b,{to:"/finished",children:Object(d.jsx)("button",{children:"Finalizar compra"})})]})]})]})},N=(c(41),c(24));var E=function(){return Object(d.jsxs)("div",{className:"container-finished",children:[Object(d.jsx)(N.a,{}),Object(d.jsx)("h1",{children:"Parab\xe9ns, sua compra foi finalizada com sucesso!"}),Object(d.jsx)("p",{children:"N\xfamero da opera\xe7\xe3o: 6254588558904"})]})};c(42);var k=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(O,{children:Object(d.jsx)(s.a,{children:Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.b,{exact:!0,path:"/",component:v}),Object(d.jsx)(j.b,{path:"/productdetails",component:C}),Object(d.jsx)(j.b,{path:"/cart",component:g}),Object(d.jsx)(j.b,{path:"/finished",component:E})]})})})})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d1e203f1.chunk.js.map