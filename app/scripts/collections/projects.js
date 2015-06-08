/*global MfiaClient, Backbone*/

MfiaClient.Collections = MfiaClient.Collections || {};

(function () {
  'use strict';

  MfiaClient.Collections.Projects = Backbone.Collection.extend({
    model: MfiaClient.Models.Project,
    url: 'fixtures/projects.json'
  });

})();
