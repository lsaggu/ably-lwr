import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./publisher.css";

import _implicitScopedStylesheets from "./publisher.scoped.css?scoped=true";

import _lightningButton from "lightning/button";
import _lightningCard from "lightning/card";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-p-around_small${0}"${2}><div${3}></div></div>`;
const stc0 = {
  props: {
    "title": "Ably Publisher",
    "iconName": "utility:connected_apps"
  },
  key: 0
};
const stc1 = {
  "slot": "actions"
};
const stc2 = {
  "label": "Publish"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, st: api_static_fragment} = $api;
  const {_m0} = $ctx;
  return [api_custom_element("lightning-card", _lightningCard, stc0, [api_custom_element("lightning-button", _lightningButton, {
    attrs: stc1,
    props: stc2,
    key: 1,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
    }
  }), api_static_fragment($fragment1(), 3)])];
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
  tmpl.stylesheetToken = "ably-publisher_publisher"
}
freezeTemplate(tmpl);
