

define(["shift-parser"], function ({parseScript}) {

    return parseScript("function a(){ [a] = () => 0; new.target; `test`; `hello,${name}`; }");

});
