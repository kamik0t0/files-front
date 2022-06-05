import { getFileName } from "../scripts/getDir.js";

export async function downloadFile(filePath) {
    try {
        const response = await fetch(
            process.env.URL_FILE + `/?file=${filePath}`
        );

        let blob = await response.blob();

        let link = document.createElement("a");
        link.download = getFileName(filePath);
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
    } catch (error) {
        throw new Error(error);
    }
}
