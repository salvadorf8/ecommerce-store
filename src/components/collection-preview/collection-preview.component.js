import React from 'react';

import * as S from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
    return (
        <S.Container>
            <S.Title>{title.toUpperCase()}</S.Title>
            <S.Content>
                {items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </S.Content>
        </S.Container>
    );
};

export default CollectionPreview;
