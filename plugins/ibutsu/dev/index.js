"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dev_utils_1 = require("@backstage/dev-utils");
var plugin_1 = require("../src/plugin");
(0, dev_utils_1.createDevApp)()
    .registerPlugin(plugin_1.IbutsuPlugin)
    .addPage({
    element: <plugin_1.EntityIbutsuContent />,
    title: 'Root Page',
    path: '/ibutsu'
})
    .render();
