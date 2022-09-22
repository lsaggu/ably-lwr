import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom42.css";

import _implicitScopedStylesheets from "./custom42.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M74 22H26c-3.3 0-6 2.7-6 6v6c0 1.1.9 2 2 2h56c1.1 0 2-.9 2-2v-6c0-3.3-2.7-6-6-6zM74 42H26c-1.1 0-2 .9-2 2v28c0 3.3 2.7 6 6 6h40c3.3 0 6-2.7 6-6V44c0-1.1-.9-2-2-2zm-13 9c0 1.6-1.3 3-3 3H42c-1.6 0-3-1.3-3-3 0-1.6 1.3-3 3-3h16c1.7 0 3 1.3 3 3z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom42"
}
freezeTemplate(tmpl);
