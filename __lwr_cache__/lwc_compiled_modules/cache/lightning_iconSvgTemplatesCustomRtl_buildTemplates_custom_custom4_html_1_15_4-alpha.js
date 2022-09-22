import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom4.css";

import _implicitScopedStylesheets from "./custom4.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26.2 32.7L47 20.8c1.9-1.1 4.3-1.1 6.2 0l20.7 11.9c1.899 1.1 3.1 3.2 3.1 5.4v23.8c0 2.199-1.1 4.3-3.1 5.399L53.2 79.2c-1.9 1.1-4.3 1.1-6.2 0L26.2 67.3c-1.9-1.1-3.2-3.2-3.2-5.4V38.1c0-2.2 1.3-4.3 3.2-5.4z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom4"
}
freezeTemplate(tmpl);
