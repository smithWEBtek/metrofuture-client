/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.Municipality = Backbone.Marionette.ItemView.extend({

        template: JST['app/scripts/templates/municipality.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        templateHelpers: function() {
            var that = this;
            return {
                projectCardTemplate: function(obj) {
                    var template = JST['app/scripts/templates/project_card.ejs'];
                    return template(obj);
                },
                getGroupedModels: function() {
                    return that.model.getGroupedModels();
                }
            }
        }
    });

})();
