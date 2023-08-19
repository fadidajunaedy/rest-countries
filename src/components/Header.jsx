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

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");

        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="container max-w-[1200px] mx-auto px-4 md:px-0">
                <div className="flex-1">
                    <a className="normal-case text-xl font-bold">Where in the world?</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <label className="swap swap-rotate w-12 h-12">
                            <input
                                type="checkbox"
                                onChange={handleToggle}
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