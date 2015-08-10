/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    

    MfiaClient.Views.About = Backbone.View.extend({

        template: JST['app/scripts/templates/about.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click #about-section-collapsed': 'showAbout',
            'click #hideAbout': 'hideAbout'
        },

        visibleOnce: false,
        visibleNow: true,

        showAbout: function () {
            this.$('#about-section').slideDown();
            this.visibleNow = true;
            // this.$('#about-section-collapsed').hide();
        },

        hideAbout: function () {
            this.$('#about-section').slideUp();
            this.visibleNow = false;
            // this.$('#about-section-collapsed').show();
        },

        toggleAbout: function () {
            if (this.visibleNow) {
                this.hideAbout();
            } else {
                this.showAbout();
            }
        },

        initialize: function (options) {
            var that = this;

            MfiaClient.app.on("toggleAbout", function() {
                that.toggleAbout();
            });

            MfiaClient.Routers.Project.on("route:project", function () {
                that.visibleOnce = true;
            });

            this.listenTo(MfiaClient.app, "routed", function() {
                var that = this;
                if (!this.visibleOnce) {
                    this.visibleOnce = true;
                } else {
                    that.hideAbout();
                }
            });
        },

        render: function () {
            this.$el.html(this.template());
            this.$('.modal-trigger').leanModal();
            return this;
        }

    });

})();
