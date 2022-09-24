import { useState } from "react";

function useLocalStorage(key: string, data: string): [string, any] {
    const [value, setValue] = useState<string>(localStorage.getItem(key) || data);

    const setItem = (item: string) => {
        localStorage.setItem(key, item)
        setValue(item)
    }

    return [
        value,
        setItem
    ]
}

export default useLocalStorage;
