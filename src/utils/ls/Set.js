const Set = (key, value) => {
    if (typeof localStorage !== "undefined") {
        localStorage.setItem(key, value);
    }
}

export default Set;