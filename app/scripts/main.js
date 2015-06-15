/*global MfiaClient, $*/

window.MfiaClient = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Regions: {},
  init: function () {
    'use strict';

    //API Endpoint
    MfiaClient.API = "http://api.metrofuture.ngrok.com"

    //intitialize Marionette app
    this.app = new Marionette.Application();

    //add regions for full layout
    this.app.addRegions({
        navRegion: '#header',
        mainRegion: '#main',
        footerRegion: '#footer',
        aboutRegion: '#about'
    });

    //this logic needs to be moved somewhere else 
    //pull in menu data & demux
    var that = this;
    var options = [];
    var municipalities = new MfiaClient.Collections.Municipalities();
    

    //fetch data for dropdown, render HEADER
    municipalities.fetch({'success': function(municipalities_response) {
      _.map(municipalities.toJSON(), function(option) {
        options.push(option);
      });

      var subregions = new MfiaClient.Collections.Subregions();
      subregions.fetch({'success': function(subregions_response) {
        _.map(subregions.toJSON(), function(option) {
          options.push(option);
        });

        that.app.getRegion('navRegion').show(new that.Views.Header({model: options, }));
      }});
    }});

    // render footer 
    that.app.getRegion('footerRegion').show(new that.Views.Footer());

    MfiaClient.Routers.Project = new this.Routers.Project();
    this.app.execute("setRouter", MfiaClient.Routers.Project);
    MfiaClient.Routers.Project.on("route", function () {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      that.app.trigger("routed");
    });


    // render about
    that.app.getRegion('aboutRegion').show(new that.Views.About());

    MfiaClient.app.on("loading", function() {
        $(".progress").show();
    });
    MfiaClient.app.on("loaded", function() {
        $(".progress").hide();
    });

    Backbone.history.start(); 
  }
};

$(document).ready(function () {
  'use strict';
  MfiaClient.init();
});


