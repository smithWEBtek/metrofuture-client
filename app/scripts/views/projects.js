/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    

    MfiaClient.Views.Projects = Backbone.Marionette.ItemView.extend({
        initialize: function () {
            var that = this;
            MfiaClient.app.on("loading", function() {
                that.loaded = false;
            });
            MfiaClient.app.on("loaded", function() {
                that.loaded = true;
            });
            this.listenTo( this.collection, "add remove sync", this.render );
        },
        closeabout: function () {
            this.$('#about-section').slideUp()
        },
        template: JST['app/scripts/templates/projects.ejs'],
        // childView: MfiaClient.Views.ProjectCard,
        // childViewContainer: "#projects-grid",
        refresh: function () {
            if (this.loaded) {
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

        templateHelpers: function() {
            var that = this;
            return {
                header: function() {
                    return MfiaClient.app.navRegion.currentView.selected;
                },
                getGroupedModels: function() {
                    return that.collection.getGroupedModels();
                },
                projectCardTemplate: function(obj) {
                    var template = JST['app/scripts/templates/project_card.ejs'];
                    return template(obj);
                },
                slugify: function(text) {
                    return text.toString().toLowerCase()
                        .replace(/\s+/g, '-')           // Replace spaces with -
                        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
                        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
                        .replace(/^-+/, '')             // Trim - from start of text
                        .replace(/-+$/, '');            // Trim - from end of text

                }
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
