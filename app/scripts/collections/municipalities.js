/*global MfiaClient, Backbone*/

MfiaClient.Collections = MfiaClient.Collections || {};

(function () {
  'use strict';

  MfiaClient.Collections.Municipalities = Backbone.Collection.extend({

      model: MfiaClient.Models.Municipality,
      url: 'fixtures/municipalities.json',
      parse: function(response) {
        return response.data;
      }

  });
})();
