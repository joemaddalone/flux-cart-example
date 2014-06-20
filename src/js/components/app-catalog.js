/** @jsx React.DOM */
'use strict';
var React = require('react'),
    AppStore = require('../stores/app-store'),
    CatalogItem = require('./app-catalogitem.js');

function getCatalog(){
  return {items: AppStore.getCatalog()};
}



var Catalog =
  React.createClass({
    getInitialState:function(){
      return getCatalog();
    },
    componentWillMount:function(){
      AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount:function(){
      AppStore.removeChangeListener(this._onChange);
    },
    _onChange:function(){
      this.setState(getCatalog());
    },
    render:function(){
      /* jshint ignore:start */
      var items = this.state.items.map(function(item, i){
        return <CatalogItem key={i} item={item} />
      });

      return (
          <div className="row">
            {items}
          </div>
        )
      /* jshint ignore:end */
    }
  });

module.exports = Catalog;
