import { useState, useEffect } from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

const Header = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    // set theme state in localstorage on mount & also update localstorage on state change
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="container">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Where in the world?</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <label className="swap swap-rotate w-12 h-12">
                            <input
                                type="checkbox"
                                onChange={handleToggle}
                                // show toggle image based on localstorage theme
                                checked={theme === "light" ? false : true}
                            />
                            <BsSunFill size={16} className="swap-on" />
                            <BsFillMoonFill size={16} className="swap-off" />
                        </label>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Header;