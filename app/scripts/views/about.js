/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.About = Backbone.View.extend({

        template: JST['app/scripts/templates/about.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
