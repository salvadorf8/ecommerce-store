import React from 'react';

import Directory from '../../components/directory-menu/directory.component';
import { HomePageContainer } from './home-page.styled';

const HomePage = () => {
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    );
};

export default HomePage;
