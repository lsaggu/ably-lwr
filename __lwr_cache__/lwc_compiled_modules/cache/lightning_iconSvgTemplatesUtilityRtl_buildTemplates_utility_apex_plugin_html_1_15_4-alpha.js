import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apex_plugin.css";

import _implicitScopedStylesheets from "./apex_plugin.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26.2 18.1L37.3 7c.6-.6.6-1.5 0-2.1l-2.4-2.4c-.6-.6-1.5-.6-2.1 0L21.7 13.6l4.5 4.5zM38.4 30.7l11.1-11.1c.6-.6.6-1.5 0-2.1l-2.4-2.4c-.6-.6-1.5-.6-2.1 0L33.9 26.2l4.5 4.5zM36.8 39.9c.2-.2.3-.5.4-.8.1-.4 0-.8-.2-1.1-.1-.1-.1-.2-.2-.2L14.3 15.3c-.2-.3-.7-.4-1.1-.4-.4 0-.8.2-1.1.5-.2.2-.4.3-.6.5-.1.1-.2.3-.3.4-.1.2-.3.3-.4.5-.1.2-.3.4-.4.6-.2.2-.3.5-.4.8-.2.3-.3.6-.4.9-.2.3-.3.7-.4 1.1-.2.4-.3.8-.4 1.2-.1.5-.3.9-.4 1.4-.1.5-.2 1-.3 1.6-.1.6-.2 1.2-.3 1.7-.1.6-.2 1.3-.2 1.9-.1.7-.1 1.4-.1 2.2v2.4c0 .9 0 1.7.1 2.6 0 .9.1 1.9.2 2.8 0 .3.1.5.1.8H8L2.8 44c-.8.4-.8 1.4-.3 2l3.7 3.7c.6.6 1.5.6 2.1 0l5.2-5.2c1.9.2 3.7.3 5.6.3 1.6 0 3.1 0 4.7-.1 1.3-.1 2.6-.2 3.8-.5 1-.2 2-.4 3-.7.8-.2 1.6-.5 2.3-.9.6-.3 1.2-.6 1.7-.9.7-.4 1.4-1 2-1.6l.2-.2z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_apex_plugin"
}
freezeTemplate(tmpl);
