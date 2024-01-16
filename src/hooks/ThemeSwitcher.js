import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        // <button
        //     onClick={toggleDarkMode}
        //     className="px-4 py-2 rounded-md bg-gray-800 text-white"
        // >
        //     {darkMode ? 'Gündüz' : 'Gece'}
        // </button>

        <label for="Toggle2" className=" nav-link  inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
            <span>&#9790;</span>
            <span className="relative">
                <input onClick={toggleDarkMode} id="Toggle2" type="checkbox" className="hidden peer" />
                <div className="w-10 h-4 rounded-full shadow bg-gray-600 "></div>
                <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-violet-400"></div>
            </span>
            <span>&#9728;</span>
        </label>

    );
};

export default ThemeSwitcher;