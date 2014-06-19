/** @jsx React.DOM */
'use strict';
var React = require('react'),
    Catalog = require('./app-catalog'),
    Cart = require('./app-cart.js');


var APP =
  React.createClass({
    render:function(){
      /* jshint ignore:start */
      return (
          <div>
            <h2>Let's Shop</h2>
            <Catalog />
            <hr />
            <h2>Cart</h2>
            <Cart />
          </div>
        )
      /* jshint ignore:end */
    }
  });

module.exports = APP;
