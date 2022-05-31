import "highlight.js/styles/arduino-light.css";
const hljs = require("highlight.js/lib/common");

/**
 * @function procedure, shows highlighted content
 * @name showFile
 * @param {string} content accepts file content
 */

export function showFile(content) {
    const code = document.getElementById("code");
    code.innerHTML = content;
    hljs.highlightAll();
}
