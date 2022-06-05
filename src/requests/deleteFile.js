export async function deleteFile(params) {
    try {
        const response = await fetch(process.env.URL_FILE + params, {
            method: "DELETE",
        });

        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        throw new Error(error);
    }
}
