import { loadCatalogTree } from "../requests/loadCatalogTree.js";
import { wrapLisInSpan } from "../scripts/wrapLisInSpan.js";
import { renderCatalogTree } from "./renderCatalogTree.js";

export function viewResultsProcedure(serverReqCallback, ...args) {
    const replaceTree = document.querySelector("#tree > ul:nth-child(1)");
    serverReqCallback(...args)
        .then((isTrue) => isTrue && loadCatalogTree())
        .then((tree) => {
            replaceTree.remove();
            renderCatalogTree(tree);
            alert("Папка создана");
            wrapLisInSpan(document.getElementById("tree"));
        })
        .catch((err) => {
            console.log(err);
            alert("Ошибка: " + err.message);
            return false;
        });
    return true;
}
