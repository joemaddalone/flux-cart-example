'use strict';
var AppDispatcher = require('../dispatcher/app-dispatcher'),
    AppConstants = require('../constants/app-constants');

var AppActions = {
  addItem:function(item){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.ADD_ITEM,
      item:item
    });
  },
  removeItem:function(index){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.REMOVE_ITEM,
      index:index
    });
  },
  increaseItem:function(index){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.INCREASE_ITEM,
      index:index
    });
  },
  decreaseItem:function(index){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.DECREASE_ITEM,
      index:index
    });
  }
};

module.exports = AppActions;
