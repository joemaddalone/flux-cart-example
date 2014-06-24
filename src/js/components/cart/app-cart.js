/** @jsx React.DOM */
'use strict';
var React = require('react'),
    AppStore = require('../../stores/app-store'),
    Increase = require('./app-increase'),
    Decrease = require('./app-decrease'),
    RemoveFromCart = require('./app-removefromcart'),
    Link = require('react-router-component').Link,
    StoreWatchMixin = require('../../mixins/StoreWatchMixin.js');

function cartItems(){
  return {items: AppStore.getCart()};
}


var Cart =
  React.createClass({
    mixins: [new StoreWatchMixin(cartItems)],
    render:function(){
        var total = 0;
        var items = this.state.items.map(function(item, i){
          var subtotal = item.cost*item.qty;
           // while we're in here we might as well tally up our total as well.
          total+=subtotal;
          /* jshint ignore:start */
          return (
            <tr key={i}>
              <td><RemoveFromCart key={'remove_' + i} index={i} /></td>
              <td>{item.title}</td>
              <td>{item.qty}</td>
              <td>
                <Increase key={'inc' + i} index={i} />
                <Decrease key={'dec' + i} index={i} />
              </td>
              <td>${subtotal}</td>
            </tr>
          )
          /* jshint ignore:end */
        });
      /* jshint ignore:start */
      return (
        <div>
        <h2>Cart</h2>
          <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Qty.</th>
              <th></th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-right">Total</td>
              <td>${total}</td>
            </tr>
          </tfoot>
          </table>
          <Link href='/'>Continue Shopping</Link>
        </div>
        )
      /* jshint ignore:end */
    }
  });

module.exports = Cart;
