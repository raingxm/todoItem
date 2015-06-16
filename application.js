$(document).ready(function() {
    var TodoItem = Backbone.Model.extend({

    });

    var TodoForm = Backbone.View.extend({
        events: {
          "submit": "handleSubmit"
        },
        template: _.template('<form>' +
            '<input name="description" class="col-lg-2" value="<%= description %>" />' +
            '<button class="col-lg-1">Save</button></form>'),
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },
        handleSubmit: function(e) {
            e.preventDefault();
            var newDescription = this.$('input[name=description]').val();
            this.model.save({description: newDescription}, {
                success: function(model, repsonse, options) {
                    Backbone.history.navigate("", {trigger: true})
                },
                error: function(model, response, options) {
                    alert('error');
                }
            });
        }
    });

    var todoItem = new TodoItem({description: 'What do you need todo'});
    var todoForm = new TodoForm({model: todoItem});
    $('#app').html(todoForm.render().el);
});
