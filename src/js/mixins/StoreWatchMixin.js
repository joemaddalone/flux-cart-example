/** @jsx React.DOM */
'use strict';
var React = require('react');
var AppStore = require('../stores/app-store.js');

/*
this could be more robust and accept multiple stores
and the Listener event as an arg.
 */
var StoreWatchMixin = function(cb){
  return {
    getInitialState:function(){
      return cb(this);
    },
    componentWillMount:function(){
      AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount:function(){
      AppStore.removeChangeListener(this._onChange);
    },
    _onChange:function(){
      this.setState(cb(this));
    }
  };
};

module.exports = StoreWatchMixin;
