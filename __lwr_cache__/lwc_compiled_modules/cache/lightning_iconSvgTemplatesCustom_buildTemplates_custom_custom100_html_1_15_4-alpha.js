import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom100.css";

import _implicitScopedStylesheets from "./custom100.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M61.9 72H38.1c-.7 0-1.1.6-1 1.3 1 3.8 6.4 6.7 12.8 6.7 6.5 0 11.9-2.9 12.8-6.7.3-.7-.2-1.3-.8-1.3zM74 26H26c-3.3 0-6 2.7-6 6v28c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V32c0-3.3-2.7-6-6-6zm0 32c0 1.1-.9 2-2 2H28c-1.1 0-2-.9-2-2V34c0-1.1.9-2 2-2h44c1.1 0 2 .9 2 2v24z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom100"
}
freezeTemplate(tmpl);
