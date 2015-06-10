/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.Footer = Backbone.View.extend({

        template: JST['app/scripts/templates/footer.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            // this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template());
            this.$('.modal-trigger').leanModal();
        }

    });

})();
