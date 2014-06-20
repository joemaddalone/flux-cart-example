/** @jsx React.DOM */
'use strict';
var React = require('react'),
    Router = require('react-router-component');
var Link = Router.Link;

var Header =
  React.createClass({
    render:function(){
      /* jshint ignore:start */
      return (
        <div>
            <h1>Lets Shop</h1>
           <Link href={'/cart'}>Cart</Link>
        </div>

      );
      /* jshint ignore:end */
    }
  });

module.exports = Header;
