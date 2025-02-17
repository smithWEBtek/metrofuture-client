/*global MfiaClient, Backbone*/

MfiaClient.Models = MfiaClient.Models || {};

(function () {

  MfiaClient.Models.Project = Backbone.Model.extend({
    initialize: function(params) {
        this.park_id = params.id;
        this.on("request", function() {
            MfiaClient.app.trigger("loading");
        });

        this.on("sync", function() {
            MfiaClient.app.trigger("loaded");
        });
    },

    url: function() {
        //?fields[projects]=title,description,image
        return MfiaClient.API + "/projects/" + this.park_id + '?include=municipalities,subregions,goals';
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
        //Backbone doesn't really know if the REST response is coming directly 
        //from the API or being passed via collection
        if (response.included !== undefined) {
            response.data.included = response.included;
        }
        if (options.collection) return response;
        return response.data;
    }
  });

})();
