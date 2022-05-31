import { loadCatalogTree } from "../requests/loadCatalogTree.js";
import { navigateCatalogTree } from "../scripts/navigateCatalogTree.js";
import { renderCatalogTree } from "./renderCatalogTree.js";
import { higlightSelected } from "../view/highlight.js";

export function viewResultsProcedure(serverReqCallback, ...args) {
    const replaceTree = document.querySelector("#tree > ul:nth-child(1)");
    serverReqCallback(...args)
        .then((isTrue) => isTrue && loadCatalogTree())
        .then((tree) => {
            console.log(tree);
            replaceTree.remove();
            renderCatalogTree(tree);
            alert("Папка создана");
            navigateCatalogTree(document.getElementById("tree"));
            higlightSelected(document.getElementById("tree").firstElementChild);
        })
        .catch((err) => {
            console.log(err);
            alert("Ошибка: " + err.message);
        });
}
