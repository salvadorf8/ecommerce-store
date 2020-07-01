import './HomePage.styles.scss';

import React from 'react';

import DirectoryMenu from '../components/directory-menu/DirectoryMenu.component';

const HomePage = () => {
    return (
        <div className='homepage'>
            <DirectoryMenu />
        </div>
    );
};

export default HomePage;
