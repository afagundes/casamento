function isStringValid(value) {
    if (!value || value.trim() === "") {
        return false;
    }

    return true;
}

export { isStringValid };