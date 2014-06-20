/** @jsx React.DOM */
'use strict';
var React =require('react'),
    Link = require('react-router-component').Link,
    AppStore = require('../stores/app-store');

function CartTotals(){
  return AppStore.getCartTotals();
}

var CartSummary =
  React.createClass({
    getInitialState:function(){
      return new CartTotals();
    },
    componentWillMount:function(){
      AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount:function(){
      AppStore.removeChangeListener(this._onChange);
    },
    _onChange:function(){
      this.setState(new CartTotals());
    },
    render:function(){
      /* jshint ignore:start */
      return (
          <Link className="btn btn-success" href={'/cart'}>Cart : Items: {this.state.qty} / ${this.state.total}</Link>
       )
      /* jshint ignore:end */
    }
  });
module.exports = CartSummary;
