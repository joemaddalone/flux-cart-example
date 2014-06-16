/** @jsx React.DOM */
var React = require('react'),
    Catalog = require('./app-catalog'),
    Cart = require('./app-cart.js');


var APP =
  React.createClass({
    render:function(){
      return (
          <div>
            <h2>Let Shop</h2>
            <Catalog />
            <hr />
            <h2>Cart</h2>
            <Cart />
          </div>
        )
    }
  });

module.exports = APP;
