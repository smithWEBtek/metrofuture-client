/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.Map = Marionette.ItemView.extend({

        template: JST['app/scripts/templates/map.ejs'],

        tagName: 'div',

        className: '',

        events: {},

        // id: 'map-body',

        initialize: function (options) {
            this.collection = options.municipalities;
            console.log(this.collection);
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

            //fix gray map bug
            this.map.invalidateSize();

            function getColor(d) {
                return d > 30 ? '#800026' :
                       d > 25  ? '#BD0026' :
                       d > 20  ? '#E31A1C' :
                       d > 15  ? '#FC4E2A' :
                       d > 10   ? '#FD8D3C' :
                       d > 5   ? '#FEB24C' :
                       d > 1   ? '#FED976' :
                                  '#FFEDA0';
            }

            function style(feature) {
                return {
                    fillColor: getColor(feature.properties.project_count),
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7
                };
            }
            var municipalities = L.geoJson(null,{style: style}).addTo(this.map);
            _.forEach(this.collection.models, function(element) {
                municipalities.addData(element.attributes.attributes.geojson);
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
