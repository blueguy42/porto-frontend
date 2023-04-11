const GetLocalStorage = (key) => {
    if (typeof localStorage !== "undefined") {
        return localStorage.getItem(key);
    }
}

export default GetLocalStorage;