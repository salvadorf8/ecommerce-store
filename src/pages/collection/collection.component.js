import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionsListGroup, CollectionsContainer, CollectionsHeader } from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    return (
        <CollectionsContainer>
            <CollectionsHeader>{title.toUpperCase()}</CollectionsHeader>
            <CollectionsListGroup>
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionsListGroup>
        </CollectionsContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
