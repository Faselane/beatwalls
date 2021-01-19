(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{406:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"interfaces-and-custom-structures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces-and-custom-structures"}},[t._v("#")]),t._v(" Interfaces and custom Structures")]),t._v(" "),a("p",[t._v("Copy-Pasting Structures with similar Properties is tedious and error-prone.\nSo there are some mechanism to help reduce duplicate code.\nNote However Beatwalls is "),a("strong",[t._v("NOT")]),t._v(" a scripting Language, it's okay if it gets a bit messy as long as the map looks good.")]),t._v(" "),a("h2",{attrs:{id:"repeating-structures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repeating-structures"}},[t._v("#")]),t._v(" Repeating Structures")]),t._v(" "),a("p",[t._v("By using the "),a("code",[t._v("repeat")]),t._v(" Property aswell as the variable "),a("code",[t._v("r")]),t._v(" you repeat a structure and adjust certain value.\nWe have already seen it put to use to increase the beat, here is another example to add more splines to a helix")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("helix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("beat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("startRotation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 90"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*r")]),t._v("\n")])])]),a("h2",{attrs:{id:"interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[t._v("#")]),t._v(" Interfaces")]),t._v(" "),a("p",[t._v("Interfaces hold properties for Structures with the "),a("strong",[t._v("same name")]),t._v(".\nAll Structures "),a("strong",[t._v("under them")]),t._v(" inhered these properties.\nA special case is the interface named "),a("code",[t._v("default")]),t._v(" which get's applied to "),a("strong",[t._v("all")]),t._v(" Structures")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interface helix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("beat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 49 + c"),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*d")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mirror")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Rectangle\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("duration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("helix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" easeInOutQuad(3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("9)\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("helix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" easeInOutQuad(9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("3)\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Cuboid "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can still overwrite Properties")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Resetting the interface by filling it with no properties")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interface helix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("h2",{attrs:{id:"custom-structures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-structures"}},[t._v("#")]),t._v(" Custom Structures")]),t._v(" "),a("p",[t._v("You can combine and build on top of existing Wallstructures\nIt was written so you dont have to kill yourself making custom Walls and it is perfectly fine if the file gets messy and you copy paste Stuff.")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# left and right Wall of the tunel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# _tunnel1 is the name of our Wallstructure")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Wall is the base Wallstructure")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("define _tunnel1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("structures")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Wall\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("p0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("p1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mirror")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ceiling and ground ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _tunnel2\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("structures")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Wall\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("p0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("-2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("p1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mirror")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# you can add multiple Wallstructures and apply properties on all of them.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("define tunnel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("structures")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _tunnel1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("_tunnel2\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" green\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# creating a 10 beats long tunnel")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tunnel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("beat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10 * r\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repeat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("naming convention")]),t._v(" "),a("p",[t._v("Starting Names with underscores is a simple way of telling what Structures are used only in other Structures.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);