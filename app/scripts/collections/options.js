/*global MfiaClient, Backbone*/

MfiaClient.Collections = MfiaClient.Collections || {};

(function () {
    'use strict';

    MfiaClient.Collections.Options = Backbone.Collection.extend({
        model: function(attrs, options) {
          console.log("attrs");
          if (attrs.type=="subregions") {
            return new MfiaClient.Models.Subregion(attrs, options);
          } 

          if (attrs.type=="municipalities") {
            return new MfiaClient.Models.Municipality(attrs, options);
          }
        }
    });

})();
