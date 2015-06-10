/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

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

        showAbout: function () {
            this.$('#about-section').slideDown();
            this.$('#about-section-collapsed').hide();
        },

        hideAbout: function () {
            this.$('#about-section').slideUp();
            this.$('#about-section-collapsed').show();
        },

        initialize: function () {
            this.listenTo(MfiaClient.app, "routed", function() {
                var that = this;
                if (!this.visibleOnce) {
                    this.visibleOnce = true;
                } else {
                    this.$('#about-section').slideUp("slow",function() {
                        that.$('#about-section-collapsed').show();
                    });
                    
                }
            });
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
