import React from 'react';
import { withRouter } from 'react-router-dom';

import * as S from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <S.ItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <S.Img imageUrl={imageUrl} />
        <S.Button>
            <S.Title>{title.toUpperCase()}</S.Title>
            <S.Subtitle>SHOP NOW</S.Subtitle>
        </S.Button>
    </S.ItemContainer>
);

export default withRouter(MenuItem);
