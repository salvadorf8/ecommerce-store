import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import ShopActionTypes from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

// this is known as a saga generator function
export function* fetchCollectionsAsync() {
    console.log('in saga generator function');
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }

    // this code was once in the action creator, now that we are using redux-saga,
    // this call is moved here.

    // collectionRef
    //     .get()
    //     .then((snapshot) => {
    //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //         dispatch(fetchCollectionsSuccess(collectionsMap));
    //     })
    //     .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

// base generator function which is added to the root saga - best practice
export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}
