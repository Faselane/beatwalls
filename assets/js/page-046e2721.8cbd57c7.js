(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{405:function(t,e,a){"use strict";a.r(e);var s=a(25),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"properties-and-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties-and-functions"}},[t._v("#")]),t._v(" Properties and Functions")]),t._v(" "),a("p",[t._v("Before we dive in, have some glossary\nThe line "),a("code",[t._v("changeX: 2")]),t._v(" consists of 2 elements.")]),t._v(" "),a("ul",[a("li",[t._v("Property: "),a("code",[t._v("changeX")])]),t._v(" "),a("li",[t._v("Value: "),a("code",[t._v("2")])])]),t._v(" "),a("p",[t._v("This line tells the program that the x-position of all Walls gets set to 2.")]),t._v(" "),a("h2",{attrs:{id:"math-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#math-expressions"}},[t._v("#")]),t._v(" Math Expressions")]),t._v(" "),a("p",[t._v("Beatwalls supports math expressions.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("helix:\n    changeWidth: 2+3*4^5%6\n    changeWidth: pi+3\n")])])]),a("h2",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),a("p",[t._v("Functions in Beatwalls take some numbers as input and return one number as output.\nThe Function types in included are:")]),t._v(" "),a("ul",[a("li",[t._v("common Math functions like "),a("code",[t._v("sin(x), ceil(x), log(x), sqrt(x), etc...")]),t._v("  found "),a("a",{attrs:{href:"https://www.objecthunter.net/exp4j/#Built-in_functions",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("all easing methods "),a("a",{attrs:{href:"https://easings.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(", e.g. "),a("code",[t._v("easeInOUtQuad(min, max)")])]),t._v(" "),a("li",[t._v("random(min,max)")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("line")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("beat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("addWidth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" easeInOutQuad(4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0) "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start with 10, ease down to 0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("changeHeight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" random(0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 2)   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# randomly change the height to a value between 0 and 2")]),t._v("\n")])])]),a("h2",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),a("p",[t._v("There are certain variables set at runtime:")]),t._v(" "),a("ul",[a("li",[t._v("math variables: "),a("code",[t._v("pi, e")])]),t._v(" "),a("li",[a("code",[t._v("p")]),t._v(" (progress): Value of 0..1 on how many Walls of the structure have been affected.\nWhen you have a structure with 4 walls, "),a("code",[t._v("p")]),t._v(" will be 0 on the first wall, "),a("code",[t._v("0.25")]),t._v(" on the second, etc...")]),t._v(" "),a("li",[a("code",[t._v("r")]),t._v(" (repetitions): 0 on the first repetition, 1 on the second, etc. More on repetitions later.")]),t._v(" "),a("li",[a("code",[t._v("d")]),t._v(" (duration): Value of the "),a("code",[t._v("duration")]),t._v(" Property.")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("helix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("beat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10 + r"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# total this Structure will be 16 beat long")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("addWidth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sin(pi"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*p)")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Not all properties that are used to "),a("strong",[t._v("create")]),t._v(" wallstructures have access to easing functions and "),a("code",[t._v("p")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"user-defined-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-defined-variables"}},[t._v("#")]),t._v(" User defined Variables")]),t._v(" "),a("p",[t._v("You can create your own variables")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("variable offset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("helix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("beat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10 + offset\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);