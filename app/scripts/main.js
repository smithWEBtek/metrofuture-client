/*global MfiaClient, $*/


window.MfiaClient = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Regions: {},
  init: function () {
    'use strict';

    this.app = new Marionette.Application();

    this.app.addRegions({
        navRegion: '#header',
        mainRegion: '#main'
    });

    this.app.getRegion('navRegion').show(new this.Views.Header({}));

    new this.Routers.Project();
    this.app.execute("setRouter", MfiaClient.Routers.Project)
    Backbone.history.start(); 
  }
};

$(document).ready(function () {
  'use strict';
  MfiaClient.init();
});


