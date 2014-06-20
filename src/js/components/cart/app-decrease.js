/** @jsx React.DOM */
'use strict';
var React = require('react'),
    AppActions = require('../../actions/app-actions.js');

var Decrease =
  React.createClass({
    handleClick:function(){
      AppActions.decreaseItem(this.props.index);
    },
    render:function(){
      /* jshint ignore:start */
      return <button onClick={this.handleClick}>-</button>
      /* jshint ignore:end */
    }
  });

module.exports = Decrease;
