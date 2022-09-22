import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_model.css";

import _implicitScopedStylesheets from "./data_model.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M44.4 38.76a5.28 5.28 0 00-2.58.64l-7.12-5.25a9 9 0 001-4.2 9.61 9.61 0 00-7.19-9.29v-8.08a5.65 5.65 0 003.23-5 5.58 5.58 0 00-11.15 0 5.47 5.47 0 003.23 5v8.08A9.63 9.63 0 0016.6 30a9.25 9.25 0 001 4.2l-7.14 5.2a5.79 5.79 0 00-2.58-.64 5.58 5.58 0 105.57 5.57c0-.4-.08-.72-.08-1l7.44-5.49a9.37 9.37 0 0011 0l7.44 5.49a4.65 4.65 0 00-.08 1 5.58 5.58 0 1011.15 0 6 6 0 00-5.92-5.57zm-17.21-4.12a6.15 6.15 0 01-1.13.16 4.94 4.94 0 01-4.61-3.56 6.17 6.17 0 01-.16-1.24 4.7 4.7 0 012.42-4.12 4.83 4.83 0 014.85 0A4.71 4.71 0 0131 30a7 7 0 01-.16 1.21 5.32 5.32 0 01-3.65 3.43z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_data_model"
}
freezeTemplate(tmpl);
