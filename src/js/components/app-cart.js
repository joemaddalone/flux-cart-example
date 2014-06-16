/** @jsx React.DOM */
'use strict';
var React = require('react'),
    AppStore = require('../stores/app-store'),
    Increase = require('./app-increase.js'),
    Decrease = require('./app-decrease.js'),
    RemoveFromCart = require('./app-removefromcart.js');

function cartItems(){
  return {items: AppStore.getCart()};
}


var Cart =
  React.createClass({
    getInitialState:function(){
      return cartItems();
    },
    componentWillMount:function(){
      AppStore.addChangeListener(this._onChange);
    },
    _onChange:function(){
      this.setState(cartItems());
    },
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
        )
      /* jshint ignore:end */
    }
  });

module.exports = Cart;
