import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom27.css";

import _implicitScopedStylesheets from "./custom27.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M24 63h52c1.1 0 2-.9 2-2V29c0-3.3-2.7-6-6-6H28c-3.3 0-6 2.7-6 6v32c0 1.1.9 2 2 2zm4-32c0-1.1.9-2 2-2h40c1.1 0 2 .9 2 2v24c0 1.1-.9 2-2 2H30c-1.1 0-2-.9-2-2V31zM80 69H58c-1.1 0-2 .9-2 2s-.9 2-2 2h-8c-1.1 0-2-.9-2-2s-.9-2-2-2H20c-1.1 0-2 .9-2 2 0 3.3 2.7 6 6 6h52c3.3 0 6-2.7 6-6 0-1.1-.9-2-2-2z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom27"
}
freezeTemplate(tmpl);
