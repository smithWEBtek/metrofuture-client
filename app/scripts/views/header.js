/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
  'use strict';

  MfiaClient.Views.Header = Backbone.Marionette.View.extend({

    template: JST['app/scripts/templates/header.ejs'],

    tagName: 'div',

    id: '',

    events: {
        'click #nav-about': 'goToAbout',
        'click #nav-projects': 'goToProjects',
        'click #logo-container': 'goToHome'
    },
    goToAbout: function(evt) {
        Backbone.history.navigate('about', {'trigger': true });
    },
    goToProjects: function(evt) {
        Backbone.history.navigate('projects/', {'trigger': true })
    },
    goToHome: function(evt) {
        Backbone.history.navigate('', {'trigger': true })
    },
    initialize: function () {
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },
    onShow: function() {
        this.$(".button-collapse").sideNav();
    }
  });
})();
