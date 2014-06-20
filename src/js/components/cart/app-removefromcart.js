/** @jsx React.DOM */
'use strict';
var React = require('react'),
    AppActions = require('../../actions/app-actions');

var RemoveFromCart =
  React.createClass({
    handleClick:function(){
      AppActions.removeItem(this.props.index);
    },
    render:function(){
      /* jshint ignore:start */
      return <button onClick={this.handleClick}>x</button>
      /* jshint ignore:end */
    }
  });

module.exports = RemoveFromCart;
