// ==UserScript==
// @name           Always show green info box
// @namespace      decipher
// @description    Always show green output areas
// @include        https://v2.decipherinc.com/survey/*
// @grant          none
// ==/UserScript==

(function () {
    "use strict";
	jQuery('.surveyInfo').show();
}());