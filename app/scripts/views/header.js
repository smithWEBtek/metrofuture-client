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
            'click #nav-projects': 'goToProjects'
        },
        goToAbout: function(evt) {
            Backbone.history.navigate('about', {'trigger': true });
        },
        // goToProjects: function(evt) {
        //     Backbone.history.navigate('projects', {'trigger': true })
        // },
        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
