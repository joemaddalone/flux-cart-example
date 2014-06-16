/** @jsx React.DOM */
'use strict';
var React = require('react'),
    AppActions = require('../actions/app-actions');

var AddToCart =
  React.createClass({
    handleClick:function(){
      AppActions.addItem(this.props.item);
    },
    render:function(){
      /* jshint ignore:start */
      return <button onClick={this.handleClick}>Add To Cart</button>
      /* jshint ignore:end */
    }
  });

module.exports = AddToCart;
