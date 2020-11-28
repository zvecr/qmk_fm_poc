(window.webpackJsonp=window.webpackJsonp||[]).push([[1417],{376:function(e,t,r){"use strict";r.r(t);var a=r(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"qmk-toolbox"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#qmk-toolbox"}},[e._v("#")]),e._v(" QMK Toolbox")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/qmk/qmk_toolbox",target:"_blank",rel:"noopener noreferrer"}},[e._v("View on GitHub"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("This is a collection of flashing tools packaged into one app. It supports auto-detection and auto-flashing of firmware to keyboards.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/7bFh7vJ.png",alt:""}})]),e._v(" "),r("h2",{attrs:{id:"flashing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#flashing"}},[e._v("#")]),e._v(" Flashing")]),e._v(" "),r("p",[e._v("QMK Toolbox supports the following bootloaders:")]),e._v(" "),r("ul",[r("li",[e._v("Atmel/LUFA/QMK DFU via "),r("a",{attrs:{href:"http://dfu-programmer.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("dfu-programmer"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Caterina (Arduino, Pro Micro) via "),r("a",{attrs:{href:"http://nongnu.org/avrdude/",target:"_blank",rel:"noopener noreferrer"}},[e._v("avrdude"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Halfkay (Teensy, Ergodox EZ) via "),r("a",{attrs:{href:"https://pjrc.com/teensy/loader_cli.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Teensy Loader"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("ARM DFU (STM32, Kiibohd) via "),r("a",{attrs:{href:"http://dfu-util.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("dfu-util"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Atmel SAM-BA (Massdrop) via "),r("a",{attrs:{href:"https://github.com/massdrop/mdloader",target:"_blank",rel:"noopener noreferrer"}},[e._v("Massdrop Loader"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("BootloadHID (Atmel, PS2AVRGB) via "),r("a",{attrs:{href:"https://www.obdev.at/products/vusb/bootloadhid.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("bootloadHID"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("And the following ISP flashers:")]),e._v(" "),r("ul",[r("li",[e._v("USBTiny (AVR Pocket)")]),e._v(" "),r("li",[e._v("AVRISP (Arduino ISP)")]),e._v(" "),r("li",[e._v("USBasp (AVR ISP)")])]),e._v(" "),r("p",[e._v("If there's an interest in any others, they can be added if their commands are known.")]),e._v(" "),r("h2",{attrs:{id:"hid-console"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hid-console"}},[e._v("#")]),e._v(" HID Console")]),e._v(" "),r("p",[e._v("The Toolbox also listens to HID messages on usage page "),r("code",[e._v("0xFF31")]),e._v(" and usage "),r("code",[e._v("0x0074")]),e._v(", compatible with PJRC's "),r("a",{attrs:{href:"https://www.pjrc.com/teensy/hid_listen.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("hid_listen")]),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("If you have "),r("code",[e._v("CONSOLE_ENABLE = yes")]),e._v(" in your keyboard's "),r("code",[e._v("rules.mk")]),e._v(", you can print messages with "),r("code",[e._v("xprintf()")]),e._v(", useful for debugging:")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://i.imgur.com/03xuJhU.png",alt:""}})]),e._v(" "),r("p",[e._v("See the "),r("a",{attrs:{href:"https://docs.qmk.fm/#/newbs_testing_debugging?id=debugging",target:"_blank",rel:"noopener noreferrer"}},[e._v("QMK Docs"),r("OutboundLink")],1),e._v(" for more information.")]),e._v(" "),r("h2",{attrs:{id:"installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),r("h3",{attrs:{id:"dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),r("p",[e._v("When using the QMK Toolbox on Windows, it will prompt at first run to install the necessary drivers. You can get the latest release of the QMK Driver Installer "),r("a",{attrs:{href:"https://github.com/qmk/qmk_driver_installer/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"download"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[e._v("#")]),e._v(" Download")]),e._v(" "),r("p",[e._v("A Windows and macOS version are available, and you can get "),r("a",{attrs:{href:"https://github.com/qmk/qmk_toolbox/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("the latest release here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("For Homebrew users, it is also available as a Cask:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("$ brew tap homebrew/cask-drivers\n$ brew cask install qmk-toolbox\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);