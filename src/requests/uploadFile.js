export async function uploadFile(file, params) {
    try {
        const response = await fetch(process.env.URL_FILE + params, {
            method: "POST",
            body: file,
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
