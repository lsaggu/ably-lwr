import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom30.css";

import _implicitScopedStylesheets from "./custom30.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M71.5 28.5C66 23 58.7 20 51 20c-1.7 0-3 1.3-3 3s1.3 3 3 3c6.1 0 11.9 2.4 16.3 6.7C71.6 37.1 74 42.9 74 49c0 1.7 1.3 3 3 3s3-1.3 3-3c0-7.7-3-15-8.5-20.5z"${3}><path d="M51 32c-1.7 0-3 1.3-3 3s1.3 3 3 3c2.9 0 5.7 1.1 7.8 3.2C60.9 43.3 62 46 62 49c0 1.7 1.3 3 3 3s3-1.3 3-3c0-4.5-1.8-8.8-5-12s-7.5-5-12-5zM46.7 60.7l2.6-7c1.8.7 3.8.3 5.3-1.101 2-2 2-5.1 0-7.1s-5.1-2-7.1 0c-1.5 1.5-1.8 3.7-1 5.6L40 54 28.3 42.3c-.8-.8-2.2-.8-2.9.1-7.5 9-7 22.4 1.5 30.8 8.4 8.399 21.8 8.899 30.8 1.5.9-.7.9-2.1.1-2.9L46.7 60.7z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom30"
}
freezeTemplate(tmpl);
