/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.Projects = Backbone.Marionette.CompositeView.extend({
        initialize: function () {
            // var that = this;
            //  MfiaClient.app.on("hideabout", function() {
            //     if (showAbout == true) {
            //         that.$('#about-section').slideUp();
            //     } else {
            //         that.showAbout = false;
            //     }
                
            // });
        },
        showAbout: true,
        template: JST['app/scripts/templates/projects.ejs'],
        childView: MfiaClient.Views.ProjectCard,
        childViewContainer: "#projects-grid"

    });

})();
