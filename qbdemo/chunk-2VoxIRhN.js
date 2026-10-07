import{$t as uD,C as Ey,It as jo,N as Ip,P as Iv,S as Ep,St as ev,Wt as pi,an as wE,ct as Zf,in as vv,nn as vp,qt as qf,v as Dc,vt as dD,w as FE,wt as fE,xt as ep,yt as dp,zt as mE}from"./main-CXXKAVGG.js";import{n as l,t as i}from"./chunk-BwnqWn6R.js";import{t as ce}from"./chunk-CnGJRIlR.js";import{S as wd,a as Ls,c as Qr,g as bi,n as Gr,o as Mi,s as Ne,w as zt}from"./chunk-DV-skXfC.js";var P=()=>[`QueryBuilderComponent`,`ngModel`,`formControl`,`QueryBuilderConfig.fields`];function L(n,O){n&1&&(pi(0,`p`,9),fE(1,` Empty rulesets are invalid by default — add a rule to make the control valid. `),Dc())}var A=`import { Component } from '@angular/core';
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
}`;var V=`<query-builder [(ngModel)]="query" [config]="config" />`;var H=`<query-builder [formControl]="queryCtrl" [config]="config" />

<p>Valid: {{ queryCtrl.valid }} \xB7 Dirty: {{ queryCtrl.dirty }}</p>`;var $=(()=>{class n{constructor(){this.config={fields:{name:{name:`Name`,type:`string`},age:{name:`Age`,type:`number`},city:{name:`City`,type:`category`,options:[{name:`Istanbul`,value:`ist`},{name:`Ankara`,value:`ank`},{name:`Izmir`,value:`izm`}]},active:{name:`Active`,type:`boolean`}}},this.modelQuery={condition:`and`,rules:[{field:`name`,operator:`=`,value:`Jane`},{field:`age`,operator:`>=`,value:18}]},this.modelJson=jo(l(this.modelQuery)),this.queryCtrl=new Gr({condition:`or`,rules:[]},{nonNullable:!0}),this.reactiveValue=i(this.queryCtrl),this.modelTabs=FE(()=>[{id:`output`,label:`Output`,language:`json`,code:this.modelJson()},{id:`html`,label:`HTML`,language:`html`,code:V},{id:`ts`,label:`TypeScript`,language:`typescript`,code:A}]),this.reactiveTabs=FE(()=>[{id:`output`,label:`Output`,language:`json`,code:l(this.reactiveValue())},{id:`html`,label:`HTML`,language:`html`,code:H},{id:`ts`,label:`TypeScript`,language:`typescript`,code:A}]),this.toJson=l}static{this.ɵfac=function(l){return new(l||n)}}static{this.ɵcmp=ev({type:n,selectors:[[`app-basic-example`]],decls:13,vars:17,consts:[[`eyebrow`,`Getting started`,`title`,`Basic usage`,`description`,`The query builder is a standalone form control. Bind it with ngModel for template-driven forms or with a FormControl for reactive forms — the value is always a plain RuleSet object.`,3,`apis`],[1,`stack`],[`heading`,`Template-driven (ngModel)`,`description`,`Two-way binding to a plain RuleSet property.`,3,`tabs`],[`data-testid`,`example-builder`],[3,`ngModelChange`,`ngModel`,`config`],[`heading`,`Reactive forms (FormControl)`,`description`,`Integrates with validation and form state out of the box.`,3,`tabs`],[`cardActions`,``,1,`row`],[1,`badge`],[3,`formControl`,`config`],[1,`callout`,`callout--warning`,`hint`]],template:function(l,e){l&1&&(Zf(0,`app-page-header`,0),pi(1,`div`,1)(2,`app-demo-card`,2)(3,`div`,3)(4,`query-builder`,4),uD(),Ip(`ngModelChange`,function(r){return mE(e.modelQuery,r)||(e.modelQuery=r),r}),ep(`ngModelChange`,function(r){return e.modelJson.set(e.toJson(r))}),Dc()()(),pi(5,`app-demo-card`,5)(6,`div`,6)(7,`span`,7),fE(8),Dc(),pi(9,`span`,7),fE(10),Dc()(),pi(11,`query-builder`,8),uD(),Dc(),vv(12,L,2,0,`p`,9),Dc()()),l&2&&(qf(`apis`,wE(16,P)),Ey(2),qf(`tabs`,e.modelTabs()),Ey(2),Ep(`ngModel`,e.modelQuery),qf(`config`,e.config),dD(),Ey(),qf(`tabs`,e.reactiveTabs()),Ey(2),dp(`valid`,e.queryCtrl.valid)(`invalid`,e.queryCtrl.invalid),Ey(),vp(e.queryCtrl.valid?`Valid`:`Invalid`),Ey(),dp(`active`,e.queryCtrl.dirty),Ey(),vp(e.queryCtrl.dirty?`Dirty`:`Pristine`),Ey(),qf(`formControl`,e.queryCtrl)(`config`,e.config),dD(),Ey(),Iv(e.queryCtrl.invalid?12:-1))},dependencies:[Mi,bi,zt,Ls,Qr,Ne,wd,ce],styles:[`.hint[_ngcontent-%COMP%]{margin-top:12px}`]})}}return n})();export{$ as BasicExampleComponent};