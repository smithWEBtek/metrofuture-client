/*global MfiaClient, Backbone*/

MfiaClient.Models = MfiaClient.Models || {};

(function () {

  MfiaClient.Models.Municipality = Backbone.Model.extend({
    initialize: function (params) {
      this.muni_id = params.id;
      this.on("request", function () {
        MfiaClient.app.trigger("loading");
      });

      this.on("sync", function () {
        MfiaClient.app.trigger("loaded");
      });

      this.listenTo(this, 'add remove sync', this._regroup);
      this._groupedData = [];
    },
    url: function (muni_id) {
      return MfiaClient.API + '/municipalities/' + this.muni_id;
    },
    getGroupedModels: function () {
      this._regroup();
      console.log(this._groupedData);
      return this._groupedData;
    },
    _regroup: function () {
      this._groupedData = _.groupBy(this.get("included"), function (project) {
        console.log("regrouping: ", project);
        return project.attributes.geography;
      });
    },

    defaults: {
    },

    validate: function (attrs, options) {
    },

    parse: function (response, options) {
      // response.attributes.id = response.attributes.muni_id;
      return response;
    }
  });

})();
