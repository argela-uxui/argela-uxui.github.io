import{$ as Tv,$t as uD,C as Ey,E as H$1,It as jo,St as ev,Wt as pi,Xt as qu,_t as bv,an as wE,ct as Zf,it as Wf,nn as vp,pn as xv,q as Rv,qt as qf,r as $$1,ut as Zu,v as Dc,vt as dD,w as FE,wt as fE,xt as ep}from"./main-CXXKAVGG.js";import{n as l,t as i}from"./chunk-BwnqWn6R.js";import{t as ce}from"./chunk-CnGJRIlR.js";import{S as wd,a as Ls,c as Qr,g as bi,n as Gr,s as Ne}from"./chunk-DV-skXfC.js";import{i as p}from"./chunk-BT7yxJkR.js";var U=()=>[`[operatorMap]`,`Field.operators`,`config.getOperators`,`translations.operatorLabels`];var $=(t,r)=>r.id;function j(t,r){if(t&1){let e=xv();pi(0,`button`,9),ep(`click`,function(){let o=qu(e).$implicit,h=Rv();return Zu(h.setMode(o.id))}),fE(1),Dc()}if(t&2){let e=r.$implicit,a=Rv();Wf(`aria-pressed`,a.mode()===e.id)(`data-testid`,`mode-`+e.id),Ey(),vp(e.label)}}var H={string:[`=`,`!=`,`contains`,`like`],number:[`=`,`!=`,`>`,`>=`,`<`,`<=`],category:[`=`,`!=`,`in`,`not in`],boolean:[`=`]};var I={string:[`=`,`!=`,`startsWith`,`endsWith`,`contains`],number:[`=`,`>`,`<`],category:[`in`,`not in`],boolean:[`=`]};var d={name:{name:`Name`,type:`string`},email:{name:`Email`,type:`string`},age:{name:`Age`,type:`number`},status:{name:`Status`,type:`category`,operators:[`=`,`!=`],options:[{name:`Active`,value:`active`},{name:`Suspended`,value:`suspended`}]},premium:{name:`Premium`,type:`boolean`}};function Q(t,r){return t===`email`?[`=`,`endsWith`]:r.type===`number`?[`>=`,`<=`]:r.operators??[`=`,`!=`]}function G(t,r){let e=d[r];if(t===`getOperators`)return Q(r,e);let a=t===`operatorMap`?I:H;return e.operators??a[e.type]??[]}var J={name:`Ada`,email:`@example.com`,age:30,status:`active`,premium:!0};function V(t){return{condition:`and`,rules:Object.keys(d).map(r=>{let e=G(t,r)[0],a=J[r];return{field:r,operator:e,value:e===`in`||e===`not in`?[a]:a}})}}var z=$$1(H$1({},p),{operatorLabels:$$1(H$1({},p.operatorLabels),{"=":`equals`,"!=":`does not equal`,">":`greater than`,">=":`at least`,"<":`less than`,"<=":`at most`,startsWith:`starts with`,endsWith:`ends with`,in:`is one of`,"not in":`is none of`})});var K={default:`// Built-in operator map (per field type) is used.
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
};`};var X=`// Friendly operator labels via translations.operatorLabels
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
};`;var pe=(()=>{class t{constructor(){this.modes=[{id:`default`,label:`Built-in`,description:`Built-in operators per type, with per-field overrides on "Status".`},{id:`operatorMap`,label:`[operatorMap]`,description:`A custom operator map replaces the defaults per field type.`},{id:`getOperators`,label:`getOperators()`,description:`A callback decides the operator list for each field.`}],this.translations=z,this.mode=jo(`default`),this.friendlyLabels=jo(!0),this.activeMode=FE(()=>this.modes.find(e=>e.id===this.mode())),this.config=FE(()=>this.mode()===`getOperators`?{fields:d,getOperators:Q}:{fields:d}),this.operatorMap=FE(()=>this.mode()===`operatorMap`?I:void 0),this.queryCtrl=new Gr(V(`default`),{nonNullable:!0}),this.value=i(this.queryCtrl),this.tabs=FE(()=>[{id:`output`,label:`Output`,language:`json`,code:l(this.value())},{id:`code`,label:`Code`,language:`typescript`,code:K[this.mode()]},{id:`labels`,label:`Labels`,language:`typescript`,code:X}])}setMode(e){this.mode.set(e),this.queryCtrl.setValue(V(e))}static{this.ɵfac=function(a){return new(a||t)}}static{this.ɵcmp=ev({type:t,selectors:[[`app-operators-example`]],decls:11,vars:9,consts:[[`eyebrow`,`Configuration`,`title`,`Operators`,`description`,`Operators are resolved in this order: config.getOperators → field.operators → [operatorMap] → built-in map. Nullable fields get is null / is not null appended. Labels come from translations.operatorLabels.`,3,`apis`],[`heading`,`Operator resolution`,3,`description`,`tabs`],[`cardActions`,``,`role`,`group`,`aria-label`,`Operator source`,1,`segmented`],[`type`,`button`],[1,`stack-sm`],[1,`friendly`],[`type`,`checkbox`,`data-testid`,`toggle-friendly-labels`,3,`change`,`checked`],[`data-testid`,`example-builder`],[3,`formControl`,`config`,`operatorMap`,`translations`],[`type`,`button`,3,`click`]],template:function(a,o){a&1&&(Zf(0,`app-page-header`,0),pi(1,`app-demo-card`,1)(2,`div`,2),bv(3,j,2,3,`button`,3,$),Dc(),pi(5,`div`,4)(6,`label`,5)(7,`input`,6),ep(`change`,function(){return o.friendlyLabels.set(!o.friendlyLabels())}),Dc(),fE(8,` Use friendly operator labels `),Dc(),pi(9,`div`,7)(10,`query-builder`,8),uD(),Dc()()()()),a&2&&(qf(`apis`,wE(8,U)),Ey(),qf(`description`,o.activeMode().description)(`tabs`,o.tabs()),Ey(2),Tv(o.modes),Ey(4),qf(`checked`,o.friendlyLabels()),Ey(3),qf(`formControl`,o.queryCtrl)(`config`,o.config())(`operatorMap`,o.operatorMap())(`translations`,o.friendlyLabels()?o.translations:void 0),dD())},dependencies:[Ls,bi,Qr,Ne,wd,ce],styles:[`.friendly[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;margin-bottom:8px;cursor:pointer}`]})}}return t})();export{pe as OperatorsExampleComponent};