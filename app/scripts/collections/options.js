/*global MfiaClient, Backbone*/

MfiaClient.Collections = MfiaClient.Collections || {};

(function () {

    MfiaClient.Collections.Options = Backbone.Collection.extend({
        model: function(attrs, options) {
          if (attrs.type=="subregions") {
            return new MfiaClient.Models.Subregion(attrs, options);
          } 

          if (attrs.type=="municipalities") {
            return new MfiaClient.Models.Municipality(attrs, options);
          }
        }
    });

})();
