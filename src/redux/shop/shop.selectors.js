import { createSelector } from 'reselect';

// map so when id are numbers but the apps values are string - this is called data normalization - converting array to Objects (Hash Table data structure)
// it is better for searching for items than Array.  this is a common computing optimization when talking about data structures.

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

// since Array was converted to Object, coded this because Object.keys will return an array of objects so app will continue to work
export const selectCollectionsForPreview = createSelector([selectCollections], (collections) => Object.keys(collections).map((key) => collections[key]));

export const selectCollection = (collectionUrlParam) => createSelector([selectCollections], (collections) => collections[collectionUrlParam]);
