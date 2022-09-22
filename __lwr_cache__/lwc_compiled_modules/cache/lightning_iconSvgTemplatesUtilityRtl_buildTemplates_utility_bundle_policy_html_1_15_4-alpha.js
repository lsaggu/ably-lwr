import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bundle_policy.css";

import _implicitScopedStylesheets from "./bundle_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M37.55 22.55a2 2 0 00-2.83 0L30.43 27a2.11 2.11 0 000 2.92l9.62 9.94a2 2 0 002.83 0l4.29-4.44a2.11 2.11 0 000-2.92l-9.62-9.94zM31.8 39a2.37 2.37 0 00-3.35 0l-6.22 6.27h-.06a2.42 2.42 0 00.06 3.34 2.37 2.37 0 003.35 0l6.22-6.22h.06a2.42 2.42 0 00-.02-3.39zM47.68 45.2h-9.76a2.4 2.4 0 100 4.8h9.76A2.36 2.36 0 0050 47.6a2.36 2.36 0 00-2.32-2.4zM13.6 2H8a6.11 6.11 0 00-6 6.2V11a6.11 6.11 0 006 6.2h5.6a6.11 6.11 0 006-6.2V8.2a6.11 6.11 0 00-6-6.2zm-1.51 10.4H9.5a2.75 2.75 0 01-2.7-2.8 2.75 2.75 0 012.71-2.8h2.59a2.75 2.75 0 012.7 2.8 2.75 2.75 0 01-2.71 2.8zM30.4 17.2H36a6.11 6.11 0 006-6.2V8.2A6.11 6.11 0 0036 2h-5.6a6.11 6.11 0 00-6 6.2V11a6.11 6.11 0 006 6.2zm1.51-10.4h2.59a2.75 2.75 0 012.7 2.8 2.75 2.75 0 01-2.71 2.79H31.9a2.75 2.75 0 01-2.7-2.8 2.75 2.75 0 012.71-2.79zM13.6 22H8a6.11 6.11 0 00-6 6.2V31a6.11 6.11 0 006 6.2h5.6a6.11 6.11 0 006-6.2v-2.8a6.11 6.11 0 00-6-6.2zm-1.51 10.4H9.51a2.8 2.8 0 010-5.6h2.58a2.8 2.8 0 110 5.6z" fill-rule="evenodd"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_bundle_policy"
}
freezeTemplate(tmpl);
