/*global MfiaClient, Backbone*/

MfiaClient.Routers = MfiaClient.Routers || {};

(function () {
    'use strict';

    MfiaClient.Routers.Project = Backbone.Router.extend({
      routes: {
        '': 'home',
        '/projects/:queryString': 'projects',
        '/projects/:project_slug': 'project',
        'about': 'about',
        '/contact': 'contact'
      },
      home: function() {
        var project = new MfiaClient.Models.Project({book: "Javascript!"});
        var view = new MfiaClient.Views.Project({model: project});
        MfiaClient.app.getRegion('mainRegion').show(view)
      },
      projects: function() {

      },
      project: function() {

      },
      about: function() {
        var about = new MfiaClient.Views.About();
        MfiaClient.app.getRegion('mainRegion').show(about)
      },
      contact: function() {
        
      }
    });

    return MfiaClient.Routers.Project;
})();
