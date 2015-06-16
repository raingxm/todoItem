$(document).ready(function() {
    var TodoItem = Backbone.Model.extend({

    });

    var TodoForm = Backbone.View.extend({
        template: _.template('<form>' +
            '<input name="nn" value="<%= description %>" />' +
            '<button>Save</button></form>'),
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

    var todoItem = new TodoItem({description: 'What do you need todo'});
    var todoForm = new TodoForm({model: todoItem});
    $('#app').html(todoForm.render().el);
    //var TodoApp = new (Backbone.Router.extend({
    //    routes: {
    //        "": "index"
    //    },
    //    index: function() {
    //        $('#app').html('<h1>Hello, Nice day</h1>');
    //    }
    //}));
    //
    //var AppointmentForm = Backbone.View.extend({
    //
    //});
});
