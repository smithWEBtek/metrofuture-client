/*global MfiaClient, Backbone*/

MfiaClient.Routers = MfiaClient.Routers || {};

(function () {
    'use strict';

    MfiaClient.Routers.Project = Backbone.Router.extend({
      routes: {
        '': 'projects',
        'projects': 'projects',
        'projects/:id': 'project',
        'about': 'about'
      },
      projects: function(queryString) {
        var projects = new MfiaClient.Collections.Projects({'queryString': queryString});
        projects.fetch({'success': function(response) {
          var collectionView = new MfiaClient.Views.Projects({collection: projects});
          MfiaClient.app.getRegion('mainRegion').show(collectionView);
        }});
        
      },
      project: function(id) {
        var project = new MfiaClient.Models.Project({'id': id});
        project.fetch({'success': function(response) {
          var projectView = new MfiaClient.Views.Project({model: project});
          MfiaClient.app.getRegion('mainRegion').show(projectView);
        }});
      },
      about: function() {
        var about = new MfiaClient.Views.About();
        MfiaClient.app.getRegion('mainRegion').show(about);
      }
    });

    return MfiaClient.Routers.Project;
})();
