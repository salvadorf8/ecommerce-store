import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = { loading: true };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        // collectionRef.onSnapshot - is a firebase observable/observer pattern way
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false });
        // });

        // .get().then() - is a promise based pattern way
        // difference is we are no longer leveraging when data changes in firebase

        // below is a actually a working promise based pattern - without levereging the firebase pattern
        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });

        // below is a full fledge promise based pattern
        // document resource - https://firebase.google.com/docs/firestore/use-rest-api#making_rest_calls
        // fetch('https://firestore.googleapis.com/v1/projects/ecommerce-db-5aa0e/databases/(default)/documents/collections')
        //     .then((response) => response.json())
        //     .then((collections) => console.log(collections));
    }

    componentWillUnmount() {}

    render() {
        const { match } = this.props;
        const { loading } = this.state;

        return (
            <div>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
