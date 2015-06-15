/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.Projects = Backbone.Marionette.CompositeView.extend({
        initialize: function () {

        },
        closeabout: function () {
            this.$('#about-section').slideUp()
        },
        template: JST['app/scripts/templates/projects.ejs'],
        childView: MfiaClient.Views.ProjectCard,
        childViewContainer: "#projects-grid",
        onShow: function () {
            var that = this;
            $(window).scroll(function() {
               if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                    if (that.collection.links.next !== null){
                        MfiaClient.app.trigger("loading");
                        that.collection.getNextPage({remove:false, "success": function () {
                            MfiaClient.app.trigger("loaded");
                        }});
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
