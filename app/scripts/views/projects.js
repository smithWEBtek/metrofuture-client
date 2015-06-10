/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.Projects = Backbone.Marionette.CompositeView.extend({

        template: JST['app/scripts/templates/projects.ejs'],
        childView: MfiaClient.Views.ProjectCard,
        childViewContainer: "#projects-grid"

    });

})();
