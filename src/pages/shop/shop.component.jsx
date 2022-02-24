import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import {selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {

    componentDidMount(){
        const  { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }
    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
    }
    componentWillUnmount() {
      //  this.unsubsubscribeFromSnapshot();
      }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);