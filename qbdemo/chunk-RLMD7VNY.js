import{d as h}from"./chunk-CMO6HXKV.js";import{a as P,b as W}from"./chunk-ZAVSITCK.js";import{b as D,c as T,f as k,k as q,u as x,w,x as F}from"./chunk-O75ZW264.js";import{$a as l,Ab as A,Jb as N,Ka as O,Rb as p,Ta as _,Y as C,Ya as L,Z as M,Za as E,_a as s,a as u,ab as i,b as c,bb as f,ga as m,ib as S,kb as g,mb as b,wa as n,zb as y}from"./chunk-KVN5PWNS.js";var I=()=>["[operatorMap]","Field.operators","config.getOperators","translations.operatorLabels"],Q=(t,r)=>r.id;function U(t,r){if(t&1){let e=S();l(0,"button",9),g("click",function(){let o=C(e).$implicit,v=b();return M(v.setMode(o.id))}),y(1),i()}if(t&2){let e=r.$implicit,a=b();_("aria-pressed",a.mode()===e.id)("data-testid","mode-"+e.id),n(),A(e.label)}}var $={string:["=","!=","contains","like"],number:["=","!=",">",">=","<","<="],category:["=","!=","in","not in"],boolean:["="]},B={string:["=","!=","startsWith","endsWith","contains"],number:["=",">","<"],category:["in","not in"],boolean:["="]},d={name:{name:"Name",type:"string"},email:{name:"Email",type:"string"},age:{name:"Age",type:"number"},status:{name:"Status",type:"category",operators:["=","!="],options:[{name:"Active",value:"active"},{name:"Suspended",value:"suspended"}]},premium:{name:"Premium",type:"boolean"}};function V(t,r){return t==="email"?["=","endsWith"]:r.type==="number"?[">=","<="]:r.operators??["=","!="]}function j(t,r){let e=d[r];if(t==="getOperators")return V(r,e);let a=t==="operatorMap"?B:$;return e.operators??a[e.type]??[]}var H={name:"Ada",email:"@example.com",age:30,status:"active",premium:!0};function R(t){return{condition:"and",rules:Object.keys(d).map(r=>{let e=j(t,r)[0],a=H[r];return{field:r,operator:e,value:e==="in"||e==="not in"?[a]:a}})}}var G=c(u({},h),{operatorLabels:c(u({},h.operatorLabels),{"=":"equals","!=":"does not equal",">":"greater than",">=":"at least","<":"less than","<=":"at most",startsWith:"starts with",endsWith:"ends with",in:"is one of","not in":"is none of"})}),J={default:`// Built-in operator map (per field type) is used.
// Per-field "operators" always take precedence:
status: { name: 'Status', type: 'category', operators: ['=', '!='], options: [...] }

<query-builder [formControl]="queryCtrl" [config]="config" [translations]="translations" />`,operatorMap:`operatorMap: Record<string, string[]> = {
  string: ['=', '!=', 'startsWith', 'endsWith', 'contains'],
  number: ['=', '>', '<'],
  category: ['in', 'not in'],
  boolean: ['='],
};

<query-builder [formControl]="queryCtrl" [config]="config" [operatorMap]="operatorMap" />`,getOperators:`config: QueryBuilderConfig = {
  fields,
  // Full control \u2014 called for every field, overrides operatorMap and field.operators.
  getOperators: (fieldName, field) => {
    if (fieldName === 'email') { return ['=', 'endsWith']; }
    if (field.type === 'number') { return ['>=', '<=']; }
    return field.operators ?? ['=', '!='];
  },
};`},z=`// Friendly operator labels via translations.operatorLabels
translations: QueryBuilderTranslations = {
  ...english,
  operatorLabels: {
    ...english.operatorLabels,
    '=': 'equals',
    '!=': 'does not equal',
    startsWith: 'starts with',
    endsWith: 'ends with',
    in: 'is one of',
    ...
  },
};`,se=(()=>{class t{constructor(){this.modes=[{id:"default",label:"Built-in",description:'Built-in operators per type, with per-field overrides on "Status".'},{id:"operatorMap",label:"[operatorMap]",description:"A custom operator map replaces the defaults per field type."},{id:"getOperators",label:"getOperators()",description:"A callback decides the operator list for each field."}],this.translations=G,this.mode=m("default"),this.friendlyLabels=m(!0),this.activeMode=p(()=>this.modes.find(e=>e.id===this.mode())),this.config=p(()=>this.mode()==="getOperators"?{fields:d,getOperators:V}:{fields:d}),this.operatorMap=p(()=>this.mode()==="operatorMap"?B:void 0),this.queryCtrl=new T(R("default"),{nonNullable:!0}),this.value=P(this.queryCtrl),this.tabs=p(()=>[{id:"output",label:"Output",language:"json",code:W(this.value())},{id:"code",label:"Code",language:"typescript",code:J[this.mode()]},{id:"labels",label:"Labels",language:"typescript",code:z}])}setMode(e){this.mode.set(e),this.queryCtrl.setValue(R(e))}static{this.\u0275fac=function(a){return new(a||t)}}static{this.\u0275cmp=O({type:t,selectors:[["app-operators-example"]],decls:11,vars:9,consts:[["eyebrow","Configuration","title","Operators","description","Operators are resolved in this order: config.getOperators \u2192 field.operators \u2192 [operatorMap] \u2192 built-in map. Nullable fields get is null / is not null appended. Labels come from translations.operatorLabels.",3,"apis"],["heading","Operator resolution",3,"description","tabs"],["cardActions","","role","group","aria-label","Operator source",1,"segmented"],["type","button"],[1,"stack-sm"],[1,"friendly"],["type","checkbox","data-testid","toggle-friendly-labels",3,"change","checked"],["data-testid","example-builder"],[3,"formControl","config","operatorMap","translations"],["type","button",3,"click"]],template:function(a,o){a&1&&(f(0,"app-page-header",0),l(1,"app-demo-card",1)(2,"div",2),L(3,U,2,3,"button",3,Q),i(),l(5,"div",4)(6,"label",5)(7,"input",6),g("change",function(){return o.friendlyLabels.set(!o.friendlyLabels())}),i(),y(8," Use friendly operator labels "),i(),l(9,"div",7),f(10,"query-builder",8),i()()()),a&2&&(s("apis",N(8,I)),n(),s("description",o.activeMode().description)("tabs",o.tabs()),n(2),E(o.modes),n(4),s("checked",o.friendlyLabels()),n(3),s("formControl",o.queryCtrl)("config",o.config())("operatorMap",o.operatorMap())("translations",o.friendlyLabels()?o.translations:void 0))},dependencies:[q,D,k,x,F,w],styles:[".friendly[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;margin-bottom:8px;cursor:pointer}"],changeDetection:0})}}return t})();export{se as OperatorsExampleComponent};
