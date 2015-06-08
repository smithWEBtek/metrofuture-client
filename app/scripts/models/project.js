/*global MfiaClient, Backbone*/

MfiaClient.Models = MfiaClient.Models || {};

(function () {
  'use strict';

  MfiaClient.Models.Project = Backbone.Model.extend({
    initialize: function(params) {
        this.park_id = params.id;
    },

    url: function() {
        return 'fixtures/projects/' + this.park_id + '.json';
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
        return response;
    }
  });

})();
