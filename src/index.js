import "../styles/style.scss";
import "../styles/upload.scss";
import { clickFileHandler } from "./handlers/clickFileHandler.js";
import { clickFolderHandler } from "./handlers/clickFolderHandler.js";
import { createFolderHandler } from "./handlers/createFolderHandler.js";
import { deleteFileHandler } from "./handlers/deleteFileHandler.js";
import { deleteFolderHandler } from "./handlers/deleteFolderHandler.js";
import { downloadFileHandler } from "./handlers/downloadFileHandler.js";
import { renameHandler } from "./handlers/renameHandler.js";
import { uploadFileHandler } from "./handlers/uploadFileHandler.js";
import { loadCatalogTree } from "./requests/loadCatalogTree.js";
import { wrapLisInSpan } from "./scripts/wrapLisInSpan.js";
import { renderCatalogTree } from "./view/renderCatalogTree.js";
import { highlightFile } from "./view/highlight.js";
import { resetSelection } from "./view/resetSelection.js";

const CreateFolderBtn = document.getElementById("create-folder");
const DeleteFolderBtn = document.getElementById("delete-folder");
const UploadFileBtn = document.getElementById("form");
const DownloadFileBtn = document.getElementById("download-file");
const DeleteFileBtn = document.getElementById("delete-file");
const RenameBtn = document.getElementById("rename");
const tree = document.getElementById("tree");

loadCatalogTree()
    .then((treeObj) => {
        renderCatalogTree(treeObj);
        wrapLisInSpan(tree);
    })
    .catch((err) => console.log(err));

CreateFolderBtn.addEventListener("click", createFolderHandler);
DeleteFolderBtn.addEventListener("click", deleteFolderHandler);
UploadFileBtn.addEventListener("change", uploadFileHandler);
DownloadFileBtn.addEventListener("click", downloadFileHandler);
DeleteFileBtn.addEventListener("click", deleteFileHandler);
RenameBtn.addEventListener("click", renameHandler);

tree.addEventListener("click", (event) => highlightFile(event.target));
tree.addEventListener("click", clickFolderHandler);
tree.addEventListener("click", clickFileHandler);
tree.addEventListener("click", resetSelection);
