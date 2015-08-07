/*global MfiaClient, Backbone*/

MfiaClient.Collections = MfiaClient.Collections || {};

(function () {
  
    MfiaClient.Collections.Subregions = Backbone.Collection.extend({
      model: MfiaClient.Models.Subregion,
      url: function () {
        return MfiaClient.API + '/subregions?filter[simple]=true';
      },
      parse: function(response) {
        return response.data;
      }
    });

})();
