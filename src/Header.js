import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './index.css';

import logo from './logo.png';

function Header() {
    const [activeTab, setActiveTab] = useState(1);
    useEffect(() => {
        if (window.location.href.includes('pros-and-crons')) {
            setActiveTab(2);
        }
        if (window.location.href.includes('detail')) {
           setActiveTab(3);
        }
    }, []);

    return (
        <div className="header">
            <div className="text-header">MICRO FRONTENDS</div>
            <div className="link">
                <Link to={'/'} onClick={() => setActiveTab(1)} className={activeTab === 1 ? "active" : ""}>Khái Niệm</Link>
                <Link to={'/pros-and-crons'} onClick={() => setActiveTab(2)} className={activeTab === 2 ? "active" : ""}>Ưu/Nhược Điểm</Link>
                <Link to={'/detail'} onClick={() => setActiveTab(3)} className={activeTab === 3 ? "active" : ""}>Cách thực thiện</Link>
            </div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </div>
    );
}

export default Header;
