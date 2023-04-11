const SetLocalStorage = (key, value) => {
    if (typeof localStorage !== "undefined") {
        localStorage.setItem(key, value);
    }
}

export default SetLocalStorage;