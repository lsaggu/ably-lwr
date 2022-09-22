function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return "slot" + shadowSelector + " {display: inline-block;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];