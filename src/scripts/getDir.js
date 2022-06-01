/**
 * @function retrives file folder from relative path
 * @name getFileFolder
 * @param {string} path relative path to file
 * @returns {string} file folder (ex.: folder/filename.js => filename.js)
 */

export function getFileFolder(path) {
    return path.match(/\/.{1,}\b/)[0].slice(1);
}

/**
 * @function retrives path to folder from relative path
 * @name getPathToFolder
 * @param {string} path path to folder
 * @returns {string} relative path to file (ex.: /folder/filename.js => folder)
 */

export function getPathToFolder(path) {
    return path.match(/.{1,}\//i)[0];
}

/**
 * @function retrives first folder of path
 * @name getFolder
 * @param {string} path path to file with fileName
 * @returns {string} first folder in path (ex.: controllers/file/readFileController.js => controllers)
 */

export function getFolder(path) {
    const folder = path.match(/.{1,}?\//);
    if (folder !== null) {
        return folder[0].slice(0, folder[0].length - 1);
    } else {
        return false;
    }
}
