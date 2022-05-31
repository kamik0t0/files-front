export async function deleteFile(params) {
    try {
        const response = await fetch(process.env.URL_FILE + params, {
            method: "DELETE",
        });

        if (response.ok) {
            return await response.json();
        } else {
            const error = await response.json();
            throw new Error(error.code);
        }
    } catch (error) {
        throw new Error(error);
    }
}
