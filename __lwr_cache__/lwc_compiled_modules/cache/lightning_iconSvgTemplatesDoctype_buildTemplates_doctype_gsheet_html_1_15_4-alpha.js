import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gsheet.css";

import _implicitScopedStylesheets from "./gsheet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M5.131-.001A5.073 5.073 0 00.059 5.073v53.841a5.073 5.073 0 005.072 5.074h45.775a5.074 5.074 0 005.074-5.074V20.309L37.076-.001H5.131z" fill-rule="evenodd" clip-rule="evenodd" fill="#20A971"${3}><path d="M10.107 37.466v16.419h21.521V37.466H10.107zm6.458 15.078h-4.967v-3.58h4.967v3.58zm0-5.012h-4.967v-3.579h4.967v3.579zm0-5.011h-4.967v-3.58h4.967v3.58zm13.632 10.023H18.042v-3.58h12.155v3.58zm0-5.012H18.042v-3.579h12.155v3.579zm0-5.011H18.042v-3.58h12.155v3.58z" fill="#fff"${3}><g fill-rule="evenodd" clip-rule="evenodd"${3}><path d="M55.98 20.32v1H43.179s-6.312-1.26-6.127-6.707c0 0 .207 5.707 6.002 5.707H55.98z" fill="#189355"${3}><path d="M37.076-.031V14.53c0 1.656 1.104 5.791 6.104 5.791h12.801L37.076-.031z" opacity=".5" fill="#fff"${3}></g></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_gsheet"
}
freezeTemplate(tmpl);
