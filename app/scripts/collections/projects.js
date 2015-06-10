/*global MfiaClient, Backbone*/

MfiaClient.Collections = MfiaClient.Collections || {};

(function () {
  'use strict';

  MfiaClient.Collections.Projects = Backbone.Collection.extend({
    model: MfiaClient.Models.Project,
    initialize: function(options) {
      this.queryString = options.queryString || null;
    },
    url: function() {
      var full_url = MfiaClient.API + '.json?fields[projects]=title,description,image';
      if(this.queryString !== null) {
        full_url = full_url + "&" + this.queryString;
      }
      return full_url;
    },
    parse: function(response) {
      return response.data;
    }
  });

})();
