import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom84.css";

import _implicitScopedStylesheets from "./custom84.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M75 64H25c-1.7 0-3 1.3-3 3s1.3 3 3 3h4l1.7 8.5c.2.9 1 1.5 1.9 1.5h32.9c.9 0 1.7-.6 1.9-1.5L69 70h6c1.7 0 3-1.3 3-3s-1.3-3-3-3zM33 58h14v-5.6c-1.2-.7-2-2-2-3.4 0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.8 2.8-2 3.4V58h14c1.1 0 2-.9 2-2v-3c0-6.1-5.8-8.2-10.4-10.1-3.1-1.3-3.6-2.5-3.6-3.7 0-1.3.9-2.5 1.9-3.4 1.8-1.6 2.899-3.9 2.899-6.6 0-4.9-3.2-9.2-8.8-9.2-5.6 0-8.8 4.3-8.8 9.2 0 2.7 1 4.9 2.9 6.6 1 .9 1.9 2.1 1.9 3.4 0 1.3-.5 2.4-3.6 3.7C36.8 44.8 31 47.2 31 53v3c0 1.1.9 2 2 2z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom84"
}
freezeTemplate(tmpl);
