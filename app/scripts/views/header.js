/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.Header = Backbone.View.extend({

        template: JST['app/scripts/templates/header.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click #nav-about': 'goToAbout'
        },
        goToAbout: function(evt) {
            Backbone.history.navigate('about', {'trigger': true});
        },
        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
