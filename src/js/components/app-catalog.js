/** @jsx React.DOM */

var React = require('react'),
    AppStore = require('../stores/app-store'),
    AddToCart = require('./app-addtocart.js')

function getCatalog(){
  return {items: AppStore.getCatalog()}
}



var Catalog =
  React.createClass({
    getInitialState:function(){
      return getCatalog();
    },
    render:function(){
      var items = this.state.items.map(function(item, i){
        return <tr key={i}><td>{item.title}</td><td>${item.cost}</td><td> <AddToCart item={item} /></td></tr>
      })
      return (
          <table className="table table-hover">
            {items}
          </table>
        )
    }
  });

module.exports = Catalog;
