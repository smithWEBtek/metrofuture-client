/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.Projects = Backbone.Marionette.CompositeView.extend({
        initialize: function () {
            // MfiaClient.app.listenTo('closeabout', this.closeabout);
        },
        closeabout: function () {
            this.$('#about-section').slideUp()
        },
        template: JST['app/scripts/templates/projects.ejs'],
        childView: MfiaClient.Views.ProjectCard,
        childViewContainer: "#projects-grid"

    });

})();
