/*global MfiaClient, Backbone*/

MfiaClient.Models = MfiaClient.Models || {};

(function () {
    'use strict';

    MfiaClient.Models.Subregion = Backbone.Model.extend({

        url: function(subregion_id) {
          return MfiaClient.API + '/subregions/' + this.subregion_id;
        },

        initialize: function() {
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
