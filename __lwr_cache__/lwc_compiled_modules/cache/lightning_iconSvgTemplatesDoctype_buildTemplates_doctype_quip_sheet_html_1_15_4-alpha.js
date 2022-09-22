import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quip_sheet.css";

import _implicitScopedStylesheets from "./quip_sheet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" clip-rule="evenodd" fill="#2CAB21" d="M0 5.1v53.7C0 61.7 2.3 64 5.1 64h45.7c2.8 0 5.1-2.3 5.1-5.1V21L37 0H5.1C2.3 0 0 2.3 0 5.1z"${3}><path opacity=".5" fill="#FFF" d="M37 0l19 21H42.1c-2.8 0-5.2-2.3-5.2-5.2L37 0z"${3}><path opacity=".5" fill="#189355" d="M37 15.9v1c0 2.8 2.3 5.2 5.2 5.2H56v-1H42.1c-2.8-.1-5.1-2.4-5.1-5.2z"${3}><path fill="#FFF" d="M23.5 46.7h-6.9c-.4 0-.8.3-.8.8s.3.8.8.8h6.9c.4 0 .8-.3.8-.8s-.4-.8-.8-.8zM16.5 41.3h6.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8h-6.9c-.4 0-.8.3-.8.8.1.5.4.8.8.8zM14.2 43.2c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h11.5c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H14.2z"${3}><path fill="#FFF" d="M26.8 36.7c-3.9-3.7-10.1-3.6-13.9.2-3.8 3.8-3.9 10-.2 13.9 1.9 2 4.5 3.2 7.3 3.2h9.2c.4 0 .8-.3.8-.8V44c0-2.8-1.1-5.4-3.2-7.3zM20 52.5c-2.3 0-4.6-1-6.2-2.7-1.6-1.7-2.4-4-2.3-6.3.3-4.3 3.7-7.7 7.9-7.9h.5c4.7 0 8.5 3.8 8.5 8.5v8.4H20z"${3}></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 56 64"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_quip_sheet"
}
freezeTemplate(tmpl);
