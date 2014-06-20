/** @jsx React.DOM */
'use strict';

var React = require('react'),
    Header = require('../components/app-header.js');

var Template =
  React.createClass({
    render:function(){
      /* jshint ignore:start */
      return (
        <div className="container">
        <Header />
        {this.props.children}
        </div>
        )
      /* jshint ignore:end */
    }
  });

module.exports = Template;
