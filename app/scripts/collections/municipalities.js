/*global MfiaClient, Backbone*/

MfiaClient.Collections = MfiaClient.Collections || {};

(function () {
  'use strict';

  MfiaClient.Collections.Municipalities = Backbone.Collection.extend({

      model: MfiaClient.Models.Municipality,
      url: function () {
        return  "http://mfia.dev.mapc.org/municipalities?filter[mapc]=true";
      },
      parse: function(response) {
        return response.data;
      }

  });
})();
