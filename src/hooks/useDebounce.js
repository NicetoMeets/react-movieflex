import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);         //벨류 딜레이값이 바뀌면 return에 clearTimeout이 발동

    return debounceValue;
};
