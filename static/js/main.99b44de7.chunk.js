(this["webpackJsonpnd0191-myreads-starter"]=this["webpackJsonpnd0191-myreads-starter"]||[]).push([[0],{31:function(e,t,c){},33:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(26),a=c.n(s),o=(c(31),c(8)),r=c(4),i=c.n(r),l=c(6),j=c(5),d=(c(33),c(3)),b=c(10),h=c(1);var u=function(e){var t=e.book,c=e.updateShelf;return Object(h.jsxs)("div",{className:"book",children:[Object(h.jsxs)("div",{className:"book-top",children:[Object(h.jsx)(b.b,{to:"/Udacity-React-Project/book/".concat(t.id),style:{color:"unset",textDecoration:"unset"},children:Object(h.jsx)("div",{className:"book-cover",style:{width:128,height:192,backgroundImage:"url(".concat(t.imageLinks?t.imageLinks.thumbnail:"",")")}})}),Object(h.jsx)("div",{className:"book-shelf-changer",children:Object(h.jsxs)("select",{value:t.shelf?t.shelf:"none",onChange:function(e){return c(t,e.target.value)},children:[Object(h.jsx)("option",{disabled:!0,children:"Move to..."}),Object(h.jsx)("option",{value:"currentlyReading",children:"Currently Reading"}),Object(h.jsx)("option",{value:"wantToRead",children:"Want to Read"}),Object(h.jsx)("option",{value:"read",children:"Read"}),Object(h.jsx)("option",{value:"none",children:"None"})]})})]}),Object(h.jsxs)(b.b,{to:"/Udacity-React-Project/book/".concat(t.id),style:{color:"unset",textDecoration:"unset"},children:[Object(h.jsx)("div",{className:"book-title",children:t.title}),Object(h.jsx)("div",{className:"book-authors",children:t.authors})]})]})};var f=function(e){var t=e.shelfName,c=e.books,n=e.updateShelf;return Object(h.jsxs)("div",{className:"bookshelf",children:[Object(h.jsx)("h2",{className:"bookshelf-title",children:t}),Object(h.jsx)("div",{className:"bookshelf-books",children:Object(h.jsx)("ol",{className:"books-grid",children:c.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(u,{book:e,updateShelf:n})},e.id)}))})})]})};var O=function(e){var t=e.books,c=e.updateShelf;console.log(t);var s=Object(n.useState)(t),a=Object(j.a)(s,2),o=a[0],r=a[1];return Object(n.useEffect)((function(){t.filter((function(e){return"evuwdDLfAyYC"===e.id}))&&r(t.filter((function(e){return"evuwdDLfAyYC"!==e.id})))}),[]),Object(h.jsxs)("div",{className:"list-books",children:[Object(h.jsx)("div",{className:"list-books-title",children:Object(h.jsx)("h1",{children:"MyReads"})}),Object(h.jsx)("div",{className:"list-books-content",children:Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{shelfName:"Currently Reading",books:o.filter((function(e){return"currentlyReading"===e.shelf})),updateShelf:c}),Object(h.jsx)(f,{shelfName:"Want to Read",books:o.filter((function(e){return"wantToRead"===e.shelf})),updateShelf:c}),Object(h.jsx)(f,{shelfName:"Read",books:o.filter((function(e){return"read"===e.shelf})),updateShelf:c})]})}),Object(h.jsx)("div",{className:"open-search",children:Object(h.jsx)(b.b,{to:"/Udacity-React-Project/search",children:"Add a book"})})]})},x=c(9),p=c(19),v="https://reactnd-books-api.udacity.com",m=localStorage.token;m||(m=localStorage.token=Math.random().toString(36).substr(-8));var k={Accept:"application/json",Authorization:m},N=function(e,t){return fetch("".concat(v,"/books/").concat(e.id),{method:"PUT",headers:Object(p.a)(Object(p.a)({},k),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))},g=function(e,t){return fetch("".concat(v,"/search"),{method:"POST",headers:Object(p.a)(Object(p.a)({},k),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then((function(e){return e.json()})).then((function(e){return e.books}))},y=c(25),S=c.n(y),R=function(e,t){var c=Object(n.useState)(e),s=Object(j.a)(c,2),a=s[0],o=s[1];return Object(n.useEffect)((function(){var c=setTimeout((function(){o(e)}),t);return function(){clearTimeout(c)}}),[e,t]),a};R.propTypes={val:S.a.string,delay:S.a.number};var w=R;var C=function(){return Object(h.jsx)("div",{className:"back",children:Object(h.jsxs)(b.b,{to:"/",children:[Object(h.jsx)("p",{className:"close-search"}),Object(h.jsx)("p",{children:"back to home page"})]})})};var T=function(e){var t=e.books,c=e.updateShelf,s=Object(n.useState)([]),a=Object(j.a)(s,2),o=a[0],r=a[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),f=b[0],O=b[1],p=w(f,500);return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var c,n,s,a,o,l,j;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(p);case 2:if((c=e.sent).error)r([]);else{n=Object(x.a)(c);try{for(n.s();!(s=n.n()).done;){a=s.value,o=Object(x.a)(t);try{for(o.s();!(l=o.n()).done;)(j=l.value).id===a.id&&(a.shelf=j.shelf)}catch(i){o.e(i)}finally{o.f()}}}catch(i){n.e(i)}finally{n.f()}r(c)}case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}p.trim()?function(){e.apply(this,arguments)}():r([])}),[p]),Object(h.jsxs)("div",{className:"search-books",children:[Object(h.jsxs)("div",{className:"search-books-bar",children:[Object(h.jsx)(C,{}),Object(h.jsx)("div",{className:"search-books-input-wrapper",children:Object(h.jsx)("input",{value:f,onChange:function(e){O(e.target.value)},type:"text",placeholder:"Search by title, author, or ISBN"})})]}),Object(h.jsx)("div",{className:"search-books-results",children:Object(h.jsx)("ol",{className:"books-grid",children:0!==o.length?o.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(u,{book:e,updateShelf:c})},e.id)})):Object(h.jsx)("li",{children:"Book Not Found"})})})]})};var P=function(){return Object(h.jsxs)("div",{className:"not-found",children:[Object(h.jsx)("p",{children:"404 Not Found"}),Object(h.jsxs)("div",{children:[Object(h.jsx)(C,{}),Object(h.jsx)("p",{children:"Back To Home"})]})]})};var L=function(e){var t=e.books,c=Object(d.n)(),n=t.filter((function(e){return e.id===c.id}))&&t.filter((function(e){return e.id===c.id}))[0];return n?Object(h.jsxs)("div",{className:"book-details",children:[Object(h.jsx)(C,{}),Object(h.jsxs)("div",{className:"book-header",children:[Object(h.jsx)("div",{className:"book-img",children:n.imageLinks?Object(h.jsx)("img",{src:n.imageLinks.thumbnail,alt:"",width:"200"}):Object(h.jsx)("div",{className:"palce-holder",children:"no image"})}),Object(h.jsxs)("div",{className:"book-header-info",children:[Object(h.jsxs)("div",{className:"book-header-title",children:[Object(h.jsx)("span",{children:"Title"}),": ",n.title]}),Object(h.jsxs)("div",{className:"book-header-subtitle",children:[Object(h.jsx)("span",{children:"Subtitle"}),": ",n.subtitle]}),Object(h.jsxs)("div",{className:"book-header-shelf",children:[Object(h.jsx)("span",{children:"Shelf"}),": ",n.shelf]}),Object(h.jsxs)("div",{className:"book-header-pageCount",children:[Object(h.jsx)("span",{children:"Page count"}),": ",n.pageCount]}),Object(h.jsxs)("div",{className:"book-header-language",children:[Object(h.jsx)("span",{children:"Language"}),": ",n.language]}),Object(h.jsxs)("div",{className:"book-header-contentVersion",children:[Object(h.jsx)("span",{children:"Content version"}),": ",n.contentVersion]}),Object(h.jsxs)("div",{className:"book-header-authors",children:[Object(h.jsx)("span",{children:"Authors"}),": ",n.authors]})]})]}),Object(h.jsx)("div",{className:"book-body",children:n.description?n.description:"no description"})]}):Object(h.jsx)(P,{})};var U=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)(Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"/books"),{headers:k}).then((function(e){return e.json()})).then((function(e){return e.books}));case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)}))),[]);var a=function(){var e=Object(l.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.shelf=n,e.next=3,N(t,n).then((function(){s([].concat(Object(o.a)(c.filter((function(e){return e.id!==t.id}))),[t]))}));case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/",element:Object(h.jsx)(O,{books:c,updateShelf:a})}),Object(h.jsx)(d.a,{path:"/Udacity-React-Project",element:Object(h.jsx)(O,{books:c,updateShelf:a})}),Object(h.jsx)(d.a,{path:"/Udacity-React-Project/search",element:Object(h.jsx)(T,{books:c,updateShelf:a})}),Object(h.jsx)(d.a,{path:"/Udacity-React-Project/book/:id",element:Object(h.jsx)(L,{books:c})}),Object(h.jsx)(d.a,{path:"*",element:Object(h.jsx)(P,{})})]})};a.a.render(Object(h.jsx)(b.a,{children:Object(h.jsx)(U,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.99b44de7.chunk.js.map