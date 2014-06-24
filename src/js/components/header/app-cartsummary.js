/** @jsx React.DOM */
'use strict';
var React =require('react'),
    Link = require('react-router-component').Link,
    AppStore = require('../../stores/app-store'),
    StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');

function CartTotals(){
  return AppStore.getCartTotals();
}

var CartSummary =
  React.createClass({
    mixins: [new StoreWatchMixin(CartTotals)],
    render:function(){
      /* jshint ignore:start */
      return  (<div>
                <Link
                href='/cart'
                className="btn btn-success">
                Cart : Items: {this.state.qty} / ${this.state.total}
              </Link>
              </div>
              )
      /* jshint ignore:end */
    }
  });
module.exports = CartSummary;
