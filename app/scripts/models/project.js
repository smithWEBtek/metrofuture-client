/*global MfiaClient, Backbone*/

MfiaClient.Models = MfiaClient.Models || {};

(function () {
    'use strict';

    MfiaClient.Models.Project = Backbone.Model.extend({

        url: '',

        initialize: function() {
            console.log("test");
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
