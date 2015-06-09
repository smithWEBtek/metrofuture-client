/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.Projects = Backbone.Marionette.CollectionView.extend({

        childView: MfiaClient.Views.Project,
        template: JST['app/scripts/templates/projects.ejs'],

        className: 'section container'

    });

})();
