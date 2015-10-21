/*global MfiaClient, Backbone*/

MfiaClient.Routers = MfiaClient.Routers || {};

(function () {
    

    MfiaClient.Routers.Project = Backbone.Router.extend({
      routes: {
        '': 'projects',
        'projects': 'projects',
        'projects/:id': 'project',
        'about': 'about',
        'municipalities/:id': 'municipality',
        'subregions/:id': 'subregions'
      },
      projects: function(queryString) {
        var projects = new MfiaClient.Collections.Projects({'queryString': queryString});
        MfiaClient.app.trigger("projectsChange", queryString);
        projects.fetch({'success': function(response) {
          var collectionView = new MfiaClient.Views.Projects({collection: projects});
          MfiaClient.app.getRegion('mainRegion').show(collectionView);
        }});
      },
      project: function(id) {
        var project = new MfiaClient.Models.Project({'id': id});
        project.fetch({'success': function(response) {
          MfiaClient.app.trigger("projectView");
          var projectView = new MfiaClient.Views.Project({model: project});
          MfiaClient.app.getRegion('mainRegion').show(projectView);
        }});
      },
      about: function() {
        var about = new MfiaClient.Views.About();
        MfiaClient.app.getRegion('mainRegion').show(about);
      },
      municipality: function(id) {
        var municipality = new MfiaClient.Models.Municipality({'id': id});
        municipality.fetch({'success': function(response) {
          var municipalityView = new MfiaClient.Views.Municipality({model: municipality});
          MfiaClient.app.getRegion('mainRegion').show(municipalityView);
        }});
      },
      subregions: function(id) {
        var subregion = new MfiaClient.Models.Subregion({'id': id});
        subregion.fetch({'success': function(response) {
          var subregionView = new MfiaClient.Views.Subregion({model: subregion});
          MfiaClient.app.getRegion('mainRegion').show(subregionView);
        }});
      }
    });

    return MfiaClient.Routers.Project;
})();
