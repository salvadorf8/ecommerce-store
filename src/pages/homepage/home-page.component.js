import './home-page.styles.scss';
import React from 'react';

import Directory from '../../components/directory-menu/directory.component';

const HomePage = () => {
    return (
        <div className='homepage'>
            <Directory />
        </div>
    );
};

export default HomePage;
