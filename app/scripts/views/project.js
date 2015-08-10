/*global MfiaClient, Backbone, JST*/

MfiaClient.Views = MfiaClient.Views || {};

(function () {
  

  MfiaClient.Views.Project = Backbone.View.extend({

    template: JST['app/scripts/templates/project.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    name: "project",

    scrubLink: function (url_string, rm) {
        return url_string.replace(rm, "")
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    onShow: function () {
        Materialize.fadeInImage('.materialize-fade-in');
        this.$('.parallax').parallax();
        this.$('.tooltipped').tooltip();
    },
    slugify: function(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text

    }

  });

})();
