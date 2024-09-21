"use strict";
figma.showUI(__html__);
figma.ui.onmessage = function (msg) {
    if (msg.type === 'create-rectangles') {
        var nodes = [];
        for (var i = 0; i < msg.count; i++) {
            var rect = figma.createRectangle();
            rect.x = i * 150;
            rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
            figma.currentPage.appendChild(rect);
            nodes.push(rect);
        }
        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);
        // This is how figma responds back to the ui
        figma.ui.postMessage({
            type: 'create-rectangles',
            message: "Created ".concat(msg.count, " Rectangles"),
        });
    }
    figma.closePlugin();
};
