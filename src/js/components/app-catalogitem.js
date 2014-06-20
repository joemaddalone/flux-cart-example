/** @jsx React.DOM */
'use strict';
var React = require('react'),
    AddToCart = require('../components/app-addtocart.js'),
    Link = require('react-router-component').Link;

var CatalogItem =
  React.createClass({
    render:function(){
      /* jshint ignore:start */
      return (
          <div className="col-sm-3">
          <h2>{this.props.item.title}</h2>
          <img src={this.props.item.img} alt="" />
          <p>{this.props.item.summary}</p>
          <p>${this.props.item.cost}</p>
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
