/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
  'use strict';

  MfiaClient.Views.Project = Backbone.View.extend({

    template: JST['app/scripts/templates/project.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    onShow: function () {
        var that = this;
        this.$('.parallax').parallax();
        this.$('.pushpin .button').pushpin({offset: 320});
    }

  });

})();
