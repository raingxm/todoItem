$(function(){
    var Todo = Backbone.Model.extend({
        defaults: function() {
            return {
                title: "my todo Item",
                order: Todos.order(),
                done: false
            };
        },
        toggle: function() {
            this.save({done: !this.get('done')});
        }
    });


});
