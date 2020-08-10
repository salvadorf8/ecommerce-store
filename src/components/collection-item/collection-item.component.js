import React from 'react';
import { connect } from 'react-redux';

import * as S from './collection-item.styles';
import CustomButton from '../custom-button/custom-button.component';

import { addItem } from '../../redux/cart/cart.action';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <S.ItemContainer>
            <S.Img className='image' src={imageUrl} />
            <S.AddButton onClick={() => addItem(item)} inverted>
                Add to cart
            </S.AddButton>
            <S.Content>
                <S.Name>{name}</S.Name>
                <S.Price>${price}</S.Price>
            </S.Content>
        </S.ItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
