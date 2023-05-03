const Remove = (key) => {
    if (typeof localStorage !== "undefined") {
        localStorage.removeItem(key);
    }
}

export default Remove;