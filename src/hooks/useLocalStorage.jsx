import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
    // Get the stored value from localStorage or use the initialValue
    const storedValue = localStorage.getItem(key);
    const initial = storedValue ? JSON.parse(storedValue) : initialValue;

    // State to hold the current value
    const [value, setValue] = useState(initial);

    // Update localStorage whenever the value changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [storedValue, setStoredValue];
};

export default useLocalStorage;
