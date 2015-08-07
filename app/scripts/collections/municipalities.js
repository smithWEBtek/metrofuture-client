/*global MfiaClient, Backbone*/

MfiaClient.Collections = MfiaClient.Collections || {};

(function () {
  MfiaClient.Collections.Municipalities = Backbone.Collection.extend({

      model: MfiaClient.Models.Municipality,
      url: function () {
        return  MfiaClient.API + '/municipalities?filter[mapc]=true';
      },
      parse: function(response) {
        return response.data;
      }

  });
})();