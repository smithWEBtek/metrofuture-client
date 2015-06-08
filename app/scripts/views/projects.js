/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.Projects = Backbone.Marionette.CollectionView.extend({

        childView: MfiaClient.Views.Project,
        template: JST['app/scripts/templates/projects.ejs']

        // tagName: 'div',

        // id: '',

        // className: '',

        // events: {},

        // initialize: function () {
        //     this.listenTo(this.model, 'change', this.render);
        // },

        // render: function () {
        //     this.$el.html(this.template(this.model.toJSON()));
        // }

    });

})();
