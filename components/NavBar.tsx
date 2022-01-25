import React, { Dispatch, SetStateAction } from 'react';

interface Props {
    active: boolean;
    setActive:  Dispatch<SetStateAction<boolean>>;
}


export const NavBar: React.FC<Props> = ({ active, setActive }) => {
    return (
        <div className="nav-container">

            <div className="wrapper">
                <nav>
                    <div className="logo">
                        P.
                    </div>

                    <ul className="nav-items">
                        <li>
                            <a href="#">blog</a>
                        </li>
                        <li>
                            <a href="#">contact</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a className={`nav-btn-container ${active && "active"}`} href="#">
                                <img onClick={() => setActive(true)} className='search-btn' src={"assets/images/search.svg"} alt='search-btn' />
                                <img onClick={() => setActive(false)} className='close-btn' src={"assets/images/close.svg"} alt='close-btn' />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

