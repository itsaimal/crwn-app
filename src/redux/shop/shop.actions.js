import ShopActionTypes from "./shop.types"
import {firestore,convertCollectionsSnapshotToMap} from "../../firebase/firebase"

export const fetchingCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
   
})

export const fetchingCollectionsSuccess = collectionsMap => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchingCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
})


export const fetchingCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');

        dispatch(fetchingCollectionsStart());


collectionRef.get().then(async snapshot => {
  const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  dispatch(fetchingCollectionsSuccess(collectionsMap)) 
  

 
}).catch(error => dispatch(fetchingCollectionsFailure(error.message)));
    }
}