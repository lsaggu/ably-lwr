import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gdoc.css";

import _implicitScopedStylesheets from "./gdoc.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M5.112.011A5.074 5.074 0 00.039 5.085v53.841A5.074 5.074 0 005.112 64h45.775a5.074 5.074 0 005.074-5.074V20.321L37.057.011H5.112z" fill-rule="evenodd" clip-rule="evenodd" fill="#3C8CEA"${3}><path d="M10.133 37.439h21.564v2.059H10.133zm0 4.801h21.564v2.057H10.133zm0 4.801h21.564v2.057H10.133zm0 4.8h12.233v2.058H10.133z" fill="#fff"${3}><g fill-rule="evenodd" clip-rule="evenodd"${3}><path d="M55.96 20.377v1H43.161s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707H55.96z" fill="#2D6FE4"${3}><path d="M37.058.025v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.058.025z" opacity=".5" fill="#fff"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_gdoc"
}
freezeTemplate(tmpl);
