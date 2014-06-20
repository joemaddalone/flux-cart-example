/** @jsx React.DOM */
'use strict';
var React = require('react'),
    CartSummary = require('../components/app-cartsummary');

var Header =
  React.createClass({
    render:function(){
      /* jshint ignore:start */
      return (
        <div className="row">
        <div className="col-sm-6"><h1>Lets Shop</h1></div>
          <div className="col-sm-2 col-sm-push-3">
          <br />
            <CartSummary />
          </div>
        </div>
      );
      /* jshint ignore:end */
    }
  });

module.exports = Header;
