import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom21.css";

import _implicitScopedStylesheets from "./custom21.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M57.6 71.1c-.3-.699-1-1.1-1.8-1.1H44.2c-.8 0-1.5.4-1.8 1.1l-2.7 7.4c-.3.7.2 1.4.9 1.4h18.8c.699 0 1.199-.801.899-1.4L57.6 71.1zM74 20H26c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V26c0-3.3-2.7-6-6-6zM50 62c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm24-10c0 1.1-.9 2-2 2H28c-1.1 0-2-.9-2-2V28c0-1.1.9-2 2-2h44c1.1 0 2 .9 2 2v24z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom21"
}
freezeTemplate(tmpl);
