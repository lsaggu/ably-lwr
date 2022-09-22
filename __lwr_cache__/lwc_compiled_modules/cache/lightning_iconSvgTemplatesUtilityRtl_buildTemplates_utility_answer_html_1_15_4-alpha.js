import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./answer.css";

import _implicitScopedStylesheets from "./answer.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26 4C12.7 4 2 13.8 2 26c0 3.9 1.1 7.5 3 10.8.2.4.3.9.2 1.3L3 45c-.4 1.3.8 2.4 2.1 2l7-2.4c.5-.2 1-.1 1.4.2 3.7 2.1 8 3.3 12.6 3.3 13.3 0 24-9.8 24-22C49.9 13.8 39.2 4 26 4zm11.5 17.1l-12.2 12c-.5.5-1 .7-1.7.7-.6 0-1.2-.2-1.7-.7L16 27.3c-.5-.5-.5-1.2 0-1.6l1.7-1.6c.5-.5 1.2-.5 1.7 0l4.2 4.2 10.5-10.4c.5-.5 1.2-.5 1.7 0l1.7 1.6c.4.4.4 1.2 0 1.6z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_answer"
}
freezeTemplate(tmpl);
