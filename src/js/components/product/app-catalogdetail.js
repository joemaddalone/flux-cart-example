/** @jsx React.DOM */
'use strict';
var React = require('react'),
    AddToCart = require('../catalog/app-addtocart.js'),
    Link = require('react-router-component').Link,
    AppStore = require('../../stores/app-store.js');


function getCatalogItem(index){
  return {item: AppStore.getCatalog()[index]};
}

var CatalogDetail =
  React.createClass({
    getInitialState:function(){
      return getCatalogItem(this.props.item);
    },
    componentWillMount:function(){
      AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount:function(){
      AppStore.removeChangeListener(this._onChange);
    },
    _onChange:function(){
      this.setState(getCatalogItem(this.props.item));
    },
    render:function(){
      /* jshint ignore:start */
      return (
          <div>
            <h2>{this.state.item.title}</h2>
            <img src={this.state.item.img} alt="" />
            <p>{this.state.item.description}</p>
            <p>${this.state.item.cost} <span className="text-success">{this.state.item.inCart && '(' + this.state.item.qty + ' in cart)'}</span></p>
            <div className="btn-group btn-group-sm">
              <AddToCart item={this.state.item} />
              <Link href={'/'} className="btn btn-default">Continue Shopping</Link>
            </div>
          </div>
        )
      /* jshint ignore:end */
    }
  });

module.exports = CatalogDetail;
