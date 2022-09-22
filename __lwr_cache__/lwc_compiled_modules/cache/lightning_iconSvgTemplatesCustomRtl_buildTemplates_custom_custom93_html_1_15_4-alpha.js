import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom93.css";

import _implicitScopedStylesheets from "./custom93.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M42.4 50h29.5c.899 0 1.699-.6 1.899-1.5l5.4-19C79.6 28.2 78.6 27 77.3 27H31.7l-.8-2.8c-.4-1.3-1.6-2.2-2.9-2.2h-4.8c-1.6 0-3.1 1.2-3.2 2.8-.1 1.7 1.3 3.2 3 3.2h2.8l9.4 31.8c.4 1.3 1.5 2.2 2.9 2.2h34.8c1.6 0 3.1-1.2 3.199-2.8.101-1.7-1.3-3.2-3-3.2H42.5c-1.3 0-2.5-.9-2.8-2.1v-.1c-.7-1.9.8-3.8 2.7-3.8z"${3}><circle cx="43" cy="73" r="5"${3}><circle cx="67" cy="73" r="5"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom93"
}
freezeTemplate(tmpl);
