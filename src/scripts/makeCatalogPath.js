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
