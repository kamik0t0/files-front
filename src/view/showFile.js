/**
 * @function procedure, shows highlighted content
 * @name showFile
 * @param {string} content accepts file content
 */

export async function showFile(content) {
    const code = document.getElementById("code");
    code.innerHTML = content;
    await import("highlight.js/styles/arduino-light.css");
    const { HighlightJS } = await import("highlight.js/lib/common");
    HighlightJS.highlightAll();
}
