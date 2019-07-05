/*global MfiaClient, Backbone*/

MfiaClient.Collections = MfiaClient.Collections || {};

(function () {
  MfiaClient.Collections.Municipalities = Backbone.Collection.extend({

    model: MfiaClient.Models.Municipality,
    url: function () {
      return MfiaClient.API + '/municipalities';
    },
    parse: function (response) {
      // return _.sortBy(response, 'attributes.data')[0];
      return response;
    }
  });
})();
