import { getFolder } from "./getDir.js";

/**
 * @function recursively creates relative path to file
 * @name createRelativePath
 * @param {object} node DOM-element
 * @returns {string} path to file (ex.: controllers/folder/filename.js)
 */

export function createRelativePath(node) {
    let path = [];
    recursive(node);
    function recursive(node) {
        if (node.id !== "tree") {
            let text = node.firstChild.textContent;
            path.push(text);
            recursive(node.parentNode.parentNode);
        }
    }
    path.reverse();
    return path.join("/");
}

/**
 * @function recursively searchs file in DOM based on string path
 * @name createNodePath
 * @param {string} path ex.: controllers/folder/filename.js
 * @param {object} parent iterable collection
 * @returns {object} DOM-element
 */

export function createNodePath(path, parent) {
    let domElement;
    recursive(getFolder(path), parent);
    return domElement;

    function recursive(currentPath, node) {
        if (!currentPath) currentPath = path;

        for (let i = 0; i < node.length; i++) {
            let elem = node[i];

            if (elem.firstElementChild.textContent === currentPath) {
                path = path.slice(currentPath.length + 1);

                if (path.length !== 0) {
                    recursive(getFolder(path), node[i].children[1].children);
                } else if (path.length === 0) {
                    domElement = elem.firstElementChild;
                }
            }
        }
    }
}
