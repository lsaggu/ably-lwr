import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./datadotcom.css";

import _implicitScopedStylesheets from "./datadotcom.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M42.5 49.1h-5.3c-.3-1.9-.5-3.6-.5-5.1h-.1c-2.5 4-6.6 6-12.2 6-4.8 0-8.5-1.6-11.1-4.9-2.6-3.3-3.8-7.6-3.8-12.8 0-3.4.6-6.4 1.9-9.1s3.1-4.9 5.5-6.4c2.4-1.6 5.2-2.4 8.4-2.4 4.6 0 8.3 1.5 11.1 4.4V2.1H42v39.6c0 2.4.2 4.9.5 7.4zm-6.2-14.5V23.9c-1.3-1.7-2.8-2.9-4.5-3.8-1.7-.8-3.6-1.2-5.8-1.2-3.3 0-5.9 1.2-7.8 3.7-1.9 2.5-2.8 5.7-2.8 9.6 0 4.1.9 7.3 2.7 9.7 1.8 2.4 4.4 3.6 7.6 3.6 3.2 0 5.8-1 7.7-3.1 2-2 2.9-4.6 2.9-7.8z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_datadotcom"
}
freezeTemplate(tmpl);
