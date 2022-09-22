import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom31.css";

import _implicitScopedStylesheets from "./custom31.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M75.5 43.2l-4.9-15.4C69.7 24.9 67 23 64 23H36c-3 0-5.7 1.9-6.7 4.8l-4.8 15.4c-2.6.7-4.5 3-4.5 5.8v12c0 2.6 1.7 4.8 4 5.7V75c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8h28v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8.3c2.3-.8 4-3 4-5.7V49c0-2.8-1.9-5.1-4.5-5.8zM30 60c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm22-17H32.2c-.7 0-1.2-.7-1-1.3l3.8-12c.1-.4.5-.7.9-.7h28c.399 0 .8.3.899.6l3.8 12.1c.2.6-.3 1.3-1 1.3H52zm17 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom31"
}
freezeTemplate(tmpl);
