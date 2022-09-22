import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom110.css";

import _implicitScopedStylesheets from "./custom110.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M61.714 20.229H38.286a5.986 5.986 0 00-6.143 5.928v47.536a6.129 6.129 0 006.143 6.071h23.428a6.129 6.129 0 006.143-6.071V26.157a5.986 5.986 0 00-6.143-5.928zm-16.071 3.428h8.714a.55.55 0 01.536.536.607.607 0 01-.536.536h-8.714a.536.536 0 110-1.072zm7.75 51.857a.643.643 0 01-.714.536h-5.536a.55.55 0 01-.536-.536v-2.5c0-.25.286-.643.536-.643h5.571a.714.714 0 01.715.643v2.5h-.036zm10.928-7.357a.629.629 0 01-.678.643H36.357a.629.629 0 01-.714-.643v-39.5a.75.75 0 01.714-.786h27.25c.4.038.7.385.679.786v39.5h.035z" fill-rule="evenodd"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom110"
}
freezeTemplate(tmpl);
