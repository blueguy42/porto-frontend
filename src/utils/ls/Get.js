const Get = (key) => {
    if (typeof localStorage !== "undefined") {
        return localStorage.getItem(key);
    } else {
        return null;
    }
}

export default Get;