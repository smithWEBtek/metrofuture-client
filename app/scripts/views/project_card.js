/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    

    MfiaClient.Views.ProjectCard = Backbone.View.extend({

        template: JST['app/scripts/templates/project_card.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})();
