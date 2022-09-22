import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import _ablyPublisher from "ably/publisher";
import _ablySubscriber from "ably/subscriber";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-col slds-size_1-of-1 slds-align_absolute-center slds-p-around_small${0}"${2}><img src="/public/assets/recipes-logo.png" alt="logo"${3}></div>`;
const $fragment2 = parseFragment`<div class="slds-col slds-size_1-of-1 slds-align_absolute-center slds-p-around_small${0}"${2}><div class="slds-text-heading_large${0}"${2}>Hello World!</div></div>`;
const stc0 = {
  key: 0
};
const stc1 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-1": true,
    "slds-large-size_1-of-2": true,
    "slds-p-around_large": true
  },
  key: 6
};
const stc3 = {
  key: 7
};
const stc4 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-1": true,
    "slds-large-size_1-of-2": true,
    "slds-p-around_large": true
  },
  key: 8
};
const stc5 = {
  key: 9
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, c: api_custom_element, h: api_element} = $api;
  return [api_element("main", stc0, [api_element("div", stc1, [api_static_fragment($fragment1(), 3), api_static_fragment($fragment2(), 5), api_element("div", stc2, [api_custom_element("ably-publisher", _ablyPublisher, stc3)]), api_element("div", stc4, [api_custom_element("ably-subscriber", _ablySubscriber, stc5)])])])];
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "main-app_app"
}
freezeTemplate(tmpl);
