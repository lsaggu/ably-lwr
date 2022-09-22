import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./box_notes.css";

import _implicitScopedStylesheets from "./box_notes.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#277A84" d="M5.112.011A5.074 5.074 0 00.039 5.085v53.841A5.074 5.074 0 005.112 64h45.775a5.074 5.074 0 005.074-5.074V20.321L37.057.011H5.112z"${3}><path fill="#1E5B60" d="M55.96 20.377v1H43.161s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707H55.96z"${3}><path opacity=".5" fill="#FFF" d="M37.059.025v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.059.025z"${3}><path fill="#FFF" d="M27.094 39.334l2.105-2.104H10.495s-.361.016-.362.401 0 1.159 0 1.347c0 .187.182.355.375.355l16.586.001zM19.768 46.602l2.104-2.104H10.495s-.361.016-.362.401v1.347c0 .187.182.356.375.356h9.26zM14.708 53.904l.268-2.104h-4.48s-.361.017-.362.402 0 1.16 0 1.346c0 .187.182.356.375.356h4.199zM15.588 53.873s1.672-.03 2.015-.112c.342-.082.406-.146.531-.271l13.104-13.104s-.494.42-1.592-.682c-.869-.87-.487-1.402-.487-1.402s-12.75 12.729-12.99 12.988c-.24.26-.252.404-.274.509-.021.105-.307 2.074-.307 2.074z"${3}><path fill="#FFF" d="M30.742 36.714c-.201.201-.96.938-1.059 1.058-.097.121-.184.227-.104.58.079.353.682 1.354 1.656 1.629 0 0 .299.107.541-.133.24-.242 1.092-1.093 1.092-1.093s.204-.172.042-.621c-.163-.448-.81-1.247-1.582-1.539-.387-.148-.586.119-.586.119z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_box_notes"
}
freezeTemplate(tmpl);
