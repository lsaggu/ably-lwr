import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom37.css";

import _implicitScopedStylesheets from "./custom37.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M80 56H67V44.2c2.7 2.3 6.2 3.8 10 3.8 1.7 0 3-1.3 3-3s-1.3-3-3-3c-5.5 0-10-4.9-10-11v-3c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2v3c0 6.1-4.9 11-11 11s-11-4.9-11-11v-3c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2v3c0 6.1-4.5 11-10 11-1.7 0-3 1.3-3 3s1.3 3 3 3c3.8 0 7.3-1.4 10-3.8V56H20c-1.1 0-2 .9-2 2v4.8c0 1.101.9 2.2 2 2.2h4v10.8c0 1.101.9 2.2 2 2.2h6c1.1 0 2-1.1 2-2.2v-4c0-3.3 2.7-5.8 6-5.8h20c3.3 0 6 2.5 6 5.8v4c0 1.101.9 2.2 2 2.2h6c1.1 0 2-1.1 2-2.2V65h4c1.1 0 2-1.1 2-2.2V58c0-1.1-.9-2-2-2zM39 43.9c3 2.5 6.8 4.1 11 4.1s8-1.5 11-4.1V56H39V43.9z"${3}></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom37"
}
freezeTemplate(tmpl);
