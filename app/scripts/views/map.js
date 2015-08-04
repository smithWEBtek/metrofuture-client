/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
    'use strict';

    MfiaClient.Views.Map = Marionette.ItemView.extend({

        template: JST['app/scripts/templates/map.ejs'],

        tagName: 'div',

        className: '',

        events: {},

        render: function () {
            this.$el.html(this.template());
        },

        onShow: function () {
            this.map = L.map(this.$('#map-body')[0]).setView([42.357778, -71.061667], 13);
            L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png', {
                attribution: '&copy; Map tiles by MAPC',
                minZoom: 0,
                maxZoom: 17
            }).addTo(this.map);

        }

    });

})();
