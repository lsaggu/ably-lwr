import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom11.css";

import _implicitScopedStylesheets from "./custom11.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M52.2 21.4l8 16.9L77.9 41c2 .3 2.8 2.9 1.3 4.3L66.4 58.5l3 18.5c.3 2.1-1.7 3.7-3.5 2.7L50 70.9l-15.9 8.8c-1.8 1-3.9-.601-3.5-2.7l3-18.5-12.9-13.2c-1.4-1.5-.6-4 1.3-4.3l17.8-2.7 8-16.9c.9-1.9 3.5-1.9 4.4 0z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom11"
}
freezeTemplate(tmpl);
