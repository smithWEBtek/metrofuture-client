/*global MfiaClient, Backbone*/

MfiaClient.Collections = MfiaClient.Collections || {};

(function () {
  'use strict';

  MfiaClient.Collections.Municipalities = Backbone.Collection.extend({

      model: MfiaClient.Models.Municipality,
      url: function () {
        return  MfiaClient.API + '/municipalities';
      },
      parse: function(response) {
        return response.data;
      }

  });
})();
