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
    aboutSectionVisible: true,
    aboutSectionOpenOnce: false,
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
        var that = this;

        MfiaClient.app.on("loading", function() {
            console.log("loading");
            that.$(".progress").show();
        });
        MfiaClient.app.on("loaded", function() {
            console.log("loaded");
            that.$(".progress").hide();
        });
    },
    doSearch: function() {
        var search = "#projects?" + this.$(".chosen-select").val();
        if (!this.aboutSectionOpenOnce) {
            this.aboutSectionOpenOnce = true;
        }

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
        this.$(".chosen-select").chosen({
            width: "100%",
            no_results_text: "No results found for"
        });
        this.$(".chosen-container-single .chosen-search input").attr("placeholder", "Scroll or start typing...");
        this.$("a.chosen-single span").text("Viewing all projects");
    }
  });
})();
