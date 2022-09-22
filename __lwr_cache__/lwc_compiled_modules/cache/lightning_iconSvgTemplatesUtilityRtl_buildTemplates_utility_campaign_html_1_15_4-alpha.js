import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./campaign.css";

import _implicitScopedStylesheets from "./campaign.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26 .8C12.1.8.8 12.1.8 26S12.1 51.2 26 51.2 51.2 39.9 51.2 26 39.9.8 26 .8zm0 45.4C14.9 46.2 5.8 37.1 5.8 26S14.9 5.8 26 5.8 46.2 14.9 46.2 26 37.1 46.2 26 46.2zm0-35.3c-8.3 0-15.1 6.8-15.1 15.1S17.7 41.1 26 41.1 41.1 34.3 41.1 26 34.3 10.9 26 10.9zm0 25.2c-5.5 0-10.1-4.5-10.1-10.1S20.5 15.9 26 15.9 36.1 20.5 36.1 26 31.5 36.1 26 36.1zM26 21c-2.8 0-5 2.3-5 5s2.3 5 5 5 5-2.3 5-5-2.2-5-5-5z"${3}></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52"
    },
    key: 0,
    svg: true
  }, [api_static_fragment($fragment1(), 2)])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_campaign"
}
freezeTemplate(tmpl);
