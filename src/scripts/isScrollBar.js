export function isHorizontalScrollBar() {
    window.scrollTo(0, 1);

    if (window.pageXOffset !== 0) {
        console.log("horizontal");
        window.scrollTo(0, 0);
        return "horizontal";
    }
}
export function isVerticalScrollBar() {
    window.scrollTo(1, 0);

    if (window.pageYOffset != 0) {
        window.scrollTo(0, 0);
        return "vertical";
    }
}

export function isScrollBar() {
    window.scrollTo(1, 0);

    if (window.pageYOffset !== 0 && window.pageXOffset !== 0) {
        window.scrollTo(0, 0);
        return true;
    }
}
