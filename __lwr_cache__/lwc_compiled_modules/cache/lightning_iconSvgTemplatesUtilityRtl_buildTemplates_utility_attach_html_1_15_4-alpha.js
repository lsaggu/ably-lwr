import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./attach.css";

import _implicitScopedStylesheets from "./attach.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M17.6 36.7c.6.6 1.5.5 2.1 0l10-10c.7-.7 1.9-.8 2.8 0 .9.8.8 2.2 0 3L20.2 41.8c-2.7 2.7-7.2 2.7-9.9 0l-.1-.1c-2.7-2.7-2.7-7.2 0-9.9l21.7-21.7c2.7-2.7 7.2-2.7 9.9 0l.1.1c2.7 2.7 2.7 7.2 0 9.9l-.1.1c-.5.5-.6 1.2-.2 1.8.6 1.1 1.1 2.3 1.4 3.5.2.8 1.1 1 1.7.5.8-.8 1.5-1.6 1.5-1.6 5.1-5.1 5.1-13.4 0-18.5H46C40.9.8 32.6.8 27.5 5.9L5.8 27.5C.7 32.6.7 40.9 5.8 46l.2.2c5.1 5.1 13.3 5.1 18.4 0l12.4-12.3c3.2-3.2 3.1-8.4-.2-11.6-3.2-3.1-8.4-2.9-11.5.3l-9.8 9.8c-.6.6-.6 1.6 0 2.2l2.3 2.1z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_attach"
}
freezeTemplate(tmpl);
