/*global MfiaClient, Backbone*/

MfiaClient.Collections = MfiaClient.Collections || {};

(function () {
  'use strict';

  MfiaClient.Collections.Projects = Backbone.Collection.extend({
    model: MfiaClient.Models.Project,
    url: 'fixtures/projects.json?fields[projects]=title,description,image',
    parse: function(response) {
      return response.data;
    }
  });

})();
