export function sortString(a, b) {
    if (a.firstElementChild.innerHTML > b.firstElementChild.innerHTML) return 1;
    if (a.firstElementChild.innerHTML == b.firstElementChild.innerHTML)
        return 0;
    if (a.firstElementChild.innerHTML < b.firstElementChild.innerHTML)
        return -1;
}
