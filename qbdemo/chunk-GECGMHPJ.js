import{a as R,b as m}from"./chunk-ZAVSITCK.js";import{b as T,c as _,d as S,f as w,j as B,k as E,u as F,w as D,x as Q}from"./chunk-O75ZW264.js";import{$a as r,Ab as p,Cb as b,Db as h,Eb as M,Jb as q,Ka as y,Rb as c,Ua as C,Va as f,_a as n,ab as i,bb as u,ga as g,kb as v,wa as t,xb as s,zb as d}from"./chunk-KVN5PWNS.js";var I=()=>["QueryBuilderComponent","ngModel","formControl","QueryBuilderConfig.fields"];function k(o,V){o&1&&(r(0,"p",9),d(1," Empty rulesets are invalid by default \u2014 add a rule to make the control valid. "),i())}var J=`import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueryBuilderComponent, QueryBuilderConfig, RuleSet } from 'ngx-query-builder';

@Component({
  selector: 'app-search',
  imports: [FormsModule, ReactiveFormsModule, QueryBuilderComponent],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  config: QueryBuilderConfig = {
    fields: {
      name: { name: 'Name', type: 'string' },
      age: { name: 'Age', type: 'number' },
      city: {
        name: 'City',
        type: 'category',
        options: [
          { name: 'Istanbul', value: 'ist' },
          { name: 'Ankara', value: 'ank' },
        ],
      },
      active: { name: 'Active', type: 'boolean' },
    },
  };

  // Template-driven
  query: RuleSet = { condition: 'and', rules: [{ field: 'name', operator: '=', value: 'Jane' }] };

  // Reactive
  queryCtrl = new FormControl<RuleSet>({ condition: 'or', rules: [] }, { nonNullable: true });
}`,P='<query-builder [(ngModel)]="query" [config]="config" />',L=`<query-builder [formControl]="queryCtrl" [config]="config" />

<p>Valid: {{ queryCtrl.valid }} \xB7 Dirty: {{ queryCtrl.dirty }}</p>`,Y=(()=>{class o{constructor(){this.config={fields:{name:{name:"Name",type:"string"},age:{name:"Age",type:"number"},city:{name:"City",type:"category",options:[{name:"Istanbul",value:"ist"},{name:"Ankara",value:"ank"},{name:"Izmir",value:"izm"}]},active:{name:"Active",type:"boolean"}}},this.modelQuery={condition:"and",rules:[{field:"name",operator:"=",value:"Jane"},{field:"age",operator:">=",value:18}]},this.modelJson=g(m(this.modelQuery)),this.queryCtrl=new _({condition:"or",rules:[]},{nonNullable:!0}),this.reactiveValue=R(this.queryCtrl),this.modelTabs=c(()=>[{id:"output",label:"Output",language:"json",code:this.modelJson()},{id:"html",label:"HTML",language:"html",code:P},{id:"ts",label:"TypeScript",language:"typescript",code:J}]),this.reactiveTabs=c(()=>[{id:"output",label:"Output",language:"json",code:m(this.reactiveValue())},{id:"html",label:"HTML",language:"html",code:L},{id:"ts",label:"TypeScript",language:"typescript",code:J}]),this.toJson=m}static{this.\u0275fac=function(l){return new(l||o)}}static{this.\u0275cmp=y({type:o,selectors:[["app-basic-example"]],decls:13,vars:17,consts:[["eyebrow","Getting started","title","Basic usage","description","The query builder is a standalone form control. Bind it with ngModel for template-driven forms or with a FormControl for reactive forms \u2014 the value is always a plain RuleSet object.",3,"apis"],[1,"stack"],["heading","Template-driven (ngModel)","description","Two-way binding to a plain RuleSet property.",3,"tabs"],["data-testid","example-builder"],[3,"ngModelChange","ngModel","config"],["heading","Reactive forms (FormControl)","description","Integrates with validation and form state out of the box.",3,"tabs"],["cardActions","",1,"row"],[1,"badge"],[3,"formControl","config"],[1,"callout","callout--warning","hint"]],template:function(l,e){l&1&&(u(0,"app-page-header",0),r(1,"div",1)(2,"app-demo-card",2)(3,"div",3)(4,"query-builder",4),M("ngModelChange",function(a){return h(e.modelQuery,a)||(e.modelQuery=a),a}),v("ngModelChange",function(a){return e.modelJson.set(e.toJson(a))}),i()()(),r(5,"app-demo-card",5)(6,"div",6)(7,"span",7),d(8),i(),r(9,"span",7),d(10),i()(),u(11,"query-builder",8),C(12,k,2,0,"p",9),i()()),l&2&&(n("apis",q(16,I)),t(2),n("tabs",e.modelTabs()),t(2),b("ngModel",e.modelQuery),n("config",e.config),t(),n("tabs",e.reactiveTabs()),t(2),s("valid",e.queryCtrl.valid)("invalid",e.queryCtrl.invalid),t(),p(e.queryCtrl.valid?"Valid":"Invalid"),t(),s("active",e.queryCtrl.dirty),t(),p(e.queryCtrl.dirty?"Dirty":"Pristine"),t(),n("formControl",e.queryCtrl)("config",e.config),t(),f(e.queryCtrl.invalid?12:-1))},dependencies:[B,T,S,E,w,F,Q,D],styles:[".hint[_ngcontent-%COMP%]{margin-top:12px}"],changeDetection:0})}}return o})();export{Y as BasicExampleComponent};
