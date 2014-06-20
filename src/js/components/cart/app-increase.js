/** @jsx React.DOM */
'use strict';
var React = require('react'),
    AppActions = require('../../actions/app-actions');

var Increase =
  React.createClass({
    handleClick:function(){
      AppActions.increaseItem(this.props.index);
    },
    render:function(){
      /* jshint ignore:start */
      return <button onClick={this.handleClick}>+</button>
      /* jshint ignore:end */
    }
  });

module.exports = Increase;
