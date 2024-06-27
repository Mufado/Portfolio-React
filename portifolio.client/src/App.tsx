import React, { useState } from 'react';
import Header from './components/Header/Header.tsx';
import Body from './components/Body/Body.tsx';
import AboutPage from './components/AboutPage/AboutPage.tsx';
import GameDevPage from './components/GameDevPage/GameDevPage.tsx';
import WebDevPage from './components/WebDevPage/WebDevPage.tsx';
import './App.css';

const App: React.FC = () => {

    type Page = "about" | "gamedev" | "webdev";

    const [activePage, setActivePage] = useState<Page>("about");

    const activePageDict = { about: <AboutPage />, gamedev: <GameDevPage />, webdev: <WebDevPage /> };

    return (
        <div className="container">
            <Header activePage={activePage} setActivePage={setActivePage} />
            <Body>
                {activePageDict[activePage]}
            </Body>
        </div>
    );
}

export default App;