/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.Map = Marionette.ItemView.extend({

        template: JST['app/scripts/templates/map.ejs'],

        tagName: 'div',

        className: '',

        events: {
            "click #municipalities": function() {
                var that = this;
                _.each(this.layers, function(element) {
                    that.map.removeLayer(element);
                });
                that.map.addLayer(that.layers.municipalities);
                console.log("municipalities");
            },
            "click #subregions": function () {
                var that = this;
                
                _.each(this.layers, function(element) {
                    that.map.removeLayer(element);
                    
                });
                that.map.addLayer(that.layers.subregions);
                console.log("subregions");
            }
        },

        initialize: function (options) {
            var that = this;
            this.municipalities = options.municipalities;
            this.subregions = options.subregions;
            this.layers = {};
            this.on("showData", function(context) {
                that.$("#explanation").hide();
                that.$("#feature-data").show();
                //just use a template, pass context
                that.$("#feature-data").html(JST['app/scripts/templates/map_feature_data_table.ejs']({context: context}));
            });
            this.on("showExplanation", function(context) {
                that.$("#feature-data").empty();
                that.$("#explanation").show();
                that.$("feature-data").hide();
            });
        },

        // render: function () {
        //     this.$el.html(this.template());
        // },

        render: function () {
            this.$el.html(this.template());
            this.map = L.map(this.$("#map-body")[0], {'zoomControl': false }).setView([42.357778, -71.061667], 9);
            
            L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
                subdomains: 'abcd',
                maxZoom: 19
            }).addTo(this.map);
            this.map.addControl(L.control.zoom({position:'topright'}))
            this.map.scrollWheelZoom.disable();

        },
        onShow: function() {
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
                    dashArray: '3',
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

                layer.on("mouseout", function(e) {
                    that.trigger("showExplanation", feature);
                    layer.setStyle(style);
                    console.log("mouseout fired");
                });

                layer.on("click", function(e) {
                    console.log(e);
                    var muni_uri = "#projects?filter[" + feature.properties.type + "]=" + feature.properties.id;
                    Backbone.history.navigate(muni_uri, {'trigger': true});
                });
            }

            this.layers.municipalities = L.geoJson(null, {onEachFeature: onEachFeature }).addTo(this.map);
            _.forEach(this.municipalities.models, function(element) {
                element.attributes.attributes.geojson.properties["type"] = element.attributes["type"];
                that.layers.municipalities.addData(element.attributes.attributes.geojson);
            });

            //does not add to map initially, so no #addTo method is called
            this.layers.subregions = L.geoJson(null,{onEachFeature:onEachFeature})
            _.forEach(this.subregions.models, function(element) {
                console.log(element);
                element.attributes.attributes.geojson.properties["type"] = element.attributes["type"];
                //is it valid geojson? can't leaflet just check this...
                if (element.attributes.attributes.geojson.type !== undefined) {
                    that.layers.subregions.addData(element.attributes.attributes.geojson);
                }
                
            });

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
