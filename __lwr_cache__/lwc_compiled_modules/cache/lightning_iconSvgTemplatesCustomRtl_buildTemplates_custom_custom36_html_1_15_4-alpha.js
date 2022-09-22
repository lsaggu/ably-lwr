import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom36.css";

import _implicitScopedStylesheets from "./custom36.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M38.7 72h-4.1c-.7 0-1.4.4-1.7 1l-1.4 2.4c-.8 1.4-.5 3.2.8 4.1.5.4 1.1.5 1.7.5 1 0 2-.5 2.6-1.5l3-5c.4-.7-.1-1.5-.9-1.5zM67.1 73c-.399-.6-1-1-1.699-1H61.3c-.8 0-1.3.8-.899 1.5l3 5C64 79.5 65 80 66 80c.6 0 1.2-.2 1.7-.5 1.3-.9 1.6-2.8.8-4.1L67.1 73zM67 20H33c-3.3 0-6 2.7-6 6v34c0 3.3 2.7 6 6 6h34c3.3 0 6-2.7 6-6V26c0-3.3-2.7-6-6-6zM36 62c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm28 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm3-12c0 1.1-.9 2-2 2H35c-1.1 0-2-.9-2-2V30c0-1.1.9-2 2-2h30c1.1 0 2 .9 2 2v20z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom36"
}
freezeTemplate(tmpl);
