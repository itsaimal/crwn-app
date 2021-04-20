import React from "react";
import CollectionOverview from "../../components/collections-overview/CollectionsOverview"
import {Route} from "react-router-dom"
import CollectionPage from "../collection/Collection"
import {createStructuredSelector} from "reselect"
import {selectIsCollectionFetching, selectIsCollectionLoaded} from "../../redux/shop/shop.selectors"

import {connect} from "react-redux"
import {fetchingCollectionsStartAsync} from "../../redux/shop/shop.actions"
import WithSpinner from "../../components/with-spinner/WithSpinner"

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)
 

class ShopPage extends React.Component {


 

  componentDidMount(){
   const {fetchingCollectionsStartAsync} = this.props;
   fetchingCollectionsStartAsync();
  }


render(){

  const {match, isCollectionFetching, isCollectionLoaded} = this.props;
  

  return (

<div className='shop-page'>
    <Route exact path={`${match.path}`} render={(props) =>( <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>)} />


    <Route path={`${match.path}/:collectionId`} render={(props) =>( <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>)} />
  </div>
  )
}
} 


const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
fetchingCollectionsStartAsync: () => dispatch(fetchingCollectionsStartAsync())
});



export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);