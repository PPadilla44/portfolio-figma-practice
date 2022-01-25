import React from 'react';

interface Props {
    active: boolean;
}

export const SearchBar: React.FC<Props> = ({ active }) => {

    return (
    <div className={`search-box ${active && "active"}`}>
        <input type="text" placeholder='Search here...' />
    </div>
    );
};
