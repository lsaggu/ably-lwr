import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./collection_variable.css";

import _implicitScopedStylesheets from "./collection_variable.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M45 2H7C4.2 2 2 4.2 2 7v38c0 2.7 2.2 5 5 5h38c2.7 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5zm-2.4 39.4c-.1.6-.7 1.1-1.4 1.1h-31c-.6 0-1.1-.6-1.1-1.3V10.6c0-.6.6-1.1 1.3-1.1h31c.6 0 1.1.6 1.1 1.3v30.6z"${3}><path d="M33 22.4c1 0 3.1-.8 3.1-3.6s-2-2.9-2.6-2.9c-1.2 0-2.4.9-3.5 2.7-1.1 1.9-2.3 3.9-2.3 3.9-.3-1.3-.5-2.4-.6-2.9-.2-1.1-1.5-3.6-4.3-3.6-2.7 0-5.2 1.6-5.2 1.6-.5.3-.8.8-.8 1.4 0 .9.7 1.7 1.7 1.7.3 0 .5-.1.7-.2 0 0 2.1-1.2 2.5 0 .1.3.2.7.4 1.1.5 1.8 1 3.9 1.4 5.8L21.7 30s-2-.7-3.1-.7-3.1.8-3.1 3.6 2 2.9 2.6 2.9c1.2 0 2.4-.9 3.5-2.7 1.1-1.9 2.3-3.9 2.3-3.9.4 1.7.6 3.1.8 3.6.7 1.9 2.2 3.1 4.3 3.1 0 0 2.1 0 4.7-1.4.6-.2 1-.8 1-1.5 0-.9-.7-1.7-1.7-1.7-.3 0-.5.1-.7.2 0 0-1.8 1-2.4.2-.4-.8-.8-2-1.1-3.3-.3-1.2-.6-2.7-.8-4.1l1.8-2.6c.2 0 2.2.7 3.2.7z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_collection_variable"
}
freezeTemplate(tmpl);
