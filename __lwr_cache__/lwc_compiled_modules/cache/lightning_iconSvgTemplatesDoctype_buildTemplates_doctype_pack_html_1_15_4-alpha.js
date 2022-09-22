import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pack.css";

import _implicitScopedStylesheets from "./pack.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M5.15.012A5.073 5.073 0 00.078 5.086v53.841A5.073 5.073 0 005.15 64h45.775A5.074 5.074 0 0056 58.927V20.321L37.096.012H5.15z" fill-rule="evenodd" clip-rule="evenodd" fill="#4E74B7"${3}><path d="M29.187 40.872v11.917c0 .662-.529 1.191-1.191 1.191H11.311a1.186 1.186 0 01-1.191-1.191V40.872c0-.133.021-.265.065-.375l1.59-4.768a1.184 1.184 0 011.125-.816h13.507c.508 0 .971.331 1.125.816l1.59 4.768c.043.11.065.242.065.375zm-2.45 0l-1.191-3.575H13.76l-1.191 3.575h14.168z" fill="#fff"${3}><g fill-rule="evenodd" clip-rule="evenodd"${3}><path d="M55.977 20.352v1H43.178s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z" fill="#3A57A5"${3}><path d="M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z" opacity=".5" fill="#fff"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_pack"
}
freezeTemplate(tmpl);
