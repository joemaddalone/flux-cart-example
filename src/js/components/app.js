/** @jsx React.DOM */
'use strict';
var React = require('react'),
    Header = require('./app-header'),
    Catalog = require('./app-catalog'),
    Cart = require('./app-cart'),
    CatalogDetail = require('./app-catalogdetail'),
    Router = require('react-router-component'),
    Template = require('./app-template');

var Locations = Router.Locations;
var Location  = Router.Location;


var APP =
  React.createClass({
    render:function(){
      /* jshint ignore:start */
      return (
        <Locations hash>
          <Location path="/" handler={Catalog} />
          <Location path="/cart" handler={Cart} />
          <Location path="/item/:item" handler={CatalogDetail} />
        </Locations>
        )
      /* jshint ignore:end */
    }
  });

module.exports = APP;
