/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.Projects = Backbone.Marionette.CompositeView.extend({
        initialize: function () {
            var that = this;
            MfiaClient.app.on("loading", function() {
                that.loaded = false;
            });
            MfiaClient.app.on("loaded", function() {
                that.loaded = true;
            });
        },
        closeabout: function () {
            this.$('#about-section').slideUp()
        },
        template: JST['app/scripts/templates/projects.ejs'],
        childView: MfiaClient.Views.ProjectCard,
        childViewContainer: "#projects-grid",
        refresh: function () {
            if (this.loaded) {
                console.log('more data being retrieved');
                var that = this;
                MfiaClient.app.trigger("loading");
                this.collection.getNextPage({remove:false, "success": function () {
                    if (that.collection.links.next == null) {
                        that.$('#out-of-projects').show();
                    }
                    MfiaClient.app.trigger("loaded");
                }});
            }
        },
        onShow: function () {
            var that = this;
            if (that.collection.links.next == null) {
                that.$('#out-of-projects').show();
            }
            $(window).scroll(function() {
               if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                    if (that.collection.links.next !== null){
                        that.refresh();
                    } else {
                        that.$('#out-of-projects').show();
                    }
               }
            });
            
        },
        onDestroy: function () {
            $(window).unbind("scroll");
        }

    });

})();
