/*global MfiaClient, Backbone*/

MfiaClient.Collections = MfiaClient.Collections || {};

(function () {

  MfiaClient.Collections.Projects = Backbone.PageableCollection.extend({
    model: MfiaClient.Models.Project,
    // mode: "infinite",
    initialize: function(options) {
      var that = this;

      this.queryString = options.queryString || null;

      this.on("request", function() { 
        MfiaClient.app.trigger("loading");
      });

      this.on("add sync", function() {
        MfiaClient.app.trigger("filterUpdate", that.queryString);
        MfiaClient.app.trigger("loaded");
      });

      this.listenTo(this, 'add remove sync', this._regroup);
      this._groupedData = [];
    },
    getGroupedModels: function() {
        console.log(this._groupedData);
        return this._groupedData;
    },
    _regroup: function() {
      this._groupedData = _.groupBy(this.models, function(project) {
        return project.get("attributes").geography;
      });
    },
    url: function() {
      var full_url = MfiaClient.API + '/projects?fields[projects]=title,description,geography,primary-department,website,image';
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
      pageSize: 9
    }
  });

})();
