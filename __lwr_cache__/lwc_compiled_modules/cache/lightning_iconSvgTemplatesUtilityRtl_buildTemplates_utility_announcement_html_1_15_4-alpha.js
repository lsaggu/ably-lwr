import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./announcement.css";

import _implicitScopedStylesheets from "./announcement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><g${3}><path d="M22.7 45.4l-1.3-1c-1.4-1-1.4-3-1.4-4v-2.9c0-.8-.7-1.5-1.5-1.5h-6c-.8 0-1.5.7-1.5 1.5v7.7c0 2.7 1.6 4.8 4.1 4.8H20c2.9 0 3.1-2 3.1-2s.5-1.8-.4-2.6zM45 18V4.4v-.1c0-2.4-3-3.1-4.6-1.5l-8.9 8.4c-1.4 1.2-3.2 1.7-5 1.7H11.3C6.1 13 2 17.5 2 22.7v.2c0 5.2 4.1 9.1 9.3 9.1h15.2c1.9 0 3.7.8 5.1 2l8.8 8.6c1.6 1.6 4.6 1 4.6-1.4V27.6c3 0 4.8-2.1 4.8-4.8 0-2.7-1.8-4.8-4.8-4.8z"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_announcement"
}
freezeTemplate(tmpl);
