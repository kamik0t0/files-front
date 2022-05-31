export async function readFile(filePath, url) {
    try {
        const response = await fetch(`${url}?fileName=${filePath}`);
        if (response.ok) {
            const content = await response.json();
            return content;
        } else {
            const error = await response.json();
            throw new Error(error.code);
        }
    } catch (error) {
        throw new Error(error.code);
    }
}
