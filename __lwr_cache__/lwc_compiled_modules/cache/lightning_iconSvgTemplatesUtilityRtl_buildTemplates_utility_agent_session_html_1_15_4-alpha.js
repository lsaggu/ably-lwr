import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./agent_session.css";

import _implicitScopedStylesheets from "./agent_session.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M26 4C12.7 4 2.1 13.8 2.1 25.9c0 3.8 1.1 7.4 2.9 10.6.3.5.4 1.1.2 1.7l-3.1 8.5c-.3.8.5 1.5 1.3 1.3l8.6-3.3c.5-.2 1.1-.1 1.7.2 3.6 2 7.9 3.2 12.5 3.2C39.3 48 50 38.3 50 26.1 49.9 13.8 39.2 4 26 4zm-6.5 32c0 .5-.4.9-.9.9h-4.2c-.5 0-.9-.4-.9-.9v-5.4c0-.5.4-.9.9-.9h4.2c.5 0 .9.4.9.9V36zm9.6 0c0 .5-.4.9-.9.9H24c-.5 0-.9-.4-.9-.9V23.3c0-.5.4-.9.9-.9h4.2c.5 0 .9.4.9.9V36zm9.6 0c0 .5-.4.9-.9.9h-4.2c-.5 0-.9-.4-.9-.9V16.1c0-.5.4-.9.9-.9h4.2c.5 0 .9.4.9.9V36z"${3}></g>`;
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_agent_session"
}
freezeTemplate(tmpl);
