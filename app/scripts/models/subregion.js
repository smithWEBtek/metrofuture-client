/*global MfiaClient, Backbone*/

MfiaClient.Models = MfiaClient.Models || {};

(function () {
    'use strict';

    MfiaClient.Models.Subregion = Backbone.Model.extend({

        url: function(subregion_id) {
          return 'fixtures/subregions/' + this.subregion_id + '.json';
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
