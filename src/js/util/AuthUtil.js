/**
 * Created by zombie on 2017/12/12.
 */

const { storage } = window.localStorage;

const setItem = (key, value) => {
    storage.setItem(key, value);
};

const getItem = (key) => {
    const value = storage.getItem(key);
    return value || null;
};

const removeItem = (key) => {
    storage.removeItem(key);
};

export default {
    setItem,
    getItem,
    removeItem
};
