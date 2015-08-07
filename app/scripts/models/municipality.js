/*global MfiaClient, Backbone*/

MfiaClient.Models = MfiaClient.Models || {};

(function () {

  MfiaClient.Models.Municipality = Backbone.Model.extend({
    url: function(muni_id) {
      return MfiaClient.API + '/municipalities/' + this.muni_id;
    },

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
        // response.attributes.id = response.attributes.muni_id;
        return response;
    }
  });

})();
