/*global MfiaClient, $*/


window.MfiaClient = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Regions: {},
  init: function () {
    'use strict';

    //intitialize Marionette app
    this.app = new Marionette.Application();

    //add regions for full layout
    this.app.addRegions({
        navRegion: '#header',
        mainRegion: '#main'
    });

    //this logic needs to be moved somewhere else 
    //pull in menu data & demux
    var that = this;
    var options = [];
    var municipalities = new MfiaClient.Collections.Municipalities();

    municipalities.fetch({'success': function(municipalities_response) {
      _.map(municipalities.toJSON(), function(option) {
        options.push(option);
      });

      var subregions = new MfiaClient.Collections.Subregions();
      subregions.fetch({'success': function(subregions_response) {
        _.map(subregions.toJSON(), function(option) {
          options.push(option);
        });

        that.app.getRegion('navRegion').show(new that.Views.Header({model: options}));
      }});
    }});

    new this.Routers.Project();
    this.app.execute("setRouter", MfiaClient.Routers.Project);
    Backbone.history.start(); 
  }
};

$(document).ready(function () {
  'use strict';
  MfiaClient.init();
});


