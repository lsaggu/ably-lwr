import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./calculated_insights.css";

import _implicitScopedStylesheets from "./calculated_insights.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44 6.81a6 6 0 00-4.77 9.56l-5 8.82h-.63a6 6 0 00-3 .81l-6.35-4.67A5.9 5.9 0 0024.4 20a6 6 0 10-10.73 3.67L8.52 33.2H8a5.94 5.94 0 00-3.69 1.25 6 6 0 108.41 1.08L17.89 26h.51a5.94 5.94 0 003-.8l6.35 4.67a5.9 5.9 0 00-.15 1.33 6 6 0 1010.78-3.58l5-8.82H44a6 6 0 100-12z" fill-rule="evenodd"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_calculated_insights"
}
freezeTemplate(tmpl);
