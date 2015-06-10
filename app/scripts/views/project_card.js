/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.ProjectCard = Backbone.View.extend({

        template: JST['app/scripts/templates/project_card.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            console.log("test");
        },

        render: function () {
            console.log(this.template);
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})();
