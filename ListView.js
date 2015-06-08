$(document).ready(function() {
    var ListView = Backbone.View.extend({
        el: $('#app'),
        initialize: function() {
            _.bindAll(this, 'render');
            this.render();
        },
        render: function() {
            $(this.el).append("<ul><li>Hello world</li></ul>");
        }
    });

    var listView = new ListView();
});