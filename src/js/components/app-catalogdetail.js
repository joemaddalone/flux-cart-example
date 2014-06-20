/** @jsx React.DOM */
'use strict';
var React = require('react'),
    AddToCart = require('./app-addtocart.js'),
    Template = require('./app-template.js'),
    Link = require('react-router-component').Link,
    AppStore = require('../stores/app-store.js');


function getCatalogItem(index){
  console.log(AppStore.getCatalog()[index]);
  return {item: AppStore.getCatalog()[index]};
}

var CatalogDetail =
  React.createClass({
    getInitialState:function(){
      return getCatalogItem(this.props.item);
    },

    render:function(){
      /* jshint ignore:start */
      return (
          <Template>
            <h2>{this.state.item.title}</h2>
            <img src={this.state.item.img} alt="" />
            <p>{this.state.item.description}</p>
            <p>${this.state.item.cost}</p>
            <div className="btn-group btn-group-sm">
              <AddToCart item={this.state.item} />
              <Link href={'/'} className="btn btn-default">Continue Shopping</Link>
            </div>
          </Template>
        )
      /* jshint ignore:end */
    }
  });

module.exports = CatalogDetail;
