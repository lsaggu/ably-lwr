import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./subscriber.css";

import _implicitScopedStylesheets from "./subscriber.scoped.css?scoped=true";

import _lightningCard from "lightning/card";
import {registerTemplate} from "lwc";
const stc0 = {
  props: {
    "title": "Ably Subscriber",
    "iconName": "utility:connected_apps"
  },
  key: 0
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element} = $api;
  return [api_custom_element("lightning-card", _lightningCard, stc0)];
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
  tmpl.stylesheetToken = "ably-subscriber_subscriber"
}
freezeTemplate(tmpl);
