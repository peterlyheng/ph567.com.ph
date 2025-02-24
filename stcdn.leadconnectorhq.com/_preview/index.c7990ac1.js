var oe=Object.defineProperty;var ae=(e,t,r)=>t in e?oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var M=(e,t,r)=>(ae(e,typeof t!="symbol"?t+"":t,r),r);import{r as ref,c as computed,X as useRouter,P as useRuntimeConfig}from"./entry.5c369aec.js";import{a7 as commonjsGlobal,a8 as getDefaultExportFromCjs,j as dayjs,a9 as standardFieldsStore,N as countries,m as mapCustomValues,y as parseAndFetchUserData,u as usePreviewStore,aa as PaymentServices,Q as attributionEventData,O as getSessionId,G as getSessionFingerprint,ab as defaultPadding,ac as defaultShadow,ad as fieldTypeMaxScore,ae as fieldTypeSumScore,af as HISTORY_KEY,ag as USER_SESSION_KEY,ah as USER_SESSION_HISTORY_KEY,ai as USER_FINGERPRINT_KEY,aj as FIRST_EVENT_KEY}from"./constants.13a75f2f.js";var customParseFormat$1={exports:{}};(function(e,t){(function(r,s){e.exports=s()})(commonjsGlobal,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},s=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d/,o=/\d\d/,n=/\d\d?/,c=/\d*[^-_:/,()\s\d]+/,g={},l=function(d){return(d=+d)+(d>68?1900:2e3)},u=function(d){return function(a){this[d]=+a}},S=[/[+-]\d\d:?(\d\d)?|Z/,function(d){(this.zone||(this.zone={})).offset=function(a){if(!a||a==="Z")return 0;var h=a.match(/([+-]|\d\d)/g),m=60*h[1]+(+h[2]||0);return m===0?0:h[0]==="+"?-m:m}(d)}],f=function(d){var a=g[d];return a&&(a.indexOf?a:a.s.concat(a.f))},y=function(d,a){var h,m=g.meridiem;if(m){for(var v=1;v<=24;v+=1)if(d.indexOf(m(v,0,a))>-1){h=v>12;break}}else h=d===(a?"pm":"PM");return h},D={A:[c,function(d){this.afternoon=y(d,!1)}],a:[c,function(d){this.afternoon=y(d,!0)}],Q:[i,function(d){this.month=3*(d-1)+1}],S:[i,function(d){this.milliseconds=100*+d}],SS:[o,function(d){this.milliseconds=10*+d}],SSS:[/\d{3}/,function(d){this.milliseconds=+d}],s:[n,u("seconds")],ss:[n,u("seconds")],m:[n,u("minutes")],mm:[n,u("minutes")],H:[n,u("hours")],h:[n,u("hours")],HH:[n,u("hours")],hh:[n,u("hours")],D:[n,u("day")],DD:[o,u("day")],Do:[c,function(d){var a=g.ordinal,h=d.match(/\d+/);if(this.day=h[0],a)for(var m=1;m<=31;m+=1)a(m).replace(/\[|\]/g,"")===d&&(this.day=m)}],w:[n,u("week")],ww:[o,u("week")],M:[n,u("month")],MM:[o,u("month")],MMM:[c,function(d){var a=f("months"),h=(f("monthsShort")||a.map(function(m){return m.slice(0,3)})).indexOf(d)+1;if(h<1)throw new Error;this.month=h%12||h}],MMMM:[c,function(d){var a=f("months").indexOf(d)+1;if(a<1)throw new Error;this.month=a%12||a}],Y:[/[+-]?\d+/,u("year")],YY:[o,function(d){this.year=l(d)}],YYYY:[/\d{4}/,u("year")],Z:S,ZZ:S};function O(d){var a,h;a=d,h=g&&g.formats;for(var m=(d=a.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(p,F,b){var Y=b&&b.toUpperCase();return F||h[b]||r[b]||h[Y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(A,L,_){return L||_.slice(1)})})).match(s),v=m.length,w=0;w<v;w+=1){var I=m[w],P=D[I],C=P&&P[0],x=P&&P[1];m[w]=x?{regex:C,parser:x}:I.replace(/^\[|\]$/g,"")}return function(p){for(var F={},b=0,Y=0;b<v;b+=1){var A=m[b];if(typeof A=="string")Y+=A.length;else{var L=A.regex,_=A.parser,T=p.slice(Y),R=L.exec(T)[0];_.call(F,R),p=p.replace(R,"")}}return function(K){var U=K.afternoon;if(U!==void 0){var E=K.hours;U?E<12&&(K.hours+=12):E===12&&(K.hours=0),delete K.afternoon}}(F),F}}return function(d,a,h){h.p.customParseFormat=!0,d&&d.parseTwoDigitYear&&(l=d.parseTwoDigitYear);var m=a.prototype,v=m.parse;m.parse=function(w){var I=w.date,P=w.utc,C=w.args;this.$u=P;var x=C[1];if(typeof x=="string"){var p=C[2]===!0,F=C[3]===!0,b=p||F,Y=C[2];F&&(Y=C[2]),g=this.$locale(),!p&&Y&&(g=h.Ls[Y]),this.$d=function(T,R,K,U){try{if(["x","X"].indexOf(R)>-1)return new Date((R==="X"?1e3:1)*T);var E=O(R)(T),V=E.year,N=E.month,W=E.day,X=E.hours,ee=E.minutes,te=E.seconds,re=E.milliseconds,Z=E.zone,G=E.week,B=new Date,Q=W||(V||N?1:B.getDate()),k=V||B.getFullYear(),j=0;V&&!N||(j=N>0?N-1:B.getMonth());var $,H=X||0,z=ee||0,q=te||0,J=re||0;return Z?new Date(Date.UTC(k,j,Q,H,z,q,J+60*Z.offset*1e3)):K?new Date(Date.UTC(k,j,Q,H,z,q,J)):($=new Date(k,j,Q,H,z,q,J),G&&($=U($).week(G).toDate()),$)}catch{return new Date("")}}(I,x,P,h),this.init(),Y&&Y!==!0&&(this.$L=this.locale(Y).$L),b&&I!=this.format(x)&&(this.$d=new Date("")),g={}}else if(x instanceof Array)for(var A=x.length,L=1;L<=A;L+=1){C[1]=x[L-1];var _=h.apply(this,C);if(_.isValid()){this.$d=_.$d,this.$L=_.$L,this.init();break}L===A&&(this.$d=new Date(""))}else v.call(this,w)}}})})(customParseFormat$1);var customParseFormatExports=customParseFormat$1.exports;const customParseFormat=getDefaultExportFromCjs(customParseFormatExports);dayjs.extend(customParseFormat);const urlRegex=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,10}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,emailRegex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,validUrl=e=>e?urlRegex.test(e):!0,isEmpty=e=>e==null||typeof e=="string"&&e.trim()==="",validPhone=(e,t)=>{var s;if(!e)return!0;const r=(s=window==null?void 0:window.libphonenumber)==null?void 0:s.parsePhoneNumberFromString(e,t);return r?r.isValid():!1},validEmail=e=>e?emailRegex.test(e):!0,verifyEmail=e=>emailRegex.test(e),isDateEarlier=(e,t)=>e?dayjs(e,t).isBefore(dayjs()):!0,hasAlphabet=e=>/^[A-Za-z]+/.test(e);dayjs.extend(customParseFormat);const fillDataForStandardFieldUri=async(e,t,r,s,i,o,n={},c=!1)=>{const g=ref(r),l=ref(s),u=ref(i),S=ref(o);let f=e||t.query;c&&(f={});const y=standardFieldsStore.map(a=>{var m;if(a in f)if(a==="phone"&&f[a]){let v=f[a];f[a][0]===" "&&(v=v.split(""),v[0]="+",v=v.join("")),g.value.phone=v}else a==="country"&&f[a]&&countries.hasOwnProperty(f[a])?l.value=countries[f[a]]:u.value[a]=(m=f[a])==null?void 0:m.replace(/\+/g," ")});await Promise.all(y);let D=[];const O=await Promise.all(S.value.map(a=>{a.hiddenFieldQueryKey&&D.push(a)}));await Promise.all(O);const d=D.map(a=>{var m,v,w,I,P,C,x;if(a.hiddenFieldQueryKey in f)if(a.type==="phone"&&f[a.hiddenFieldQueryKey]){let p=f[a.hiddenFieldQueryKey];f[a.hiddenFieldQueryKey][0]===" "&&(p=p.split(""),p[0]="+",p=p.join("")),g.value[a.tag]=p}else if(a.type==="checkbox")if(f[a.hiddenFieldQueryKey].includes(",")){let p=f[a.hiddenFieldQueryKey].split(",");u.value[a.tag]=p.map(F=>F==null?void 0:F.trim())}else u.value[a.tag]=[f[a.hiddenFieldQueryKey]];else if(a.type==="email")u.value[a.tag]=(m=f[a.hiddenFieldQueryKey])==null?void 0:m.replace(/ /g,"+");else if(a.type==="date"){const p=((v=a.format)==null?void 0:v.replace(/-/g,a.separator||"-"))||"YYYY-MM-DD",F=(w=f[a.hiddenFieldQueryKey])==null?void 0:w.replace(/ /g,""),b=dayjs(F,[p,"MMMDoYYYY","MMM Do YYYY"]).isValid()?dayjs(F,[p,"MMMDoYYYY"]).format(p):"";u.value[a.tag]=dayjs(b,p,!0).isValid()?b:""}else a.type==="monetory"?u.value[a.tag]=(I=f[a.hiddenFieldQueryKey])==null?void 0:I.replace(/[^\d.,]/g,""):u.value[a.tag]=(P=f[a.hiddenFieldQueryKey])==null?void 0:P.replace(/\+/g," ");else{if(a.type==="phone"&&a.hiddenFieldValue){let p=a.hiddenFieldValue;a.hiddenFieldValue[0]===" "&&(p=p.split(""),p[0]="+",p=p.join("")),g.value[a.tag]=p}if(a.type==="date"&&a.hiddenFieldValue){const p=((C=a.format)==null?void 0:C.replace(/-/g,a.separator||"-"))||"YYYY-MM-DD",F=mapCustomValues(a.hiddenFieldValue||u.value[a.tag]),b=dayjs(F,[p,"MMMDoYYYY","MMM Do YYYY"]).isValid()?dayjs(F,[p,"MMMDoYYYY"]).format(p):"";u.value[a.tag]=dayjs(b,p,!0).isValid()?b:""}else a.hiddenFieldValue&&(u.value[a.tag]=(x=mapCustomValues(a.hiddenFieldValue))==null?void 0:x.replace(/\+/g," "))}});return await Promise.all(d),{phoneCountryIncluded:g.value,formattedCountry:l.value,formFieldsValue:u.value,formFields:S.value}},fillDataFromCookie=async(e,t,r,s,i,o,n={})=>{const c=ref(s),g=ref(i),l=ref(o),u=e||parseAndFetchUserData(t);if(!u)return;const S=standardFieldsStore.map(f=>{if(r.includes(f))if(f==="phone"){let y=u[f];y&&y[0]===" "&&(y=y.split(""),y[0]="+",y=y.join("")),g.value.phone=y}else f==="country"&&u[f]?l.value=countries[u[f]]:f==="address"&&!u[f]&&u.address1?c.value[f]=u.address1:c.value[f]=u[f]});return await Promise.all(S),{formFieldsValue:c.value,formattedCountry:l.value,phoneCountryIncluded:g.value}},getCountryFieldValue=(e,t)=>{const r=ref(e),s=ref(t);return s.value&&(r.value.country=Object.keys(countries).find(i=>countries[i]===s.value)),{formFieldsValue:r.value}},getHiddenFieldValue=async(e,t,r)=>{const s=e.query,i=ref(r),o=t.map(n=>{n.hidden&&n.type!="source"&&(!n.hiddenFieldQueryKey||!(n.hiddenFieldQueryKey in s))&&(i.value[n.tag]=i.value[n.tag]||n.hiddenFieldValue)});return await Promise.all(o),{formFieldsValue:i.value}},getTotalFilesSize=e=>{let t=0;return Object.keys(e).forEach(r=>{if(e[r]instanceof File)t+=e[r].size;else if(e[r]&&e[r].hasOwnProperty("files")){let s=e[r].files.length;for(let i=0;i<s;i++)t+=e[r].files[i].size}}),t},usePreviewStyle=()=>{const e=ref({}),t=()=>{var o,n,c,g,l,u,S,f,y,D,O,d,a,h,m,v,w,I,P,C,x,p,F,b;return{backgroundColor:"#"+((o=e.value)==null?void 0:o.bgColor),color:"#"+((n=e.value)==null?void 0:n.color),border:((c=e.value)==null?void 0:c.border)+"px "+((g=e.value)==null?void 0:g.borderStyle)+" #"+e.value.borderColor,borderRadius:e.value.radius+"px",maxWidth:e.value.width+"px",width:"100%",marginTop:e.value.marginTop?(l=e.value)==null?void 0:l.marginTop:"",borderColor:"#"+((u=e.value)==null?void 0:u.borderColor),paddingTop:parseFloat((f=(S=e.value)==null?void 0:S.padding)==null?void 0:f.top)+"px",paddingBottom:parseFloat((D=(y=e.value)==null?void 0:y.padding)==null?void 0:D.bottom)+"px",paddingLeft:parseFloat((d=(O=e.value)==null?void 0:O.padding)==null?void 0:d.left)+"px",paddingRight:parseFloat((h=(a=e.value)==null?void 0:a.padding)==null?void 0:h.right)+"px",boxShadow:((v=(m=e.value)==null?void 0:m.shadow)==null?void 0:v.horizontal)+"px "+((I=(w=e.value)==null?void 0:w.shadow)==null?void 0:I.vertical)+"px "+((C=(P=e.value)==null?void 0:P.shadow)==null?void 0:C.blur)+"px "+((p=(x=e.value)==null?void 0:x.shadow)==null?void 0:p.spread)+"px #"+((b=(F=e.value)==null?void 0:F.shadow)==null?void 0:b.color)}},r=()=>{var o,n,c,g,l,u,S,f,y,D,O,d,a,h,m,v,w,I,P,C,x,p,F,b,Y,A,L,_;return{backgroundColor:"#"+((o=e.value)==null?void 0:o.bgColor),color:"#"+((n=e.value)==null?void 0:n.color),border:((c=e.value)==null?void 0:c.border)+"px "+((g=e.value)==null?void 0:g.borderStyle)+" #"+((l=e.value)==null?void 0:l.borderColor),borderRadius:((u=e.value)==null?void 0:u.radius)+"px",maxWidth:((S=e.value)==null?void 0:S.width)+"px",width:"100%",marginTop:(f=e.value)!=null&&f.marginTop?(y=e.value)==null?void 0:y.marginTop:"",borderColor:"#"+((D=e.value)==null?void 0:D.borderColor),paddingTop:parseFloat((d=(O=e.value)==null?void 0:O.padding)==null?void 0:d.top)+"px",paddingBottom:parseFloat((h=(a=e.value)==null?void 0:a.padding)==null?void 0:h.bottom)+"px",paddingLeft:((v=(m=e.value)==null?void 0:m.padding)==null?void 0:v.left)+"px",paddingRight:((I=(w=e.value)==null?void 0:w.padding)==null?void 0:I.right)+"px",boxShadow:((C=(P=e.value)==null?void 0:P.shadow)==null?void 0:C.horizontal)+"px "+((p=(x=e.value)==null?void 0:x.shadow)==null?void 0:p.vertical)+"px "+((b=(F=e.value)==null?void 0:F.shadow)==null?void 0:b.blur)+"px "+((A=(Y=e.value)==null?void 0:Y.shadow)==null?void 0:A.spread)+"px #"+((_=(L=e.value)==null?void 0:L.shadow)==null?void 0:_.color)}},s=(o,n)=>{var c,g,l,u;e.value={bgColor:o==null?void 0:o.background,border:(c=o==null?void 0:o.border)==null?void 0:c.border,borderStyle:(g=o==null?void 0:o.border)==null?void 0:g.style,borderColor:(l=o==null?void 0:o.border)==null?void 0:l.color,radius:(u=o==null?void 0:o.border)==null?void 0:u.radius,width:n,padding:(o==null?void 0:o.padding)||defaultPadding,shadow:(o==null?void 0:o.shadow)||defaultShadow,marginTop:o==null?void 0:o.marginTop}};return{getFormWidth:computed(()=>{var o;return((o=e==null?void 0:e.value)==null?void 0:o.width)||"auto"}),getFormStyle:t,setFormStyle:s,getSurveyStyle:r}},verifyRedirectedPayment=async(e,t,r,s)=>{try{const i=usePreviewStore();useRouter().replace({query:void 0});const n=i.value.locationId;let c;if(r){const g={altId:n,altType:"location",transactionId:r};c=await PaymentServices.verifyGenernalPayment(g)}else{let g;const l=sessionStorage.getItem(`formOrderResponse-${t}`);l&&(g=JSON.parse(l));const u={altId:n,altType:"location",orderId:g.order._id,paymentIntentId:e,setupIntentId:s,isAuth:!!s,attribution:{eventData:attributionEventData(),sessionId:getSessionId(n),sessionFingerprint:getSessionFingerprint(n)}};c=await PaymentServices.verifyStripePayment(u)}if(c.success)return c;throw new Error(c.message)}catch{return window.alert("An error occured while trying to process your payment. Please try again."),!1}finally{sessionStorage.removeItem("formOrderResponse"),sessionStorage.removeItem("formContactResponse"),sessionStorage.removeItem("submissionResponse")}},findIdByQueryKey=(e,t)=>{for(const r of e)if(r.hiddenFieldQueryKey===t&&(r.Id||r.id))return r.Id||r.id;return null},calculateScore=(form,formFields,tdata)=>{const data={...tdata},scoreFields=form==null?void 0:form.fields.filter(e=>e.dataType==="SCORE"),operatorsAndNumbers=["←","(",")","*","7","8","9","-","4","5","6","+","1","2","3","/","0","."],results=scoreFields.map(scoreField=>{const calculation=scoreField==null?void 0:scoreField.calculation;if(!(calculation!=null&&calculation.length))return null;const expression=calculation.map((e,t)=>{var s,i;const r=findIdByQueryKey(formFields,e);if(r!==null&&(e=r),data[e]){const o=form==null?void 0:form.fields.find(g=>(g==null?void 0:g.id)===e),n=o==null?void 0:o.enableCalculations;if(o!=null&&o.picklistOptions&&!n)return 0;let c;if(n&&(c=o==null?void 0:o.calculatedOptions),(o==null?void 0:o.dataType)==="TEXTBOX_LIST"&&typeof data[e]=="object"){let g=0;for(const l in data[e])if(data[e].hasOwnProperty(l)&&typeof data[e][l]=="string"&&data[e][l].trim()!==""){const u=(s=o.picklistOptions.find(f=>f.id===l))==null?void 0:s.label,S=(i=c.find(f=>f.label===u))==null?void 0:i.calculatedValue;u&&S&&(g+=parseFloat(S))}return g}if(c){if(Array.isArray(data[e]))return data[e].reduce((g,l)=>{const u=c.find(S=>S.label===l);return g+(u&&u.calculatedValue?u.calculatedValue:0)},0);{const g=c.find(l=>l.label===data[e]);return g&&g.calculatedValue?g.calculatedValue:0}}else return typeof data[e]=="string"?isNaN(parseFloat(data[e]))?0:parseFloat(data[e]):data[e]}else return operatorsAndNumbers.includes(e)?e:0}).join("").split(" ").reduce((e,t,r,s)=>r<s.length-1&&s[r+1]!=="."&&!isNaN(Number(s[r+1]))?e+t:e+t+" ","").trim();try{const result=parseFloat(eval(expression.replace(/--/g,"- -")).toFixed(2));return{hiddenFieldQueryKey:scoreField.tag,result}}catch(e){return console.error("Error evaluating expression:",expression,e),{hiddenFieldQueryKey:scoreField.tag,result:0}}});return results.filter(e=>e!==null)},validURL=e=>{var t=urlRegex;return!!t.test(e)},calculateProductScore=(e,t,r)=>{let s=[];return r?s=t.reduce((o,n)=>[...o,...n.slideData],[]):s=t,calculateScore({fields:s},s,e).forEach(({hiddenFieldQueryKey:o,result:n})=>{e[o]=n}),e},imageLoaded=(e,t)=>{e&&t&&window.parent.postMessage(["highlevel.setHeight",{height:t.clientHeight,id:e}],"*")},calculateCategoryBaseScore=(e,t)=>{let r={};const s={};return e.forEach(i=>{r[i.value]=0,s[i.value]=0}),t.forEach(i=>{let o={},n=0;i.slideData.forEach(c=>{if(c.scoreByCategory){let g=c.scoreByCategory;if(fieldTypeMaxScore.includes(c.dataType)){const l=getMaxScoreFromOptions(g,s);n=l.maxScoreOutOfAllOptions,o=l.initialFieldLevelCategorybase}else{const l=getSumScoreFromOptions(g,s);n=l.maxScoreOutOfAllOptions,o=l.initialFieldLevelCategorybase}}}),Object.keys(o).forEach(c=>{if(c!=="overAllScore"){const g=o[c];r[c]+=g,o[c]=0}}),r.overAllScore+=n}),r},getMaxScoreFromOptions=(e,t,r)=>{let s=0,i=Object.assign({},t);return Object.keys(e).forEach(o=>{const n=e[o],c=i[n.category]<n.score?n.score:i[n.category];i[n.category]=c,s=s<n.score?n.score:s}),{maxScoreOutOfAllOptions:s,initialFieldLevelCategorybase:i}},getSumScoreFromOptions=(e,t)=>{let r=0,s=Object.assign({},t);return Object.keys(e).forEach(i=>{const o=e[i];o.category!=="overAllScore"&&(s[o.category]+=o.score),r+=o.score}),{maxScoreOutOfAllOptions:r,initialFieldLevelCategorybase:s}},convertDataToFormDataType=async e=>{const t=new FormData,r=Object.keys(e),s={};return r.forEach(async i=>{var o;if(e[i]instanceof File)t.append(i,e[i]);else if((o=e[i])!=null&&o.files){const n=Object.values(e[i].files);n.length&&await Promise.all(n.map(c=>{t.append(i,c)}))}else s[i]=e[i]}),{bodyFormData:t,formData:s}},findFieldFromSlides=(e,t,r)=>{var o;let s=t[e];return(o=r[s])==null?void 0:o.slideData.find(n=>n.tag===e)},calculateCategoryPointScored=(e,t,r,s)=>{const i=Object.keys(t),o={};return e.forEach(n=>{o[n.value]=0}),i.forEach(n=>{const c=findFieldFromSlides(n,r,s);if(c&&c.scoreByCategory&&(c!=null&&c.picklistOptions.length)){if(fieldTypeMaxScore.includes(c==null?void 0:c.dataType)){const g=c==null?void 0:c.picklistOptions.findIndex(u=>u==t[n]),l=c.scoreByCategory[g];g>=0&&l&&(o[l.category]+=l.score,o.overAllScore+=l.category==="overAllScore"?0:l.score)}fieldTypeSumScore.includes(c==null?void 0:c.dataType)&&t[n].forEach(g=>{const l=c==null?void 0:c.picklistOptions.findIndex(S=>S==g),u=c.scoreByCategory[l];l>=0&&u&&(o[u.category]+=u.score,o.overAllScore+=u.category==="overAllScore"?0:u.score)})}}),o},percentage=(e,t)=>parseFloat((e/t*100).toFixed(2))||0,calculateCategoryPercentage=(e,t,r)=>{const s=[],i=[],o=Object.keys(t),n={},c={};e.forEach(l=>n[l.value]=l.label),o.forEach(l=>{if(l!=="overAllScore"){s.push(n[l]);const u=percentage(r[l],t[l]);i.push(u),c[l]=u}});const g=percentage(r.overAllScore,t.overAllScore);return{category:s,categoryScore:i,overAllScore:g,categoryWithScore:c}};function internalLog(...e){getUriParams("internalLog")&&getUriParams("internalLog")=="ghl_team"&&console.log(e)}function isInIframe(){try{return window.self!==window.top}catch{return!0}}function guessUrl(e,t){let r=e;if(e||(r=document.location.href),r&&t){let s=new URL(r);internalLog("function guessUrl: ",r,t),Object.keys(t).forEach(i=>{s.searchParams.has(i)||s.searchParams.append(i,t[i])}),internalLog("function guessUrl newer url: ",s.href),r=s.href}return!e&&isInIframe()&&(r=document.referrer||r),r}function uriParams(e){const t={};if(!e)return t;try{return new URL(e).searchParams.forEach((s,i)=>{t[i]=s}),t}catch{return console.error("full url missing: ",e),t}}function getUriParams(e,t){const r=uriParams(t||guessUrl());return e in r?r[e]:""}function getCampaign(e){return getUriParams("utm_campaign",e)||getUriParams("campaign",e)}function getKeyword(e){return getUriParams("keyword",e)||getUriParams("utm_term",e)||getUriParams("utm_content",e)}function getAdSource(e){if(getUriParams("gclid",e))return"adword";if(getUriParams("msclkid",e))return"bing";if(getUriParams("dclid",e))return"yahoo";const t=getUriParams("utm_source",e),r=getCampaign(e);return t&&t.toLowerCase()=="facebook"&&r?"facebook":t&&t.toLowerCase()=="fb_ad"&&r?"fb_ad":t&&t.toLowerCase()=="linkedin_ad"&&r?"linkedin_ad":t&&t.toLowerCase()=="twitter_ad"&&r?"twitter_ad":""}function getBaseUrl(){return`${useRuntimeConfig().public.REST_API_URLS}/attribution_service`}function referrer(e,t){const r=getUriParams("rf");if(r&&typeof r=="string"&&r=="false")return"";let s;try{t&&typeof t=="string"&&(s=new URL(t).host)}catch{}if(e&&!e.includes(s))return e;const i=getUriParams("hl_referrer");return i||(!isInIframe()&&document.referrer&&!document.referrer.includes(document.location.origin)?document.referrer:"")}function getReferrerSource(e,t){if(e==="")return"direct";if(e.includes("google"))return t.includes("gclid")?"google paid":"google organic";if(e.includes("twitter"))return"twitter";if(e.includes("bing"))return t.includes("msclkid")?"bing paid":"bing organic";if(e.includes("facebook"))return"facebook";if(e.includes("yahoo"))return t.includes("dclid")||t.includes("yahoo")?"yahoo paid":"yahoo organic";if(e.includes("duckduckgo"))return"duckduckgo";{const r=document.createElement("a");return r.setAttribute("href",e),r.hostname}}function isLocalStorageAccessible(e){try{const t=window[e],r="__storage_test__";return t.setItem(r,r),t.removeItem(r),!0}catch{return!1}}function getStorageItem(e){if(isLocalStorageAccessible("localStorage"))return localStorage.getItem(e)}function setStorageItem(e,t){isLocalStorageAccessible("localStorage")&&localStorage.setItem(e,t)}function removeStorageItem(e){isLocalStorageAccessible("localStorage")&&localStorage.removeItem(e)}function getCookieFromLocalStore(e){if(!isLocalStorageAccessible("localStorage"))return;const t=localStorage.getItem(e);if(!t)return null;const r=JSON.parse(t);return new Date().getTime()>r.expiry?(localStorage.removeItem(e),null):r.value}function getAttributionCookie(e){const t=getCookieFromLocalStore(e);if(t)return t;const r=e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),s=document.cookie.match(new RegExp("(^| )"+r+"=([^;]+)"));return s&&s[2]?s[2]:""}function setCookiesOnLocalStorage(e,t,r){if(!isLocalStorageAccessible("localStorage"))return;const i={value:t,expiry:new Date().getTime()+r};localStorage.setItem(e,JSON.stringify(i))}function setCookie(e,t,r){if(isLocalStorageAccessible("localStorage")){var s=31536e6;r&&(s=r*24*60*60*1e3),setCookiesOnLocalStorage(e,t,s)}else{let i="";if(r){let o=new Date;o.setTime(o.getTime()+r*24*60*60*1e3),i="; expires="+o.toUTCString()}document.cookie=e+"="+(t||"")+i+"; path=/"}}function setCookieMinute(e,t,r){if(isLocalStorageAccessible("localStorage"))r||(r=1),setCookiesOnLocalStorage(e,t,r*60*1e3);else{let s="";if(r){const i=new Date;i.setTime(i.getTime()+r*60*1e3),s="; expires="+i.toUTCString()}document.cookie=e+"="+(t||"")+s+"; path=/"}}function historyKey(e){return e=e||getAttributionCookie("location_id"),e?`${HISTORY_KEY}_${e}`:HISTORY_KEY}function userSessionKey(e){return e=e||getAttributionCookie("location_id"),e?`${USER_SESSION_KEY}${e}_session_id`:`${USER_SESSION_KEY}id`}function contactSessionHistoriesKey(e){return e=e||getAttributionCookie("location_id"),`${USER_SESSION_HISTORY_KEY}${e}`}function userFingerprintKey(e){return e=e||getAttributionCookie("location_id"),`${USER_FINGERPRINT_KEY}${e}_fingerprint`}function firstSessionKey(e){return`${FIRST_EVENT_KEY}${e}`}function isBot(){return/bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent)}async function request(e,t){try{var r=await fetch(e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});return await r.json()}catch{return{}}}function getFBP(){return getAttributionCookie("_fbp")}function getFBC(){return getAttributionCookie("_fbc")}function parseJSON(e){if(!e)return null;try{return JSON.parse(e)}catch(t){return console.error(t),null}}class UserSessionAttribution{constructor(t,r){M(this,"baseUrl");M(this,"locationId");M(this,"fingerprint");M(this,"type");M(this,"parentId");M(this,"parentName");this.baseUrl=getBaseUrl(),this.locationId=t,this.fingerprint=r}eventData(t,r){let s,i;if(this.locationId){let n=getStorageItem(contactSessionHistoriesKey(this.locationId));n&&(s=n),i=getAttributionCookie(firstSessionKey(this.locationId))}internalLog("function eventData: ",this.locationId,i);let o=guessUrl(t,i==null?void 0:i.url_params);return{source:getReferrerSource(referrer(r,t),document.location.href),referrer:referrer(r,t)||(i==null?void 0:i.referrer)||"",keyword:getKeyword(o),adSource:getAdSource(o),url_params:uriParams(o),page:{url:o,title:document.title},timestamp:Date.now(),campaign:getCampaign(o),contactSessionIds:parseJSON(s),fbp:getFBP(),fbc:getFBC()}}pageVisitData(t,r,s){return internalLog("function pageVisitData: ",t,r,s),{...this.eventData(t,r),type:"page-visit",parentId:getUriParams("trigger_link")?getUriParams("trigger_link"):this.parentId||"",pageVisitType:getUriParams("trigger_link")?"trigger-link":this.type||"",domain:document.domain,version:"v3",parentName:this.parentName||"",fingerprint:null,documentURL:document==null?void 0:document.URL,...s}}async store(t,r,s,i,o,n,c){internalLog("extras form script: ",c),this.locationId=t;var g=this.fingerprint||getAttributionCookie("fingerprint"),l=getAttributionCookie(userSessionKey(t));if(this.type=r,this.parentId=s,this.parentName=i,isBot())return;const u=referrer(n,o);if(l||setCookieMinute(userSessionKey(t),"temp",1),l=="temp")return;l||(internalLog(`Not found sessionId so removing older sessions: ${userSessionKey(t)}`),removeStorageItem(historyKey(t))),l&&setCookieMinute(userSessionKey(t),l,30);let S=parseJSON(getStorageItem(historyKey(t)));if(internalLog("function store: history",S),S&&S.sessions){const d=S.sessions[S.sessions.length-1],a=getAttributionCookie(firstSessionKey(t));let h=guessUrl(o,a==null?void 0:a.url_params);(d.referrer!=(referrer(n,o)||(a==null?void 0:a.referrer)||"")||d.campaign!=getCampaign(h))&&(internalLog(`Referrer and campaign change > newReferrer: ${referrer(n,o)} > old referrer: ${d.referrer}`),S=null,l=null,removeStorageItem(historyKey(t)))}if(S)if(l&&S&&r!="call-swap"){internalLog("function store: sessionId & history",l,S);var D=S.sessions,O=this.pageVisitData(o,n,c);internalLog("function store: newSession",O);try{var y=await request(`${this.baseUrl}/user_session_v3/update_session/${l}`,{locationId:t,sessions:O});O.fingerprint=y.fingerprint,setStorageItem(historyKey(t),JSON.stringify({sessions:[...D,O]}))}catch(d){console.error(d)}}else removeStorageItem(historyKey(t)),await this.store(t,r,s,i,o,n);else{var f=this.pageVisitData(o,n,c);internalLog("function store: sessions",f);try{var y=await request(`${this.baseUrl}/user_session_v3/create_session`,{sessions:f,initialReferrer:u,locationId:t,fingerprint:g,sessionId:l});(!l||l!=y.sessionId)&&setCookieMinute(userSessionKey(t),y.sessionId,30),f.fingerprint=y.fingerprint,setStorageItem(historyKey(t),JSON.stringify({sessions:[f]}));let d=parseJSON(getStorageItem(contactSessionHistoriesKey(t)));d?d.ids.push(y.sessionId):(d={ids:[y.sessionId]},setCookieMinute(firstSessionKey(t),f,30)),internalLog("function store: contactSessionIds",d),setStorageItem(contactSessionHistoriesKey(t),JSON.stringify(d))}catch(d){console.error(d),removeStorageItem(historyKey(t))}}}async create(t,r,s,i,o,n,c){this.locationId=t;var g=getAttributionCookie(userSessionKey(t)),l=getUriParams("sessionId");let u=10;(!g||g=="temp")&&(u=100),setTimeout(async()=>{l&&setCookie(userSessionKey(t),l,365),await this.store(t,r,s,i,o,n,c)},u)}update(t){const r=t.sessionId||"",s=t.locationId||"";this.locationId=s,r&&(setCookieMinute(userSessionKey(s),r,30),removeStorageItem(contactSessionHistoriesKey(s)))}getCookie(t){return getAttributionCookie(t)}setCookies(t,r){t&&r&&setCookie(t,r)}getSessionId(t){return getAttributionCookie(userSessionKey(t||this.locationId))}getUserFingerprint(t){return getAttributionCookie(userFingerprintKey(t||this.locationId))}setUserFingerprint(t,r){return setCookie(userFingerprintKey(t||this.locationId),r)}}const setupSession=async()=>{var e=typeof window>"u"?{}:window,t=e.userSessionAttribution;t||(t=e.userSessionAttribution=new UserSessionAttribution)};export{isDateEarlier as A,hasAlphabet as B,getFBC as a,calculateProductScore as b,customParseFormat as c,calculateCategoryBaseScore as d,fillDataFromCookie as e,fillDataForStandardFieldUri as f,getFBP as g,getTotalFilesSize as h,imageLoaded as i,getCountryFieldValue as j,getHiddenFieldValue as k,calculateCategoryPointScored as l,calculateCategoryPercentage as m,convertDataToFormDataType as n,isEmpty as o,emailRegex as p,verifyRedirectedPayment as q,calculateScore as r,setupSession as s,validPhone as t,usePreviewStyle as u,validURL as v,validUrl as w,urlRegex as x,verifyEmail as y,validEmail as z};
