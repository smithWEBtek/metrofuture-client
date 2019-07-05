 /*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {


  MfiaClient.Views.Map = Marionette.ItemView.extend({

    template: JST['app/scripts/templates/map.ejs'],

    tagName: 'div',

    className: '',

    events: {
      "click #municipalities": function () {
        var that = this;
        _.each(this.layers, function (element) {
          that.map.removeLayer(element);
        });
        that.map.addLayer(that.layers.municipalities);
        console.log("municipalities");
      },
      "click #subregions": function () {
        var that = this;

        _.each(this.layers, function (element) {
          that.map.removeLayer(element);

        });
        that.map.addLayer(that.layers.subregions);
        console.log("subregions");
      },
      "click #toggleMap": function () {
        this.toggleMap();
        this.map.invalidateSize();
      }
    },

    visibleNow: true,
    visibleOnce: false,

    // hideMap: function () {
    //     this.$("#map-area").slideUp();
    //     this.visibleNow = false;
    //     this.$("#hide-text").hide();
    //     this.$("#show-text").show();
    // },
    showMap: function () {
      this.$("#map-area").slideDown();
      this.visibleNow = true;
      this.$("#hide-text").show();
      this.$("#show-text").hide();
    },
    toggleMap: function () {
      if (this.visibleNow) {
        // this.hideMap();
        this.$("#hide-text").hide();
        this.$("#show-text").show();
      } else {
        this.showMap();
        this.$("#hide-text").show();
        this.$("#show-text").hide();
      }
    },

    initialize: function (options) {
      var that = this;
      this.municipalities = options.municipalities;
      this.subregions = options.subregions;
      this.layers = {};

      this.on("showData", function (context) {
        that.$("#explanation").hide();
        that.$("#feature-data").show();
        //just use a template, pass context
        that.$("#feature-data").html(JST['app/scripts/templates/map_feature_data_table.ejs']({ context: context }));
      });

      this.on("showExplanation", function (context) {
        that.$("#feature-data").empty();
        that.$("#explanation").show();
        that.$("feature-data").hide();
      });

      MfiaClient.Routers.Project.on("route:project", function () {
        that.visibleOnce = true;
      });

      this.listenTo(MfiaClient.app, "routed", function () {
        var that = this;
        if (!this.visibleOnce) {
          this.visibleOnce = true;
        } else {
          // that.hideMap();
        }
      });
    },

    visibleOnce: false,

    render: function () {
      this.$el.html(this.template());
      this.map = L.map(this.$("#map-body")[0], { 'zoomControl': false }).setView([42.357778, -71.3], 10);

      L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png', {
        attribution: 'Tiles by <a href="http://www.mapc.org/">Metropolitan Area Planning Council</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(this.map);
      this.map.addControl(L.control.zoom({ position: 'topright' }))
      this.map.scrollWheelZoom.disable();

    },
    onShow: function () {

      //bad. refactor later.
      if (MfiaClient.app.getRegion('mainRegion').currentView) {
        if (MfiaClient.app.getRegion('mainRegion').currentView.model == undefined) {
          console.log("true");
        } else {
          console.log("false");
          this.hideMap();
        }
      }

      //materialize init tabs ui
      this.$('ul.tabs').tabs();

      var that = this;

      //fix gray map bugw
      this.map.invalidateSize();

      var style = {
        fillColor: "#FF9800",
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.5,
        className: "layer-feature"
      };

      var highlightStyle = {
        // color: '#000000',
        weight: 3,
        opacity: 0.6,
        fillOpacity: 1
        // fillColor: '#2262CC'
      };

      function onEachFeature(feature, layer) {
        layer.setStyle(style);
        layer.on("mouseover", function (e) {
          that.trigger("showData", feature);
          layer.setStyle(highlightStyle);
        });

        layer.on("mouseout", function (e) {
          that.trigger("showExplanation", feature);
          layer.setStyle(style);
        });

        layer.on("click", function (e) {
          console.log('[map.js] feature', feature)
          var muni_uri = "#municipalities/" + feature.id;

          Backbone.history.navigate(muni_uri, { 'trigger': true });
        });
      }

      this.layers.municipalities = L.geoJson(null, { onEachFeature: onEachFeature }).addTo(this.map);
      _.forEach(this.municipalities.models, function (element) {

        element.attributes.data.forEach((muni, i) => {
          if (muni.attributes.geojson) {
            that.layers.municipalities.addData(muni.attributes.geojson);
          }
        });
      });

      //does not add to map initially, so no #addTo method is called
      this.layers.subregions = L.geoJson(null, { onEachFeature: onEachFeature })
      // _.forEach(this.subregions.models, function (element) {
      // element.attributes.attributes.geojson.properties["type"] = element.attributes["type"];
      //is it valid geojson? can't leaflet just check this...

      // if (element.attributes.attributes.geojson.type != undefined) {
      // that.layers.subregions.addData(element.attributes.attributes.geojson);
      // }

      // });
      // var that = this;
      // // L.geoJson(response).addTo(that.map);
      // myLayer.setGeoJSON(response);
      // myLayer.on('mouseover', function(e) {
      //     e.layer.openPopup();
      // });
      // myLayer.on('mouseout', function(e) {
      //     e.layer.closePopup();
      // });
    }
  });
})();

