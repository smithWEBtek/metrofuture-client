/*global MfiaClient, Backbone*/

MfiaClient.Models = MfiaClient.Models || {};

(function () {
    

    MfiaClient.Models.Subregion = Backbone.Model.extend({

        url: function(subregion_id) {
          return MfiaClient.API + '/subregions/' + this.subregion_id + '?include=projects';
        },

        initialize: function(params) {
            this.subregion_id = params.id;

            this.on("request", function() {
                MfiaClient.app.trigger("loading");
            });

            this.on("sync", function() {
                MfiaClient.app.trigger("loaded");
            });

            this.listenTo(this, 'add remove sync', this._regroup);

            this._groupedData = [];
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        },
        getGroupedModels: function() {
            this._regroup();
            console.log(this._groupedData);
            return this._groupedData;
        },
        _regroup: function() {
          this._groupedData = _.groupBy(this.get("included"), function(project) {
            console.log("regrouping: ", project);
            return project.attributes.geography;
          });
        }
    });

})();
