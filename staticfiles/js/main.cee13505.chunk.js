(this["webpackJsonpevernote-clone"]=this["webpackJsonpevernote-clone"]||[]).push([[0],{130:function(e,t,a){e.exports=a(177)},135:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},175:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),i=(a(135),a(24)),l=a(16),c=a(29),u=a(30),m=a(31),p=a(64),d=a(46),g=a(12),h=a.n(g),f=a(13),b=a(239),v=a(223),E=a(219),w=a(235),N=a(217),x=a(225),y=a(236),S=a(40),O=a.n(S),k=a(58),j=a(105),C=a(218),I=a(41),T=a(21),D=a.n(T),A=function(e,t){return{type:"AUTH_FAIL",error:e,response:t}},_=function(e,t){return{type:"AUTH_SUCCESS",token:e,username:t}},W=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("user"),{type:"AUTH_LOGOUT"}},B=function(e){return function(t){setTimeout((function(){t(W())}),1e3*e)}},U=a(17),F=(a(56),a(224));function P(){return r.a.createElement(k.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(N.a,{color:"inherit",href:"#"},"Notemaster")," ",(new Date).getFullYear(),".")}var H=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var L=Object(I.b)((function(e){return{loading:e.loading,error:e.error,token:e.token,response:e.response}}),(function(e){return{onAuth:function(t,a){return e(function(e,t){return function(a){return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:"AUTH_START"}),n.next=3,h.a.awrap(D.a.post("https://notemaster.herokuapp.com/api/auth/login/",{username:e,password:t}).then((function(t){var n=t.data.key,r=new Date((new Date).getTime()+36e5);localStorage.setItem("token",n),localStorage.setItem("expirationDate",r),localStorage.setItem("user",e),a(_(n,e)),a(B(3600))})).catch((function(e){a(A(e,e.response))})));case 3:case"end":return n.stop()}}))}}(t,a))}}}))((function(e,t){var a=H(),n=r.a.useState(),o=Object(f.a)(n,2),s=o[0],i=o[1],l=r.a.useState(""),c=Object(f.a)(l,2),u=c[0],m=c[1],p=r.a.useState(""),d=Object(f.a)(p,2),g=d[0],S=d[1];function j(){return""==={username:u}.username||""==={password:g}.password}return r.a.createElement(C.a,{component:"main",maxWidth:"xs"},r.a.createElement(E.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(b.a,{className:a.avatar},r.a.createElement(O.a,null)),r.a.createElement(k.a,{component:"h1",variant:"h5"},"Sign in"),e.error?r.a.createElement(k.a,{component:"h1",color:"error",variant:"h5"},s):null,r.a.createElement("form",{className:a.form,onSubmit:function(t){var a,n,r;return h.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t.preventDefault(),a=t.target.username.value,n=t.target.password.value,o.next=5,h.a.awrap(e.onAuth(a,n));case 5:null===nt.getState().token&&i(Object.values(nt.getState().response.data)),nt.getState().token&&(r="Welcome "+a,U.b.success(r,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1}),setTimeout((function(){e.history.push("/dashboard/")}),5e3));case 7:case"end":return o.stop()}}))},noValidate:!0},r.a.createElement(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"text",label:"Username",name:"username",autoFocus:!0,onChange:function(e){m(e.target.value),j()}}),r.a.createElement(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){S(e.target.value),j()}}),r.a.createElement(U.a,null),r.a.createElement(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,disabled:j()},e.loading?r.a.createElement(F.a,{color:"secondary"}):"Sign In"),r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(N.a,{href:"/forgot-password/",variant:"body2"},"Forgot password?")),r.a.createElement(x.a,{item:!0},r.a.createElement(N.a,{href:"/signup/",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(y.a,{mt:8},r.a.createElement(P,null)))}));function z(){return r.a.createElement(k.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(N.a,{color:"inherit",href:""},"Notemaster")," ",(new Date).getFullYear(),".")}var q=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var R=Object(I.b)((function(e){return{error:e.error,loading:e.loading,token:e.token,response:e.response}}),(function(e){return{onAuth:function(t,a,n,r,o,s){return e(function(e,t,a,n,r,o){return function(s){return h.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return s({type:"AUTH_START"}),i.next=3,h.a.awrap(D.a.post("https://notemaster.herokuapp.com/api/auth/registration/",{username:a,email:n,first_name:e,last_name:t,password1:r,password2:o}).then((function(e){var t=e.data.key,n=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("user",a),localStorage.setItem("expirationDate",n),s(_(t,a)),s(B(3600))})).catch((function(e){s(A(e,e.response))})));case 3:case"end":return i.stop()}}))}}(t,a,n,r,o,s))}}}))((function(e){var t=q(),a=Object(n.useState)(""),o=Object(f.a)(a,2),s=o[0],i=o[1],l=Object(n.useState)(""),c=Object(f.a)(l,2),u=c[0],m=c[1],p=Object(n.useState)(""),d=Object(f.a)(p,2),g=d[0],S=d[1],j=Object(n.useState)(""),I=Object(f.a)(j,2),T=I[0],D=I[1],A=Object(n.useState)(""),_=Object(f.a)(A,2),W=_[0],B=_[1],P=Object(n.useState)(""),H=Object(f.a)(P,2),L=H[0],R=H[1],Y=r.a.useState(),V=Object(f.a)(Y,2),Z=V[0],$=V[1],G=Object(n.useState)(!1),M=Object(f.a)(G,2),J=M[0],X=M[1],K=Object(n.useState)(!1),Q=Object(f.a)(K,2),ee=Q[0],te=Q[1],ae=Object(n.useState)(!1),ne=Object(f.a)(ae,2),re=ne[0],oe=ne[1],se=Object(n.useState)(!1),ie=Object(f.a)(se,2),le=ie[0],ce=ie[1],ue=Object(n.useState)(!1),me=Object(f.a)(ue,2),pe=me[0],de=me[1],ge=function(){return""===s||""===u||""===g||""===T||""===L||""===W||!1!==J||!1!==ee||!1!==re};return r.a.createElement(C.a,{component:"main",maxWidth:"xs"},r.a.createElement(E.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(b.a,{className:t.avatar},r.a.createElement(O.a,null)),r.a.createElement(k.a,{component:"h1",variant:"h5"},"Sign up"),e.error?r.a.createElement(k.a,{component:"h1",color:"error",variant:"h5"},Z):null,r.a.createElement("form",{className:t.form,onSubmit:function(t){var a,n,r,o,s,i,l;return h.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t.preventDefault(),a=t.target.email.value,n=t.target.firstName.value,r=t.target.lastName.value,o=t.target.password1.value,s=t.target.password2.value,i=t.target.username.value,c.next=9,h.a.awrap(e.onAuth(n,r,i,a,o,s));case 9:null===nt.getState().token&&$(Object.values(nt.getState().response.data)),nt.getState().token&&(l="Welcome "+i,U.b.success(l,{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1}),setTimeout((function(){e.history.push("/dashboard/")}),5e3));case 11:case"end":return c.stop()}}))},noValidate:!0},r.a.createElement(x.a,{container:!0,spacing:2},r.a.createElement(x.a,{item:!0,xs:12,sm:6},r.a.createElement(w.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:function(e){i(e.target.value),ge()}})),r.a.createElement(x.a,{item:!0,xs:12,sm:6},r.a.createElement(w.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",onChange:function(e){m(e.target.value),ge()}})),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",error:J,autoComplete:"email",onChange:function(e){B(e.target.value),function(e){X(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase()))}(e.target.value),ge()}}),J?r.a.createElement(k.a,{color:"error"},"Enter a valid email"):null),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",error:ee,onChange:function(e){S(e.target.value),function(e){/^([a-zA-Z0-9@/./+/-/_]+)$/.test(String(e).trim().toLowerCase())||e.trim(),te(!1)}(e.target.value),ge()}}),ee?r.a.createElement(k.a,{color:"error"},"Username can only contain 150 characters or fewer. Letters, digits and @/./+/-/_ only."):null),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password1",label:"Password",type:"password",id:"password1",autoComplete:"current-password",error:re||le,onChange:function(e){var t;D(e.target.value),t=e.target.value,/^([0-9]+)$/.test(t)||t.length<8?oe(!0):oe(!1),ge()},onFocus:function(e){de(!0)},onBlur:function(e){de(!1)}}),pe?r.a.createElement(n.Fragment,null,r.a.createElement(k.a,{color:"primary"},"Your password can't be too similar to your other personal information."),r.a.createElement(k.a,{color:"primary"},"Your password must contain at least 8 characters."),r.a.createElement(k.a,{color:"primary"},"Your password can't be a commonly used password."),r.a.createElement(k.a,{color:"primary"},"Your password can't be entirely numeric.")):null),r.a.createElement(x.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Confrim Password",type:"password",id:"password2",autoComplete:"current-password",error:le,onChange:function(e){R(e.target.value),function(e){ce(T!==e)}(e.target.value),ge()}}),le?r.a.createElement(k.a,{color:"secondary"},"Password do not match"):null)),r.a.createElement(U.a,null),r.a.createElement(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,disabled:ge()},e.loading?r.a.createElement(F.a,{color:"secondary"}):"Sign Up"),r.a.createElement(x.a,{container:!0,justify:"flex-end"},r.a.createElement(x.a,{item:!0},r.a.createElement(N.a,{to:"/login/",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(y.a,{mt:5},r.a.createElement(z,null)))})),Y=a(69),V=a.n(Y);function Z(){return r.a.createElement(k.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(N.a,{color:"inherit",href:"#"},"Notemaster")," ",(new Date).getFullYear(),".")}var $=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var G=function(e){var t=$(),a=Object(n.useState)(!0),o=Object(f.a)(a,2),s=o[0],i=o[1];return r.a.createElement(C.a,{component:"main",maxWidth:"xs"},r.a.createElement(E.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(V.a,{className:t.avatar},r.a.createElement(O.a,null)),r.a.createElement(k.a,{component:"h1",variant:"h5"},"Forgot Password"),r.a.createElement("form",{className:t.form,onSubmit:function(t){t.preventDefault();var a=t.target.email.value;D.a.post("https://notemaster.herokuapp.com/api/auth/password/reset/",{email:a}).then((function(t){"Password reset e-mail has been sent."===t.data.detail&&(U.b.success("Email has been sent successfully!",{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1}),setTimeout((function(){e.history.push("/password-reset/done/")}),5e3))})).catch((function(e){console.log(e)}))},noValidate:!0},r.a.createElement(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,error:s,id:"text",label:"Email",name:"email",autoFocus:!0,onChange:function(e){var t;t=e.target.value,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())?i(!1):i(!0)}}),r.a.createElement(U.a,null),r.a.createElement(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,disabled:s},"Sign In"),r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(N.a,{href:"/login/",variant:"body2"},"Login")),r.a.createElement(x.a,{item:!0},r.a.createElement(N.a,{href:"/signup/",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(y.a,{mt:8},r.a.createElement(Z,null)))},M=a(9),J=a(19),X=(a(159),a(5)),K=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"calc(100% - 35px)",position:"absolute",left:"0",width:"300px",boxShadow:"0px 0px 2px black"},newChatBtn:{borderRadius:"0px"},unreadMessage:{color:"red",position:"absolute",top:"0",right:"5px"},newNoteBtn:{width:"100%",height:"35px",borderBottom:"1px solid black",borderRadius:"0px",backgroundColor:"#fff",textAlign:"center",fontWeight:"700",color:"#3f51b5","&:hover":{backgroundColor:"#88a2ce"}},sidebarContainer:{marginTop:"0px",width:"auto",height:"100%",boxSizing:"border-box",float:"left",overflowY:"scroll",overflowX:"hidden"},newNoteInput:{width:"100%",margin:"0px",height:"35px",outline:"none",border:"none",paddingLeft:"5px","&:focus":{outline:"2px solid rgba(81, 203, 238, 1)"}},newNoteSubmitBtn:{width:"100%",backgroundColor:"#28787c",borderRadius:"0px",color:"white"}}},Q=a(222),ee=a(228),te=function(e){return{listItem:{cursor:"pointer"},textSection:{maxWidth:"85%"},deleteIcon:{position:"absolute",right:"5px",top:"calc(50% - 15px)","&:hover":{color:"red"}}}},ae=a(226),ne=a(227),re=a(106),oe=a.n(re);var se=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).selectNote=function(e,t){return a.props.selectNote(e,t)},a.deleteNote=function(e){window.confirm("Are you sure you want to delete: ".concat(e.title))&&a.props.deleteNote(e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props,n=a._index,o=a._note,s=a.classes,i=a.selectedNoteIndex;return r.a.createElement("div",{key:n},r.a.createElement(ae.a,{className:s.listitem,selected:i===n,alignItems:"flex-start"},r.a.createElement("div",{className:s.textSection,onClick:function(){return t.selectNote(o,n)}},r.a.createElement(ne.a,{primary:o.title.substring(0,15)+"...",secondary:(e=o.body.substring(0,15),e.replace(/<[^>]*>?/gm,"")+"...")})),r.a.createElement(oe.a,{onClick:function(){return t.deleteNote(o)},className:s.deleteIcon})))}}]),t}(n.Component),ie=Object(X.a)(te)(se),le=(a(160),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).newNoteBtnClick=function(){console.log("New Note "),e.setState({title:null,addingNote:!e.state.addingNote})},e.updateTitle=function(t){e.setState({title:t})},e.newNote=function(){e.props.newNote(e.state.title),e.setState({title:null,addingNote:!1})},e.selectNote=function(t,a){e.props.selectNote(t,a)},e.deleteNote=function(t){e.props.deleteNote(t)},e.state={addingNote:!1,title:null},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.notes,n=t.classes,o=t.selectedNoteIndex;return a?r.a.createElement("div",{className:"".concat(n.sidebarContainer," ","test")},r.a.createElement(v.a,{onClick:this.newNoteBtnClick,className:n.newNoteBtn},this.state.addingNote?"Cancel":"New Note"),this.state.addingNote?r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:n.newNoteInput,placeholder:"Enter Note title",onKeyUp:function(t){return e.updateTitle(t.target.value)}}),r.a.createElement(v.a,{className:n.newNoteSubmitBtn,onClick:this.newNote},"Submit Note")):null,r.a.createElement(Q.a,null,a.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(ie,{_note:t,_index:a,selectedNoteIndex:o,selectNote:e.selectNote,deleteNote:e.deleteNote}),r.a.createElement(ee.a,null))})))):r.a.createElement("div",null,"Add a note!")}}]),t}(n.Component)),ce=Object(X.a)(K)(le),ue=a(109),me=a.n(ue),pe=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"calc(100% - 35px)",position:"absolute",left:"0",width:"300px",boxShadow:"0px 0px 2px black"},titleInput:{height:"50px",boxSizing:"border-box",border:"none",padding:"5px",fontSize:"24px",width:"100%",backgroundColor:"#29487d",color:"white",paddingLeft:"50px"},editIcon:{position:"fixed",top:"100px",color:"red"},editorContainer:{height:"100%",boxSizing:"border-box"}}},de=a(107),ge=a.n(de),he=a(108),fe=a.n(he),be=(a(175),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).updateBody=function(t){return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(e.setState({text:t}));case 2:e.update();case 3:case"end":return a.stop()}}))},e.update=function(e,t,a){var n,r;return function(){function o(){n=null,a||(r=e.apply(s,i))}var s=this,i=arguments;return clearTimeout(n),n=setTimeout(o,t),a&&!n&&(r=e.apply(s,i)),r}}((function(){e.props.noteUpdate(e.state.id,{title:e.state.title,body:e.state.text}),U.b.success("Saved!",{position:"top-right",autoClose:1e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1})}),1500),e.updateTitle=function(t){return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(e.setState({title:t}));case 2:e.update();case 3:case"end":return a.stop()}}))},e.state={text:"",title:"",id:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({text:this.props.selectedNote.body,title:this.props.selectedNote.title,id:this.props.selectedNote.id})}},{key:"componentDidUpdate",value:function(){this.props.selectedNote.id!==this.state.id&&this.setState({text:this.props.selectedNote.body,title:this.props.selectedNote.title,id:this.props.selectedNote.id})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(me.a,{className:t.editIcon}),r.a.createElement("input",{className:t.titleInput,placeholder:"Note title",value:this.state.title?this.state.title:"",onChange:function(t){return e.updateTitle(t.target.value)}}),r.a.createElement(U.a,null),r.a.createElement(ge.a,{editor:fe.a,data:this.state.text,onChange:function(t,a){var n=a.getData();e.updateBody(n),console.log({event:t,editor:a,data:n})},onBlur:function(e,t){console.log("Blur.",t)},onFocus:function(e,t){console.log("Focus.",t)}}))}}]),t}(r.a.Component)),ve=Object(X.a)(pe)(be),Ee=a(4),we=a(237),Ne=a(229),xe=a(230),ye=a(231),Se=a(110),Oe=a.n(Se),ke=a(113),je=a.n(ke),Ce=a(114),Ie=a.n(Ce),Te=a(70),De=function(e){return{root:{display:"flex"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(Te.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}},Ae=a(112),_e=a.n(Ae),We=a(240),Be=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).getNotesFromDb=function(){D.a.get("https://notemaster.herokuapp.com/api/notes/").then((function(t){return e.setState({notes:t.data})})).catch((function(e){console.log(e)}))},e.selectNote=function(t,a){return e.setState({selectedNoteIndex:a,selectedNote:t})},e.noteUpdate=function(t,a){D.a.put("https://notemaster.herokuapp.com/api/notes/".concat(t,"/"),{title:a.title,body:a.body}),e.getNotesFromDb()},e.newNote=function(t){var a,n,r,o;return h.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return a={title:t,body:""},s.next=3,h.a.awrap(D.a.post("https://notemaster.herokuapp.com/api/notes/",{title:a.title,body:a.body}));case 3:return n=s.sent,r=n.data.id,s.next=7,h.a.awrap(e.setState({notes:[].concat(Object(J.a)(e.state.notes),[a])}));case 7:o=e.state.notes.indexOf(e.state.notes.filter((function(e){return e.id===r}))[0]),e.setState({selectedNote:e.state.notes[o],selectedNoteIndex:o}),e.getNotesFromDb();case 10:case"end":return s.stop()}}))},e.deleteNote=function(t){var a;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a=e.state.notes.indexOf(t),n.next=3,h.a.awrap(e.setState({notes:e.state.notes.filter((function(e){return e!==t}))}));case 3:e.state.selectedNoteIndex===a?e.setState({selectedNoteIndex:null,selectedNote:null}):e.state.notes.length>1?e.selectNote(e.state.notes[e.state.selectedNoteIndex-1],e.state.selectedNoteIndex-1):e.setState({selectedNoteIndex:null,selectedNote:null}),D.a.delete("https://notemaster.herokuapp.com/api/notes/".concat(t.id,"/"));case 5:case"end":return n.stop()}}))},e.state={selectedNoteIndex:null,selectedNote:null,notes:null,open:!1,user:null},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup(this.props.username),console.log(this.state.selectedNote),this.setState({user:localStorage.getItem("user")||this.props.username}),localStorage.getItem("token")&&localStorage.getItem("expirationDate")?this.getNotesFromDb():this.props.history.push("/login/")}},{key:"render",value:function(){var e=this,t=localStorage.getItem("token"),a=this.props.classes;return r.a.createElement(n.Fragment,null,this.props.token||t?r.a.createElement("div",{className:a.root},r.a.createElement(E.a,null),r.a.createElement(Ne.a,{position:"fixed",className:Object(Ee.a)(a.appBar,Object(M.a)({},a.appBarShift,this.state.open))},r.a.createElement(xe.a,null,r.a.createElement(ye.a,{color:"inherit","aria-label":"open drawer",onClick:function(){e.setState({open:!0})},edge:"start",className:Object(Ee.a)(a.menuButton,this.state.open&&a.hide)},r.a.createElement(Oe.a,null)),r.a.createElement(k.a,{variant:"h6",noWrap:!0},"Notemaster"),r.a.createElement(We.a,{title:"Log out"},r.a.createElement(_e.a,{className:"log-out-icon",onClick:this.props.logout})))),r.a.createElement(we.a,{className:a.drawer,variant:"persistent",anchor:"left",open:this.state.open,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(ye.a,{onClick:function(){e.setState({open:!1})}},"ltr"===a.direction?r.a.createElement(je.a,null):r.a.createElement(Ie.a,null))),r.a.createElement(ce,{selectedNoteIndex:this.state.selectedNoteIndex,notes:this.state.notes,deleteNote:this.deleteNote,selectNote:this.selectNote,newNote:this.newNote})),r.a.createElement("main",{className:Object(Ee.a)(a.content,Object(M.a)({},a.contentShift,this.state.open))},r.a.createElement("div",{className:a.drawerHeader}),this.state.selectedNote?r.a.createElement(ve,{selectedNote:this.state.selectedNote,selectedNoteIndex:this.state.selectedNoteIndex,notes:this.state.notes,noteUpdate:this.noteUpdate}):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:a.paper},r.a.createElement(k.a,{className:"welcome_Header"},"Welcome to Notemaster ",r.a.createElement("span",{className:"capitalize"},this.state.user)),r.a.createElement(k.a,{className:"welcome"},"Notemaster is a web app used to store important notes. ",r.a.createElement("br",null),"Just like Google Keep"),r.a.createElement(k.a,{className:"welcome"},"Click on the Hamburger Icon on top left to continue"))))):this.props.history.push("/login/"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){e.onTryAutoSignup(e.username||localStorage.getItem("user"));var a=e.token||localStorage.getItem("token");return a&&(D.a.defaults.headers={"Content-Type":"application/json",Authorization:"Token "+a}),null}}]),t}(r.a.Component),Ue=Object(d.e)(Object(I.b)((function(e){return{token:e.token,username:e.username}}),(function(e){return{logout:function(){return e(W())},onTryAutoSignup:function(t){return e(function(e){return function(t){var a=localStorage.getItem("token");if(void 0===a)t(W());else{var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?t(W()):(t(_(a,e)),t(B((n.getTime()-(new Date).getTime())/1e3)))}}}(t))}}}))(Object(X.a)(De)(Be)));function Fe(){return r.a.createElement(k.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(N.a,{color:"inherit",href:"#"},"Notemaster")," ",(new Date).getFullYear(),".")}var Pe=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var He=function(e){var t=Pe(),a=Object(n.useState)(!1),o=Object(f.a)(a,2),s=o[0];return o[1],r.a.createElement(C.a,{component:"main",maxWidth:"xs"},r.a.createElement(E.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(V.a,{className:t.avatar},r.a.createElement(O.a,null)),r.a.createElement(k.a,{component:"h1",variant:"h5"},"Reset Password"),r.a.createElement("form",{className:t.form,onSubmit:function(t){D.a.defaults.headers={"Content-Type":"application/json"},t.preventDefault();var a=t.target.new_password1.value,n=t.target.new_password2.value,r=e.match.params.uid,o=e.match.params.token;D.a.post("https://notemaster.herokuapp.com/api/auth/password/reset/confirm/",{uid:r,token:o,new_password1:a,new_password2:n}).then((function(t){console.log(t),"200"===t.status&&(U.b.success("Password has been reset successfully! You are now being redirected to the Login page",{position:"top-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1}),setTimeout((function(){e.history.push("/login/")}),5e3))})).catch((function(e,t){console.log(e,t)}))},noValidate:!0},r.a.createElement(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,error:s,id:"new_password1",label:"New Password",name:"new_password1",autoFocus:!0,type:"password"}),r.a.createElement(w.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,error:s,id:"new_password2",label:"Confirm Password",name:"new_password2",autoFocus:!0,type:"password"}),r.a.createElement(U.a,null),r.a.createElement(v.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,disabled:s},"Sign In"),r.a.createElement(x.a,{container:!0},r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(N.a,{href:"/login/",variant:"body2"},"Login")),r.a.createElement(x.a,{item:!0},r.a.createElement(N.a,{href:"/signup/",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(y.a,{mt:8},r.a.createElement(Fe,null)))},Le=a(232),ze=a(234),qe=a(233),Re=Object(j.a)({card:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12}});function Ye(e){console.log();var t=Re();return r.a.createElement(Le.a,{className:t.card},r.a.createElement(qe.a,null,r.a.createElement(k.a,{variant:"h5",component:"h2"},"Password Reset Confirmation"),r.a.createElement(k.a,{variant:"body2",component:"p"},"Check your email for a link to reset your password. If it doesn't appear within a few minutes, check your spam folder.")),r.a.createElement(ze.a,null,r.a.createElement(v.a,{color:"primary"},r.a.createElement(N.a,{href:"/login/",variant:"body2"},"Return to log in"))))}var Ve=function(){return r.a.createElement("div",null,r.a.createElement(d.a,{exact:!0,path:"/login/",component:L}),r.a.createElement(d.a,{exact:!0,path:"/signup/",component:R}),r.a.createElement(d.a,{exact:!0,path:"/forgot-password/",component:G}),r.a.createElement(d.a,{exact:!0,path:"/reset-password/:uid/:token/",component:He}),r.a.createElement(d.a,{exact:!0,path:"/password-reset/done/",component:Ye}),r.a.createElement(d.a,{exact:!0,path:"/",component:Ue}),r.a.createElement(d.a,{path:"/dashboard/",component:Ue}))},Ze=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(Ve,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $e=a(54),Ge=a(116),Me=function(e,t){return Object(Te.a)({},e,{},t)},Je={token:null,error:null,loading:!1,username:null},Xe=function(e,t){return Me(e,{error:null,loading:!0})},Ke=function(e,t){return Me(e,{token:t.token,username:t.username,loading:!1,error:!1})},Qe=function(e,t){return Me(e,{loading:!1,error:t.error,response:t.response})},et=function(e,t){return Me(e,{token:null})},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Xe(e);case"AUTH_SUCCESS":return Ke(e,t);case"AUTH_FAIL":return Qe(e,t);case"AUTH_LOGOUT":return et(e);default:return e}};a.d(t,"store",(function(){return nt}));var at=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$e.c,nt=Object($e.d)(tt,at(Object($e.a)(Ge.a))),rt=r.a.createElement(I.a,{store:nt},r.a.createElement(Ze,null));s.a.render(rt,document.getElementById("evernote-container")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[130,1,2]]]);