/** @jsx React.DOM */

var React = require('react'),
    AppActions = require('../actions/app-actions')

var AddToCart =
  React.createClass({
    handleClick:function(){
      AppActions.addItem(this.props.item)
    },
    render:function(){
      return <button onClick={this.handleClick}>Add To Cart</button>
    }
  });

module.exports = AddToCart;
