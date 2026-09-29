import{f as v}from"./chunk-5RT2UV35.js";import{a as C,b}from"./chunk-ZAVSITCK.js";import{b as u,c as p,f as c,k as y,u as f,w as g,x as h}from"./chunk-O75ZW264.js";import{$a as d,Jb as l,Ka as a,Rb as m,_a as o,ab as s,bb as n,wa as i}from"./chunk-KVN5PWNS.js";var S=()=>["QueryBuilderConfig.entities","Entity.defaultField","Field.entity","Rule.entity"],T=`const orderTotal: Field = { name: 'Order total', type: 'number', entity: 'order' };

config: QueryBuilderConfig = {
  entities: {
    customer: { name: 'Customer' },
    order: { name: 'Order', defaultField: orderTotal },   // field picked when switching to "Order"
    product: { name: 'Product' },                          // falls back to the first product field
  },
  fields: {
    customerName: { name: 'Name', type: 'string', entity: 'customer' },
    segment:      { name: 'Segment', type: 'category', entity: 'customer', options: [...] },
    orderDate:    { name: 'Order date', type: 'date', entity: 'order' },
    orderTotal,
    sku:          { name: 'SKU', type: 'string', entity: 'product' },
    ...
  },
};`,B=(()=>{class e{constructor(){this.orderTotal={name:"Order total",type:"number",entity:"order"},this.config={entities:{customer:{name:"Customer"},order:{name:"Order",defaultField:this.orderTotal},product:{name:"Product"}},fields:{customerName:{name:"Name",type:"string",entity:"customer"},segment:{name:"Segment",type:"category",entity:"customer",options:[{name:"Enterprise",value:"enterprise"},{name:"SMB",value:"smb"},{name:"Consumer",value:"consumer"}]},vip:{name:"VIP",type:"boolean",entity:"customer"},orderDate:{name:"Order date",type:"date",entity:"order"},orderTotal:this.orderTotal,sku:{name:"SKU",type:"string",entity:"product"},stock:{name:"Stock",type:"number",entity:"product"}}},this.queryCtrl=new p({condition:"and",rules:[{entity:"customer",field:"segment",operator:"=",value:"enterprise"},{entity:"order",field:"orderTotal",operator:">=",value:1e3},{condition:"or",rules:[{entity:"product",field:"sku",operator:"like",value:"PRO-%"},{entity:"customer",field:"vip",operator:"=",value:!0}]}]},{nonNullable:!0}),this.value=C(this.queryCtrl),this.tabs=m(()=>[{id:"output",label:"Output",language:"json",code:b(this.value())},{id:"text",label:"Readable",language:"text",code:v(this.value(),this.config)},{id:"ts",label:"Config",language:"typescript",code:T}])}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=a({type:e,selectors:[["app-entities-example"]],decls:4,vars:5,consts:[["eyebrow","Configuration","title","Entities","description","Group fields by entity. An entity selector appears in each rule and the field list is filtered to the selected entity. Use defaultField to control which field is picked when the entity changes.",3,"apis"],["heading","Customers, orders & products","description","Switch a rule's entity \u2014 the field list and default field follow.",3,"tabs"],["data-testid","example-builder"],[3,"formControl","config"]],template:function(t,r){t&1&&(n(0,"app-page-header",0),d(1,"app-demo-card",1)(2,"div",2),n(3,"query-builder",3),s()()),t&2&&(o("apis",l(4,S)),i(),o("tabs",r.tabs()),i(2),o("formControl",r.queryCtrl)("config",r.config))},dependencies:[y,u,c,f,h,g],encapsulation:2,changeDetection:0})}}return e})();export{B as EntitiesExampleComponent};
