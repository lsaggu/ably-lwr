import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom19.css";

import _implicitScopedStylesheets from "./custom19.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M79.2 32.8c-.2-.7-1.101-.9-1.7-.4L67.4 42.5c-.801.8-2 .8-2.801 0l-7.1-7.1c-.8-.8-.8-2 0-2.8l10.2-10.2c.5-.5.3-1.4-.4-1.7C65.6 20.3 63.8 20 62 20c-10.6 0-19.1 9.2-17.9 20 .2 1.7.6 3.2 1.2 4.7L22 68.1c-2.7 2.7-2.7 7.2 0 9.9 1.4 1.4 3.2 2.1 5 2.1s3.6-.699 5-2.1l23.3-23.3c1.5.6 3.101 1 4.7 1.2 10.9 1.2 20-7.3 20-17.9 0-1.8-.3-3.6-.8-5.2z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom19"
}
freezeTemplate(tmpl);
