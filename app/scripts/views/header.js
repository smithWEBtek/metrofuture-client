/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
  'use strict';

  MfiaClient.Views.Header = Backbone.View.extend({

    template: JST['app/scripts/templates/header.ejs'],

    tagName: 'div',

    id: '',

    events: {
        'click #nav-about': 'goToAbout',
        'click #nav-projects': 'goToProjects',
        'click #logo-container': 'goToHome',
        'change .chosen-select': 'doSearch'
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
    doSearch: function() {

        var search = "#projects?" + this.$(".chosen-select").val();
        console.log(this.$(".chosen-select").val());
        Backbone.history.navigate(search, {'trigger': true});
    },
    render: function () {
        var options = {};
        options.data = this.model;
        this.$el.html(this.template(options));
        return this;
    },
    onShow: function() {
        var that = this;
        this.$(".button-collapse").sideNav();
        this.$(".chosen-select").chosen({width: "90%"});
    }
  });
})();
