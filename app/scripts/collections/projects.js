/*global MfiaClient, Backbone*/

MfiaClient.Collections = MfiaClient.Collections || {};

(function () {
  'use strict';

  MfiaClient.Collections.Projects = Backbone.PageableCollection.extend({
    model: MfiaClient.Models.Project,
    // mode: "infinite",
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
      this.links = response.links;
      // this.links = response.links;
      return response.data;
    },
    parseLinks: function (resp, xhr) {
      this.links = resp.links;
      resp.links.next = MfiaClient.API.replace("/projects","") + resp.links.next;
      resp.links.last = MfiaClient.API.replace("/projects","") + resp.links.last;
      return resp.links;
    },
    queryParams: {
      currentPage: "page[number]",
      pageSize: "page[size]"
    },
    state: {
      pageSize: 10
    }
  });

})();
