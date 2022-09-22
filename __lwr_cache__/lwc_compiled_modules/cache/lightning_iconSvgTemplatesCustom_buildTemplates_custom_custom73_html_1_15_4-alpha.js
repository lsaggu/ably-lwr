import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom73.css";

import _implicitScopedStylesheets from "./custom73.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M23.5 35h53c1.3 0 2.3-1.3 1.9-2.5-1.2-4.1-3-7.9-5.4-11.2-.7-1-2.1-1.1-2.9-.3-2.4 2.2-5.7 3.5-9.2 3.5-3.7 0-7.101-1.5-9.601-4-.8-.7-2-.7-2.7 0-2.5 2.5-5.9 4-9.6 4-3.5 0-6.7-1.3-9.2-3.5-.9-.8-2.2-.6-2.9.3-2.4 3.3-4.2 7.1-5.4 11.2C21.2 33.7 22.2 35 23.5 35zM80 43c0-1.1-.9-2-2-2H22c-1.1 0-2 .9-2 2v.4C20 62 33 77.5 50 79.9 67 77.5 80 62 80 43.4V43z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom73"
}
freezeTemplate(tmpl);
