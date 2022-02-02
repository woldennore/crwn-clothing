import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>

)

const mapStateToProps = createStructuredSelector({
    collections:  selectCollections
})

export default connect(mapStateToProps)(ShopPage);