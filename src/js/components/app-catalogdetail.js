/** @jsx React.DOM */
'use strict';
var React = require('react');
var AddToCart = require('./app-addtocart.js');
var Template = require('./app-template.js');
var Link = require('react-router-component').Link;
var AppStore = require('../stores/app-store.js');


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
            <AddToCart item={this.state.item} />
            <Link href={'/'}>Continue Shopping</Link>
          </Template>
        )
      /* jshint ignore:end */
    }
  });

module.exports = CatalogDetail;
