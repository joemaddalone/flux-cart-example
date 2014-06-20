/** @jsx React.DOM */
'use strict';
var React = require('react'),
    Header = require('./app-header'),
    Catalog = require('./catalog/app-catalog'),
    Cart = require('./cart/app-cart'),
    CatalogDetail = require('./product/app-catalogdetail'),
    Router = require('react-router-component'),
    Template = require('./app-template');

var Locations = Router.Locations;
var Location  = Router.Location;


var APP =
  React.createClass({
    render:function(){
      /* jshint ignore:start */
      return (
        <Template>
        <Locations hash>
          <Location path="/" handler={Catalog} />
          <Location path="/cart" handler={Cart} />
          <Location path="/item/:item" handler={CatalogDetail} />
        </Locations>
        </Template>
        )
      /* jshint ignore:end */
    }
  });

module.exports = APP;
