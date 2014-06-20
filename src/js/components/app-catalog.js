/** @jsx React.DOM */
'use strict';
var React = require('react'),
    AppStore = require('../stores/app-store'),
    CatalogItem = require('./app-catalogitem.js'),
    Template = require('./app-template.js');

function getCatalog(){
  return {items: AppStore.getCatalog()};
}



var Catalog =
  React.createClass({
    getInitialState:function(){
      return getCatalog();
    },
    render:function(){
      /* jshint ignore:start */
      var items = this.state.items.map(function(item, i){
        return <CatalogItem key={i} item={item} />
      });

      return (
        <Template>
          <div className="row">
            {items}
          </div>
        </Template>
        )
      /* jshint ignore:end */
    }
  });

module.exports = Catalog;
