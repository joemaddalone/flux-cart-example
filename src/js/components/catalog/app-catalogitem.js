/** @jsx React.DOM */
'use strict';
var React = require('react'),
    AddToCart = require('./app-addtocart.js'),
    Link = require('react-router-component').Link;

var CatalogItem =
  React.createClass({
    render:function(){
      var itemStyle = {
        borderBottom:'1px solid #ccc',
        paddingBottom:15
      };
      /* jshint ignore:start */
      return (
          <div className="col-sm-3" style={itemStyle}>
            <h4>{this.props.item.title}</h4>
            <img src={this.props.item.img} alt="" />
            <p>{this.props.item.summary}</p>
            <p>${this.props.item.cost} <span className="text-success">{this.props.item.inCart && '(' + this.props.item.qty + ' in cart)'}</span></p>
            <div className="btn-group btn-group-xs">
            <Link href={'/item/' + this.props.key} className="btn btn-default">Learn More</Link>
            <AddToCart item={this.props.item} />
            </div>
          </div>
        )
      /* jshint ignore:end */
    }
  });

module.exports = CatalogItem;
