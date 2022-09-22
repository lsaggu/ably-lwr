import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom60.css";

import _implicitScopedStylesheets from "./custom60.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M80 45.3C77.6 31 65.1 20 50 20S22.4 31 20 45.3c-.2.9.9 1.6 1.6 1 1.5-1.3 3.4-2 5.6-2 2.8 0 5.2 1.3 6.8 3.3.4.5 1.2.5 1.6 0 1.6-2 4-3.3 6.8-3.3s5.2 1.3 6.8 3.3c.4.5 1.2.5 1.6 0 1.601-2 4-3.3 6.8-3.3 2.801 0 5.2 1.3 6.801 3.3.399.5 1.199.5 1.6 0 1.6-2 4-3.3 6.8-3.3 2.101 0 4.101.8 5.601 2 .698.6 1.698 0 1.598-1zM62 68c-1.7 0-3 1.3-3 3s-1.3 3-3 3-3-1.3-3-3V57c0-1.7-1.3-3-3-3s-3 1.3-3 3v14c0 5 4 9 9 9s9-4 9-9c0-1.7-1.3-3-3-3z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom60"
}
freezeTemplate(tmpl);
