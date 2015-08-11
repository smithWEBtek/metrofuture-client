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
        },
        slugify: function(text) {
            return text.toString().toLowerCase()
                .replace(/\s+/g, '-')           // Replace spaces with -
                .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                .replace(/^-+/, '')             // Trim - from start of text
                .replace(/-+$/, '');            // Trim - from end of text

        },
        onShow: function() {
            var ellipsis = new Ellipsis(this.$(".ellipsis-truncation")[0]);
            ellipsis.calc();
            ellipsis.set();
            // console.log(this.$(".card-content"));
        }

    });

})();
