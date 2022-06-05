export async function viewResults(serverReqCallback, ...args) {
    try {
        return await serverReqCallback(...args);
    } catch (err) {
        console.log(err);
        alert("Ошибка: " + err.message);
        return false;
    }
}
