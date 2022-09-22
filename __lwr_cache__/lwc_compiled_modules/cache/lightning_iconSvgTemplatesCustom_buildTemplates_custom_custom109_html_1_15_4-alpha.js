import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom109.css";

import _implicitScopedStylesheets from "./custom109.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M79.651 46.442l-1.395-2.093-4.06 1.751c-5.247-8.449-14.854-14.651-24.88-14.651-14.881-.007-28.967 13.716-28.967 28.249v.893l.063 1.186h7.116l-.09-1.186a8.33 8.33 0 010-.858c0-11.742 9.815-21.321 21.885-21.321a22.019 22.019 0 0118.768 10.381l-13.905 6.042a8.135 8.135 0 00-8.923-.977 7.674 7.674 0 00-3.349 10.528 8.1 8.1 0 0010.793 3.293 7.744 7.744 0 004.242-7.71l12.9-7.674a20.623 20.623 0 011.395 7.445v.858l-.09 1.186h7.116l.063-1.186a8.623 8.623 0 000-.893 25.165 25.165 0 00-2.652-10.891l3.97-2.372z" fill-rule="evenodd"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom109"
}
freezeTemplate(tmpl);
