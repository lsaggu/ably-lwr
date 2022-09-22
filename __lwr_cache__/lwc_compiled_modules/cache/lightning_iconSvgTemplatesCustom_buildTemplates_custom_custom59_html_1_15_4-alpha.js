import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom59.css";

import _implicitScopedStylesheets from "./custom59.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M68.3 31c1 0 1.7-.8 1.7-1.7 0-.7-.4-1.4-1.1-1.8-1.301-.7-3.301-4.1-4-6.2-.2-.8-1-1.3-1.801-1.3H38.8c-.8 0-1.6.5-1.8 1.3-.6 2-2.7 5.5-3.9 6.2-.6.4-1 1-1 1.8 0 1 .8 1.7 1.7 1.7h34.5zM32 73.9c0 3.399 2.7 6.1 6 6.1h26c3.3 0 6-2.7 6-6v-.1c0-1.101-.9-1.9-1.9-1.9H33.9c-1 0-1.9.9-1.9 1.9zM70 64V39c0-1.1-.9-2-2-2H34c-1.1 0-2 .9-2 2v25c0 1.1.9 2 2 2h34c1.1 0 2-.9 2-2z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom59"
}
freezeTemplate(tmpl);
