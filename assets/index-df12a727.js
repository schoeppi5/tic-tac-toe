var Ye=Object.defineProperty;var Le=(e,t,n)=>t in e?Ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>(Le(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function $(){}function _e(e,t){for(const n in t)e[n]=t[n];return e}function $e(e){return e()}function ye(){return Object.create(null)}function O(e){e.forEach($e)}function Me(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ne(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function M(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function Ce(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function S(e){return document.createTextNode(e)}function L(){return S(" ")}function I(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function h(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function He(e){return Array.from(e.childNodes)}function ce(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Re(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,r,t),i}let G;function x(e){G=e}function Pe(){if(!G)throw new Error("Function called outside component initialization");return G}function Ie(e){Pe().$$.on_mount.push(e)}function se(){const e=Pe();return(t,n,{cancelable:r=!1}={})=>{const i=e.$$.callbacks[t];if(i){const o=Re(t,n,{cancelable:r});return i.slice().forEach(s=>{s.call(e,o)}),!o.defaultPrevented}return!0}}const R=[],ge=[],ne=[],pe=[],Oe=Promise.resolve();let le=!1;function De(){le||(le=!0,Oe.then(Se))}function ue(e){ne.push(e)}const oe=new Set;let H=0;function Se(){if(H!==0)return;const e=G;do{try{for(;H<R.length;){const t=R[H];H++,x(t),Be(t.$$)}}catch(t){throw R.length=0,H=0,t}for(x(null),R.length=0,H=0;ge.length;)ge.pop()();for(let t=0;t<ne.length;t+=1){const n=ne[t];oe.has(n)||(oe.add(n),n())}ne.length=0}while(R.length);for(;pe.length;)pe.pop()();le=!1,oe.clear(),x(e)}function Be(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ue)}}const re=new Set;let je;function j(e,t){e&&e.i&&(re.delete(e),e.i(t))}function Z(e,t,n,r){if(e&&e.o){if(re.has(e))return;re.add(e),je.c.push(()=>{re.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ve(e,t){const n={},r={},i={$$scope:1};let o=e.length;for(;o--;){const s=e[o],l=t[o];if(l){for(const u in s)u in l||(r[u]=1);for(const u in l)i[u]||(n[u]=l[u],i[u]=1);e[o]=l}else for(const u in s)i[u]=1}for(const s in r)s in n||(n[s]=void 0);return n}function be(e){return typeof e=="object"&&e!==null?e:{}}function F(e){e&&e.c()}function U(e,t,n,r){const{fragment:i,after_update:o}=e.$$;i&&i.m(t,n),r||ue(()=>{const s=e.$$.on_mount.map($e).filter(Me);e.$$.on_destroy?e.$$.on_destroy.push(...s):O(s),e.$$.on_mount=[]}),o.forEach(ue)}function W(e,t){const n=e.$$;n.fragment!==null&&(O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ue(e,t){e.$$.dirty[0]===-1&&(R.push(e),De(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function V(e,t,n,r,i,o,s,l=[-1]){const u=G;x(e);const c=e.$$={fragment:null,ctx:[],props:o,update:$,not_equal:i,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:ye(),dirty:l,skip_bound:!1,root:t.target||u.$$.root};s&&s(c.root);let d=!1;if(c.ctx=n?n(e,t.props||{},(m,g,...A)=>{const f=A.length?A[0]:g;return c.ctx&&i(c.ctx[m],c.ctx[m]=f)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](f),d&&Ue(e,m)),g}):[],c.update(),d=!0,O(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const m=He(t.target);c.fragment&&c.fragment.l(m),m.forEach(E)}else c.fragment&&c.fragment.c();t.intro&&j(e.$$.fragment),U(e,t.target,t.anchor,t.customElement),Se()}x(u)}class z{$destroy(){W(this,1),this.$destroy=$}$on(t,n){if(!Me(n))return $;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!Ne(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function We(e,t){const n=C(e),r=ie(e,t);return r>=0?r:n[fe(n.length)]}function xe(e,t){const n=C(e),r=new Map;for(const o of n){const s=[...e];s[o]=t,r.set(o,ae(s,N(t),t,!1)),s[o]=w.EMPTY}let i=[-1,-1/0];for(const o of r)o[1]>i[1]&&(i=o);return i[0]}function ae(e,t,n,r){const i=C(e),o=de(e);if(o===n)return 1;if(o===N(n))return-1;if(!i.length)return 0;let s=r?-1/0:1/0;for(const l of i){if(e[l]=t,r){const u=ae(e,N(t),n,!1);s=Math.max(s,u)}else{const u=ae(e,N(t),n,!0);s=Math.min(s,u)}e[l]=w.EMPTY}return s}function qe(e,t){const n=C(e),r=ie(e,t);if(r>=0)return r;const i=ie(e,N(t));return i>=0?i:n.some(o=>o===4)?4:n[fe(n.length)]}function Ge(e,t){const n=C(e),r=ie(e,N(t));return r>=0?r:n[fe(n.length)]}function ee(e){switch(e){case v.EASY:return We;case v.PETTY:return Ge;case v.MEDIUM:return qe;case v.HARD:return xe;case(v.HUMAN||v.ONLINE):return;default:return}}function ie(e,t){if(!Te(t))throw new Error(`Player ${t} is not valid`);const n=C(e),r=[...e];for(const i of n){if(r[i]=t,de(r)===t)return i;r[i]=w.EMPTY}return-1}function fe(e){return Math.floor(Math.random()*e)}var v=(e=>(e[e.EASY=0]="EASY",e[e.PETTY=1]="PETTY",e[e.MEDIUM=2]="MEDIUM",e[e.HARD=3]="HARD",e[e.HUMAN=4]="HUMAN",e[e.ONLINE=5]="ONLINE",e))(v||{}),w=(e=>(e[e.EMPTY=0]="EMPTY",e[e.PLAYER1=1]="PLAYER1",e[e.PLAYER2=2]="PLAYER2",e))(w||{});class ke{constructor(t){p(this,"score",0);p(this,"field");p(this,"botMove");this.field=t}addWin(){this.score++}isHuman(){return this.botMove===void 0}move(t){return this.botMove!==void 0?this.botMove(t,this.field):-1}}class Ke{constructor(t=new ke(1),n=new ke(2),r=0){p(this,"player");p(this,"enemy");p(this,"mode");t.score=0,n.score=0,this.mode=r,this.player=t,this.enemy=n,this.enemy.botMove=ee(this.mode)}addWin(t){switch(t){case 1:this.player.addWin();break;case 2:this.enemy.addWin();break}}switchSides(){const t=this.player.botMove;this.player.botMove=this.enemy.botMove,this.enemy.botMove=t;const n=this.player.score;this.player.score=this.enemy.score,this.enemy.score=n}updateMode(t){if(this.mode=t,this.player.isHuman()&&this.enemy.isHuman()&&t!=4){this.enemy.botMove=ee(this.mode);return}this.player.isHuman()||(this.player.botMove=ee(this.mode)),this.enemy.isHuman()||(this.enemy.botMove=ee(this.mode))}}class we{constructor(t){p(this,"finished");p(this,"winner",0);this.winner=de(t),this.finished=Ve(t)||this.winner!==0}isDraw(){return this.finished===!0&&this.winner===0}}function Ve(e){return!e.some(t=>t===0)}function de(e){for(const t of[1,2])if(e[0]===t&&e[1]===t&&e[2]===t||e[3]===t&&e[4]===t&&e[5]===t||e[6]===t&&e[7]===t&&e[8]===t||e[0]===t&&e[4]===t&&e[8]===t||e[2]===t&&e[4]===t&&e[6]===t||e[0]===t&&e[3]===t&&e[6]===t||e[1]===t&&e[4]===t&&e[7]===t||e[2]===t&&e[5]===t&&e[8]===t)return t;return 0}function te(){const e=new Array(9);return e.fill(0),e}function C(e){return e.map((t,n)=>t!==0?-1:n).filter(t=>t>=0)}function N(e){return Te(e)?3-e:0}function Te(e){return e===1||e===2}function Ee(e,t,n){const r=e.slice();return r[11]=t[n],r[13]=n,r}function Ae(e){let t,n=e[1](e[11])+"",r,i,o,s;function l(){return e[5](e[13])}function u(){return e[6](e[13])}return{c(){t=y("div"),r=S(n),i=L(),h(t,"class","field svelte-1sape3k"),h(t,"id",e[13].toString())},m(c,d){M(c,t,d),_(t,r),_(t,i),o||(s=[I(t,"click",l),I(t,"keydown",u)],o=!0)},p(c,d){e=c,d&3&&n!==(n=e[1](e[11])+"")&&ce(r,n)},d(c){c&&E(t),o=!1,O(s)}}}function ze(e){let t,n=e[0],r=[];for(let i=0;i<n.length;i+=1)r[i]=Ae(Ee(e,n,i));return{c(){t=y("div");for(let i=0;i<r.length;i+=1)r[i].c();h(t,"id","grid"),h(t,"class","svelte-1sape3k")},m(i,o){M(i,t,o);for(let s=0;s<r.length;s+=1)r[s].m(t,null)},p(i,[o]){if(o&7){n=i[0];let s;for(s=0;s<n.length;s+=1){const l=Ee(i,n,s);r[s]?r[s].p(l,o):(r[s]=Ae(l),r[s].c(),r[s].m(t,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=n.length}},i:$,o:$,d(i){i&&E(t),Ce(r,i)}}}function Je(e,t,n){let{board:r}=t,{fieldToString:i}=t,{player:o}=t,{enemy:s}=t,l=w.PLAYER1|w.PLAYER2;l=w.PLAYER1;const u=se();function c(){return l===o.field?o:s}function d(f){m(f,c().field)&&(l=N(l),c().isHuman()||(m(c().move(r),c().field),l=N(l)))}function m(f,a){return r[f]!==w.EMPTY||new we(r).finished?!1:(n(0,r[f]=a,r),n(0,r),!0)}const g=f=>d(f),A=f=>d(f);return e.$$set=f=>{"board"in f&&n(0,r=f.board),"fieldToString"in f&&n(1,i=f.fieldToString),"player"in f&&n(3,o=f.player),"enemy"in f&&n(4,s=f.enemy)},e.$$.update=()=>{if(e.$$.dirty&1){let f=new we(r);f.finished&&u("finished",f)}e.$$.dirty&1&&C(r).length===9&&(l=w.PLAYER1,c().isHuman()||(m(c().move(r),c().field),l=w.PLAYER2))},[r,i,d,o,s,g,A]}class Qe extends z{constructor(t){super(),V(this,t,Je,ze,K,{board:0,fieldToString:1,player:3,enemy:4})}}function Xe(e){let t;return{c(){t=S("🤖")},m(n,r){M(n,t,r)},d(n){n&&E(t)}}}function Ze(e){let t;return{c(){t=S("👨‍💻")},m(n,r){M(n,t,r)},d(n){n&&E(t)}}}function Fe(e){let t;return{c(){t=S("🤖")},m(n,r){M(n,t,r)},d(n){n&&E(t)}}}function et(e){let t;return{c(){t=S("👨‍💻")},m(n,r){M(n,t,r)},d(n){n&&E(t)}}}function tt(e){let t,n,r,i,o,s=e[0].score+"",l,u,c,d,m,g=e[1].score+"",A,f,a,b,D,J;function me(k,P){return P&1&&(i=null),i==null&&(i=!!k[0].isHuman()),i?Ze:Xe}let Q=me(e,-1),T=Q(e);function he(k,P){return P&2&&(b=null),b==null&&(b=!!k[1].isHuman()),b?et:Fe}let X=he(e,-1),Y=X(e);return{c(){t=y("div"),n=y("div"),r=y("i"),T.c(),o=L(),l=S(s),u=L(),c=y("div"),c.textContent="🆚",d=L(),m=y("div"),A=S(g),f=L(),a=y("i"),Y.c(),h(r,"class","svelte-1gwglwo"),h(n,"id","player1"),h(n,"class","player svelte-1gwglwo"),h(c,"id","versus"),h(c,"class","svelte-1gwglwo"),h(a,"class","svelte-1gwglwo"),h(m,"id","player2"),h(m,"class","player svelte-1gwglwo"),h(t,"id","scoreboard"),h(t,"class","svelte-1gwglwo")},m(k,P){M(k,t,P),_(t,n),_(n,r),T.m(r,null),_(n,o),_(n,l),_(t,u),_(t,c),_(t,d),_(t,m),_(m,A),_(m,f),_(m,a),Y.m(a,null),D||(J=[I(c,"click",e[3]),I(c,"keydown",e[4])],D=!0)},p(k,[P]){Q!==(Q=me(k,P))&&(T.d(1),T=Q(k),T&&(T.c(),T.m(r,null))),P&1&&s!==(s=k[0].score+"")&&ce(l,s),P&2&&g!==(g=k[1].score+"")&&ce(A,g),X!==(X=he(k,P))&&(Y.d(1),Y=X(k),Y&&(Y.c(),Y.m(a,null)))},i:$,o:$,d(k){k&&E(t),T.d(),Y.d(),D=!1,O(J)}}}function nt(e,t,n){let{player:r}=t,{enemy:i}=t,o=se();function s(){o("switch")}const l=()=>s(),u=()=>s();return e.$$set=c=>{"player"in c&&n(0,r=c.player),"enemy"in c&&n(1,i=c.enemy)},[r,i,s,l,u]}class rt extends z{constructor(t){super(),V(this,t,nt,tt,K,{player:0,enemy:1})}}function it(e){let t,n,r,i,o,s,l,u,c,d;return{c(){t=y("nav"),n=y("select"),r=y("option"),r.textContent="🤖",i=y("option"),i.textContent="🤖➕",o=y("option"),o.textContent="🤖❗",s=y("option"),s.textContent="❗🤖❗",l=y("option"),l.textContent="👨‍💻",u=y("option"),u.textContent="👨‍💻 / 👨‍💻",r.__value="easy",r.value=r.__value,h(r,"class","svelte-17bkcmu"),i.__value="petty",i.value=i.__value,h(i,"class","svelte-17bkcmu"),o.__value="medium",o.value=o.__value,h(o,"class","svelte-17bkcmu"),s.__value="hard",s.value=s.__value,h(s,"class","svelte-17bkcmu"),l.__value="human",l.value=l.__value,h(l,"class","svelte-17bkcmu"),u.__value="online",u.value=u.__value,u.disabled=!0,h(u,"class","svelte-17bkcmu"),h(n,"id","mode"),h(n,"class","svelte-17bkcmu"),h(t,"class","svelte-17bkcmu")},m(m,g){M(m,t,g),_(t,n),_(n,r),_(n,i),_(n,o),_(n,s),_(n,l),_(n,u),c||(d=I(n,"change",e[0]),c=!0)},p:$,i:$,o:$,d(m){m&&E(t),c=!1,d()}}}function st(e){const t=se();function n(r){let i=r.target.value,o=v.EASY;switch(i){case"easy":o=v.EASY;break;case"petty":o=v.PETTY;break;case"medium":o=v.MEDIUM;break;case"hard":o=v.HARD;break;case"human":o=v.HUMAN;break;case"online":o=v.ONLINE;break;default:o=v.EASY;break}t("change",o)}return[n]}class ot extends z{constructor(t){super(),V(this,t,st,it,K,{})}}class B{constructor({primary:t,secondary:n,primaryAccent:r,secondaryAccent:i,background:o,name:s}){p(this,"primary");p(this,"secondary");p(this,"primaryAccent");p(this,"secondaryAccent");p(this,"background");p(this,"name");this.primary=t,this.secondary=n,this.primaryAccent=r,this.secondaryAccent=i,this.background=o,this.name=s}CSS(){return`--primary: ${this.primary}; --secondary: ${this.secondary}; --primaryAccent: ${this.primaryAccent}; --secondaryAccent: ${this.secondaryAccent}; --background: ${this.background}`}}const q=[new B({primary:"#1e1f26",secondary:"#bdc3c7",primaryAccent:"#3498db",secondaryAccent:"#2980b9",background:"#2c3e50",name:"Midnight blue"}),new B({primary:"#ffd700",secondary:"#616161",primaryAccent:"#8c7853",secondaryAccent:"#c5cae9",background:"#121212",name:"Black and gold"}),new B({primary:"#4e9a06",secondary:"#f7e267",primaryAccent:"#edd400",secondaryAccent:"#ce5c00",background:"#1b1b1b",name:"Dark green"}),new B({primary:"#8e24aa",secondary:"#ffd54f",primaryAccent:"#ffb300",secondaryAccent:"#e65100",background:"#121212",name:"Vibrant purple"}),new B({primary:"#008080",secondary:"#ffe0b2",primaryAccent:"#ffab91",secondaryAccent:"#4a148c",background:"#232323",name:"Teal blue"})];function ct(e){let t,n,r,i,o;return{c(){t=y("button"),n=S("🎨"),h(t,"title",r=q[e[0]].name),h(t,"class","svelte-tojmix")},m(s,l){M(s,t,l),_(t,n),i||(o=I(t,"click",e[2]),i=!0)},p(s,[l]){l&1&&r!==(r=q[s[0]].name)&&h(t,"title",r)},i:$,o:$,d(s){s&&E(t),i=!1,o()}}}function lt(e,t,n){const r=se();let i=0;Ie(()=>{r("changed",q[i])});function o(){n(0,i=(i+1)%q.length),r("changed",q[i])}return[i,o,()=>o()]}class ut extends z{constructor(t){super(),V(this,t,lt,ct,K,{})}}function at(e){let t,n,r,i,o,s,l,u,c,d;n=new ot({}),n.$on("change",e[5]);const m=[e[1]];let g={};for(let a=0;a<m.length;a+=1)g=_e(g,m[a]);i=new rt({props:g}),i.$on("switch",e[6]),s=new ut({}),s.$on("changed",mt);const A=[{board:e[0]},{fieldToString:e[2]},e[1]];let f={};for(let a=0;a<A.length;a+=1)f=_e(f,A[a]);return c=new Qe({props:f}),c.$on("finished",e[3]),{c(){t=y("header"),F(n.$$.fragment),r=L(),F(i.$$.fragment),o=L(),F(s.$$.fragment),l=L(),u=y("main"),F(c.$$.fragment),h(t,"class","svelte-3o9bc2"),h(u,"class","svelte-3o9bc2")},m(a,b){M(a,t,b),U(n,t,null),_(t,r),U(i,t,null),_(t,o),U(s,t,null),M(a,l,b),M(a,u,b),U(c,u,null),d=!0},p(a,[b]){const D=b&2?ve(m,[be(a[1])]):{};i.$set(D);const J=b&7?ve(A,[b&1&&{board:a[0]},b&4&&{fieldToString:a[2]},b&2&&be(a[1])]):{};c.$set(J)},i(a){d||(j(n.$$.fragment,a),j(i.$$.fragment,a),j(s.$$.fragment,a),j(c.$$.fragment,a),d=!0)},o(a){Z(n.$$.fragment,a),Z(i.$$.fragment,a),Z(s.$$.fragment,a),Z(c.$$.fragment,a),d=!1},d(a){a&&E(t),W(n),W(i),W(s),a&&E(l),a&&E(u),W(c)}}}const ft="❌",dt="⭕";function mt({detail:e}){let t=Object.entries(e);for(let n of t)typeof n[1]=="string"&&document.documentElement.style.setProperty(`--${n[0]}`,`${n[1]}`)}function ht(e,t,n){let r=te(),i=new Ke,o=d=>{switch(d){case w.EMPTY:return"";case w.PLAYER1:return ft;case w.PLAYER2:return dt}};function s(d){d.detail.isDraw()||(i.addWin(d.detail.winner),n(1,i)),setTimeout(()=>n(0,r=te()),1e3)}function l(){n(0,r=te()),i.switchSides(),n(1,i)}function u({detail:d}){i.updateMode(d),n(1,i),n(0,r=te())}return[r,i,o,s,l,u,()=>l()]}class _t extends z{constructor(t){super(),V(this,t,ht,at,K,{})}}new _t({target:document.getElementById("app")});
