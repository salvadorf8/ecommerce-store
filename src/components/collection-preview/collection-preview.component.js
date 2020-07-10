import React from 'react';
import styled from 'styled-components';
import CollectionItem from '../collection-item/collection-item.component';
// import * as S from './collection-preview.styles';

const S = {};

S.CollectionPreview = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

S.Title = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
`;

S.Preview = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CollectionPreview = ({ title, items }) => {
    return (
        <S.CollectionPreview>
            <S.Title>{title.toUpperCase()}</S.Title>
            <S.Preview>
                {items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </S.Preview>
        </S.CollectionPreview>
    );
};

export default CollectionPreview;
