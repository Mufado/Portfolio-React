import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import './Header.css';

interface HeaderProps {
    activePage: string;
    setActivePage: (page: "about" | "gamedev" | "webdev") => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
    return (
        <header>
            <div className="bottom-border"></div>
            <nav>
                <div className={activePage === "about" ? "button active" : "button"} onClick={() => setActivePage("about")}>
                    <FontAwesomeIcon className="icon" icon={faUser} />
                    <span>About Me</span>
                </div>
                <div className={activePage === "gamedev" ? "button active" : "button"} onClick={() => setActivePage("gamedev")}>
                    <FontAwesomeIcon className="icon" icon={faGamepad} />
                    <span>Game Development</span>
                </div>
                <div className={activePage === "webdev" ? "button active" : "button"} onClick={() => setActivePage("webdev")}>
                    <FontAwesomeIcon className="icon" icon={faCode} />
                    <span>Web Development</span>
                </div>
            </nav>
            <div className="bottom-border"></div>
        </header>
    );
}

export default Header;
