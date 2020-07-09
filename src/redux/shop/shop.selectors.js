import { createSelector } from 'reselect';

// map so when id are numbers but the apps values are string - this is called data normalization

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectCollection = (collectionUrlParam) => createSelector([selectCollections], (collections) => collections[collectionUrlParam]);
