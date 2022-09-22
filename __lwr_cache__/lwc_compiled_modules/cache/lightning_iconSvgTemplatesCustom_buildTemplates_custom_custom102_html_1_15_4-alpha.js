import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom102.css";

import _implicitScopedStylesheets from "./custom102.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M31.179 60.7h-8.75a1.157 1.157 0 00-1.179 1.143V79.57a1.157 1.157 0 001.179 1.158h8.75a1.157 1.157 0 001.178-1.158V61.836a1.136 1.136 0 00-1.178-1.143v.007zm16.142-5.464h-8.75a1.157 1.157 0 00-1.142 1.135v23.25a1.157 1.157 0 001.178 1.143h8.714a1.157 1.157 0 001.179-1.143v-23.25a1.157 1.157 0 00-1.179-1.142v.007zM63.43 35.157h-8.75A1.157 1.157 0 0053.5 36.3v43.321a1.157 1.157 0 001.179 1.143h8.75a1.157 1.157 0 001.178-1.143V36.3a1.114 1.114 0 00-1.178-1.143zM79.57 21.23h-8.75a1.157 1.157 0 00-1.178 1.142v57.25a1.157 1.157 0 001.178 1.143h8.75a1.157 1.157 0 001.179-1.143v-57.25a1.157 1.157 0 00-1.179-1.142z" fill-rule="evenodd"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom102"
}
freezeTemplate(tmpl);
