/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
  

  MfiaClient.Views.Header = Backbone.View.extend({
    initialize: function (option) {
        var that = this;

    },
    template: JST['app/scripts/templates/header.ejs'],

    tagName: 'div',

    id: '',

    events: {
        'click #nav-about': 'goToAbout',
        'click #nav-projects': 'goToProjects',
        'click #logo-container': 'goToHome',
        'change .chosen-select': 'doSearch',
        'click #toggleAbout': function () {
            MfiaClient.app.trigger("toggleAbout");
        }
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
        this.$('.modal-trigger').leanModal();
        return this;
    },
    onShow: function() {
        var that = this;
        this.$(".button-collapse").sideNav();
        this.$(".chosen-select").chosen({
            width: "100%",
            no_results_text: "No results found for"
        });

        MfiaClient.Routers.Project.on("routed", function(e) {
            that.$(".chosen-select").chosen({
                width: "100%",
                no_results_text: "No results found for"
            });
        });

        this.$(".chosen-container-single .chosen-search input").attr("placeholder", "Scroll or start typing...");
        this.$("a.chosen-single span").text("Viewing all projects");

        MfiaClient.app.on("projectsChange", function(context) {
            that.$('select').val(context);
            that.$('select').trigger("chosen:updated");
        });
    }
  });
})();
