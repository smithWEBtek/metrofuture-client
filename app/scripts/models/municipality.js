/*global MfiaClient, Backbone*/

MfiaClient.Models = MfiaClient.Models || {};

(function () {
  'use strict';

  MfiaClient.Models.Municipality = Backbone.Model.extend({
    url: function(muni_id) {
      return 'fixtures/municipalities/' + this.muni_id + '.json';
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
