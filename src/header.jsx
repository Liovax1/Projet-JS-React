import React from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = ({ userName }) => {
    return (
        <header>
            <nav>
                <div className="left">
                    <a href="/">Accueil</a>
                </div>
                <div className="center">
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" width={50} />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" width={50} />
                    </a>
                    <p className="right">{userName}</p>
                </div>
            </nav>
        </header>
    );
}

export default Header;